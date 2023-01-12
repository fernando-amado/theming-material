import { Meta, Story                   } from '@storybook/angular/types-6-0';
import { moduleMetadata                } from "@storybook/angular";
import { MatButtonModule               } from '@angular/material/button';
import { MatButtonComponent            } from "./mat-button.component";
import { Colors, descripcionComponent  } from '../../model/modelo.model';

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
          options: Colors,
          description: 'Button ' + descripcionComponent,
          table: {
            defaultValue: { summary: 'Primary' }
          }, 
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




  
