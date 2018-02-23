var count = require("../cAssignment.json");
var record = require("../data.json");

exports.view = function(req, res){
  var attributes = req.body.detail;
  console.log(attributes);

  count.details = attributes;

  res.render('start-countdown', count);
  
  var newEntry = {
     "name": count.name,
     "estimated_time" : count.details.Estimate + " hours",
     "actual_time" : " "
  }
  record.project.push(newEntry);  
};

exports.viewFin = function(req, res) {
  res.render('start-countdown',count);
}
