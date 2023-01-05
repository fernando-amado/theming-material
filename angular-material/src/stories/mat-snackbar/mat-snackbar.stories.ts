import { Story                        } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { MatSnackBarModule            } from '@angular/material/snack-bar';
import { MatSnackbarComponent         } from './mat-snackbar.component';
import { Colors, descripcionComponent } from '../../model/modelo.model';

export default {
  title: 'Snackbar',
  component: MatSnackbarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSnackBarModule],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: Colors,
      description: 'Snackbar ' + descripcionComponent,
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

const Template: Story<MatSnackbarComponent> = (args: MatSnackBarModule ) => ({ props: args });

export const MatSnackbar = Template.bind({});
MatSnackbar.args = {};
