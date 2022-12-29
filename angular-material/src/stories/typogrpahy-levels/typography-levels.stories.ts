import { Component } from '@angular/core';
import { ArgsTable } from '@storybook/addon-docs';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TypogrpahyLevelsComponent } from './typogrpahy-levels.component';


export default {
  title: 'Angular Material/typography',
  component: TypogrpahyLevelsComponent,
  argTypes: {
    level: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle-1',
        'subtitle-2',
        'body-1',
        'body-2',
        'caption',
        'overline',
      ],
      control: { type: 'radio' },
      description:'En esta configuracion para la tipografia se editaron `12 niveles` en total de los cuales 5 son personalizados.<br><br> <h2>lista de niveles</h2><br>',

    },
  },
} as Meta;

const Template: Story<TypogrpahyLevelsComponent> = (
  args: TypogrpahyLevelsComponent
) => ({
  props: args,
});

export const level = Template.bind({});
level.args = {
  level:'body-2'
  
};

