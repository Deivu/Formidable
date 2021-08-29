const Endpoint = require('../../struct/Endpoint.js');

class Search extends Endpoint {
    constructor(...args) {
        super(...args);
        this.ratelimit = { 
            points: 75, 
            duration: 5
        };
        this.query = ['code'];
    }

    run(query) {
        const results = this.cache.fuse.chapters.search(query[this.query[0]]);
        if (results.length > this.maxResults) results.length = this.maxResults;
        return results.map(res => res.item);
    }
}

module.exports = Search;