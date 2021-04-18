import { Router, Request, Response } from 'express'
import BaseRoutes from './baseRoutes'
import clanController from '../controllers/clan'
import { auth } from '../middleware/authMiddleware'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import { BadRequest } from '@tsed/exceptions'
class clanRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', clanController.getAll)
    }
}

export default new clanRoutes().router