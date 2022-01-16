const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}
const ruleForJavaScript = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic' // 'classic'
        }
      ]
    ]
  }
}

const rulesForPng = {
  test: /\.png$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'images'
  }
}

const rulesForSvg = {
  test: /\.svg$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'images'
  }
}

const rulesForJpeg = {
  test: /\.jpeg$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'images'
  }
}
const rulesForFonts = {
  test: /\.(woff|woff2|ttf|eot)$/,
  type: 'asset/resource'
}

const rules = [ruleForJavaScript, ruleForStyles, rulesForPng, rulesForSvg, rulesForFonts, rulesForJpeg]

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.js',
    output: {
      filename: isProduction
        ? '[name].[contenthash]'
        : 'main.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    module: {
      rules
    },
    devServer: {
      open: true, // abrirnos el navegador
      port: 3000,
      compress: true,
      historyApiFallback: true
    },
    devtool: 'source-map'
  }
}
