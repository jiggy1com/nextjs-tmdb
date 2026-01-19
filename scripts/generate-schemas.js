// scripts/generate-schemas.js
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCHEMA_GLOB = path.resolve(__dirname, '../app/api/graphql/schemas/**/*.graphql');
const OUTPUT_FILE = path.resolve(__dirname, '../app/api/graphql/generated/schema.ts');

// Find all .graphql schema files
const schemaFiles = globSync(SCHEMA_GLOB);

if (!schemaFiles.length) {
    console.error('No GraphQL schema files found.');
    process.exit(1);
}

// Read and merge all schema files
const rawSchema = schemaFiles.map((file) => fs.readFileSync(file, 'utf-8')).join('\n\n');

// Wrap in gql template literal
const fileContent = `// @generated
// This file is auto-generated for Apollo Server only. Do not import elsewhere.
// eslint-disable

// FROM Copilot:
// To prevent these warnings, you can 
// wrap your type definitions with a unique schema namespace 
// or use Apollo Server’s buildSubgraphSchema (for federation) 
// or ensure this schema is only loaded once. 
// However, since this file is generated and only for Apollo Server, 
// you can add a comment at the top to clarify its purpose 
// and suppress linter warnings.

// This will help prevent accidental imports and suppress linter warnings, 
// but the GraphQL warning itself is due to multiple schema loads
// ensure this file is only used once in your server setup.



import { gql } from 'graphql-tag';

export const typeDefs = gql\`
${rawSchema}
\`;
`;

// Ensure the output directory exists
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

// Write the merged schema
fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf-8');

console.log(`GraphQL schema written to ${OUTPUT_FILE}`);
