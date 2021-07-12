const path = require("path");
const withReactSvg = require("next-react-svg");

module.exports = {
  images: {
    loader: "imgix",
    path: "/",
  },
};
// module.exports = [
//   {
//     images: {
//       loader: "imgix",
//       path: "/",
//     },
//     reactStrictMode: true,
//     sassOptions: {
//       includePaths: [path.join(__dirname, "styles")],
//     },
//     // webpack(config, options) {
//     //   config,
//     //     module.rules.push({
//     //       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//     //       use: {
//     //         loader: "url-loader",
//     //         options: {
//     //           limit: 100000,
//     //         },
//     //       },
//     //     });
//     // },
//   },
//   withReactSvg({
//     include: path.resolve(__dirname, "public/images/icons/"),
//     webpack(config, options) {
//       return config;
//     },
//   }),
// ];
