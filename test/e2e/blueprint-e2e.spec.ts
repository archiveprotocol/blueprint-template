import MySimpleBlueprint from '../../src/simpleBlueprint';
import { createMock } from '@golevelup/ts-jest';
import { beforeAll, expect } from '@jest/globals';
import { Blueprint, BlueprintContext } from 'blueprint-lib';

describe('blueprint e2e tests', () => {
  let blueprint: Blueprint;
  let context: BlueprintContext;

  beforeAll(() => {
    context = createMock<BlueprintContext>();
    blueprint = new MySimpleBlueprint(context);
  });

  describe('blueprint implements required methods', () => {
    it('getUserTransactions and classifyTransaction return correct value', async () => {
      const startingBlock = 1;
      const userAddresses = ['test-wallet-1']; // This should be edited by the BP developer
      const userTxns = await blueprint.getUserTransactions(context, userAddresses, startingBlock);
      userTxns.userTransactions.forEach(async (txn) => {
        const classified = await blueprint.classifyTransaction(context, txn);
        expect(classified.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
