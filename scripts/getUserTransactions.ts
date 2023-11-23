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
    console.log(txns);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
