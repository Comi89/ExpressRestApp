// Dependencies
var express = require('express');
var app = express();
var router = express.Router();


// Model
var Bear = require('../models/Bear')

// Router Logic
router.post('/', function(req, res){
  var BearNew = new Bear();
  console.log("request body " + req.body);
  BearNew.name = req.body.name;
  BearNew.save(function(err){
    if(err){
      res.send("Error")
    }
    res.send("Post");
  });
});

router.get('/', function(req, res){
  Bear.find(function(err, bears) {
      if (err)
          res.send(err);

      res.json(bears);
  });
});

router.get('/:id', function(req, res){
  console.log("get by id " + req.params.id);
  Bear.findById(req.params.id, function(err, bear) {
      if (err)
          res.send(err);

      res.json(bear);
  });
});

router.put('/:id', function(req, res){
  Bear.findById(req.params.id, function(err, bear){
    bear.name = req.body.name;
    bear.save(function(err){
      if(err) res.json({message: "Update error"})
      console.log("Bear updated");
      res.json({message : "Bear updated"});
    });
  });
});

router.delete('/:id', function(req, res){
  Bear.remove({_id:req.params.id }, function(err, bear){
    if(err) res.json({message: "Delete error"});
    res.json({message: "Delete bear "}) 
  });
})

// Export
module.exports = router;
