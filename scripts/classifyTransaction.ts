import { BlockbydateAPI } from '../src/models/blockbydateAPI';
import { BlueprintContext } from '../src/models/blueprintContext';
import MySimpleBlueprint from '../src/simpleBlueprint';
import { DeepMocked, createMock } from '@golevelup/ts-jest';

const context = createMock<BlueprintContext>({});

const mySimpleBlueprint = new MySimpleBlueprint(context);

(async function () {
  const userAddress = '0x0000000000000000000000000000000000000001';
  const fromBlock = 16989112;
  try {
    const txns = await mySimpleBlueprint.getUserTransactions(context, [userAddress], fromBlock);

    // Please modify the second parameter to TransactionDetail data you want to check
    const classifications = await mySimpleBlueprint.classifyTransaction(context, txns.userTransactions[0]);
    console.log(JSON.stringify(classifications, null, 2));
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
