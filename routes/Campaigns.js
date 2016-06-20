var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Campaigns = mongoose.model( 'campaigns' );
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
//route for Campaigns.js 
//After var router = express.Router();
//Mock
 var mockpostcrmCampaigns = {"test" : "postcrmCampaigns"}  
//api
//postcrmCampaigns
//http://localhost:3000/v1/postcrmCampaigns/:token
router.post('/postcrmCampaigns/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Campaigns.create(req.body, function(err, campaign){
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
 var mockgetcrmCampaigns = {"test" : "getcrmCampaigns"}  
//api
//getcrmCampaigns
//http://localhost:3000/v1/getcrmCampaigns/:token
router.get('/getcrmCampaigns/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var campaign = {};
    Campaigns.find({}, function (err, campaigns) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            campaign = campaigns[tok];
            res.json({
                campaign: campaign
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmCampaignscol = {"test" : "getcrmCampaignscol"}  
//api
//getcrmCampaignscol
//http://localhost:3000/v1/getcrmCampaignscol/:token
router.get('/getcrmCampaignscol/:token', function(req, res, next) {
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
    var campaign = {};
    var buildcampaigns = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Campaigns
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, campaigns){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < campaigns.length; i++){
                campaign = campaigns[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildcampaigns.push({
                    Id:campaign.Id,
                    CampaignOwner:campaign.CampaignOwner,
                    Type:campaign.Type,
                    CampaignName:campaign.CampaignName,
                    Status:campaign.Status,
                    StartDate:campaign.StartDate,
                    EndDate:campaign.EndDate,
                    ExpectedRevenue:campaign.ExpectedRevenue,
                    BudgetedCost:campaign.BudgetedCost,
                    ActualCost:campaign.ActualCost,
                    ExpectedResponse:campaign.ExpectedResponse,
                    NumSent:campaign.NumSent,
                    Description:campaign.Description
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                campaigns: buildcampaigns
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmCampaigns = {"test" : "putcrmCampaigns"}  
//api
//putcrmCampaigns
//http://localhost:3000/v1/putcrmCampaigns/:token
router.put('/putcrmCampaigns/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var campaign = {};
    Campaigns.find({}, function (err, campaigns) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            campaign = campaigns[tok];
            //------------------------------
            Campaigns.findOneAndUpdate({"Id" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"CampaignOwner" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"Type" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"CampaignName" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"Status" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"StartDate" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"EndDate" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"ExpectedRevenue" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"BudgetedCost" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"ActualCost" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"ExpectedResponse" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"NumSent" : tok}, req.body, function(err, campaign){
//            Campaigns.findOneAndUpdate({"Description" : tok}, req.body, function(err, campaign){
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
 var mockdelcrmCampaigns = {"test" : "delcrmCampaigns"}  
//api
//delcrmCampaigns
//http://localhost:3000/v1/delcrmCampaigns/:token
router.delete('/delcrmCampaigns/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var campaign = {};
    Campaigns.find({}, function (err, campaigns) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            campaign = campaigns[tok];
            //------------------------------
            Campaigns.findOneAndRemove({"Id" : tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"CampaignOwner" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"Type" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"CampaignName" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"Status" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"StartDate" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"EndDate" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"ExpectedRevenue" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"BudgetedCost" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"ActualCost" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"ExpectedResponse" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"NumSent" :tok}, function(err, campaign){
//            Campaigns.findOneAndRemove({"Description" :tok}, function(err, campaign){
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
