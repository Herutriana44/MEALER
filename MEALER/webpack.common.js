const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/i,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader",
                       options: {
                        modules: true
                      }
                   },
                    
               ]
           }
       ]
   },
   plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        favicon: "./src/asset/pict/Lime-Small.png"
    })
],
}