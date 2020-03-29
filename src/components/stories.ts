// Created by Beyza Kilickol on 2020-03-25

//import { action } from '@storybook/addon-actions';
import { withKnobs, text} from '@storybook/addon-knobs';

import HelloWorld from './HelloWorld.vue';

export default {
    title: 'HelloWorld',
    component: HelloWorld,
    decorators: [withKnobs],
};

export const Hello_World = () => ({
    components: { HelloWorld },
    props: {
        msg: { default: text('Text', 'Hello World!')},
    },
    template: '<HelloWorld :msg="msg"></HelloWorld>',
    methods: {},
});

Hello_World.story = {
    name: 'Default',
    parameters: {notes: 'This component is very important'},
};
