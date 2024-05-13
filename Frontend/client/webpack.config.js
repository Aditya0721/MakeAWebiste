let mode = "development";
var path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

if(process.env.NODE_ENV === "production"){
    mode = "production"
}
module.exports = {
    mode: mode,
    output: {
        // ... other output configurations
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        publicPath: '/',
      },
    module:{
        rules:[
        {
        test:/\.js$/,
        exclude:"/node_modules/",
        use:{
            loader:"babel-loader"
        }
        },
        {
        test:/\.(css|less)$/i,
        use:[
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader'
        ]
        },
        {
            test:/\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
        }
    ]
    },
    plugins:[new MiniCssExtractPlugin()],
    devtool: "source-map",
    devServer: {
      static: "./dist",
      hot: true,
      historyApiFallback: true,
    },
  };