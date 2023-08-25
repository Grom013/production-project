import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Select } from '@/shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: true },
    },
}as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '123', content: 'First point' },
        { value: '123', content: 'Second point' },
    ],
};
