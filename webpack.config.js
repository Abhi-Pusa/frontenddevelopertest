const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:'./main.js',
    output: {
        path: path.join(__dirname,'/public'),
        filename:'index.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use : {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use:  [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            template: '[name].css',
            chunkFilename:"[id].css"
        })
    ]
}
