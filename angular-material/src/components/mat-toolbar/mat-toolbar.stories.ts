import { Meta, Story                  } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { MatToolbarModule             } from '@angular/material/toolbar';
import { MatToolbarComponent          } from './mat-toolbar.component';
import { Colors, descripcionComponent } from '../../model/modelo.model';

export default {
  title: 'Toolbar',
  component: MatToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: Colors,
      description: 'Toolbar ' + descripcionComponent,
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
} as Meta;

const Template: Story<MatToolbarComponent> = (args: MatToolbarModule) => ({ props: args });

export const matToolbar = Template.bind({});
matToolbar.args = {};
