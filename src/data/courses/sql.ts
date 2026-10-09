import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('sql', 1, 'SQL Introduction', 1, 'Introduction to SQL', {
    heroTagline: 'Learn SQL, the standard language for storing, manipulating and retrieving data in databases',
    introduction: 'SQL (Structured Query Language) is the standard language for relational database management systems. SQL statements are used to perform tasks such as updating data on a database, or retrieving data from a database.',
    definition: {
      term: 'SQL',
      explanation: 'Structured Query Language, a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS).'
    },
    whyItMatters: 'Almost every web application, mobile app, and corporate software relies on SQL databases like PostgreSQL, MySQL, SQLite, and SQL Server.',
    syntaxStructure: `SELECT column1, column2 FROM table_name;`,
    codeExample: `SELECT CustomerName, City, Country\nFROM Customers\nWHERE Country = 'Germany';`,
    syntaxExplanation: 'This SQL query requests 3 specific columns from the Customers table, filtering only for rows where Country equals Germany.'
  }),
  createStructuredLesson('sql', 1, 'SQL Introduction', 2, 'RDBMS Concepts (Relational Databases)'),
  createStructuredLesson('sql', 1, 'SQL Introduction', 3, 'SQL Syntax & Clauses'),
  createStructuredLesson('sql', 1, 'SQL Introduction', 4, 'SQL Data Types')
];

const module2Lessons = [
  createStructuredLesson('sql', 2, 'Querying Data with SELECT', 1, 'SQL SELECT Statement', {
    heroTagline: 'Retrieve and view data stored in your database tables',
    introduction: 'The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.',
    definition: {
      term: 'SELECT',
      explanation: 'The primary command in SQL used to query and fetch one or more columns from a database table.'
    },
    whyItMatters: 'SELECT is by far the most commonly used SQL clause in web backends and data analytics dashboards.',
    syntaxStructure: `SELECT * FROM table_name;`,
    codeExample: `SELECT ProductName, Price\nFROM Products\nORDER BY Price DESC;`,
    syntaxExplanation: 'Fetches the name and price of all products, sorting from the highest price to the lowest.'
  }),
  createStructuredLesson('sql', 2, 'Querying Data with SELECT', 2, 'SQL SELECT DISTINCT'),
  createStructuredLesson('sql', 2, 'Querying Data with SELECT', 3, 'SQL WHERE Clause'),
  createStructuredLesson('sql', 2, 'Querying Data with SELECT', 4, 'SQL AND, OR and NOT Operators'),
  createStructuredLesson('sql', 2, 'Querying Data with SELECT', 5, 'SQL ORDER BY Keyword')
];

const module3Lessons = [
  createStructuredLesson('sql', 3, 'Modifying Database Data', 1, 'SQL INSERT INTO', {
    heroTagline: 'Add new records into a database table',
    introduction: 'The INSERT INTO statement is used to insert new records in a table.',
    definition: {
      term: 'INSERT INTO',
      explanation: 'A data manipulation statement that creates and appends a new row of data into a target table.'
    },
    whyItMatters: 'Every user registration, new order, or blog post submission in an application executes an INSERT statement.',
    syntaxStructure: `INSERT INTO table_name (column1, column2)\nVALUES (value1, value2);`,
    codeExample: `INSERT INTO Customers (CustomerName, City, Country)\nVALUES ('Cardinal Logistics', 'Stavanger', 'Norway');`,
    syntaxExplanation: 'Inserts a new record into the Customers table with the specified customer name, city, and country.'
  }),
  createStructuredLesson('sql', 3, 'Modifying Database Data', 2, 'SQL NULL Values'),
  createStructuredLesson('sql', 3, 'Modifying Database Data', 3, 'SQL UPDATE Statement'),
  createStructuredLesson('sql', 3, 'Modifying Database Data', 4, 'SQL DELETE Statement')
];

const module4Lessons = [
  createStructuredLesson('sql', 4, 'Aggregate Functions & Grouping', 1, 'SQL Aggregate Functions', {
    heroTagline: 'Calculate counts, sums, averages, and extremes across rows',
    introduction: 'An aggregate function in SQL performs a calculation on multiple values and returns a single value. SQL provides many built-in aggregate functions.',
    definition: {
      term: 'Aggregate Function',
      explanation: 'A mathematical function like COUNT, SUM, AVG, MIN, or MAX that summarizes a column across multiple rows.'
    },
    whyItMatters: 'Vital for business analytics, revenue calculation, counting active users, and tracking inventory levels.',
    syntaxStructure: `SELECT COUNT(column_name) FROM table_name;`,
    codeExample: `SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5;`,
    syntaxExplanation: 'Counts how many customers are located in each country, showing only countries with more than 5 customers.'
  }),
  createStructuredLesson('sql', 4, 'Aggregate Functions & Grouping', 2, 'SQL MIN and MAX'),
  createStructuredLesson('sql', 4, 'Aggregate Functions & Grouping', 3, 'SQL COUNT, AVG and SUM'),
  createStructuredLesson('sql', 4, 'Aggregate Functions & Grouping', 4, 'SQL GROUP BY Statement'),
  createStructuredLesson('sql', 4, 'Aggregate Functions & Grouping', 5, 'SQL HAVING Clause')
];

