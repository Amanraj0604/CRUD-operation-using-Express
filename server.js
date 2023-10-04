const express = require("express");
const errHandler = require("./midlewere/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();
const port = 5001;
connectDb();
app.use(express.json()); // Apply express.json() middleware first

app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use(errHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
 