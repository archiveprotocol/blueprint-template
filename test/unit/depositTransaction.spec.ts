import { createMock } from "@golevelup/ts-jest";
import BigNumber from "bignumber.js";
import { BlockbydateAPI } from "../../src/models/blockbydateAPI";
import { BlueprintContext } from "../../src/models/blueprintContext";
import { Blueprint } from "../../src/models/blueprintInterface";
import { OperationType, TokenTag } from "../../src/models/constants";
import { TransactionDetails } from "../../src/models/transactionDetails";
import MySimpleBlueprint from "../../src/simpleBlueprint";
import { Classification } from "../../src/models/classification";
import { Operation } from "../../src/models/operation";
import { PositionShares } from "../../src/models/positionShares";
import { TokenInfo } from "../../src/models/tokenInfo";

describe('Simple Blueprint (DEPOSIT)', () => {
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
  const inputToken0 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const inputToken1 = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
  const outputToken = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc';

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

  describe('Classify simple blueprint DEPOSIT transaction', () => {
    beforeAll(async () => {
      txnHash = '0xs1mPlTxN001';
      classifications = await blueprint.classifyTransaction(context, new TransactionDetails(txnHash, 0, 0));
    });

    describe('operations', () => {
      beforeAll(() => {
        operations = classifications[0].operations;
      });

      it('should have a DEPOSIT operation', () => {
        expect(operations[0].operation).toEqual(OperationType.DEPOSIT);
      });

      describe('input tokens', () => {
        beforeAll(() => {
          inputTokens = operations[0].inputTokens;
        });

        it('should have two input tokens', () => {
          expect(inputTokens.length).toEqual(2);
        });

        describe('first input token', () => {
          it('should have the token identifier', () => {
            expect(inputTokens[0].identifier).toEqual(inputToken0);
          });

          it('should have the token price in USD', () => {
            expect(inputTokens[0].priceUsd).toEqual(1000);
          });

          it('should have the token amount', () => {
            expect(inputTokens[0].amount).toEqual(BigNumber(1));
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

        describe('second output token', () => {
          it('should have the token identifier', () => {
            expect(inputTokens[1].identifier).toEqual(inputToken1);
          });

          it('should have the token price in USD', () => {
            expect(inputTokens[1].priceUsd).toEqual(1);
          });

          it('should have the token amount', () => {
            expect(inputTokens[1].amount).toEqual(BigNumber(1000));
          });

          it('should have the token source', () => {
            expect(inputTokens[1].source).toEqual('my_simple');
          });

          it('should have the token tag', () => {
            expect(inputTokens[1].tag).toEqual(TokenTag.EMPTY);
          });

          it('should have the token virtual flag', () => {
            expect(inputTokens[1].isVirtualToken).toBeFalsy();
          });
        });
      });

      describe('output tokens', () => {
        beforeAll(() => {
          outputTokens = operations[0].outputTokens;
        });

        it('should have one output token', () => {
          expect(outputTokens.length).toEqual(1);
        });

        describe('output token', () => {
          it('should have the token identifier', () => {
            expect(outputTokens[0].identifier).toEqual(outputToken);
          });

          it('should have the token price in USD', () => {
            expect(outputTokens[0].priceUsd).toEqual(1);
          });

          it('should have the token amount', () => {
            expect(outputTokens[0].amount).toEqual(BigNumber(2000));
          });

          it('should have the token source', () => {
            expect(outputTokens[0].source).toEqual('my_simple');
          });

          it('should have the token tag', () => {
            expect(outputTokens[0].tag).toEqual(TokenTag.EMPTY);
          });

          it('should have the token virtual flag', () => {
            expect(outputTokens[0].isVirtualToken).toBeFalsy();
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
        expect(positionShareDetails[0].sharesIdentifier).toEqual(outputToken);
      });

      it('should have the position share amount', () => {
        expect(positionShareDetails[0].amountAdded).toEqual(BigNumber(2000));
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
