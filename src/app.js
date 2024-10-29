const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandling = require('./middleware/errorHandling');
require('dotenv').config();
const sequelize = require('./config/db');

const app = express();
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

// Error handling middleware
app.use(errorHandling);

// Sync database
sequelize.sync({ force: false }) .then(() => {
        console.log('Database synced');
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    }
);

module.exports = app;
