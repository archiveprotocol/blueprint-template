import { BlueprintContext } from './blueprintContext';
import { Blueprint } from './blueprintInterface';
import { UserProtocolPositionSnapshotInterface } from './userProtocolPositionSnapshot.interface';

export class PositionValueContext {
  context: BlueprintContext;
  positionSnapshots: UserProtocolPositionSnapshotInterface[];
  userAddresses: string[];
  positionIdentifier: string;
  timestamp: number;

  constructor(
    context: BlueprintContext,
    positionSnapshots: UserProtocolPositionSnapshotInterface[],
    userAddresses: string[],
    positionIdentifier: string,
    timestamp: number,
  ) {
    this.context = context;
    this.positionSnapshots = positionSnapshots;
    this.userAddresses = userAddresses;
    this.positionIdentifier = positionIdentifier;
    this.timestamp = timestamp;
  }
}
