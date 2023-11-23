import BigNumber from "bignumber.js";
import { OperationType } from "./constants";
import { UserProtocolPositionSnapshot } from "./userProtocolPositionSnapshot.entity";
import { UserProtocolPositionSnapshotOperationToken } from "./userProtocolPositionSnapshotOperationToken.entity";

export class UserProtocolPositionSnapshotOperation {
  id: number;
  operationType: OperationType;
  operationValueUsd: BigNumber;
  public userProtocolPositionSnapshot: UserProtocolPositionSnapshot;
  public userProtocolPositionSnapshotId: number;
  userProtocolPositionSnapshotOperationTokens: UserProtocolPositionSnapshotOperationToken[];
  createdAt: Date;
  updatedAt: Date;
}