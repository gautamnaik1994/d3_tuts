var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./app/app.js'],
    externals: {

    },
    plugins: [
         new ExtractTextPlugin("./public/style.css")
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app'
        ],
        alias: {
            Appstyles: 'app/styles/app.scss'

        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')//('style-loader', ['css-loader','postcss-loader','sass-loader'])
        }]

    },
    postcss: [autoprefixer({
        broser: ['last 2 versions']
    })],
    sassLoader: {
        outputStyle: "expanded",
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'eval-source-map'
};
