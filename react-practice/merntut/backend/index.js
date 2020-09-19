import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import routes from './routes/soccerRoutes';

//environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//mongo connection (mongoose is to simplify our connection to mongo + use shorter syntax)
const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection successful")
})

routes(app);

app.get("/", (req, res) => {
  res.send(`Our Soccer application is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your soccer server is running on port ${PORT}`);
});
