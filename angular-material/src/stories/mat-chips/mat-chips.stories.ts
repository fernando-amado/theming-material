import { Meta, Story            } from '@storybook/angular/types-6-0';
import { colors, descripcionComponent } from '../model/.model';

import { MatChipsModule         } from '@angular/material/chips';
import { moduleMetadata         } from '@storybook/angular';
import { MatChipsComponent      } from './mat-chips.component';

export default {
  title: 'Chips',
  component: MatChipsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
  argTypes: {
    color: {
      options: colors,
      control: { type: 'radio' },
      description:'Chips ' + descripcionComponent.descripcion,
      defaultValue: colors.primary
    },
  },
  parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }],
    },
  },
} as Meta;

const Template: Story<MatChipsComponent> = ( args: MatChipsComponent ) => ({ props: args });
export const MatChips = Template.bind({});
MatChips.args = {};
