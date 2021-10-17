import { Document } from 'mongoose'
import { IOrderEntity } from '../../entities/interfaces/order';

export interface IOrder extends IOrderEntity, Document { }