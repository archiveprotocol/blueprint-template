import { EntityType } from "./entityType";
import { UserProtocolPosition } from "./userProtocolPosition.entity";

export class UserProtocolPositionException {
  id: number;
  entityMetadata: object;
  exceptionMessage: object;
  entityType: EntityType;
  public userProtocolPosition: UserProtocolPosition;
  public userProtocolPositionId: number;
  createdAt: Date;
  updatedAt: Date;
}
