const path = require('path');
const webpack = require('webpack');
const PORT = 4040;

module.exports = {
    devServer: {
        noInfo: false,
        inline: true,
        colors: true,
        compress: true,
        historyApiFallback: true,
        port: PORT,
        contentBase: 'dist/',
        open: 'http://127.0.0.1:' + PORT
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
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
}

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
