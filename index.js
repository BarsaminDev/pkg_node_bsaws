const AWS = require("aws-sdk");

class BsAws {
    constructor(option) {
        this.init(option);
    }
    
    init(options) {
        this.updateConfig(options.credentials);
        this.dynamo = options.dynamoClient || new AWS.DynamoDB.DocumentClient();
    }
    
    _baseQuery_(queryType, data) {
        return new Promise((resolve, reject) => {
            this.dynamo[queryType](data, (err, response) => {
                if(err) reject(err);
                else resolve(response);
            });
        });
    }

    query(data) {
        return this._baseQuery_('query', data);
    }

    insert(data) {
        return this._baseQuery_('put', data);
    }

    delete(data) {
        return this._baseQuery_('delete', data);
    }

    put(data) {
        return this._baseQuery_('put', data);
    }

    get(data) {
        return this._baseQuery_('get', data);
    }

    update(data) {
        return this._baseQuery_('update', data);
    }

    scan(data) {
        return this._baseQuery_('scan', data);
    }

    updateConfig({ region, endpoint, accessKeyId, secretAccessKey }) {
        AWS.config.update({ region, endpoint, accessKeyId, secretAccessKey });
    };

}

module.exports = BsAws;
