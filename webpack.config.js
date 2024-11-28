const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => ({
	mode,
	entry: "./src/index.js",
	output: {
		publicPath: "/",
		path: path.resolve(__dirname, "build"),
		filename: "bundled.js"
	},
	module: {
		rules: [
			{
				test: /\.jpe?g|png$/,
				exclude: /node_modules/,
				use: ["url-loader"]
			},
			{
			  test: /\.css$/i,
			  use: ["style-loader", "css-loader"],
			},
			{
				test: /\.js|jsx/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env",
       					"@babel/preset-react"
					]
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		}),
	],
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devServer: {
		open: true
	}
});
