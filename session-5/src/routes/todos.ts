import { Router } from 'express';
import { addNewTodo, getTodos } from '../controllers/todos';

const router = Router();

router.get('/', getTodos);
router.post('/', addNewTodo);
router.get('/:id');
router.put('/:id');
router.delete('/:id');

export default router;