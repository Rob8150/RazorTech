var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Tasks = mongoose.model( 'tasks' );
var auth = require('basic-auth');
var crypto = require('crypto');
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.
var current_date = (new Date()).valueOf().toString();
var random = Math.random().toString();
var token = crypto.createHash('sha1').update(current_date + random).digest('hex');
tester = function(tok, bod) {
  console.log(tok, bod);
  return {"test":"test ok"};
};
//------NODE ROUTES-----------------------
//route for Tasks.js 
//After var router = express.Router();
//Mock
 var mockpostcrmTasks = {"test" : "postcrmTasks"}  
//api
//postcrmTasks
//http://localhost:3000/v1/postcrmTasks/:token
router.post('/postcrmTasks/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Tasks.create(req.body, function(err, task){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            console.log('db posted complete.');
            res.json(req.body);
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmTasks = {"test" : "getcrmTasks"}  
//api
//getcrmTasks
//http://localhost:3000/v1/getcrmTasks/:token
router.get('/getcrmTasks/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var task = {};
    Tasks.find({}, function (err, tasks) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            task = tasks[tok];
            res.json({
                task: task
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmTaskscol = {"test" : "getcrmTaskscol"}  
//api
//getcrmTaskscol
//http://localhost:3000/v1/getcrmTaskscol/:token
router.get('/getcrmTaskscol/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read all
//    var id = req.params.id;
    var task = {};
    var buildtasks = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Tasks
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, tasks){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < tasks.length; i++){
                task = tasks[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildtasks.push({
                    Id:task.Id,
                    TaskOwner:task.TaskOwner,
                    Subject:task.Subject,
                    DueDate:task.DueDate,
                    ContactName:task.ContactName,
                    RelatedTo:task.RelatedTo,
                    Status:task.Status,
                    Priority:task.Priority,
                    SendEmailtoggle:task.SendEmailtoggle,
                    Description:task.Description
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                tasks: buildtasks
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmTasks = {"test" : "putcrmTasks"}  
//api
//putcrmTasks
//http://localhost:3000/v1/putcrmTasks/:token
router.put('/putcrmTasks/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var task = {};
    Tasks.find({}, function (err, tasks) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            task = tasks[tok];
            //------------------------------
            Tasks.findOneAndUpdate({"Id" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"TaskOwner" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"Subject" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"DueDate" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"ContactName" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"RelatedTo" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"Status" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"Priority" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"SendEmailtoggle" : tok}, req.body, function(err, task){
//            Tasks.findOneAndUpdate({"Description" : tok}, req.body, function(err, task){
                if (err){
                    console.log("an error has occured in update");
                }else{
                    res.json(true);
                }
            });
            //------------------------------
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockdelcrmTasks = {"test" : "delcrmTasks"}  
//api
//delcrmTasks
//http://localhost:3000/v1/delcrmTasks/:token
router.delete('/delcrmTasks/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var task = {};
    Tasks.find({}, function (err, tasks) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            task = tasks[tok];
            //------------------------------
            Tasks.findOneAndRemove({"Id" : tok}, function(err, task){
//            Tasks.findOneAndRemove({"TaskOwner" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"Subject" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"DueDate" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"ContactName" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"RelatedTo" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"Status" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"Priority" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"SendEmailtoggle" :tok}, function(err, task){
//            Tasks.findOneAndRemove({"Description" :tok}, function(err, task){
                if (err){
                    res.json(false);
                    console.log("an error has occured in delete");
                }else{
                    res.json(true);
                }
            });
            //------------------------------
        }
    });
//--MONGOOSE--END------
  }
});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.
module.exports = router;
