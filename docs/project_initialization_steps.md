#### Vue Project Settings
To create a vue project, run the command below:

<br> 

```
$ vue create <project_name>
``` 
<br>

Selected settings:
1. Babel
2. TypeScript
3. Router
4. Vuex
5. Css Pre-Processors --> Less
6. Linter/Formatter --> TSLint
7. Class-style Component Syntax
8. History Mode for Router

<br>

To include vuetify, run the command below (vue version >= 3):

<br>

```
$ vue add vuetify
```
<br> 

This command will automatically add and register vuetify to the project. When installing process invokes vuetify, 
selecting 'Default' setting will automatically insert some example components using vuetify components.

<br>

To include vue apollo, run the following command:

<br>

```
$ vue add apollo
```
<br>

This command will prompt following: 
* Add Graphql code example: Yes
* Use Graphql server: Yes

This will create apollo config files, server files, graphgl samples and sample vue components
which use queries, mutations and much more of graphql.

<br>

Since we are using typescript on the project, add following on the vue:
```
pluginOptions: {
    apollo: {
      typescript:true,
      enableMocks: false,
      enableEngine: false
    }
  }
  ```
  <br>

Using typescript files is preferred over graphql files for more readability, so all 
files with .grapgql extensions will be turned into .ts files.

<br>

To generate types of qraphql operations, add those scripts on package.json file:
```
"codegen": "apollo codegen:generate --target=typescript types",
"codegen-watch": "npm run codegen -- --watch"
```

<br>
To be able to make apollo codegen to find graphql files, update apollo config file and update the path.

<br>

Here is the sample apollo.config.js file:

<br>

```
module.exports = {
  client: {
    service: {
      name: "new_pz_storefront",
      url: "http://localhost:4000/graphql/",
    },
    includes: ['src/graphql/**/*.{js,jsx,ts,tsx,vue,gql}'], // this path depends on where you want to place your grapql files.
    
  },
};
```

<br>

To add storybook for vue project, run the following command:

<br>

```
$ npx -p @storybook/cli sb init --type vue
```

<br>

This command will add .storybook folder and sample stories. If you want to move stories into 
src folder, support .ts syntax, vue, and vuetify, create config.js and webpack.config.js
files under .storybook folder.

<br>

webpack.config.js:

<br>

```
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
```

<br>

config.js:

<br>

```
import Vue from 'vue'
import * as _Vuetify from 'vuetify/lib'
import { configure, addDecorator } from '@storybook/vue'

const Vuetify = _Vuetify.default

const isVueComponent = obj => obj.name === 'VueComponent'

const VComponents = Object.keys(_Vuetify).reduce((acc, key) => {
    if (isVueComponent(_Vuetify[key])) {
        acc[key] = _Vuetify[key]
    }
    return acc
}, {})

Vue.use(Vuetify, {
    components: {
        ...VComponents
    }
})

addDecorator(() => ({
    vuetify: new Vuetify(),
    template: '<v-app><story/></v-app>'
}))

configure(require.context('../src/', true, /\.stories\.ts$/), module);
```

<br>

To add any add-ons of storybook, you can run the following command:

<br>

```
npm add -D @storybook/addon-knobs
```

<br>

This add-on will allow passing props to each registered story. To make it run properly, update
storybook main.js file by adding this add-on;

<br>

```
module.exports = {
    stories: ['../src/**/*stories.ts'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
```












