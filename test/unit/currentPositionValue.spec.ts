import { BlockbydateAPI } from '../../src/models/blockbydateAPI';
import { BlueprintContext } from '../../src/models/blueprintContext';
import { Blueprint } from '../../src/models/blueprintInterface';
import { PositionContext } from '../../src/models/positionContext';
import { PositionShares } from '../../src/models/positionShares';
import { PositionValue } from '../../src/models/positionValue';
import { TimeContext } from '../../src/models/timeContext';
import { TokenInfo } from '../../src/models/tokenInfo';
import { UserProtocolPositionSnapshot } from '../../src/models/userProtocolPositionSnapshot.entity';
import MySimpleBlueprint from '../../src/simpleBlueprint';
import { createMock } from '@golevelup/ts-jest';
import BigNumber from 'bignumber.js';

describe('Simple Blueprint (Current Position Value)', () => {
  let blueprint: Blueprint;
  let context: BlueprintContext;
  let mockBlockByDateApi: BlockbydateAPI;
  let positionContext: PositionContext;
  let positionValue: PositionValue;
  let positionShareDetails: PositionShares[];
  let pendingIncome: TokenInfo[];
  let tokenAmounts: TokenInfo[];
  let positionSnapshots: UserProtocolPositionSnapshot[];
  const userAddress = '0xi4m47357u53rk3kk3kk3kk3kk3kk3kk3kk3kk3k1';
  const positionIdentifier = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc';
  const token0 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const token1 = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

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

  describe('getPositionValue()', () => {
    beforeAll(async () => {
      positionValue = await blueprint.getCurrentPositionValue(positionContext);
    });

    it('should have the position value in USD', () => {
      expect(positionValue.positionValueUsd).toEqual(2002);
    });

    describe('position shares', () => {
      beforeAll(() => {
        positionShareDetails = positionValue.positionShareDetails;
      });

      it('should have the shares identifier', () => {
        expect(positionShareDetails[0].sharesIdentifier).toEqual(positionIdentifier);
      });

      it('should have the amount added', () => {
        expect(positionShareDetails[0].amountAdded.eq(0)).toBeTruthy();
      });

      it('should have the share price in USD', () => {
        expect(positionShareDetails[0].sharePriceUsd).toEqual(1);
      });

      it('should have the position balance', () => {
        expect(positionShareDetails[0]?.positionBalance?.eq(2000)).toBeFalsy();
      });

      it('should have the liability position', () => {
        expect(positionShareDetails[0].isLiabilityPosition).toBeFalsy();
      });
    });

    describe('pending income', () => {
      beforeAll(() => {
        pendingIncome = positionValue.pendingIncome;
      });

      it('should have no pending income', () => {
        expect(pendingIncome.length).toEqual(0);
      });
    });

    describe('token amounts', () => {
      beforeAll(() => {
        tokenAmounts = positionValue.tokenAmounts;
      });

      it('should have two tokens', () => {
        expect(tokenAmounts.length).toEqual(2);
      });

      describe('first token', () => {
        it('should have the token identifier', () => {
          expect(tokenAmounts[0].identifier).toEqual(token0);
        });

        it('should have the token price in USD', () => {
          expect(tokenAmounts[0].priceUsd).toEqual(1000);
        });

        it('should have the token amount', () => {
          expect(tokenAmounts[0].amount.eq(1)).toBeTruthy();
        });

        it('should have the token source', () => {
          expect(tokenAmounts[0].source).toEqual('my_simple');
        });
      });

      describe('second token', () => {
        it('should have the token identifier', () => {
          expect(tokenAmounts[1].identifier).toEqual(token1);
        });

        it('should have the token price in USD', () => {
          expect(tokenAmounts[1].priceUsd).toEqual(1);
        });

        it('should have the token amount', () => {
          expect(tokenAmounts[1].amount.eq(1000)).toBeTruthy();
        });

        it('should have the token source', () => {
          expect(tokenAmounts[1].source).toEqual('my_simple');
        });
      });
    });
  });
});

function mockUserProtocolPositionSnapshot() {
  const snapshot = {} as UserProtocolPositionSnapshot;
  snapshot.blockNumber = 16989113;
  snapshot.id = snapshot.blockNumber;
  snapshot.timestamp = 1680789155;
  snapshot.positionSharesAtBlock = BigNumber(1);
  return snapshot;
}
