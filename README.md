# Notion with Next.js 13

## Setup

### Repo and Prerequisites

#### Creating the repo

```bash
gh repo create                    # To create the repo
yarn dlx create-next-app@latest . # Inside the repo
```

#### Using `node-modules` with Yarn

Create a `.yarnrc.yml` file with the following contents:

```yaml
nodeLinker: node-modules
```

### Packages

#### Husky and lint-staged

Set up pre-commit action using Husky and lint-staged by running the following commands:

```bash
yarn dlx husky-init --yarn2 && yarn
yarn add -D lint-staged
```

```json
// package.json
"scripts": {
  // ...
  "pre-commit": "lint-staged"
},
"lint-staged": {
  "**/*.{js,ts,jsx,tsx,css,html}": [
    "prettier --single-quote --write",
    "eslint --fix"
  ]
}
```

```bash
# .husky/pre-commit
yarn run pre-commit
```

#### shadcn/ui

```bash
yarn dlx shadcn-ui@latest init
yarn dlx shadcn-ui@latest add [component-name]
```

#### Trunk

After committing some changes for the first time, install the Trunk Client extension in VSCode then run the following command:

```bash
trunk init --vscode
trunk login
```

which will take you through initialising the required linters for the project. Logging in will allow
you to use the full extent of Trunk.

#### Prettier

Create a `.prettierrc.yml` configuration file for Prettier:

```yaml
trailingComma: es5
semi: false
singleQuote: true
jsxSingleQuote: true
```

Or any configurations you want, honestly.

#### Convex

Creates the `convex` directory, in which we keep our API functions, i.e. our queries and mutations.

```bash
yarn add convex
yarn dlx convex dev
```

#### Clerk

Create an application in the [official Clerk website](https://dashboard.clerk.com), selecting GitHub
only as a sign-up option.

```bash
yarn add @clerk/nextjs
```

Copy the Clerk API keys to the `.env.local` file.

Connect Clerk to Convex by following the instructions [here](https://docs.convex.dev/auth/clerk).

## Folder Structure

- Uses Route Groups, i.e. folders whose names are enclosed with parentheses, to create specific layouts for similar pages
- Uses `_components` directory within a Route Group for group-specific components
- Uses `components` directory in the project root directory for reusable components

## Launching the Development Environment

```bash
yarn dlx convex dev # Will create .env.local
yarn dev
```

## API

Using Convex you can create the schema, as well as use `mutation` and `query` to create the API.

```typescript
// convex/schema.ts
import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  documents: defineTable({
    // add the fields using v to type them and make them optional
  })
    .index('by_user', [...])
})
```

```typescript
// convex/documents.ts
import { v } from 'convex/values'

import { mutation, query } from './_generated/server'

export const create = mutation({
  args: {
    // the arguments needed to create the object
  },
  handler: async (ctx, args) => {

    // for auth check
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Not authenticated')
    }

    // to interact with the connected DB
    const document = await ctx.db.insert('documents', {
      // enter the fields here
    })

    return document
  },
```
