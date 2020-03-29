const path = require('path');

module.exports = async ({config, mode}) => {

    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.s(c|a)ss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'),
                        sassOptions: {
                            //fiber: require('fibers'),
                            indentedSyntax: true,
                        },
                    },
                },
            ],
        },
        {
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true,
                    },
                },
            ],
        },
        {test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
        {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},

    ];
    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, "../src"),
    };

    return config;
};
