var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Leads = mongoose.model( 'leads' );
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
//route for Leads.js 
//After var router = express.Router();
//Mock
 var mockpostcrmLeads = {"test" : "postcrmLeads"}  
//api
//postcrmLeads
//http://localhost:3000/v1/postcrmLeads/:token
router.post('/postcrmLeads/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Leads.create(req.body, function(err, lead){
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
 var mockgetcrmLeads = {"test" : "getcrmLeads"}  
//api
//getcrmLeads
//http://localhost:3000/v1/getcrmLeads/:token
router.get('/getcrmLeads/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var lead = {};
    Leads.find({}, function (err, leads) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            lead = leads[tok];
            res.json({
                lead: lead
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmLeadscol = {"test" : "getcrmLeadscol"}  
//api
//getcrmLeadscol
//http://localhost:3000/v1/getcrmLeadscol/:token
router.get('/getcrmLeadscol/:token', function(req, res, next) {
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
    var lead = {};
    var buildleads = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Leads
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, leads){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < leads.length; i++){
                lead = leads[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildleads.push({
                    Id:lead.Id,
                    LeadOwner:lead.LeadOwner,
                    Company:lead.Company,
                    Firstname:lead.Firstname,
                    LastName:lead.LastName,
                    Title:lead.Title,
                    Email:lead.Email,
                    Phone:lead.Phone,
                    Fax:lead.Fax,
                    Mobile:lead.Mobile,
                    Website:lead.Website,
                    LeadSource:lead.LeadSource,
                    LeadStatus:lead.LeadStatus,
                    Industry:lead.Industry,
                    NoOfEmployees:lead.NoOfEmployees,
                    AnnualRevenue:lead.AnnualRevenue,
                    Rating:lead.Rating,
                    EmailOptOut:lead.EmailOptOut,
                    SkypeID:lead.SkypeID,
                    Salutation:lead.Salutation,
                    SecondaryEmail:lead.SecondaryEmail,
                    Twitter:lead.Twitter,
                    LastActivityTime:lead.LastActivityTime,
                    Street:lead.Street,
                    City:lead.City,
                    State:lead.State,
                    ZipCode:lead.ZipCode,
                    Description:lead.Description
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                leads: buildleads
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmLeads = {"test" : "putcrmLeads"}  
//api
//putcrmLeads
//http://localhost:3000/v1/putcrmLeads/:token
router.put('/putcrmLeads/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var lead = {};
    Leads.find({}, function (err, leads) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            lead = leads[tok];
            //------------------------------
            Leads.findOneAndUpdate({"Id" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"LeadOwner" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Company" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Firstname" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"LastName" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Title" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Email" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Phone" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Fax" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Mobile" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Website" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"LeadSource" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"LeadStatus" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Industry" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"NoOfEmployees" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"AnnualRevenue" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Rating" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"EmailOptOut" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"SkypeID" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Salutation" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"SecondaryEmail" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Twitter" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"LastActivityTime" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Street" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"City" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"State" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"ZipCode" : tok}, req.body, function(err, lead){
//            Leads.findOneAndUpdate({"Description" : tok}, req.body, function(err, lead){
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
 var mockdelcrmLeads = {"test" : "delcrmLeads"}  
//api
//delcrmLeads
//http://localhost:3000/v1/delcrmLeads/:token
router.delete('/delcrmLeads/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var lead = {};
    Leads.find({}, function (err, leads) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            lead = leads[tok];
            //------------------------------
            Leads.findOneAndRemove({"Id" : tok}, function(err, lead){
//            Leads.findOneAndRemove({"LeadOwner" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Company" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Firstname" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"LastName" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Title" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Email" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Phone" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Fax" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Mobile" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Website" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"LeadSource" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"LeadStatus" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Industry" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"NoOfEmployees" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"AnnualRevenue" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Rating" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"EmailOptOut" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"SkypeID" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Salutation" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"SecondaryEmail" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Twitter" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"LastActivityTime" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Street" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"City" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"State" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"ZipCode" :tok}, function(err, lead){
//            Leads.findOneAndRemove({"Description" :tok}, function(err, lead){
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
