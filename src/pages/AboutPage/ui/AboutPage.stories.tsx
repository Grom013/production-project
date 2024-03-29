import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: true },
    },
}as ComponentMeta<typeof AboutPage>;

// @ts-ignore
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
