/* global process */

const gulp = require("gulp");

const del = require("del");
const webpack = require("webpack");
const args = require("yargs").argv;
const fs = require("fs");

function onBuild(done) {
	return (err, stats) => {
		if (err) {
			console.log("Error", err);
		} else {
			console.log(stats.toString({
				colors: true
			}));
		}
		done();
	};
}

gulp.task("clean:build", (done) => {
	const buildFolder = "./build";
	const buildPath = `${buildFolder}/**/*`;

	if (fs.existsSync(buildFolder)) {
		del.sync(buildPath);
	} else {
		fs.mkdirSync(buildFolder);
	}

	done();
});

gulp.task("set:minify", (done) => {
	process.env.MINIFY = args.minify
		? args.minify
		: "false";
	done();
});

gulp.task("set:stand", (done) => {
	process.env.STAND = args.stand
		? args.stand
		: "local";

	done();
});

gulp.task("set:maps", (done) => {
	process.env.MAPS = args.maps
		? args.maps
		: "true";

	done();
});

gulp.task("set:publish", (done) => {
	process.env.PUBLISH = args.publish
		? args.publish
		: "false";

	done();
});

gulp.task("build:client", (done) => {
	const webpackClientConfig = require("./webpack.client.config");
	webpack(webpackClientConfig).run(onBuild(done));
});

gulp.task("default", [
	"clean:build",
	"set:minify",
	"set:stand",
	"set:maps",
	"set:publish",
	"build:client"
]);