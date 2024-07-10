// app.js
import express from 'express';
import { greet, convert, calculate, advancedFunction } from './utilities.js';

const app = express();
const PORT = 3000;

// Call the functions
greet("Dr.", "Jane", "Smith");
console.log(`10 kilometers is ${convert(10)} miles`);
console.log(`The sum of 1, 2, 3, 4, and 5 is ${calculate(1, 2, 3, 4, 5)}`);
advancedFunction(11);

// Basic routes
app.get('/', (req, res) => {
  res.send('<h1>Learning about JSON API<h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Express</h1>');
});

app.get('/learn', (req, res) => {
  res.send('<h1>Learn the essentials of Express JS</h1>');
});

// Demo about params
app.get('/users/:userId', (req, res) => {
  res.send(req.params.userId);
});

// Multiple params example
app.get("/members/:memberId/age/:age", (req, res) => {
  const memberId = Number(req.params.memberId);
  const memberAge = Number(req.params.age);
  res.send(`Member ID: ${memberId} <br> Member Age: ${memberAge}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
