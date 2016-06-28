var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Invoices = mongoose.model( 'invoices' );
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
//route for Invoices.js 
//After var router = express.Router();
//Mock
 var mockpostcrmInvoices = {"test" : "postcrmInvoices"}  
//api
//postcrmInvoices
//http://localhost:3000/v1/postcrmInvoices/:token
router.post('/postcrmInvoices/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//add
    Invoices.create(req.body, function(err, invoice){
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
 var mockgetcrmInvoices = {"test" : "getcrmInvoices"}  
//api
//getcrmInvoices
//http://localhost:3000/v1/getcrmInvoices/:token
router.get('/getcrmInvoices/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
  } else {
//--MONGOOSE--START----
//read
    var invoice = {};
    Invoices.find({}, function (err, invoices) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            invoice = invoices[tok];
            res.json({
                invoice: invoice
            });
        }
    });
//--MONGOOSE--END------
  }
});
//Mock
 var mockgetcrmInvoicescol = {"test" : "getcrmInvoicescol"}  
//api
//getcrmInvoicescol
//http://localhost:3000/v1/getcrmInvoicescol/:token
router.get('/getcrmInvoicescol/:token', function(req, res, next) {
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
    var invoice = {};
    var buildinvoices = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     Invoices
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, invoices){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < invoices.length; i++){
                invoice = invoices[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildinvoices.push({
                    Id:invoice.Id,
                    InvoiceOwner:invoice.InvoiceOwner,
                    SalesOrder:invoice.SalesOrder,
                    Subject:invoice.Subject,
                    PurchaseOrder:invoice.PurchaseOrder,
                    InvoiceDate:invoice.InvoiceDate,
                    ExciseDuty:invoice.ExciseDuty,
                    DueDate:invoice.DueDate,
                    Status:invoice.Status,
                    SalesCommission:invoice.SalesCommission,
                    AccountName:invoice.AccountName,
                    ContactName:invoice.ContactName,
                    BillingStreet:invoice.BillingStreet,
                    ShippingStreet:invoice.ShippingStreet,
                    BillingCity:invoice.BillingCity,
                    ShippingCity:invoice.ShippingCity,
                    BillingState:invoice.BillingState,
                    ShippingState:invoice.ShippingState,
                    BillingCode:invoice.BillingCode,
                    ShippingCode:invoice.ShippingCode,
                    BillingCountry:invoice.BillingCountry,
                    ShippingCounty:invoice.ShippingCounty,
                    Status:invoice.Status,
                    ProductDetail:invoice.ProductDetail,
                    ProdlistId:invoice.ProdlistId,
                    TermsandConditions:invoice.TermsandConditions,
                    Description:invoice.Description
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                invoices: buildinvoices
            });
        }
     });
//--MONGOOSE--END------
  }
});
//Mock
 var mockputcrmInvoices = {"test" : "putcrmInvoices"}  
//api
//putcrmInvoices
//http://localhost:3000/v1/putcrmInvoices/:token
router.put('/putcrmInvoices/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//edit
    var invoice = {};
    Invoices.find({}, function (err, invoices) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {            invoice = invoices[tok];
            //------------------------------
            Invoices.findOneAndUpdate({"Id" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"InvoiceOwner" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"SalesOrder" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"Subject" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"PurchaseOrder" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"InvoiceDate" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ExciseDuty" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"DueDate" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"Status" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"SalesCommission" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"AccountName" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ContactName" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"BillingStreet" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ShippingStreet" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"BillingCity" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ShippingCity" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"BillingState" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ShippingState" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"BillingCode" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ShippingCode" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"BillingCountry" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ShippingCounty" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"Status" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ProductDetail" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"ProdlistId" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"TermsandConditions" : tok}, req.body, function(err, invoice){
//            Invoices.findOneAndUpdate({"Description" : tok}, req.body, function(err, invoice){
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
 var mockdelcrmInvoices = {"test" : "delcrmInvoices"}  
//api
//delcrmInvoices
//http://localhost:3000/v1/delcrmInvoices/:token
router.delete('/delcrmInvoices/:token', function(req, res, next) {
   var tok = req.params.token
   var credentials = auth(req)
   if (!credentials || credentials.name !== 'razor' || credentials.pass !== 'asmkmaskcmlkaskkmdftas') {
     res.statusCode = 401
     res.setHeader('WWW-Authenticate', 'Basic realm="example"')
     res.end('Access denied')
  } else {
//--MONGOOSE--START----
//delete
    var invoice = {};
    Invoices.find({}, function (err, invoices) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            invoice = invoices[tok];
            //------------------------------
            Invoices.findOneAndRemove({"Id" : tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"InvoiceOwner" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"SalesOrder" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"Subject" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"PurchaseOrder" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"InvoiceDate" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ExciseDuty" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"DueDate" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"Status" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"SalesCommission" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"AccountName" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ContactName" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"BillingStreet" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ShippingStreet" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"BillingCity" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ShippingCity" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"BillingState" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ShippingState" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"BillingCode" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ShippingCode" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"BillingCountry" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ShippingCounty" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"Status" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ProductDetail" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"ProdlistId" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"TermsandConditions" :tok}, function(err, invoice){
//            Invoices.findOneAndRemove({"Description" :tok}, function(err, invoice){
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
