var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Quotes = mongoose.model( 'quotes' );
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
//route for Quotes.js 
//After var router = express.Router();
//Mock
 var mockpostcrmQuotes = {"test" : "postcrmQuotes"}  
//api
//postcrmQuotes
//http://localhost:3000/v1/postcrmQuotes/:token
router.post('/postcrmQuotes/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Quotes.create(req.body, function(err, quote){
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
 var mockgetcrmQuotes = {"test" : "getcrmQuotes"}  
//api
//getcrmQuotes
//http://localhost:3000/v1/getcrmQuotes/:token
router.get('/getcrmQuotes/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var quote = {};
    Quotes.find({}, function (err, quotes) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            quote = quotes[tok];
            res.json({
                quote: quote
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmQuotescol = {"test" : "getcrmQuotescol"}  
//api
//getcrmQuotescol
//http://localhost:3000/v1/getcrmQuotescol/:token
router.get('/getcrmQuotescol/:token', function(req, res, next) {
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
    var quote = {};
    var buildquotes = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Quotes
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, quotes){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < quotes.length; i++){
                quote = quotes[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildquotes.push({
                    Id:quote.Id,
                    QuoteOwner:quote.QuoteOwner,
                    OpportunityName:quote.OpportunityName,
                    Subject:quote.Subject,
                    ValidTill:quote.ValidTill,
                    QuoteStage:quote.QuoteStage,
                    ContactName:quote.ContactName,
                    Team:quote.Team,
                    AccountName:quote.AccountName,
                    Carrier:quote.Carrier,
                    BillingStreet:quote.BillingStreet,
                    ShippingStreet:quote.ShippingStreet,
                    BillingCity:quote.BillingCity,
                    ShippingCity:quote.ShippingCity,
                    BillingState:quote.BillingState,
                    ShippingState:quote.ShippingState,
                    BillingCode:quote.BillingCode,
                    ShippingCode:quote.ShippingCode,
                    BillingCountry:quote.BillingCountry,
                    ShippingCounty:quote.ShippingCounty,
                    Status:quote.Status,
                    ProductDetail:quote.ProductDetail,
                    ProdlistId:quote.ProdlistId,
                    TermsandConditions:quote.TermsandConditions,
                    Description:quote.Description
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                quotes: buildquotes
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmQuotes = {"test" : "putcrmQuotes"}  
//api
//putcrmQuotes
//http://localhost:3000/v1/putcrmQuotes/:token
router.put('/putcrmQuotes/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var quote = {};
    Quotes.find({}, function (err, quotes) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            quote = quotes[tok];
            //------------------------------
            Quotes.findOneAndUpdate({"Id" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"QuoteOwner" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"OpportunityName" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"Subject" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ValidTill" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"QuoteStage" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ContactName" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"Team" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"AccountName" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"Carrier" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"BillingStreet" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ShippingStreet" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"BillingCity" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ShippingCity" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"BillingState" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ShippingState" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"BillingCode" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ShippingCode" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"BillingCountry" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ShippingCounty" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"Status" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ProductDetail" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"ProdlistId" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"TermsandConditions" : tok}, req.body, function(err, quote){
//            Quotes.findOneAndUpdate({"Description" : tok}, req.body, function(err, quote){
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
 var mockdelcrmQuotes = {"test" : "delcrmQuotes"}  
//api
//delcrmQuotes
//http://localhost:3000/v1/delcrmQuotes/:token
router.delete('/delcrmQuotes/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var quote = {};
    Quotes.find({}, function (err, quotes) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            quote = quotes[tok];
            //------------------------------
            Quotes.findOneAndRemove({"Id" : tok}, function(err, quote){
//            Quotes.findOneAndRemove({"QuoteOwner" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"OpportunityName" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"Subject" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ValidTill" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"QuoteStage" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ContactName" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"Team" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"AccountName" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"Carrier" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"BillingStreet" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ShippingStreet" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"BillingCity" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ShippingCity" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"BillingState" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ShippingState" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"BillingCode" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ShippingCode" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"BillingCountry" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ShippingCounty" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"Status" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ProductDetail" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"ProdlistId" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"TermsandConditions" :tok}, function(err, quote){
//            Quotes.findOneAndRemove({"Description" :tok}, function(err, quote){
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
