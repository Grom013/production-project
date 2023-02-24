import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'asdpojg[oiahvb poaisdfj asdf a[doif ',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'asdpojg[oiahvb poaisdfj asdf a[doif ',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text lorem ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'asdpojg[oiahvb poaisdfj asdf a[doif ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
