import { Story, Meta                             } from '@storybook/angular/types-6-0';
import { TypographyComponent                     } from './typography.component';
import { TypographyLevels, descripcionComponent  } from '../../model/modelo.model';
import {  } from 'src/model/modelo.model';

export default {
  title: 'Typography',
  component: TypographyComponent,
  argTypes: {
    level: {
      options: TypographyLevels,
      control: { type: 'radio' },
      description: 'Toolbar ' + descripcionComponent,

      defaultValue: TypographyLevels.body2,
    },
  },
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  props: args,
});
export const level = Template.bind({});
level.args = {};