const path = require('path');
const webpack = require('webpack');
const PORT = 4040;

module.exports = {
    devServer: {
        noInfo: true,
        inline: true,
        colors: true,
        compress: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: PORT,
        contentBase: 'dist/',
        open: 'http://0.0.0.0:' + PORT
    },
    entry: [
        './src/main'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash:5].chunk.js",
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.sass', '.scss', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel', 'eslint']
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/,
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'vendor.bundle.js'
        }),
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}
