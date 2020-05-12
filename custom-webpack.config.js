require('dotenv').config();
console.log(process.env.PROJECT_NAME == 'HugeOffers' ? 'th' : 'ho');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "webpack-remove-block-loader",
            options: {
              active: true,
              blocks: process.env.PROJECT_NAME == 'HugeOffers' ? ['th'] : ['ho']
            }
          }
        ]
      }
    ]
  }
};
