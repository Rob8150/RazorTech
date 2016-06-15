var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Calls = mongoose.model( 'calls' );
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
//route for calls.js 
//After var router = express.Router();
//Mock
 var mockpostcrmCalls = {"test" : "postcrmCalls"}  
//api
//postcrmCalls
//http://localhost:3000/v1/postcrmCalls/:token
router.post('/postcrmCalls/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Calls.create(req.body, function(err, call){
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
 var mockgetcrmCalls = {"test" : "getcrmCalls"}  
//api
//getcrmCalls
//http://localhost:3000/v1/getcrmCalls/:token
router.get('/getcrmCalls/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var call = {};
    Calls.find({}, function (err, calls) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            call = calls[tok];
            res.json({
                call: call
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmCallscol = {"test" : "getcrmCallscol"}  
//api
//getcrmCallscol
//http://localhost:3000/v1/getcrmCallscol/:token
router.get('/getcrmCallscol/:token', function(req, res, next) {
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
    var call = {};
    var buildcalls = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Calls
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, calls){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < calls.length; i++){
                call = calls[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildcalls.push({
                    Id:call.Id,
                    Subject:call.Subject,
                    CallType:call.CallType,
                    CallPurpose:call.CallPurpose,
                    ContactName:call.ContactName,
                    RelatedTo:call.RelatedTo,
                    CallStartTime:call.CallStartTime,
                    CallOwner:call.CallOwner,
                    CallDuration:call.CallDuration,
                    Description:call.Description,
                    BillableToggle:call.BillableToggle,
                    CallResult:call.CallResult,
                    Reminder:call.Reminder
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                calls: buildcalls
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmCalls = {"test" : "putcrmCalls"}  
//api
//putcrmCalls
//http://localhost:3000/v1/putcrmCalls/:token
router.put('/putcrmCalls/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var call = {};
    Calls.find({}, function (err, calls) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            call = calls[tok];
            //------------------------------
            Calls.findOneAndUpdate({"Id" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"Subject" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"CallType" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"CallPurpose" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"ContactName" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"RelatedTo" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"CallStartTime" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"CallOwner" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"CallDuration" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"Description" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"BillableToggle" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"CallResult" : tok}, req.body, function(err, call){
//            Calls.findOneAndUpdate({"Reminder" : tok}, req.body, function(err, call){
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
 var mockdelcrmCalls = {"test" : "delcrmCalls"}  
//api
//delcrmCalls
//http://localhost:3000/v1/delcrmCalls/:token
router.delete('/delcrmCalls/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var call = {};
    Calls.find({}, function (err, calls) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            call = calls[tok];
            //------------------------------
            Calls.findOneAndRemove({"Id" : tok}, function(err, call){
//            Calls.findOneAndRemove({"Subject" :tok}, function(err, call){
//            Calls.findOneAndRemove({"CallType" :tok}, function(err, call){
//            Calls.findOneAndRemove({"CallPurpose" :tok}, function(err, call){
//            Calls.findOneAndRemove({"ContactName" :tok}, function(err, call){
//            Calls.findOneAndRemove({"RelatedTo" :tok}, function(err, call){
//            Calls.findOneAndRemove({"CallStartTime" :tok}, function(err, call){
//            Calls.findOneAndRemove({"CallOwner" :tok}, function(err, call){
//            Calls.findOneAndRemove({"CallDuration" :tok}, function(err, call){
//            Calls.findOneAndRemove({"Description" :tok}, function(err, call){
//            Calls.findOneAndRemove({"BillableToggle" :tok}, function(err, call){
//            Calls.findOneAndRemove({"CallResult" :tok}, function(err, call){
//            Calls.findOneAndRemove({"Reminder" :tok}, function(err, call){
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
