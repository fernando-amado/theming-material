import { Story                   } from '@storybook/angular/types-6-0';
import { MatSnackbarComponent    } from './mat-snackbar.component';
import { colors, descripcionComponent } from '../model/.model';

import { moduleMetadata          } from '@storybook/angular';
import { MatSnackBarModule       } from '@angular/material/snack-bar';

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
      options: colors,
      description: 'Snackbar ' + descripcionComponent.descripcion,
      defaultValue: colors.primary,
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
