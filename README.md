# pkg_node_bsaws

### Prerequisite :star::sunglasses:
1. Create a ".npmrc" file to point node package manager to BarsaminDev registry so that  
it is able to find the "bsaws" package.  


### Kind Reminder
- Put your credentials into a file. DONT hard code.

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
Scan will give the entire table. Very convinient to use on a small table  
such as discovery lookup talbe. NOT recommended if the table is very large.
```javascript
dynamo.scan(params)
  .then((response) => {
    // do your stuff...
  })
  .catch((err) => {
    // err handling
  });
```

### other
To be continued...

### Author
__Head of Engineering__ - Yinghan Wang <xin.wang@barsamin.com>

