import {
  BlueprintContext,
  TransactionDetails,
  Classification,
  Operation,
  OperationType,
  TokenInfo,
  PositionShares,
  TokenTag,
  PositionValue
} from 'blueprint-lib';
import { AbstractSimpleBlueprint } from './abstractSimpleBlueprint';
import BigNumber from 'bignumber.js';

export default class MySimpleBlueprint extends AbstractSimpleBlueprint {
  private readonly INIT_POSITION_VALUE = 2000;
  private readonly USDC_TOKEN_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
  private readonly WETH_TOKEN_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  private readonly LP_TOKEN_ADDRESS = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc';

  constructor(context: BlueprintContext) {
    super(context, [
      new TransactionDetails('0xs1mPlTxN001', AbstractSimpleBlueprint.FIRST_TXN_BLOCK, 1680778343),
      new TransactionDetails('0xs1mPlTxN002', 16989113, 1680778355),
      new TransactionDetails('0xs1mPlTxN003', AbstractSimpleBlueprint.LAST_TXN_BLOCK, 1680778367),
    ]);
  }

  getContractName(): string {
    return 'My Simple Blueprint';
  }

  getBlueprintKey(): string {
    return 'my_simple';
  }

  protected getSimpleDepositOperation(): Classification[] {
    return [
      new Classification(
        [
          new Operation(
            OperationType.DEPOSIT,
            [
              new TokenInfo(this.WETH_TOKEN_ADDRESS, 1000, BigNumber('1'), this.getBlueprintKey()),
              new TokenInfo(this.USDC_TOKEN_ADDRESS, 1, BigNumber('1000'), this.getBlueprintKey()),
            ],
            [new TokenInfo(this.LP_TOKEN_ADDRESS, 1, BigNumber(this.INIT_POSITION_VALUE), this.getBlueprintKey())],
          ),
        ],
        '0xs1mplblprnt',
        BigNumber('0'),
        [new PositionShares(this.LP_TOKEN_ADDRESS, BigNumber(this.INIT_POSITION_VALUE), 1)],
      ),
    ];
  }

  protected getSimpleIncomeOperation(): Classification[] {
    return [
      new Classification(
        [
          new Operation(
            OperationType.INCOME,
            [],
            [
              new TokenInfo(this.WETH_TOKEN_ADDRESS, 1000.5, BigNumber(0.01), this.getBlueprintKey(), TokenTag.REWARDS),
              new TokenInfo(this.USDC_TOKEN_ADDRESS, 1, BigNumber(10), this.getBlueprintKey(), TokenTag.REWARDS),
            ],
          ),
        ],
        '0xs1mplblprnt',
        BigNumber('0'),
        [new PositionShares(this.LP_TOKEN_ADDRESS, BigNumber(0), 1)],
      ),
    ];
  }

  protected getSimpleWithdrawOperation(): Classification[] {
    return [
      new Classification(
        [
          new Operation(
            OperationType.WITHDRAW,
            [new TokenInfo(this.LP_TOKEN_ADDRESS, 1, BigNumber(this.INIT_POSITION_VALUE), this.getBlueprintKey())],
            [
              new TokenInfo(this.WETH_TOKEN_ADDRESS, 1000, BigNumber('1'), this.getBlueprintKey()),
              new TokenInfo(this.USDC_TOKEN_ADDRESS, 1, BigNumber('1000'), this.getBlueprintKey()),
            ],
          ),
        ],
        '0xs1mplblprnt',
        BigNumber('0'),
        [new PositionShares(this.LP_TOKEN_ADDRESS, BigNumber(this.INIT_POSITION_VALUE).negated(), 1)],
      ),
    ];
  }

  protected getSimplePositionValue(blockNumber: number): PositionValue {
    const value =
      blockNumber < AbstractSimpleBlueprint.FIRST_TXN_BLOCK
        ? 0
        : this.INIT_POSITION_VALUE + blockNumber - AbstractSimpleBlueprint.FIRST_TXN_BLOCK;

    const positionShares = new PositionShares(
      this.LP_TOKEN_ADDRESS,
      BigNumber(0),
      1,
      blockNumber < AbstractSimpleBlueprint.LAST_TXN_BLOCK ? BigNumber(this.INIT_POSITION_VALUE) : BigNumber(0),
    );

    return new PositionValue(
      value,
      [positionShares],
      [],
      [
        new TokenInfo(this.WETH_TOKEN_ADDRESS, 1000, BigNumber('1'), this.getBlueprintKey()),
        new TokenInfo(this.USDC_TOKEN_ADDRESS, 1, BigNumber('1000'), this.getBlueprintKey()),
      ],
    );
  }

  protected getSimpleCurrentPositionValue(): PositionValue {
    return this.getSimplePositionValue(AbstractSimpleBlueprint.LAST_TXN_BLOCK);
  }
}
