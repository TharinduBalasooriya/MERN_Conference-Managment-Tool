
let express = require("express");
let app = express();

const cors = require("cors");
let router = require("./api/api-router")
let worksopRouter = require('./api/workshop-api/workshop-api-router');
let worksopProposalRouter = require('./api/workshop-api/workshopProposal-api-router');
let mongoose = require("mongoose");

const port = 5000;

app.get("/", (req, res) => {
    res.send("Inital Path : ICAF -- Please Read API Doc --api/");
  });

//Configure express to handle post requests
//(boyd-parser)
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  app.use(express.json());


mongoose.connect("mongodb+srv://tharindu:tharindu@cluster0.vnll5.mongodb.net/ICAF?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else{
    console.log("Connected")
}

app.use("/api", router);
app.use("/workshop", worksopRouter);
app.use("/workshop-proposal", worksopProposalRouter);

app.listen(port, () => {
  console.log("Backend Started " + port);
});
