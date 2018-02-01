
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const UglyJS = require('uglify-js-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
                exclude: /(node_modules|bower_components)/, // Works both ways
                //exclude: path => path.match(/node_modules|bower_components/),
                use: 'babel-loader'
          },
          {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ]
           },
         ]
    },
       plugins: [
     // new ExtractTextPlugin({filename: 'dist/styles/styles.css', allChunks: true}), 
      new HTMLwebpackPlugin({
        template: './dev/index.template.html',
        inject: true
      }),
       new UglyJS({
      compress: {warnings: true},
      debug: true,
      sourceMap: true // or false. True is not default for WP2
     }),
        new BundleAnalyzerPlugin({
       analyzerMode: 'static'
     })
    ],
    resolve: {
      extensions: ['.js','.jsx','.css', '.scss']
    }
};

module.exports = config;


// Old Webpack version 

//       filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: 'babel',
//                 query: {
//                     presets: ['react', 'es2015']
//             }
//           },
//           {
//             test: /\.scss$/,
//             loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
//           }
//          ]
//     },
//         plugins: [
    // The same path automatically to be linked in <head> 
//      new ExtractTextPlugin('dist/styles/styles.css', {allChunks: true}),
//      new HTMLwebpackPlugin({
//       template: './dev/index.template.html',
//       inject: true
//     }),
//       new UglyJS({
//       compress: true,
//       debug: true
//      }),
//        new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }),
//         new BundleAnalyzerPlugin({
//        analyzerMode: 'static'
//      })
//     ],

//     resolve: {
//       extensions: ['','.js','.jsx','.css', '.scss']
//     }
// };

// module.exports = validate(config);



