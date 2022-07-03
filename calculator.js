const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var num1 =Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1+num2;
  console.log(result);
  res.send("Thanks for posting your result is this"+result);
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname+"BMIcalculator.html");
});

app.post("/BMIcalculator", function(req,res){
  var height = parseFloat(req.body.weight);
  var weight = parseFloat(req.body.weight);

  var bmiresult = weight/(height**2);

  res.send("Your BMI report is "+bmiresult);

});



app.listen(3000,function(){
  console.log("Server is running on port 3000.")

});
