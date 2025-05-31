const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo")
const trySchema = new mongoose.Schema({
    name: String
});
const Item = mongoose.model("second", trySchema);

app.get("/", function(req, res) {
  Item.find({})
      .then(foundItems => {
          res.render("list", { dayej: foundItems });
      })
      .catch(err => {
          console.log(err);
          res.status(500).send("Internal Server Error");
      });
});

app.post("/", function(req, res) {
  const itemName = req.body.ele1;
  const todo4 = new Item({
      name: itemName
  });
  todo4.save()
      .then(savedItem => {
          console.log("Item saved:", savedItem);
          res.redirect("/");
      })
      .catch(err => {
          console.error("Error saving item:", err);
          res.status(500).send("Internal Server Error");
      });
});
// Server-side code
app.delete("/tasks/:id", function(req, res) {
    const taskId = req.params.id;
    Item.findByIdAndDelete(taskId)
        .then(deletedTask => {
            if (!deletedTask) {
                res.status(404).send("Task not found");
            } else {
                console.log("Task deleted:", deletedTask);
                res.sendStatus(200);
            }
        })
        .catch(err => {
            console.error("Error deleting task:", err);
            res.status(500).send("Internal Server Error");
        });
});







app.listen(8000, function() {
    console.log("Server is running at 8000");
});
