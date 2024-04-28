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
