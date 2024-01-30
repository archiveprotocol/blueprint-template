import { Blueprint, BlueprintContext, BlockbydateAPI, BlueprintCategory } from 'blueprint-lib';
import MySimpleBlueprint from '../../src/simpleBlueprint';
import { createMock } from '@golevelup/ts-jest';

describe('Simple Blueprint', () => {
  let blueprint: Blueprint;
  let context: BlueprintContext;
  let mockBlockByDateApi: BlockbydateAPI;
  const fromBlock = 9212395;

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

  describe('Instance', () => {
    it('should be defined', () => {
      expect(blueprint).toBeDefined();
    });

    it('should have a contract name', async () => {
      const name = blueprint.getContractName();
      expect(name).toEqual(expect.any(String));
    });

    it('should have no parent id', async () => {
      const parentBlueprintId = blueprint.getParentBlueprintId();
      expect(parentBlueprintId).toEqual('');
    });

    it('should have a blueprint key', async () => {
      const blueprintKey = blueprint.getBlueprintKey();
      expect(blueprintKey).toEqual('my_simple');
    });

    it('should have a context', async () => {
      const blueprintContext = blueprint.getContext();
      expect(blueprintContext).toBeInstanceOf(Object);
    });

    it('should return the blueprint category', async () => {
      const blueprintCategory = blueprint.getBlueprintCategory();
      expect(blueprintCategory).toEqual(BlueprintCategory.DEX);
    });

    it('should have a list of users', async () => {
      const userList = await blueprint.getUserList(fromBlock);
      expect(userList).toBeInstanceOf(Array);
    });

    it('getUserList() => should be called with from block argument', async () => {
      const logSpy = jest.spyOn(blueprint, 'getUserList');
      await blueprint.getUserList(fromBlock);
      expect(logSpy).toHaveBeenCalledWith(fromBlock);
    });
  });
});
