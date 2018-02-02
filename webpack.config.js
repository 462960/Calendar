
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const path = require('path'); 

const config = {
     entry: __dirname + '/dev/index.js',
    output: {
      path: __dirname +  '/dist',
      filename: 'bundle.js'
    },
    //devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
          },
            {
      test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      // use: ExtractTextPlugin.extract({
      //   fallback: "style-loader",
         use: [
            'css-loader',
            'sass-loader'
            ]
          
    }
         ]
    },
       plugins: [
      // new ExtractTextPlugin({
      // filename: 'styles.css',
      // disable: false, 
      // allChunks: true}), 
      new HTMLwebpackPlugin({
        template: './dev/index.template.html',
        inject: true
      }),
    ],
    resolve: {
      extensions: ['.js','.jsx','.css', '.scss']
    },
     devServer: {
        compress: false,
        port: 9009
    }
};

module.exports = config;

