import { Component } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TypographyComponent } from './typography.component'


export default
    {
        title: 'Angular Material/typography',
        component: TypographyComponent,
    } as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) =>
({
    props: args,
})

export const level = Template.bind({});
level.args = {
    class: `h1`
}