import request from 'superagent';
import noCache from 'superagent-no-cache';
const HttpClient = {

    get: (path, requestConfig) => new Promise((resolve, reject) => {
        request
            .get(path)
            .use(noCache)
            .query(requestConfig)
            .set('Authorization', 'MTA2NDc1NDE2OSBlMjdjZTI4YWU3NmQ0ZjY2YTYyMjdkNjk0MWY4OWEwMjJhODAyZTEyM2QxODRjNTFhYWQ4MDc4ODYyYTA4ZWU5')
            .set('CZD-Client', 'Android_10647541611610')
            .accept('application/json')
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve(null);
                    } else {
                        reject(err);
                    }
                } else {
                    res.body ? resolve(res.body) : resolve(JSON.parse(res.text));
                }
            });
    }),

    post: (path, requestConfig) => new Promise((resolve, reject) => {
        request
            .post(path)
            .use(noCache)
            .send(requestConfig)
            .set('Authorization', 'MTA2NDc1NDE2OSBlMjdjZTI4YWU3NmQ0ZjY2YTYyMjdkNjk0MWY4OWEwMjJhODAyZTEyM2QxODRjNTFhYWQ4MDc4ODYyYTA4ZWU5')
            .set('CZD-Client', 'Android_10647541611610')
            .accept('application/json')
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve(null);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(res.body);
                }
            });
    }),

};

export default HttpClient;
