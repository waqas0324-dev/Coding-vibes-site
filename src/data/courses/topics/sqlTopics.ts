import { TopicDefinition } from '../topicData';

export const SQL_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: SQL Fundamentals & RDBMS
  'introduction-to-sql': {
    heroTagline: "The universal declarative language for managing and querying relational data",
    introduction: "SQL (Structured Query Language) is the standard language for storing, manipulating, and retrieving data in relational database management systems (RDBMS) such as PostgreSQL, MySQL, SQL Server, Oracle, and SQLite.",
    definition: {
      term: "SQL (Structured Query Language)",
      explanation: "A declarative query language used to query, insert, update, and modify data in relational databases."
    },
    syntaxStructure: `SELECT column1, column2 FROM table_name WHERE condition;`,
    codeExample: `-- SQL Introduction Query
SELECT 
    CustomerID,
    CustomerName,
    City,
    Country
FROM Customers
WHERE Country = 'Germany'
ORDER BY CustomerName ASC;`,
    codeAnnotations: [
      { lineOrToken: "SELECT", description: "Specifies which columns or computed fields to retrieve from the database." },
      { lineOrToken: "FROM Customers", description: "Identifies the source table containing the records." },
      { lineOrToken: "WHERE Country = 'Germany'", description: "Filters the result set to only include rows meeting the specified condition." }
    ],
    commonMistakes: [
      {
        wrong: "SELECT CustomerName WHERE Country = 'USA' FROM Customers;",
        correct: "SELECT CustomerName FROM Customers WHERE Country = 'USA';",
        reason: "SQL clauses must follow strict order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY."
      }
    ],
    tips: [
      "SQL keywords are case-insensitive (SELECT is the same as select), but writing keywords in UPPERCASE is the industry standard."
    ],
    practice: [
      {
        id: "sql-intro-p1",
        type: "multiple_choice",
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Question Language",
          "Strong Quality Logic",
          "Sequential Query Level"
        ],
        correctAnswer: 0,
        explanation: "SQL stands for Structured Query Language."
      }
    ],
    quiz: [
      {
        id: "sql-intro-q1",
        question: "Which type of database system uses SQL to query structured tables?",
        options: [
          "Relational Database Management Systems (RDBMS)",
          "File system directories only",
          "Unstructured text files",
          "Browser cookies"
        ],
        correctAnswerIndex: 0,
        explanation: "RDBMS (like PostgreSQL, MySQL, SQLite) organizes data into tables of rows and columns accessed via SQL."
      }
    ]
  },

  // Module 2: Querying Data
  'sql-select-statement': {
    heroTagline: "Reading records and extracting specific columns from database tables",
    introduction: "The `SELECT` statement is used to select data from a database. The data returned is stored in a result table, called the result-set. Use `SELECT *` to retrieve all columns.",
    definition: {
      term: "SELECT Statement",
      explanation: "The primary DQL (Data Query Language) command used to query and fetch records from a table."
    },
    syntaxStructure: `SELECT column1, column2 FROM table_name;
SELECT * FROM table_name; -- All columns`,
    codeExample: `-- Selecting specific columns from Customers
SELECT 
    CustomerName, 
    ContactName, 
    City, 
    Country 
FROM Customers;`,
    practice: [
      {
        id: "sql-sel-p1",
        type: "fill_in_blank",
        question: "Which wildcard character selects ALL columns in a table?",
        instructions: "SELECT ___ FROM Products;",
        correctAnswer: "*",
        explanation: "The asterisk (*) selects all available columns in the specified table."
      }
    ]
  },

  'sql-where-clause': {
    heroTagline: "Filtering records based on specific evaluation conditions",
    introduction: "The `WHERE` clause is used to filter records. It is used to extract only those records that fulfill a specified condition. Text values in SQL require single quotes (e.g., `'Mexico'`), while numeric values do not.",
    definition: {
      term: "WHERE Clause",
      explanation: "A SQL clause that filters rows before aggregation or display, returning only records that evaluate to true."
    },
    syntaxStructure: `SELECT * FROM table_name WHERE condition;`,
    codeExample: `-- Filter active products priced over $50
SELECT 
    ProductID,
    ProductName,
    Price,
    Category
FROM Products
WHERE Price > 50.00;`,
    practice: [
      {
        id: "sql-wh-p1",
        type: "multiple_choice",
        question: "In SQL, how are text values surrounded in a WHERE clause?",
        options: ["Single quotes (e.g. 'Germany')", "Curly brackets", "Angle brackets", "Without quotes"],
        correctAnswer: 0,
        explanation: "SQL standards require text literals to be enclosed in single quotes 'text'."
      }
    ]
  },

  'sql-order-by-keyword': {
    heroTagline: "Sorting results in ASC (ascending) or DESC (descending) order",
    introduction: "The `ORDER BY` keyword is used to sort the result-set in ascending or descending order. The `ORDER BY` keyword sorts the records in ascending order (`ASC`) by default. To sort the records in descending order, use the `DESC` keyword.",
    definition: {
      term: "ORDER BY",
      explanation: "A clause that sorts query results based on one or more specified columns."
    },
    syntaxStructure: `SELECT column1, column2 
FROM table_name 
ORDER BY column1 ASC, column2 DESC;`,
    codeExample: `-- Sort products by price highest to lowest
SELECT 
    ProductName, 
    Price, 
    Unit
FROM Products
ORDER BY Price DESC;`,
    practice: [
      {
        id: "sql-ord-p1",
        type: "multiple_choice",
        question: "Which keyword sorts the query results in descending order?",
        options: ["DESC", "DOWN", "ASC", "REVERSE"],
        correctAnswer: 0,
        explanation: "The DESC keyword specifies descending order."
      }
    ]
  },

  // Module 3: Data Modification (DML)
  'sql-insert-into': {
    heroTagline: "Adding new rows of data into database tables",
    introduction: "The `INSERT INTO` statement is used to insert new records in a table.",
    definition: {
      term: "INSERT INTO",
      explanation: "A DML statement that adds one or more new rows into a database table."
    },
    syntaxStructure: `INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);`,
    codeExample: `-- Inserting a new customer record
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal Tech', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

-- Verify the new record
SELECT * FROM Customers WHERE Country = 'Norway';`,
    practice: [
      {
        id: "sql-ins-p1",
        type: "multiple_choice",
        question: "Which statement is used to insert new rows into a table?",
        options: ["INSERT INTO", "ADD ROW", "CREATE ROW", "UPDATE INTO"],
        correctAnswer: 0,
        explanation: "INSERT INTO is the standard SQL command for adding records."
      }
    ]
  },

  'sql-update-statement': {
    heroTagline: "Modifying existing records in a table with SET and WHERE",
    introduction: "The `UPDATE` statement is used to modify the existing records in a table. Be careful: if you omit the `WHERE` clause, **ALL records in the table will be updated!**",
    definition: {
      term: "UPDATE Statement",
      explanation: "A SQL command that alters existing data values in one or more columns."
    },
    syntaxStructure: `UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;`,
    codeExample: `-- Updating contact info for CustomerID 1
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;

-- Check updated row
SELECT * FROM Customers WHERE CustomerID = 1;`,
    commonMistakes: [
      {
        wrong: "UPDATE Customers SET City = 'Berlin';",
        correct: "UPDATE Customers SET City = 'Berlin' WHERE CustomerID = 1;",
        reason: "Omitting the WHERE clause updates every single row in the entire table!"
      }
    ],
    practice: [
      {
        id: "sql-upd-p1",
        type: "multiple_choice",
        question: "What happens if you run 'UPDATE Products SET Price = 10;' without a WHERE clause?",
        options: [
          "Every product in the table will have its price updated to 10",
          "Only the first product will be updated",
          "SQL throws a syntax error automatically",
          "Nothing happens"
        ],
        correctAnswer: 0,
        explanation: "An UPDATE without a WHERE clause applies the change to every row in the table."
      }
    ]
  },

  // Module 4: Aggregation & Grouping
  'sql-count-avg-and-sum': {
    heroTagline: "Computing metrics: COUNT() for rows, AVG() for averages, and SUM() for totals",
    introduction: "Aggregate functions perform a calculation on a set of values and return a single scalar value. Commonly used with `GROUP BY`.",
    definition: {
      term: "Aggregate Functions",
      explanation: "Functions like COUNT(), SUM(), and AVG() that compute a single summary result from multiple column values."
    },
    syntaxStructure: `SELECT COUNT(column_name) FROM table_name;
SELECT AVG(column_name) FROM table_name;
SELECT SUM(column_name) FROM table_name;`,
    codeExample: `-- Aggregating order metrics
SELECT 
    COUNT(OrderID) AS TotalOrders,
    AVG(TotalAmount) AS AverageOrderValue,
    SUM(TotalAmount) AS TotalRevenue
FROM Orders;`,
    practice: [
      {
        id: "sql-agg-p1",
        type: "multiple_choice",
        question: "Which aggregate function calculates the total sum of a numeric column?",
        options: ["SUM()", "TOTAL()", "ADD()", "COUNT()"],
        correctAnswer: 0,
        explanation: "SUM() calculates the mathematical total sum of numeric values."
      }
    ]
  },

  // Module 5: Joins
  'introduction-to-sql-joins': {
    heroTagline: "Combining rows from two or more tables based on a related column (foreign key)",
    introduction: "A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them. Types include `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`.",
    definition: {
      term: "SQL JOIN",
      explanation: "An operation that matches rows from multiple tables using common key relationships."
    },
    syntaxStructure: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`,
    codeExample: `-- Inner Join combining Orders and Customers
SELECT 
    Orders.OrderID,
    Customers.CustomerName,
    Orders.OrderDate,
    Orders.TotalAmount
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
ORDER BY Orders.OrderDate DESC;`,
    practice: [
      {
        id: "sql-join-p1",
        type: "multiple_choice",
        question: "Which JOIN type returns only rows where there is a match in BOTH tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
        correctAnswer: 0,
        explanation: "INNER JOIN selects records that have matching values in both tables."
      }
    ]
  }
};
