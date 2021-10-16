import { Document } from 'mongoose'
import { IUserEntity } from '../../entities/interfaces/user';

export interface IUser extends IUserEntity, Document { }