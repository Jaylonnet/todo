const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        dom: './src/dom.js',
        storageManager: './src/storage.js',
        toDo: './src/toDo.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        'filename': '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};