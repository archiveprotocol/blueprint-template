import { createMock } from '@golevelup/ts-jest';
import BigNumber from 'bignumber.js';
import MySimpleBlueprint from '../../src/simpleBlueprint';
import {
  Blueprint,
  BlueprintContext,
  BlockbydateAPI,
  Classification,
  Operation,
  TokenInfo,
  PositionShares,
  TransactionDetails,
  OperationType,
  TokenTag
} from 'blueprint-lib';

describe('Simple Blueprint (WITHDRAW)', () => {
  let blueprint: Blueprint;
  let context: BlueprintContext;
  let mockBlockByDateApi: BlockbydateAPI;
  let txnHash: string;
  let classifications: Classification[];
  let operations: Operation[];
  let inputTokens: TokenInfo[];
  let outputTokens: TokenInfo[];
  let positionShareDetails: PositionShares[];
  const positionIdentifier = '0xs1mplblprnt';
  const positionToken = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc';
  const outputToken0 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const outputToken1 = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

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

  describe('Classify simple blueprint WITHDRAW transaction', () => {
    beforeAll(async () => {
      txnHash = '0xs1mPlTxN003';
      classifications = await blueprint.classifyTransaction(context, new TransactionDetails(txnHash, 0, 0));
    });

    describe('operations', () => {
      beforeAll(() => {
        operations = classifications[0].operations;
      });

      it('should have a WITHDRAW operation', () => {
        expect(operations[0].operation).toEqual(OperationType.WITHDRAW);
      });

      describe('input tokens', () => {
        beforeAll(() => {
          inputTokens = operations[0].inputTokens;
        });

        it('should have one input token', () => {
          expect(inputTokens.length).toEqual(1);
        });

        describe('input token', () => {
          it('should have the token identifier', () => {
            expect(inputTokens[0].identifier).toEqual(positionToken);
          });

          it('should have the token price in USD', () => {
            expect(inputTokens[0].priceUsd).toEqual(1);
          });

          it('should have the token amount', () => {
            expect(inputTokens[0].amount).toEqual(BigNumber(2000));
          });

          it('should have the token source', () => {
            expect(inputTokens[0].source).toEqual('my_simple');
          });

          it('should have the token tag', () => {
            expect(inputTokens[0].tag).toEqual(TokenTag.EMPTY);
          });

          it('should have the token virtual flag', () => {
            expect(inputTokens[0].isVirtualToken).toBeFalsy();
          });
        });
      });

      describe('output tokens', () => {
        beforeAll(() => {
          outputTokens = operations[0].outputTokens;
        });

        it('should have two output tokens', () => {
          expect(outputTokens.length).toEqual(2);
        });

        describe('first output token', () => {
          it('should have the token identifier', () => {
            expect(outputTokens[0].identifier).toEqual(outputToken0);
          });

          it('should have the token price in USD', () => {
            expect(outputTokens[0].priceUsd).toEqual(1000);
          });

          it('should have the token amount', () => {
            expect(outputTokens[0].amount).toEqual(BigNumber(1));
          });

          it('should have the token source', () => {
            expect(outputTokens[0].source).toEqual('my_simple');
          });

          it('should have the token tag', () => {
            expect(inputTokens[0].tag).toEqual(TokenTag.EMPTY);
          });

          it('should have the token virtual flag', () => {
            expect(inputTokens[0].isVirtualToken).toBeFalsy();
          });
        });

        describe('second output token', () => {
          it('should have the token identifier', () => {
            expect(outputTokens[1].identifier).toEqual(outputToken1);
          });

          it('should have the token price in USD', () => {
            expect(outputTokens[1].priceUsd).toEqual(1);
          });

          it('should have the token amount', () => {
            expect(outputTokens[1].amount).toEqual(BigNumber(1000));
          });

          it('should have the token source', () => {
            expect(outputTokens[1].source).toEqual('my_simple');
          });

          it('should have the token tag', () => {
            expect(inputTokens[0].tag).toEqual(TokenTag.EMPTY);
          });

          it('should have the token virtual flag', () => {
            expect(inputTokens[0].isVirtualToken).toBeFalsy();
          });
        });
      });
    });

    it('should have the position identifier', () => {
      expect(classifications[0].positionIdentifier).toEqual(positionIdentifier);
    });

    it('should have the gas token amount', () => {
      expect(classifications[0].gasTokenAmount).toEqual(BigNumber(0));
    });

    describe('position shares', () => {
      beforeAll(() => {
        positionShareDetails = classifications[0].positionShareDetails;
      });

      it('should have one position share', () => {
        expect(positionShareDetails.length).toEqual(1);
      });

      it('should have the position share identifier', () => {
        expect(positionShareDetails[0].sharesIdentifier).toEqual(positionToken);
      });

      it('should have the position share amount', () => {
        expect(positionShareDetails[0].amountAdded).toEqual(BigNumber(-2000));
      });

      it('should have the position share price in USD', () => {
        expect(positionShareDetails[0].sharePriceUsd).toEqual(1);
      });

      it('should have the position balance', () => {
        expect(positionShareDetails[0].positionBalance).toBeNull();
      });

      it('should have the liability position flag', () => {
        expect(positionShareDetails[0].isLiabilityPosition).toBeFalsy();
      });
    });
  });
});
