module.exports = {
    stories: ['../src/**/*stories.ts'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
    webpackFinal: async config => {
        config.module.rules.push({
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
            });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
},
};
