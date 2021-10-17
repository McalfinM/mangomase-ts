import { Document } from 'mongoose'
import { ICategoryEntity } from '../../entities/interfaces/category';
export interface ICategory extends ICategoryEntity, Document { }