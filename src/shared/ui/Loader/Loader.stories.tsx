import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: true },
    },
    args: {
        to: 'to',
    },
}as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
