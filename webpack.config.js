const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        notificationCenterModule: './src/notification-center/notification-center-module.js',
        notificationCenterController: './src/notification-center/notification-center-controller.js',
        site: './javascript/site.js',
        utility: './javascript/utility.js',
        myElement: './src/lit/my-element.ts',
        notifList: './src/lit/notif-list.ts',
        notifListItem: './src/lit/notif-list-item.ts',
        notifListItemMsg: './src/lit/notif-list-item-msg.ts',
        notifListItemIcon: './src/lit/notif-list-item-icon.ts',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: '100000'
                    }
                }
            }
        ]
    },
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"],
    },
};
