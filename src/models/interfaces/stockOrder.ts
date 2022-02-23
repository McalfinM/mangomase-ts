import { Document } from 'mongoose'
import { IStockOrderEntity } from '../../entities/interfaces/stockOrder';

export interface IStockOrderModel extends IStockOrderEntity, Document { }