const module5Lessons = [
  createStructuredLesson('sql', 5, 'SQL Joins & Relationships', 1, 'Introduction to SQL Joins', {
    heroTagline: 'Combine rows from two or more tables based on a related column',
    introduction: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them (foreign keys and primary keys).',
    definition: {
      term: 'JOIN',
      explanation: 'An operation that links records from different tables through shared identifiers.'
    },
    whyItMatters: 'Relational databases avoid duplicate data by separating entities into distinct tables (e.g. Orders and Customers). Joins reconnect them on the fly.',
    syntaxStructure: `SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`,
    codeExample: `SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID\nORDER BY Orders.OrderDate DESC;`,
    syntaxExplanation: 'Fetches orders together with the customer name who placed each order.'
  }),
  createStructuredLesson('sql', 5, 'SQL Joins & Relationships', 2, 'SQL INNER JOIN'),
  createStructuredLesson('sql', 5, 'SQL Joins & Relationships', 3, 'SQL LEFT JOIN'),
  createStructuredLesson('sql', 5, 'SQL Joins & Relationships', 4, 'SQL RIGHT JOIN'),
  createStructuredLesson('sql', 5, 'SQL Joins & Relationships', 5, 'SQL FULL OUTER JOIN')
];

const module6Lessons = [
  createStructuredLesson('sql', 6, 'Tables & Database Schema', 1, 'SQL CREATE TABLE', {
    heroTagline: 'Design and build new database tables with integrity rules',
    introduction: 'The CREATE TABLE statement is used to create a new table in a database.',
    definition: {
      term: 'CREATE TABLE',
      explanation: 'A Data Definition Language (DDL) command that creates a relational table with specified column names and types.'
    },
    whyItMatters: 'Designing optimal database schemas is the foundation of backend engineering and app speed.',
    syntaxStructure: `CREATE TABLE Persons (\n    PersonID int,\n    LastName varchar(255),\n    FirstName varchar(255),\n    City varchar(255)\n);`,
    codeExample: `CREATE TABLE Users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    username VARCHAR(50) NOT NULL UNIQUE,\n    email VARCHAR(100) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`,
    syntaxExplanation: 'Defines a production-ready Users table with a primary key and constraints.'
  }),
  createStructuredLesson('sql', 6, 'Tables & Database Schema', 2, 'SQL Constraints (PRIMARY KEY, FOREIGN KEY)'),
  createStructuredLesson('sql', 6, 'Tables & Database Schema', 3, 'SQL ALTER TABLE'),
  createStructuredLesson('sql', 6, 'Tables & Database Schema', 4, 'SQL DROP TABLE')
];

const sqlProjects: Project[] = [
  {
    id: 'proj-sql-store',
    title: 'E-Commerce Database Schema & Queries',
    slug: 'sql-ecommerce-queries',
    category: 'fullstack',
    description: 'Design a customer and order relational database, write queries to find top spending customers.',
    difficulty: 'Beginner',
    skills: ['SQL', 'Databases', 'Queries', 'Joins'],
    requirements: ['Relational schema design', 'Primary & Foreign keys', 'SELECT queries with JOIN'],
    estimatedTime: '25 mins',
    starterCode: {
      html: '<div style="font-family: monospace; padding: 20px; background: #0f172a; color: #38bdf8;">\n  <h3>SQL Query Simulation Engine</h3>\n  <p>Run SELECT query to view database records:</p>\n  <table id="tbl" border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; border-color: #334155; color: #fff;">\n    <tr style="background: #1e293b;"><th>ID</th><th>Customer</th><th>Total Spent</th></tr>\n    <tr><td>1</td><td>Sarah Connor</td><td>$1,420.00</td></tr>\n    <tr><td>2</td><td>John Doe</td><td>$890.50</td></tr>\n  </table>\n</div>',
      css: 'body { margin: 0; background: #020617; }',
      js: 'console.log("SQL Query Result: 2 rows returned.");'
    },
    solutionHint: 'Use SELECT Customers.CustomerName, SUM(Orders.Total) FROM Customers JOIN Orders GROUP BY Customers.CustomerName;',
    expectedResult: 'A table listing customers sorted by total spend.'
  }
];

export const sqlCourse: Course = {
  id: 'course-sql',
  slug: 'sql',
  title: 'SQL',
  tagline: 'Standard Database Query Language',
  description: 'Master relational databases, SQL queries, table creation, joins, aggregation, and filtering from beginner to advanced.',
  category: 'Future Technologies',
  difficulty: 'Beginner',
  estimatedHours: 20,
  modulesCount: 6,
  lessonsCount: 27,
  badgeType: 'default',
  status: 'Active',
  icon: 'Database',
  modules: [
    {
      id: 'sql-m1',
      title: 'SQL Fundamentals & Concepts',
      description: 'Introduction to databases, RDBMS architecture, tables, and standard SQL syntax.',
      order: 1,
      lessons: module1Lessons
    },
    {
      id: 'sql-m2',
      title: 'Querying Data with SELECT',
      description: 'Fetch, filter, and sort database tables using SELECT, WHERE, and ORDER BY.',
      order: 2,
      lessons: module2Lessons
    },
    {
      id: 'sql-m3',
      title: 'Modifying Data: INSERT, UPDATE, DELETE',
      description: 'Manage table records safely with insert, update, and delete statements.',
      order: 3,
      lessons: module3Lessons
    },
    {
      id: 'sql-m4',
      title: 'Aggregate Functions & Analytics',
      description: 'Compute totals and metrics with COUNT, SUM, AVG, GROUP BY, and HAVING.',
      order: 4,
      lessons: module4Lessons
    },
    {
      id: 'sql-m5',
      title: 'SQL Joins & Relational Data',
      description: 'Connect related tables across foreign keys using INNER, LEFT, and RIGHT joins.',
      order: 5,
      lessons: module5Lessons
    },
    {
      id: 'sql-m6',
      title: 'Database Schema & Constraints',
      description: 'Create and alter tables with Primary Keys, Foreign Keys, Unique, and Check constraints.',
      order: 6,
      lessons: module6Lessons
    }
  ],
  projects: sqlProjects
};
