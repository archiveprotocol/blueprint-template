import { createMock } from "@golevelup/ts-jest";
import MySimpleBlueprint from "../../src/simpleBlueprint";
import { Blueprint, BlueprintContext, BlockbydateAPI, UserTransactionResults } from "blueprint-lib";

describe('Simple Blueprint (User Transactions)', () => {
  let blueprint: Blueprint;
  let context: BlueprintContext;
  let mockBlockByDateApi: BlockbydateAPI;
  let userTransactions: UserTransactionResults;
  const userAddress = '0xi4m47357u53rk3kk3kk3kk3kk3kk3kk3kk3kk3k1';


  beforeAll(async () => {
    mockBlockByDateApi = createMock<BlockbydateAPI>({
      getBlockFromTimestamp(timestamp: number, networkId?: string): Promise<number> {
        return Promise.resolve(1);
      },
    });
    context = createMock<BlueprintContext>({
      getBlockByDateApi(): BlockbydateAPI {
        return mockBlockByDateApi;
      },
    });
    blueprint = new MySimpleBlueprint(context);
  });

  afterEach(() => jest.clearAllMocks());

  describe('getUserTransactions', () => {
    describe('when blocknumber is less than first transactions block number', () => {
      beforeAll(async () => {
        userTransactions = await blueprint.getUserTransactions(context, [userAddress], 0);
      });

      it('should have three transactions', async () => {
        expect(userTransactions.userTransactions.length).toBe(3);
      });

      it('lastSyncedBlock should be last transactions block number', async () => {
        expect(userTransactions.lastSyncedBlock).toBe(16989114);
      });
    });

    describe('when blocknumber is greater than last transactions block number', () => {
      beforeAll(async () => {
        userTransactions = await blueprint.getUserTransactions(context, [userAddress], 16989115);
      });

      it('should have zero transactions', async () => {
        expect(userTransactions.userTransactions.length).toBe(0);
      });

      it('lastSyncedBlock should be block number passed', async () => {
        expect(userTransactions.lastSyncedBlock).toBe(16989115);
      });
    });
  });
});
