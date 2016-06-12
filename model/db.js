// Bring Mongoose into the project
var mongoose = require( 'mongoose' );
// Build the connection string
var dbURI = 'mongodb://localhost/Accountsdb';
// Create the database connection
mongoose.connect(dbURI);
// Define connection events
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
     console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
     mongoose.connection.close(function () {
     console.log('Mongoose disconnected through app termination');
     process.exit(0);
});
});
//******************************
//USER SCHEMA
//******************************
var AccountsSchema = mongoose.Schema({
    Id: String,
    AccountOwnwer: String,
    Rating: String,
    AccountName: String,
    Phone: String,
    AccountSite: String,
    Fax: String,
    ParentAccount: String,
    WebSite: String,
    AccountNumber: String,
    TickerSymbol: String,
    AccountType: String,
    Ownership: String,
    Industry: String,
    Employees: String,
    AnnualRevenue: String,
    LastActivity: String,
    BillingStreet: String,
    BillingCity: String,
    BillingState: String,
    BillingCode: String,
    BillingCountry: String,
    Description: String,
    CreatedBy: String,
    ModifiedBy: String,
    CreationDate: String
});
var Accounts = mongoose.model('accounts', AccountsSchema);
//--
//Drop Collection
//mongoose.connection.collections['accounts'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var CallsSchema = mongoose.Schema({
    Id: String,
    Subject: String,
    CallType: String,
    CallPurpose: String,
    ContactName: String,
    RelatedTo: String,
    CallStartTime: String,
    CallOwner: String,
    CallDuration: String,
    Description: String,
    BillableToggle: String,
    CallResult: String,
    Reminder: String
});
var Calls = mongoose.model('calls', CallsSchema);
//--
//Drop Collection
//mongoose.connection.collections['calls'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var CampaignsSchema = mongoose.Schema({
    Id: String,
    CampaignOwner: String,
    Type: String,
    CampaignName: String,
    Status: String,
    StartDate: String,
    EndDate: String,
    ExpectedRevenue: String,
    BudgetedCost: String,
    ActualCost: String,
    ExpectedResponse: String,
    NumSent: String,
    Description: String
});
var Campaigns = mongoose.model('campaigns', CampaignsSchema);
//--
//Drop Collection
//mongoose.connection.collections['campaigns'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var CasesSchema = mongoose.Schema({
    Id: String,
    CaseOwner: String,
    CaseNumber: String,
    Status: String,
    ProductName: String,
    Priority: String,
    Type: String,
    CaseReason: String,
    CaseOrigin: String,
    Subject: String,
    RelatedTo: String,
    NoofComments: String,
    AccountName: String,
    ReportedBy: String,
    OpportunityName: String,
    Email: String,
    Phone: String,
    Description: String,
    InternalComments: String,
    Solution: String,
    AddComment: String,
    Comments: String
});
var Cases = mongoose.model('cases', CasesSchema);
//--
//Drop Collection
//mongoose.connection.collections['cases'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var CatalogsSchema = mongoose.Schema({
    Id: String,
    PriceBookOwner: String,
    PriceBookName: String,
    Active: String,
    PricingModel: String,
    Description: String
});
var Catalogs = mongoose.model('catalogs', CatalogsSchema);
//--
//Drop Collection
//mongoose.connection.collections['catalogs'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var ContactsSchema = mongoose.Schema({
    Id: String,
    ContactOwner: String,
    FirstName: String,
    LastName: String,
    AccountNane: String,
    Type: String,
    Email: String,
    Title: String,
    Department: String,
    Phone: String,
    HomePhone: String,
    OtherPhone: String,
    Fax: String,
    Mobile: String,
    DateofBirth: String,
    EmailOptOut: String,
    SkypeID: String,
    Salutation: String,
    SecondaryEmail: String,
    LastActivityTime: String,
    Twitter: String,
    MailingStreet: String,
    MailingCity: String,
    MailingState: String,
    MailingZip: String,
    MailingCountry: String,
    Description: String,
    CreatedBy: String,
    ModifiedBy: String,
    CreationDate: String
});
var Contacts = mongoose.model('people', ContactsSchema);
//--
//Drop Collection
//mongoose.connection.collections['people'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var EventsSchema = mongoose.Schema({
    Id: String,
    EventOwner: String,
    Subject: String,
    StartDateTime: String,
    EndDateTime: String,
    Venue: String,
    ContactName: String,
    RelatedTo: String,
    Description: String
});
var Events = mongoose.model('events', EventsSchema);
//--
//Drop Collection
//mongoose.connection.collections['events'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var InvoicesSchema = mongoose.Schema({
    Id: String,
    InvoiceOwner: String,
    SalesOrder: String,
    Subject: String,
    PurchaseOrder: String,
    InvoiceDate: String,
    ExciseDuty: String,
    DueDate: String,
    Status: String,
    SalesCommission: String,
    AccountName: String,
    ContactName: String,
    BillingStreet: String,
    ShippingStreet: String,
    BillingCity: String,
    ShippingCity: String,
    BillingState: String,
    ShippingState: String,
    BillingCode: String,
    ShippingCode: String,
    BillingCountry: String,
    ShippingCounty: String,
    Status: String,
    ProductDetail: String,
    ProdlistId: String,
    TermsandConditions: String,
    Description: String
});
var Invoices = mongoose.model('invoices', InvoicesSchema);
//--
//Drop Collection
//mongoose.connection.collections['invoices'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var LeadsSchema = mongoose.Schema({
    Id: String,
    LeadOwner: String,
    Company: String,
    Firstname: String,
    LastName: String,
    Title: String,
    Email: String,
    Phone: String,
    Fax: String,
    Mobile: String,
    Website: String,
    LeadSource: String,
    LeadStatus: String,
    Industry: String,
    NoOfEmployees: String,
    AnnualRevenue: String,
    Rating: String,
    EmailOptOut: String,
    SkypeID: String,
    Salutation: String,
    SecondaryEmail: String,
    Twitter: String,
    LastActivityTime: String,
    Street: String,
    City: String,
    State: String,
    ZipCode: String,
    Description: String
});
var Leads = mongoose.model('leads', LeadsSchema);
//--
//Drop Collection
//mongoose.connection.collections['leads'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var OpportunitesSchema = mongoose.Schema({
    Id: String,
    OpportunityOwner: String,
    Amount: String,
    OpportunityName: String,
    ClosingDate: String,
    AccountName: String,
    Stage: String,
    Type: String,
    Probability: String,
    NextStep: String,
    ExpectedRevenue: String,
    LeadSource: String,
    CampaignSource: String,
    ContactName: String,
    Qualification: String,
    NeedsAnalysis: String,
    ValueProposition: String,
    IsDescisionMaker: String,
    Quote: String,
    Review: String,
    ClosedWon: String,
    ClosedLoss: String,
    Web1: String,
    Web2: String,
    Chat: String
});
var Opportunites = mongoose.model('Opportunites', OpportunitesSchema);
//--
//Drop Collection
//mongoose.connection.collections['Opportunites'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var PriceBooksSchema = mongoose.Schema({
    Id: String,
    PriceBookOwner: String,
    PriceBookName: String,
    Active: String,
    PricingModel: String,
    Description: String
});
var PriceBooks = mongoose.model('pricebooks', PriceBooksSchema);
//--
//Drop Collection
//mongoose.connection.collections['pricebooks'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var ProductsSchema = mongoose.Schema({
    Id: String,
    ProductOwner: String,
    ProductName: String,
    ProductCode: String,
    VendorName: String,
    ProductActive: String,
    Manufacturer: String,
    ProductCategory: String,
    SalesStartDate: String,
    SalesEndDate: String,
    SupportStartDate: String,
    SupportEndDate: String,
    SupportStart: String,
    SupportExpiryDate: String,
    UnitPrice: String,
    CommissionRate: String,
    Tax: String,
    TaxableToggle: String,
    UseageUnit: String,
    QtyOrderedd: String,
    QtyinStock: String,
    RecorderLevel: String,
    Handler: String,
    QtyinDemand: String,
    Description: String
});
var Products = mongoose.model('products', ProductsSchema);
//--
//Drop Collection
//mongoose.connection.collections['products'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var ProductListsSchema = mongoose.Schema({
    Id: String,
    ProductListId: String,
    ProductId: String
});
var ProductLists = mongoose.model('productlists', ProductListsSchema);
//--
//Drop Collection
//mongoose.connection.collections['productlists'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var PurchaseOrdersSchema = mongoose.Schema({
    Id: String,
    PurchaseOrderOwner: String,
    PONumber: String,
    Subject: String,
    VendorName: String,
    RequisitionNumber: String,
    TrackingNumber: String,
    ContactName: String,
    PODate: String,
    DueDate: String,
    Carrier: String,
    ExciseDuty: String,
    SalesCommission: String,
    Staus: String,
    BillingStreet: String,
    ShippingStreet: String,
    BillingCity: String,
    ShippingCity: String,
    BillingState: String,
    ShippingState: String,
    BillingCode: String,
    ShippingCode: String,
    BillingCountry: String,
    ShippingCounty: String,
    Status: String,
    ProductDetail: String,
    ProdlistId: String,
    TermsandConditions: String,
    Description: String
});
var PurchaseOrders = mongoose.model('purchaseorders', PurchaseOrdersSchema);
//--
//Drop Collection
//mongoose.connection.collections['purchaseorders'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var QuotesSchema = mongoose.Schema({
    Id: String,
    QuoteOwner: String,
    OpportunityName: String,
    Subject: String,
    ValidTill: String,
    QuoteStage: String,
    ContactName: String,
    Team: String,
    AccountName: String,
    Carrier: String,
    BillingStreet: String,
    ShippingStreet: String,
    BillingCity: String,
    ShippingCity: String,
    BillingState: String,
    ShippingState: String,
    BillingCode: String,
    ShippingCode: String,
    BillingCountry: String,
    ShippingCounty: String,
    Status: String,
    ProductDetail: String,
    ProdlistId: String,
    TermsandConditions: String,
    Description: String
});
var Quotes = mongoose.model('quotes', QuotesSchema);
//--
//Drop Collection
//mongoose.connection.collections['quotes'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var SalesOrdersSchema = mongoose.Schema({
    Id: String,
    SalesOrderOwner: String,
    OpportunityName: String,
    Subject: String,
    PurchaseOrder: String,
    CustomerNumber: String,
    DueDate: String,
    QuoteName: String,
    ContactName: String,
    Pending: String,
    ExciseDuty: String,
    Carrier: String,
    Status: String,
    SalesCommission: String,
    AccountName: String,
    BillingStreet: String,
    ShippingStreet: String,
    BillingCity: String,
    ShippingCity: String,
    BillingState: String,
    ShippingState: String,
    BillingCode: String,
    ShippingCode: String,
    BillingCountry: String,
    ShippingCounty: String,
    Status: String,
    ProductDetail: String,
    ProdlistId: String,
    TermsandConditions: String,
    Description: String
});
var SalesOrders = mongoose.model('salesorders', SalesOrdersSchema);
//--
//Drop Collection
//mongoose.connection.collections['salesorders'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var SolutionsSchema = mongoose.Schema({
    Id: String,
    SolutionOwner: String,
    SolutionTitle: String,
    Status: String,
    ProductName: String,
    Question: String,
    Answer: String
});
var Solutions = mongoose.model('solutions', SolutionsSchema);
//--
//Drop Collection
//mongoose.connection.collections['solutions'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var TasksSchema = mongoose.Schema({
    Id: String,
    TaskOwner: String,
    Subject: String,
    DueDate: String,
    ContactName: String,
    RelatedTo: String,
    Status: String,
    Priority: String,
    SendEmailtoggle: String,
    Description: String
});
var Tasks = mongoose.model('tasks', TasksSchema);
//--
//Drop Collection
//mongoose.connection.collections['tasks'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
//******************************
//USER SCHEMA
//******************************
var VendorsSchema = mongoose.Schema({
    Id: String,
    VendorOwner: String,
    VendorName: String,
    Phone: String,
    Email: String,
    Website: String,
    GLAccount: String,
    Category: String,
    Street: String,
    City: String,
    State: String,
    ZipCode: String,
    Country: String
});
var Vendors = mongoose.model('vendors', VendorsSchema);
//--
//Drop Collection
//mongoose.connection.collections['vendors'].drop( function(err) {
//    console.log('collection dropped');
//});
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
var RegisterSchema = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Password: String,
    AdminCD: String
});

var Register = mongoose.model('regusers', RegisterSchema);
