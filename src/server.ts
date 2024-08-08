// server.ts
import express, { Request, Response } from 'express'; // Import from the express package
import db from './database'; // Adjust the path according to your project structure
import bodyParser from 'body-parser';
import routes from './route'; // Adjust the import path

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database connection
// If db is a function, call it here
if (typeof db === 'function') {
  db();
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});