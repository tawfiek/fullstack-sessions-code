import { Router } from 'express';
import { getAllTodos ,getTodoById, updateTodoById, addToDO, deleteTodoById } from '../controllers/todos'
const router = Router();

router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.put('/:id', updateTodoById);
router.post('/', addToDO);
router.delete('/:id', deleteTodoById);

export default router;