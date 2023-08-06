import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: true },
    },
}as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem upsum',
    text: 'description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem upsum',
    text: 'description',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem upsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'description',
};
