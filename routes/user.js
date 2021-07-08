const User = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  
  const newUser = new User({ ...req.body});
  newUser
    .save()
    .then(() => res.send("user has been added with success"))
    .catch((err) => res.send(err));
});

router.get("/findall", (req, res) => {
  User.find()
    .then((users) =>{
      console.log(users)
      res.json(users)
    } )
    .catch((err) => res.send(err));
});

router.delete("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndDelete({ _id })
    .then(res.send("User has been deleted with success "))
    .catch((err) => res.send(err));
});

router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndUpdate({ _id },{useFindAndModify: false} ,{ $set: { ...req.body } })
    .then(() => res.send("User has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
