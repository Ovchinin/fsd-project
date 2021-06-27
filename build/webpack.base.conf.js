const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'), // Без него не работал jQuery
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                query: { pretty: true }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: `./postcss.config.js` }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: `./postcss.config.js` }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './images/'
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './fonts/'
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/index.pug',
            filename: 'index.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/cards.pug',
            filename: 'cards.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/headersAndFooters.pug',
            filename: 'headersAndFooters.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/landing-page.pug',
            filename: 'landing-page.html',
            inject: true,
            minify: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/blocks/_common/fonts/', to: './fonts' },
                { from: './src/blocks/cards/room-preview/image/', to: './images/slider/' },
                { from: './src/blocks/reviews/img/', to: './images/review/' },
                { from: './src/blocks/logo/logo-img/', to: './images/logo/' },
                { from: './src/pages/img/', to: './images/' },
                { from: './src/blocks/social-links/img/', to: './images/' },
            ]
        }),
    ]
}