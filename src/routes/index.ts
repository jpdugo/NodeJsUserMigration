import { Router } from 'express';
import { getAllUsersController, getAllBackUpUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController, reactivateUserController } from '../controllers/userController';
import { getAllBranchesController, getAllBackUpBranchesController,  getBranchByIdController, createBranchController, updateBranchController, deleteBranchController } from '../controllers/branchController';
import { migrateDataController } from '../controllers/migrationController';

const router = Router();

router.get('/users', getAllUsersController);
router.get('/backup-users', getAllBackUpUsersController);
router.get('/users/:id', getUserByIdController);
router.post('/users', createUserController);
router.put('/users/:id', updateUserController);
router.delete('/users/:id', deleteUserController);
router.put('/users/:id/reactivate', reactivateUserController);

router.get('/branch', getAllBranchesController);
router.get('/backup-branch', getAllBackUpBranchesController);
router.get('/branch/:id', getBranchByIdController);
router.post('/branch', createBranchController);
router.put('/branch/:id', updateBranchController);
router.delete('/branch/:id', deleteBranchController);
router.put('/branch/:id/reactivate', reactivateUserController);

router.post('/migrate', migrateDataController); 

export default router;