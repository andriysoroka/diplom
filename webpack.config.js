const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: 'main2.css',
    disable: process.env.NODE_ENV === 'development'
});

  module.exports = {
    entry: './scripts/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
   module: {
     rules: [
       {
         test: /\.(css|scss)$/,
         use: extractSass.extract({ 
             use: [{
               loader:  'css-loader'
             }, {
                 loader: 'sass-loader'
             }],
             fallback: 'style-loader'
         })
         
       },
       { 
           test: /\.js$/, 
           exclude: /(node_modules|bower_components)/, 
           loader: "babel-loader",
           options: {
               presets: ['env']
           }
       },
       {
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',    // where the fonts will go
             publicPath: '../'       // override the default path
           }
         }]
       }
     ]
   },
  plugins: [
       extractSass
  ]
  };