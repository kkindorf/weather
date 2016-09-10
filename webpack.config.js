var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    devServer: {
    inline: true,
    port: 3000
  },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    //run js files being used for project through
                    //babel and react
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        //run all files through the loader array that contain the following
        //extensions
        extensions: ['', '.js', '.jsx']
    },
};
    
