declare namespace Express {
    export interface Request {
        user?: User
    }

    export type User = import('./models/user-model').IUser
}
