/* global process, __dirname */

const MINIFY = process.env.MINIFY || "false";
const isMinify = MINIFY === "true";

const MAPS = process.env.MAPS || "true";
const isMaps = MAPS === "true";

const STAND = process.env.STAND || "local";
const isLocal = STAND === "local";

const WATCH = process.env.WATCH || "false";
const isWatch = WATCH === "true";

const webpack = require("webpack");

const fs = require("fs");
const loadJson = require("jsonloader");
const handlebars = require("handlebars");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const autoprefixer = require("autoprefixer");

const path = require("path");

const srcPath = path.resolve(__dirname, "./src");
const nodeModulesPath = path.resolve(__dirname, "node_modules");

const appConfig = loadJson(`./configurations/appConfig.${STAND}.json`);

appConfig.app.baseUrlPath = appConfig.app.baseUrlPath ? appConfig.app.baseUrlPath : "";

const outputPath = path.resolve(__dirname, "./build");
const publicPath = appConfig.build.widgetBaseUrl
	? `${appConfig.build.widgetBaseUrl}${appConfig.app.baseUrlPath}/`
	: `${appConfig.app.baseUrlPath}/`;

let appAssets;

const config = {
	context: srcPath,

	entry: {
		app: "./client",
		vendors: [
			"react",
			"react-dom",
			"react-router",
			"redux",
			"react-redux",
			"redux-thunk",

			"es6-promise",
			"axios",
			"modernizr",

			"history",
			"moment"
		]
	},

	output: {
		path: outputPath,
		publicPath,
		filename: "js/[name]_[hash].js",
		chunkFilename: "js/[id]_[hash].chunk.js",
		devtoolModuleFilenameTemplate: "[absolute-resource-path]",
		devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					plugins: ["transform-object-assign", "array-includes"],
					presets: ["env"]
				}
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					plugins: ["transform-object-assign", "array-includes"],
					presets: isWatch
						? ["react", "env", "react-hmre"]
						: ["react", "env"]

				}
			},
			{
				test: /\.(jpeg|jpg|gif|png|svg|ttf|eot|woff|woff2)$/,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					context: srcPath
				}
			},
			{
				test: /\.css$/,
				include: [
					srcPath,
					nodeModulesPath
				],
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								modules: false,
								minimize: isMinify
							}
						},
					]
				})
			},
			{
				test: /\.scss$/,
				include: [
					srcPath,
					nodeModulesPath
				],
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								modules: false,
								importLoaders: 2,
								minimize: isMinify
							}
						},
						{
							loader: "postcss-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				})
			},
			{
				test: /\.localization\.json$/,
				exclude: /(node_modules)/,
				loader: "localization-loader"
			},
			{
				test: /modernizr.config.json$/,
				loader: "webpack-modernizr-loader",
				options: {
					minify: true,
					options: [
						"setClasses"
					],
					"feature-detects": [
						"css/appearance",
						"css/flexbox",
						"test/touchevents"
					]
				}
			}
		]
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh|de|en|ru/),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendors"
		}),
		new webpack.LoaderOptionsPlugin({
			test: /\.scss$/,
			debug: true,
			options: {
				postcss: [
					autoprefixer({
						browsers: ["last 2 version"]
					})
				],
				context: srcPath,
				output: {
					path: outputPath
				}
			}
		}),
		new ExtractTextPlugin({
			filename: "css/[name]_[hash].css",
			allChunks: true
		}),
		new AssetsPlugin({
			path: outputPath,
			filename: "assets.json",
			processOutput(assets) {
				appAssets = assets;
				return JSON.stringify(assets);
			}
		}),
		new webpack.DefinePlugin({
			WEBPACK__BUILD_CONFIG: JSON.stringify(appConfig.build)
		}),
		function createWidget() {
			this.plugin("done", () => {
				const template = fs.readFileSync("./src/views/widgetTemplate.handlebars", "utf8");
				const templateFunction = handlebars.compile(template);
				const data = {
					assets: JSON.stringify(appAssets),
					baseUrl: appConfig.build.widgetBaseUrl
				};

				const result = templateFunction(data);
				fs.writeFileSync(path.resolve(outputPath, "./widget.js"), result);
			});
		}
	],
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".jsx", ".localization.json", ".scss"],
		alias: {
			modernizr$: path.resolve(__dirname, "./configurations/modernizr.config.json")
		}
	},

	resolveLoader: {
		modules: ["node_modules"],
		extensions: [".js", ".localization.json"],
		alias: {
			"localization-loader": path.resolve(__dirname, "./src/utils/localization/localizationLoader")
		}
	}
};


if (isWatch) {
	config.devServer = {
		host: "0.0.0.0",
		port: 8080,
		contentBase: `${__dirname}/build`,
		watchOptions: {
			aggregateTimeout: 200,
			poll: 1000
		}
	};
}

if (isMinify) {
	config.plugins.push(
		new UglifyJsPlugin({
			uglifyOptions: {
				/* eslint-disable camelcase */
				compress: {
					drop_console: true,
					drop_debugger: true
				}
			},
			exclude: [/\.min\.js$/gi],
			parallel: true
		})
	);

	config.plugins.push(
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	);
}

if (isLocal) {
	config.plugins.push(
		function createWidgetTest() {
			this.plugin("done", () => {
				const template = fs.readFileSync("./src/views/widgetTestTemplate.handlebars", "utf8");
				const templateFunction = handlebars.compile(template);
				const data = {
					widgetUrl: `${appConfig.build.widgetBaseUrl || ""}${appConfig.app.baseUrlPath || ""}/widget.js`,
					ufsRailwayRatingsAppConfig: JSON.stringify(appConfig.app)
				};

				const result = templateFunction(data);
				fs.writeFileSync(path.resolve(outputPath, "./index.html"), result);
			});
		}
	);
}

if (isMaps) {
	config.devtool = "source-map";
}

module.exports = config;