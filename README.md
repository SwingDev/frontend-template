# SwingDev Front-end template

The template repository for quick starting frontend applications. Utilizes some best practices used by SwingDev developers.

## Core features:

- Node version consistency
- Commit message linter and rules
- Eslint
- Build config
- Typescript
- SCSS
- React
- Tests

> Please note: the work is still in progress. The template might, and most surely will change in the future.

## Node version managed by [nvm](https://github.com/nvm-sh/nvm)

The supported node version is set in the `.nvmrc` file, which is consumed by `nvm`.
Use the command below to install and use the proper node version:

```sh
nvm use
```

## Commit messages

### Pre-commit hooks

[Husky](https://github.com/typicode/husky#readme) performs pre-commit hooks.
The `husky` field in the `package.json` includes configuration.

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

### [Snowpack](https://www.snowpack.dev/)

The project uses `Snowpack` as a build tool. Feel free to edit the `snowpack.config.js` file to tune the configuration.

### Scripts

```sh
npm install     # installs dependencies
npm start       # run development server and open http://localhost:8080/
npm build       # builds the project
```

### [Hot module replacement](https://snowpack.dev/concepts/hot-module-replacement)

The `src/index.tsx` file includes the lines to enable hot module replacement.

## [Typescript](https://www.typescriptlang.org/)

The project includes typescript, configured in `tsconfig.json` file

### Imports alias

There is an alias `~` added in typescript and snowpack config to allow short imports related to project root (`src` folder):

> Examples of relative import
>
> - `import { SomeComponent } from '~/components/some-component'`
> - `import { someUtil } from '~/utils/some-util'`

## Tests

We use [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) as a testing library with help of [Snowpack web-test-runner-plugin](https://www.npmjs.com/package/@snowpack/web-test-runner-plugin)

The configuration is in the `web-test-runner.config.js`

### Assertion library

This template includes [Chai](https://github.com/chaijs/chai) as an assertion library.

### Testing library

[Testing Library](https://testing-library.com/) is used to test React components.

That includes:

- `@testing-library/react`
- `@testing-library/react-hooks`
- `@testing-library/user-event`

Also, since auto-detection does not work for bundled tests, the [React Test Renderer](https://reactjs.org/docs/test-renderer.html) performs rendering while testing hooks. Make sure you import `react-hooks` as follows:

```typescript
import { renderHook } from '@testing-library/react-hooks/native';
```

See `__tests__` folder for more examples.

### Scripts

```sh
npm run test            # runs tests
npm run test:watch      # starts tests in watch mode
```

## Linting

[Eslint](https://eslint.org/) forces the code style.
The full list of rules, plugins, and extended configs could be reviewed and modified when needed in the `.eslintrc.js` file.

### Linting scripts

When the development server is running, linting happens every time the file is saved. To perform manual lining, use the following commands:

```sh
npm run lint            # runs linter
npm run lint:fix        # performs auto-fix of possible issues
```

### Pre-commit hook

The linting is performed on every commit by the [lint-staged](https://github.com/okonet/lint-staged#readme) library.
The configuration is located in the `lint-staged` field of the `package.json` file.

## [Prettier](https://prettier.io/)

The config file `.prettierc` is located in the project root. The rules are aligned to match `eslint` settings, however, there is no automatic prettier run: the file exists only to work with IDEs with configured prettier to avoid differences between the eslint and default prettier behavior.

## React

The project includes `react` and `react-dom` dependencies with typescript definitions.

> Start from `App.tsx` file to see the application code.

## LICENSE

MIT License
Copyright (c) 2021 SwingDev

See [LICENSE.md](LICENSE.md) for details.

---

Made with ❤️ at [SwingDev](https://www.swing.dev/)
