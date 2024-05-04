let mode = "development";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

if(process.env.NODE_ENV === "production"){
    mode = "production"
}
module.exports = {
    mode: mode,
    
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
    },
  };