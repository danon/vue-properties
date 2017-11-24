module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'test/**/*.js',
            './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
        ],
        preprocessors: {
            'src/**/*.js': ['webpack'],
            'test/**/*.js': ['webpack']
        },
        preprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },
        plugins: [
            'karma-commonjs',
            'karma-babel-preprocessor',
            'karma-jasmine',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'babel-preset-es2015',
            'babel-polyfill'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader?presets[]=es2015'
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    })
};
