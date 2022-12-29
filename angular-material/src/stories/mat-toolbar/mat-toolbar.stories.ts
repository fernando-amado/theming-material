import { Meta, Story } from '@storybook/angular/types-6-0';

import { moduleMetadata } from '@storybook/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatToolbarComponent } from './mat-toolbar.component';

export default {
  title: 'matToolbar',
  component: MatToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'accent', 'warn', 'success', 'info', 'warning'],
      description:
        'matToolbar componente usa por defecto el color primary, para hacer uso de los otros colores solo debe cambiar la propiedad `color=" " ` por cualquiera de los siguientes opciones : ',
    },
  },
  Parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }],
    },
  },
} as Meta;

const Template: Story<MatToolbarComponent> = (args: MatToolbarModule) => ({
  props: args,
});
export const matToolbar = Template.bind({});
matToolbar.args = {};
