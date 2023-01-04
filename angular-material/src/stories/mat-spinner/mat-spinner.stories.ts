import { Story } from '@storybook/angular/types-6-0';
import { MatSpinnerComponent } from './mat-spinner.component';
import { colors, descripcionComponent } from '../model/.model';

import { moduleMetadata } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export default {
  title: 'Spinner',
  component: MatSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],

  argTypes: {
    color: {
      control: { type: 'radio' },
      options: colors,
      description: 'Spinner ' + descripcionComponent.descripcion,
      defaultValue: colors.primary,
    },
  },
  Parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }],
    },
  },
};

const Template: Story<MatSpinnerComponent> = (
  args: MatSpinnerComponent
) => ({
  props: args,
});

export const matSpiner = Template.bind({});
matSpiner.args = {};
