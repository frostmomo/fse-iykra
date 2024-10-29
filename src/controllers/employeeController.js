const Employee = require('../models/employeeModel');
const ResponseModel = require('../models/responseModel');

exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.findAll();
        const response = new ResponseModel('Employees retrieved successfully', employees);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

exports.getEmployeeById = async (req, res, next) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) {
            const response = new ResponseModel('Employee not found', null, false);
            return res.status(404).json(response);
        }
        const response = new ResponseModel('Employee retrieved successfully', employee);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

exports.createEmployee = async (req, res, next) => {
    try {
        const { name, position, salary } = req.body;
        const newEmployee = await Employee.create({ name, position, salary });
        const response = new ResponseModel('Employee created successfully', newEmployee);
        res.status(201).json(response);
    } catch (error) {
        const response = new ResponseModel('Failed to create employee', null, false);
        res.status(500).json(response);
        next(error);
    }
};

exports.updateEmployee = async (req, res, next) => {
    try {
        const { name, position, salary } = req.body;
        const [updated] = await Employee.update(
            { name, position, salary },
            { where: { id: req.params.id } }
        );
        if (!updated) {
            const response = new ResponseModel('Employee not found', null, false);
            return res.status(404).json(response);
        }

        const employee = await Employee.findByPk(req.params.id);
        const response = new ResponseModel('Employee updated successfully', employee);
        res.status(200).json(response);
    } catch (error) {
        const response = new ResponseModel('Failed to update employee', null, false);
        res.status(500).json(response);
        next(error);
    }
};

exports.deleteEmployee = async (req, res, next) => {
    try {
        const deleted = await Employee.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            const response = new ResponseModel('Employee not found', null, false);
            return res.status(404).json(response);
        }
        const response = new ResponseModel('Employee deleted successfully', null);
        res.status(200).json(response);
    } catch (error) {
        const response = new ResponseModel('Failed to delete employee', null, false);
        res.status(500).json(response);
        next(error);
    }
};

exports.tes = async (req, res, next) => {
    try {
        const response = new ResponseModel('Test successful', null);
        res.status(200).json(response);
    } catch (error) {
        const response = new ResponseModel('Test failed', null, false);
        res.status(500).json(response);
        next(error);
    }
};
