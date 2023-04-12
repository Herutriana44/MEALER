const merge = require("webpack-merge")
const common = require("./webpack.common");
 
module.exports = merge(common, {
   mode: "development",
   module: {
      rules: [
          {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                  {
                      loader: "file-loader"
                  }
              ]
          }
      ]
  }
})