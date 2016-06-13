var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Accounts = mongoose.model( 'accounts' );
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
//route for accounts.js 
//After var router = express.Router();
//Mock
 var mockpostcrmAccounts = {"test" : "postcrmAccounts"}  
//api
//postcrmAccounts
//http://localhost:3000/v1/postcrmAccounts/:token
router.post('/postcrmAccounts/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Accounts.create(req.body, function(err, account){
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
 var mockgetcrmAccounts = {"test" : "getcrmAccounts"}  
//api
//getcrmAccounts
//http://localhost:3000/v1/getcrmAccounts/:token
router.get('/getcrmAccounts/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var account = {};
    Accounts.find({}, function (err, accounts) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            account = accounts[tok];
            res.json({
                account: account
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmAccountscol = {"test" : "getcrmAccountscol"}  
//api
//getcrmAccountscol
//http://localhost:3000/v1/getcrmAccountscol/:token
router.get('/getcrmAccountscol/:token', function(req, res, next) {
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
    var account = {};
    var buildaccounts = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Accounts
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, accounts){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < accounts.length; i++){
                account = accounts[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildaccounts.push({
                    Id:account.Id,
                    AccountOwnwer:account.AccountOwnwer,
                    Rating:account.Rating,
                    AccountName:account.AccountName,
                    Phone:account.Phone,
                    AccountSite:account.AccountSite,
                    Fax:account.Fax,
                    ParentAccount:account.ParentAccount,
                    WebSite:account.WebSite,
                    AccountNumber:account.AccountNumber,
                    TickerSymbol:account.TickerSymbol,
                    AccountType:account.AccountType,
                    Ownership:account.Ownership,
                    Industry:account.Industry,
                    Employees:account.Employees,
                    AnnualRevenue:account.AnnualRevenue,
                    LastActivity:account.LastActivity,
                    BillingStreet:account.BillingStreet,
                    BillingCity:account.BillingCity,
                    BillingState:account.BillingState,
                    BillingCode:account.BillingCode,
                    BillingCountry:account.BillingCountry,
                    Description:account.Description,
                    CreatedBy:account.CreatedBy,
                    ModifiedBy:account.ModifiedBy,
                    CreationDate:account.CreationDate
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                accounts: buildaccounts
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmAccounts = {"test" : "putcrmAccounts"}  
//api
//putcrmAccounts
//http://localhost:3000/v1/putcrmAccounts/:token
router.put('/putcrmAccounts/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var account = {};
    Accounts.find({}, function (err, accounts) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            account = accounts[tok];
            //------------------------------
            Accounts.findOneAndUpdate({"Id" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"AccountOwnwer" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"Rating" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"AccountName" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"Phone" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"AccountSite" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"Fax" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"ParentAccount" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"WebSite" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"AccountNumber" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"TickerSymbol" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"AccountType" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"Ownership" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"Industry" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"Employees" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"AnnualRevenue" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"LastActivity" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"BillingStreet" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"BillingCity" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"BillingState" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"BillingCode" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"BillingCountry" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"Description" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"CreatedBy" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"ModifiedBy" : tok}, req.body, function(err, account){
//            Accounts.findOneAndUpdate({"CreationDate" : tok}, req.body, function(err, account){
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
 var mockdelcrmAccounts = {"test" : "delcrmAccounts"}  
//api
//delcrmAccounts
//http://localhost:3000/v1/delcrmAccounts/:token
router.delete('/delcrmAccounts/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var account = {};
    Accounts.find({}, function (err, accounts) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            account = accounts[tok];
            //------------------------------
            Accounts.findOneAndRemove({"Id" : tok}, function(err, account){
//            Accounts.findOneAndRemove({"AccountOwnwer" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"Rating" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"AccountName" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"Phone" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"AccountSite" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"Fax" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"ParentAccount" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"WebSite" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"AccountNumber" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"TickerSymbol" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"AccountType" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"Ownership" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"Industry" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"Employees" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"AnnualRevenue" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"LastActivity" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"BillingStreet" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"BillingCity" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"BillingState" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"BillingCode" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"BillingCountry" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"Description" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"CreatedBy" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"ModifiedBy" :tok}, function(err, account){
//            Accounts.findOneAndRemove({"CreationDate" :tok}, function(err, account){
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
