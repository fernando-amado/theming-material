import { Story } from '@storybook/angular/types-6-0';
import { MatSpinnerComponent } from './mat-spinner.component';

import { moduleMetadata } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export default {
  title: 'matSpiner',
  component: MatSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'accent', 'warn', 'success', 'info', 'warning'],
      description: 'matSpiner componente usa por defecto el color primary, para hacer uso de los otros colores solo debe cambiar la propiedad `color=" " ` por cualquiera de los siguientes opciones : ',
      defaultValue: 'primary',
    },
  },
  Parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }],
    },
  },
};

const Template: Story<MatSpinnerComponent> = (
  args: MatProgressSpinnerModule
) => ({
  props: args,
});

export const matSpiner = Template.bind({});
matSpiner.args = {};
