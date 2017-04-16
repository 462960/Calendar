
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const path = require('path'); 

const config = {
     entry: __dirname + '/dev/index.js',
    output: {
      path: __dirname +  '/dist',
      filename: 'bundle.js'
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                // Which way should I use?
                // This one:
                exclude: /(node_modules|bower_components)/,
                // Or this one: 
                // Works both ways
                //exclude: path => path.match(/node_modules|bower_components/),
                
          },
            {
      test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
         use: [
            'css-loader?sourceMap!',
            'sass-loader?sourceMap!'
            ],
      })
    }
         ]
    },
       plugins: [
      new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false, 
      allChunks: true}), 
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

