# Notion with Next.js 13

## Setup

### Repo

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

## Folder Structure

- Uses Route Groups, i.e. folders whose names are enclosed with parentheses, to create specific layouts for similar pages
- Uses `_components` directory within a Route Group for group-specific components
- Uses `components` directory in the project root directory for reusable components
