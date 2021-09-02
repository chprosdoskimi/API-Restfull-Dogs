import { Router } from 'express';

import photoController from '../controllers/PhotoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', photoController.index);
router.get('/:id', photoController.show);
router.post('/', loginRequired, photoController.store);
router.delete('/:id', loginRequired, photoController.delete);
router.put('/:id', loginRequired, photoController.update);

export default router;
