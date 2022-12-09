
const app = require('./app');
const dotenv = require('dotenv')
const connectDB = require('./models/db')

// env config
dotenv.config();


// connect database
connectDB();
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

