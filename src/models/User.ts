import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { Model, Schema, SchemaOptions, Types, model } from 'mongoose';

export enum Role {
  SUPER_ADMIN,
  STATION_MASTER,
  CHECKER,
  PASSENGER,
}

export enum ApprovalStatus {
  PENDING,
  APPROVED,
  DECLINE,
}

export const encryptPassword = (password: string) => hashSync(password, genSaltSync(10))

export interface IUser {
  _id?: Types.ObjectId;
  /** Email */
  email: string;
  /** Password */
  password: string;
  /** Password */
  title?: string,
  firstName: string;
  /** Password */
  lastName?: string;
  role: Role,
  approvalStatus?: ApprovalStatus,
  createdAt?:Date,
}

interface UserMethods {
  encryptPassword: (password: string) => string;
  validPassword: (password: string) => boolean;
}

type IUserModel = Model<IUser, unknown, UserMethods>

const schemaOptions: SchemaOptions<IUser, UserMethods> = {
  _id: true,
  id: false,
  timestamps: true,
  strict: true,
  discriminatorKey: "role",
  toJSON: {
    getters: true,
    virtuals: true,
    transform: (doc, rec) => {
      delete rec.password;
    },
  },
};

const schema = new Schema<IUser, IUserModel, UserMethods>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  role: {
    type: Schema.Types.Number,
    required: true
  },
  approvalStatus: {
    type: Schema.Types.Number,
    enum: ApprovalStatus,
    required: false
  },
}, schemaOptions);

schema.methods.encryptPassword = encryptPassword;

schema.methods.validPassword = function (password: string) {
  return compareSync(password, this.password);
};


schema.virtual('station', {
  ref: 'Station',
  localField: '_id',
  foreignField: 'sm',
  justOne: true
});


export const User: IUserModel = model<IUser, IUserModel>('User', schema);
