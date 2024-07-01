// src/server/db/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
  )`);
  
  db.run(`CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    record_count INTEGER,
    fields TEXT
  )`);

  db.run(`INSERT INTO users (username, password) VALUES ('user1', 'password1')`);

  const products = [
    { id: 1, category: 'Firmographic', record_count: 5250, fields: 'Company name, Company address, Website' },
    { id: 2, category: 'Demographic', record_count: 12000, fields: 'Age, Gender, Income' },
    { id: 3, category: 'Geographic', record_count: 7500, fields: 'Country, State, City' },
    { id: 4, category: 'Behavioral', record_count: 3000, fields: 'Purchase history, Brand loyalty, Engagement' },
    { id: 5, category: 'Technographic', record_count: 8500, fields: 'Software used, Hardware used, Technology adoption' },
    { id: 6, category: 'Psychographic', record_count: 4500, fields: 'Interests, Values, Lifestyle' },
    { id: 7, category: 'Transactional', record_count: 9200, fields: 'Transaction date, Amount, Payment method' },
    { id: 8, category: 'Healthcare', record_count: 6300, fields: 'Patient name, Diagnosis, Treatment' },
    { id: 9, category: 'Education', record_count: 3100, fields: 'Student name, Grade, School' },
    { id: 10, category: 'Financial', record_count: 7800, fields: 'Account number, Balance, Transactions' },
    { id: 11, category: 'Employment', record_count: 5200, fields: 'Employee name, Position, Salary' },
    { id: 12, category: 'Legal', record_count: 2700, fields: 'Case number, Court, Outcome' },
    { id: 13, category: 'Social Media', record_count: 11000, fields: 'Username, Followers, Posts' },
    { id: 14, category: 'Real Estate', record_count: 4000, fields: 'Property address, Value, Owner' },
    { id: 15, category: 'Logistics', record_count: 5800, fields: 'Shipment ID, Origin, Destination' },
    { id: 16, category: 'Energy', record_count: 4500, fields: 'Consumption, Source, Cost' },
    { id: 17, category: 'Retail', record_count: 8900, fields: 'Product name, Price, Sales' },
    { id: 18, category: 'Tourism', record_count: 3500, fields: 'Destination, Visitors, Revenue' },
    { id: 19, category: 'Telecommunication', record_count: 9400, fields: 'Phone number, Plan, Usage' },
    { id: 20, category: 'Insurance', record_count: 6800, fields: 'Policy number, Coverage, Premium' }
  ];

  const stmt = db.prepare(`INSERT INTO products (category, record_count, fields) VALUES (?, ?, ?)`);
  products.forEach((product) => {
    stmt.run(product.category, product.record_count, product.fields);
  });
  stmt.finalize();
});

module.exports = db;
