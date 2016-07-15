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

//for now this is just for scheduling
const options = {
    target: 'http://localhost:8090',
    changeOrigin: true,
    pathRewrite: {
        '^/schedule': '/' //remove /api from url before making request
    }
};

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/schedule', proxy(options));

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
