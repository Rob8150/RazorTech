var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Events = mongoose.model( 'events' );
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
//route for events.js 
//After var router = express.Router();
//Mock
 var mockpostcrmEvents = {"test" : "postcrmEvents"}  
//api
//postcrmEvents
//http://localhost:3000/v1/postcrmEvents/:token
router.post('/postcrmEvents/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Events.create(req.body, function(err, event){
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
 var mockgetcrmEvents = {"test" : "getcrmEvents"}  
//api
//getcrmEvents
//http://localhost:3000/v1/getcrmEvents/:token
router.get('/getcrmEvents/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var event = {};
    Events.find({}, function (err, events) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            event = events[tok];
            res.json({
                event: event
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmEventscol = {"test" : "getcrmEventscol"}  
//api
//getcrmEventscol
//http://localhost:3000/v1/getcrmEventscol/:token
router.get('/getcrmEventscol/:token', function(req, res, next) {
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
    var event = {};
    var buildevents = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Events
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, events){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < events.length; i++){
                event = events[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildevents.push({
                    Id:event.Id,
                    EventOwner:event.EventOwner,
                    Subject:event.Subject,
                    StartDateTime:event.StartDateTime,
                    EndDateTime:event.EndDateTime,
                    Venue:event.Venue,
                    ContactName:event.ContactName,
                    RelatedTo:event.RelatedTo,
                    Description:event.Description
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                events: buildevents
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmEvents = {"test" : "putcrmEvents"}  
//api
//putcrmEvents
//http://localhost:3000/v1/putcrmEvents/:token
router.put('/putcrmEvents/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var event = {};
    Events.find({}, function (err, events) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            event = events[tok];
            //------------------------------
            Events.findOneAndUpdate({"Id" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"EventOwner" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"Subject" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"StartDateTime" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"EndDateTime" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"Venue" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"ContactName" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"RelatedTo" : tok}, req.body, function(err, event){
//            Events.findOneAndUpdate({"Description" : tok}, req.body, function(err, event){
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
 var mockdelcrmEvents = {"test" : "delcrmEvents"}  
//api
//delcrmEvents
//http://localhost:3000/v1/delcrmEvents/:token
router.delete('/delcrmEvents/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var event = {};
    Events.find({}, function (err, events) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            event = events[tok];
            //------------------------------
            Events.findOneAndRemove({"Id" : tok}, function(err, event){
//            Events.findOneAndRemove({"EventOwner" :tok}, function(err, event){
//            Events.findOneAndRemove({"Subject" :tok}, function(err, event){
//            Events.findOneAndRemove({"StartDateTime" :tok}, function(err, event){
//            Events.findOneAndRemove({"EndDateTime" :tok}, function(err, event){
//            Events.findOneAndRemove({"Venue" :tok}, function(err, event){
//            Events.findOneAndRemove({"ContactName" :tok}, function(err, event){
//            Events.findOneAndRemove({"RelatedTo" :tok}, function(err, event){
//            Events.findOneAndRemove({"Description" :tok}, function(err, event){
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
