import { BlueprintMetadata } from '../models/metadata.entity';

export abstract class MetadataStore {
  public abstract upsert(blueprintId: string, data: object, lastSyncAt: number): Promise<boolean>;
  public abstract delete(blueprintId: string): Promise<boolean>;
  public abstract findOne(blueprintId: string): Promise<BlueprintMetadata>;
}