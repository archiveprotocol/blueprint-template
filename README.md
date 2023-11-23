# template-blueprint-public

## Getting started

This repo acts as a starting point for new Blueprint developers.

## Main files

- [simpleBlueprint.ts](./src/simpleBlueprint.ts) -> simple implementation of a Blueprint with the main methods
- [simpleBlueprint.spec.ts](./test/blueprint.spec.ts) -> unit tests that depict the required methods and what kind of returned data is expected

## Getting started

We prefer Yarn but commands below can be completed with NPM.

- yarn install
- yarn test

After this, you are free to modify the blueprint `simpleBlueprint.ts` to tailor it to your use-case.

## How to check output of the Blueprint's methods

```sh
yarn dev:getUserTransactions

yarn dev:classifyTransaction

yarn dev:getCurrentPositionValue

yarn dev:getUserList

yarn dev:getPositionValueAt
```

## License

The source code for the site is licensed under the MIT license, which you can find in the [MIT-LICENSE.txt](./MIT-license.txt) file.
