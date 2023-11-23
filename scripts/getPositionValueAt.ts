import { BlockbydateAPI } from '../src/models/blockbydateAPI';
import { BlueprintContext } from '../src/models/blueprintContext';
import { PositionContext } from '../src/models/positionContext';
import { TimeContext } from '../src/models/timeContext';
import MySimpleBlueprint from '../src/simpleBlueprint';
import { DeepMocked, createMock } from '@golevelup/ts-jest';

const context = createMock<BlueprintContext>({});

const mySimpleBlueprint = new MySimpleBlueprint(context);

(async function () {
  const positionContext: PositionContext = createMock<PositionContext>({});
  const timeContext = new TimeContext(16989113, 1680789155);

  try {
    const positionValue = await mySimpleBlueprint.getPositionValueAt(positionContext, timeContext);
    console.log(JSON.stringify(positionValue, null, 2));
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
