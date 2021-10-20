import { Document } from 'mongoose'
import { ICouponEntity } from '../../entities/interfaces/coupon';
export interface ICoupon extends ICouponEntity, Document { }