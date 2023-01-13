import { Meta, Story                  } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { MatChipsModule               } from '@angular/material/chips';
import { MatChipsComponent            } from './mat-chips.component';
import { Colors, descripcionComponent } from '../../model/modelo.model';

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
      options: Colors,
      control: { type: 'radio' },
      description:'Chips ' + descripcionComponent,
      table: {
        defaultValue: { summary: 'Primary' }
      }, 
    },
  },
  parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }
      ],
    },
  },
} as Meta;

const Template: Story<MatChipsComponent> = ( args: MatChipsComponent ) => ({ props: args });

export const MatChips = Template.bind({});
MatChips.args = {};
