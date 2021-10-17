import { Document } from 'mongoose'
import { IMenuEntity } from '../../entities/interfaces/menu';
export interface IMenu extends IMenuEntity, Document { }