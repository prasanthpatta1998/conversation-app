const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 300;
const conversationRoutes = require("./routes/conversation");
const adminRoutes = require("./routes/admin");

const app = express();

mongoose
  .connect(
    "mongodb+srv://prasanthpatta:Prasanth1998@cluster0.pvxlyfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", conversationRoutes);
app.use("/api", adminRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Conversation App");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
