import { Router } from 'express';
import { addNewTodo, getTodos } from '../controllers/todos';
import { addTodoValidator } from '../middlewares/validator';

const router = Router();

router.get('/', getTodos);
router.post('/', addTodoValidator, addNewTodo);
router.get('/:id');
router.put('/:id');
router.delete('/:id');

export default router;