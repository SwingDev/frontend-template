# SwingDev Front-end template

## Node version managed by [nvm](https://github.com/nvm-sh/nvm)

The supported node version is set in the `.nvmrc` file, which is consumed by `nvm`.
Use the command below to install and use the proper node version:

```sh
nvm use
```

## Commit messages

### Pre-commit hooks

Pre-commit hooks are performed by [Husky](https://github.com/typicode/husky#readme)
They are configured in `husky` field in the `package.json` file

### [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Setup forces using the conventional commits message format.

> Examples of correct messages:
>
> - `fix: fixed a bug`
> - `feat(SWG-123): added new feature`

See the section below for details about the commit message format.

### [Commit lint](https://commitlint.js.org/#/)

There is a pre-commit hook that validates the message.
The rules of commit messages are described in the `commitlint.config.js` file.

### [Standard Version](https://github.com/conventional-changelog/standard-version) release

The command below

- bumps the version
- adds the tag
- updates release notes based on commit messages
- commits changes

```sh
npm run release
```

## Development

### Snowpack

[https://www.snowpack.dev/]

The project uses `Snowpack` as a build tool. The configuration might be tuned in the `snowpack.config.js` file.

### Scripts

```sh
# install dependencies
npm i
# run development server and 
npm start
# build project
npm build
```

### [Hot module replacement](https://snowpack.dev/concepts/hot-module-replacement)

The `src/index.tsx` file includes the lines to enable hot module replacement. 

### Tests

The configuration is located in the `web-test-runner.config.js`

## [Typescript](https://www.typescriptlang.org/)

The project includes typescript, configured in `tsconfig.json` file

### Imports alias

There is an alias `~` added in typescript and snowpack config to allow short imports related to project root (`src` folder):

> Examples of relative import
>
> - `import { SomeComponent } from '~/components/some-component'`
> - `import { someUtil } from '~/utils/some-util'`

## [Eslint](https://eslint.org/)

The code linting and style is forced by the set of `eslint` rules and plugins.
The full list could be reviewed and modified when needed in the `.eslintrc.js` file.

### Lining scripts

Linting is performed when development server is running every time the file is saved. To perform manual lining use following commands:

```sh
npm run lint        # runs linter 
# or
npm run lint:fix    # runs linter and performs auto-fix of possible issues
```

### Pre-commit hook

The linting is performed on every commit by the [lint-staged](https://github.com/okonet/lint-staged#readme) library. 
The configuration is located in the `lint-staged` field of the `package.json` file.

## Prettier

There is also a prettier config file `.prettierc` located in the project root. The rules are aligned to match `eslint` settings, however, there is no automatic prettier run, the file exists only to work with IDEs with configured prettier to avoid differences between eslint and default prettier behavior.

## React

The project includes `react` and `react-dom` dependecies with typescipt definitions. The basic application code is in `App.tsx` file 
