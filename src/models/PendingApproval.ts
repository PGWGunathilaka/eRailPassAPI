import { Document } from "mongoose"

export enum PendingApprovalStatus {
    PENDING,
    APPROVED,
    DECLINED
}
export interface IPendingApproval extends Document {
       userType: UserType.STATION_MASTER | UserType.CHECKER
       status:PendingApprovalStatus
   };
