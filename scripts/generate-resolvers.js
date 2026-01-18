// scripts/generate-resolvers.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolverFiles = fs
    .readdirSync(path.join(__dirname, '../app/api/graphql/resolvers'))
    .filter((f) => f.endsWith('.ts'));

const imports = resolverFiles
    .map(
        (f, i) => `import { ${f.replace('.ts', '')} } from '../resolvers/${f.replace('.ts', '')}';`,
    )
    .join('\n');

const mergeList = `[${resolverFiles.map((f) => f.replace('.ts', '')).join(', ')}]`;

const content = `
import { mergeResolvers } from '@graphql-tools/merge';
${imports}

export const resolvers = mergeResolvers(${mergeList});
`;

fs.writeFileSync(path.join(__dirname, '../app/api/graphql/generated/resolvers.ts'), content);
console.log('Generated resolvers.ts!');
