import express from 'express';

import { getData, createPost } from '../controllers/profile.js';

const router = express.Router();

router.get('/', getData);
router.get('/', createPost);

export default router;