import express from 'express'
import { files as filesController } from '../controllers/index.js'

const router = express.Router()
router.get('/data', filesController.getFiles)

export const echoRouter = router