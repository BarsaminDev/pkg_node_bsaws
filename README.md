# pkg_node_bsaws

### Create a instance
```javascript

// config
const credentials = {
    accessKeyId: "your-id", 
    secretAccessKey: "your-key", 
    region: "eu-west-1",
    endpoint: "https://dynamodb.eu-west-1.amazonaws.com",
};

// Create dynamo instance
const dynamo = new Dynamo({credentials});
```

### insert
```javascript
dynamo.insert(params)
  .then((response) => {
    // do your stuff...
  })
  .catch((err) => {
    // err handling
  });
```

### scan
```javascript
dynamo.scan(params)
  .then((response) => {
    // do your stuff...
  })
  .catch((err) => {
    // err handling
  });
```

### other ... to be continued

