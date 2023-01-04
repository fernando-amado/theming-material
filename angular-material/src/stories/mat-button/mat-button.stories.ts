import { Meta, Story          } from '@storybook/angular/types-6-0';
import { MatButtonComponent   } from "./mat-button.component";
import { colors, descripcionComponent } from '../model/.model';

import { moduleMetadata       } from "@storybook/angular";
import { MatButtonModule      } from '@angular/material/button';
export default {
    title: 'Button',
    component: MatButtonComponent ,
    decorators:[
        moduleMetadata({
            imports:[MatButtonModule]
        })
    ],
    argTypes: {
        color: {
          control: { type: 'radio' }, 
          options: colors,
          description: 'Button ' + descripcionComponent.descripcion,
          defaultValue: colors.primary
        },  
      },
      parameters: {
        backgrounds: {
          values: [
            { name: 'dark', value: '#000' },
          ],
        },
      },
} as Meta
const Template :Story<MatButtonModule> = (args: MatButtonModule) =>({ props:args })
export const MatButton = Template.bind({});
  MatButton.args = {};




  
