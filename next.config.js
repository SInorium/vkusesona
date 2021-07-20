const path = require("path");
const withReactSvg = require("next-react-svg");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    PUBLIC_URL: ".",
  },
  images: {
    loader: "imgix",
    path: "/",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "/public/styles")],
  },
  // Use the CDN in production and localhost for development.
  // assetPrefix: ".",
  // trailingSlash: true,
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
