import { Story                        } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { MatProgressSpinnerModule     } from '@angular/material/progress-spinner';
import { MatSpinnerComponent          } from './mat-spinner.component';
import { Colors, descripcionComponent } from '../../model/modelo.model';

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
      options: Colors,
      description: 'Spinner ' + descripcionComponent,
      table: {
        defaultValue: { summary: 'Primary' }
      }, 
    },
  },
  Parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }],
    },
  },
};

const Template: Story<MatSpinnerComponent> = ( args: MatSpinnerComponent ) => ({ props: args });

export const matSpiner = Template.bind({});
matSpiner.args = {};