import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import proxy from 'http-proxy-middleware';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

/*
    Make sure to change ports for the proxies if running multiple on localhost,
    if you're hitting an endpoint on someone elses computer just user their
    IP address instead of localhost
*/

const scheduleProxyOptions = {
    target: 'http://localhost:8090',
    changeOrigin: true,
    pathRewrite: {
        '^/api/schedule': '/' //remove /schedule from url before making request
    }

};

const responseProxyOptions = {
    target: 'http://localhost:8050',
    changeOrigin: true,
    pathRewrite: {
        '^/api/response': '/' //remove /schedule from url before making request
    }
};


const surveyProxyOptions = {
    target: 'http://localhost:8070',
    changeOrigin: true,
    pathRewrite: {
        '^/api/survey': '/' //remove /survey from url before making request
    }
};

const reportProxyOptions = {
    target: 'http://localhost:8040',
    changeOrigin: true,
    pathRewrite: {
        '^/api/report': '/' //remove /report from url before making request
    }
};


//uncomment others as needed, don't forget to uncomment the options for them too
app.use('/api/schedule', proxy(scheduleProxyOptions));
app.use('/api/survey', proxy(surveyProxyOptions));
app.use('/api/report', proxy(reportProxyOptions));
app.use('/api/response', proxy(responseProxyOptions));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
