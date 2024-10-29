-- Membuat database
CREATE DATABASE employees_db;

-- Membuat tabel employees
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    position VARCHAR(255),
    salary INTEGER
);