# Joe's TMDB Api Project

___

Thanks for taking a look. This is a NextJS & GraphQL project that uses
the TMDB (The Movie Database) API as a datasource.

Currently in production ;-) at https://nextjs-tmdb-omega.vercel.app/

## Features

___

- Next.js App Router
- Apollo Server
- Apollo Client
- GraphQL Architecture
    - Schema (TypeDefs)
    - Resolvers
    - Queries & Mutations
    - Codegen
- Configuring resolvers to use Third Party API (The Movie DB)
- Server Side Apollo Client Queries with `getClient`
- Client Side Apollo Client Queries with `useQuery`
- Building custom UI components

## Getting Started

___

- checkout the repo
- create API key from https://www.themoviedb.org/signup
- create a `.env.local` in the root with the following variables:

```
VERCEL_URL=localhost:3000
VERCEL_AUTOMATION_BYPASS_SECRET=
API_HOST=https://api.themoviedb.org/3/
API_KEY=
API_READ_ACCESS_TOKEN=
```

- set the API_KEY value to your API key from themoviedb.org
- install dependencies with `npm install`
- start the development server with `npm run dev`
- that's it. open `http://localhost:3000`

### Next.js Starter Template

___

This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deploy on Vercel

___

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.
