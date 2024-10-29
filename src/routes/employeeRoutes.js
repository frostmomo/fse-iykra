const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();

router.get('/', employeeController.getEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);
router.get('/tes', employeeController.tes);

module.exports = router;
