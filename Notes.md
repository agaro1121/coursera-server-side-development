#Notes

######Versioning Semantics
```bash
npm install express@4.0.0    #Exact Match accepted
npm install express@"~4.0.0" #Patch acceptable
npm install express@"^4.0.0" #Minor version acceptable
```

```javascript
    callback(error,javascriptObject)
```

- Y-args module allows for command line arguments

###Express
npm install express --save

######SOAP
- Simple Object Access Protocol
- Uses WSDL (web service description language)
- XML based

######ReST
- Representational State Transfer
- Use Web Standards
- Exchange of data using either XML or JSON
- Simpler compared to SOAP, WSDL, etc.
- Four basic design principles:
1. Use HTTP methods explicitly
2. Be stateless
3. Expose directory structure-like URIs
4. Transfer using XML, JSON(JavaScript Object Notation), or both

######Verbs
HTTP GET    <> READ
HTTP POST   <> CREATE
HTTP PUT    <> UPDATE
HTTP DELETE <> DELETE

<<<<<<< HEAD
#MongoDB
######ObjectId 
- 12 byte field
- 4 -> Timestamp -> UTC TS
- 3 -> Machine ID -> Specific Machine DB is stored
- 2 -> Proc Id -> Mongo's Proc ID
- 3 -> Increment -> TS is down to the second so this field tracks multiple entries within seconds
```
id.getTimestamp() -> TS in ISO Date format
mongodb (master *) > mongod --dbpath=data
> db                    #shows which DB you're using
test
> use conFusion         #creats new DB if not there and switches to it
switched to db conFusion
> db
conFusion
> db.dishes.insert({name: "Jefferson", description: "Description"});
WriteResult({ "nInserted" : 1 })
> db.dishes.find()
{ "_id" : ObjectId("56f1938ec6a43baf7f33c8f6"), "name" : "Jefferson", "description" : "Description" }
> db.dishes.find().pretty();
{
        "_id" : ObjectId("56f1938ec6a43baf7f33c8f6"),
        "name" : "Jefferson",
        "description" : "Description"
}
> var id = new ObjectId()
> id
ObjectId("56f19480c6a43baf7f33c8f7")
> id.getTimestamp()
ISODate("2016-03-22T18:52:48Z")
```

```bash
npm install mongodb --save
npm install assert --save
```

```javascript
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true //only 1 document with this name
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true //created-at and updated-at TS. Automatically done when this flag is set
});
```

#NOTE
npmlog missing -> curl -0 -L http://npmjs.org/install.sh | sudo sh