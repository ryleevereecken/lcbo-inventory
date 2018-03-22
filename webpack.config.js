const CleanWebpackPlugin = require('clean-webpack-plugin') //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// the path(s) that should be cleaned
let pathsToClean = [
  'build'
]

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: 'bundle.js'
  },
  resolve: { 
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [ path.resolve( __dirname, 'src/js' ) ],
      loader: 'babel-loader',
      options: {
        plugins: [ 'babel-plugin-transform-class-properties' ],
        presets: [ 
          'react', 
          'env',
          'stage-2'
        ]
      }
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
    new HtmlWebpackPlugin({
      title: 'LCBO Inventory',
      template: './src/html/templates/index.html'
    })
  ]
}