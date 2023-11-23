import { UserProtocolPositionException } from "./userProtocolPositionException.entity";
import { UserProtocolPositionSnapshot } from "./userProtocolPositionSnapshot.entity";

export class UserProtocolPosition {
  id: number;
  blueprintId: string;
  userIdentifier: string;
  positionIdentifier: string;
  chainId: number;
  userProtocolPositionSnapshots: UserProtocolPositionSnapshot[];
  userProtocolPositionExceptions: UserProtocolPositionException[];
  createdAt: Date;
  updatedAt: Date;
}
