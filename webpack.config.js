'use strict';
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                    // options: {
                    //     presets: ['es2015', 'react']
                    // }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            { filename: 'index.html',
            template: './src/app/index.html',
            inject: 'body' }
        ),
        new CleanWebpackPlugin(['build']),
        new webpack.HotModuleReplacementPlugin()
    ]
};