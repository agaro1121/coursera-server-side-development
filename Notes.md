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