var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Cases = mongoose.model( 'cases' );
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
//route for cases.js 
//After var router = express.Router();
//Mock
 var mockpostcrmCases = {"test" : "postcrmCases"}  
//api
//postcrmCases
//http://localhost:3000/v1/postcrmCases/:token
router.post('/postcrmCases/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Cases.create(req.body, function(err, incident){
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
 var mockgetcrmCases = {"test" : "getcrmCases"}  
//api
//getcrmCases
//http://localhost:3000/v1/getcrmCases/:token
router.get('/getcrmCases/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var incident = {};
    Cases.find({}, function (err, cases) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            incident = cases[tok];
            res.json({
                incident: incident
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmCasescol = {"test" : "getcrmCasescol"}  
//api
//getcrmCasescol
//http://localhost:3000/v1/getcrmCasescol/:token
router.get('/getcrmCasescol/:token', function(req, res, next) {
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
    var incident = {};
    var buildcases = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Cases
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, cases){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < cases.length; i++){
                incident = cases[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildcases.push({
                    Id:incident.Id,
                    CaseOwner:incident.CaseOwner,
                    CaseNumber:incident.CaseNumber,
                    Status:incident.Status,
                    ProductName:incident.ProductName,
                    Priority:incident.Priority,
                    Type:incident.Type,
                    CaseReason:incident.CaseReason,
                    CaseOrigin:incident.CaseOrigin,
                    Subject:incident.Subject,
                    RelatedTo:incident.RelatedTo,
                    NoofComments:incident.NoofComments,
                    AccountName:incident.AccountName,
                    ReportedBy:incident.ReportedBy,
                    OpportunityName:incident.OpportunityName,
                    Email:incident.Email,
                    Phone:incident.Phone,
                    Description:incident.Description,
                    InternalComments:incident.InternalComments,
                    Solution:incident.Solution,
                    AddComment:incident.AddComment,
                    Comments:incident.Comments
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                cases: buildcases
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmCases = {"test" : "putcrmCases"}  
//api
//putcrmCases
//http://localhost:3000/v1/putcrmCases/:token
router.put('/putcrmCases/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var incident = {};
    Cases.find({}, function (err, cases) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            incident = cases[tok];
            //------------------------------
            Cases.findOneAndUpdate({"Id" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"CaseOwner" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"CaseNumber" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Status" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"ProductName" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Priority" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Type" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"CaseReason" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"CaseOrigin" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Subject" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"RelatedTo" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"NoofComments" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"AccountName" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"ReportedBy" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"OpportunityName" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Email" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Phone" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Description" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"InternalComments" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Solution" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"AddComment" : tok}, req.body, function(err, incident){
//            Cases.findOneAndUpdate({"Comments" : tok}, req.body, function(err, incident){
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
 var mockdelcrmCases = {"test" : "delcrmCases"}  
//api
//delcrmCases
//http://localhost:3000/v1/delcrmCases/:token
router.delete('/delcrmCases/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var incident = {};
    Cases.find({}, function (err, cases) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            incident = cases[tok];
            //------------------------------
            Cases.findOneAndRemove({"Id" : tok}, function(err, incident){
//            Cases.findOneAndRemove({"CaseOwner" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"CaseNumber" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Status" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"ProductName" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Priority" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Type" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"CaseReason" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"CaseOrigin" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Subject" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"RelatedTo" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"NoofComments" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"AccountName" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"ReportedBy" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"OpportunityName" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Email" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Phone" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Description" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"InternalComments" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Solution" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"AddComment" :tok}, function(err, incident){
//            Cases.findOneAndRemove({"Comments" :tok}, function(err, incident){
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
