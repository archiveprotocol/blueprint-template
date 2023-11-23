import { BlueprintContext } from "./blueprintContext";
import { UserProtocolPositionSnapshot } from './userProtocolPositionSnapshot.entity'

export class PositionContext {
  context: BlueprintContext;
  positionSnapshots: UserProtocolPositionSnapshot[];
  userAddresses: string[];
  positionIdentifier: string;

  constructor(
    context: BlueprintContext,
    positionSnapshots: UserProtocolPositionSnapshot[],
    userAddresses: string[],
    positionIdentifier: string,
  ) {
    this.context = context;
    this.positionSnapshots = positionSnapshots;
    this.userAddresses = userAddresses;
    this.positionIdentifier = positionIdentifier;
  }
}
