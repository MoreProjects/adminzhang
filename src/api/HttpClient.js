import request from 'superagent';
import noCache from 'superagent-no-cache';
//import cookie from 'react-cookie';
//cookie.save('Authorization', 'MTA2NDc1NDE2OSBlMjdjZTI4YWU3NmQ0ZjY2YTYyMjdkNjk0MWY4OWEwMjJhODAyZTEyM2QxODRjNTFhYWQ4MDc4ODYyYTA4ZWU5');
//cookie.save('CZD-Client', 'Android_10647541611610');
//cookie.save('cid', 'VW5rbm93bl8w');
//cookie.save('sid', 'MTA2NDc1NDA5OCBmZTc1ZDRiN2E1NjQ0MTM2OGIyOWY4YmU3MzVkZWI2NTRmNmM3OGViMTdjNDQ4NGI4OWI4MGMyZDZkNzQ0Njgy');

const HttpClient = {

    get: (path, requestConfig) => new Promise((resolve, reject) => {
        request
            .get(path)
            .use(noCache)
            .withCredentials()
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
            .withCredentials()
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

    postWithFile: (file, desc, path, requestConfig) => new Promise((resolve, reject) => {
        request
            .post(path)
            .use(noCache)
            .withCredentials()
            .field(desc.name, desc.value)
            .attach(file.name, file.value, file.filename)
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

    delete: (path, requestConfig) => new Promise((resolve, reject) => {
        request
            .del(path)
            .use(noCache)
            .withCredentials()
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

    put: (path, requestConfig) => new Promise((resolve, reject) => {
        request
            .put(path)
            .use(noCache)
            .withCredentials()
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
    })

};

export default HttpClient;
