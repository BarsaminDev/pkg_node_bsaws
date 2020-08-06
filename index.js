const AWS = require("aws-sdk");

class BsAws {
    constructor(option) {
        this.init(option);
    }
    
    init(options) {
        this.updateConfig(options.credentials);
        this.dynamo = options.dynamoClient || new AWS.DynamoDB.DocumentClient();
    }
    
    baseQuery(queryType, data) {
        return new Promise((resolve, reject) => {
            this.dynamo[queryType](data, (err, response) => {
                if(err) reject(err);
                else resolve(response);
            });
        });
    }

    insert(data) {
        return this.baseQuery('put', data);
    }

    scan(data) {
        return this.baseQuery('scan', data);
    }

    updateConfig({ region, endpoint, accessKeyId, secretAccessKey }) {
        AWS.config.update({ region, endpoint, accessKeyId, secretAccessKey });
    };

}

module.exports = BsAws;
