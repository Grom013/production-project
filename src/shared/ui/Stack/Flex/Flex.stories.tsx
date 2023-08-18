import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </div>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </div>
    ),
};

export const Gap4 = Template.bind({});
Gap4.args = {
    gap: '4',
    children: (
        <div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </div>
    ),
};

export const Gap8 = Template.bind({});
Gap8.args = {
    gap: '8',
    children: (
        <div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </div>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </div>
    ),
};
