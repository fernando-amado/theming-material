import { Story, Meta } from '@storybook/angular/types-6-0';
import { TypographyComponent } from './typography.component';
import { TypographyLevels, Colors } from '../../model/modulo.model';

export default {
  title: 'Typography',
  component: TypographyComponent,
  argTypes: {
    level: {
      options: TypographyLevels,
      control: { type: 'radio' },
      description:
        'En esta configuracion para la tipografia se editaron `12 niveles` en total de los cuales 5 son personalizados.<br><br> <h2>lista de niveles</h2><br>',
      defaultValue: TypographyLevels.body2,
    },
  },
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  props: args,
});
export const level = Template.bind({});
level.args = {};
