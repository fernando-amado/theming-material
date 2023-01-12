import { Meta, Story                  } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from "@storybook/angular";
import { MatBadgeModule               } from '@angular/material/badge';
import { MatBagdeComponent            } from './mat-bagde.component';
import { Colors, descripcionComponent } from '../../model/modelo.model';

export default {
    title: 'Badge',
    component: MatBagdeComponent ,
    decorators:[
        moduleMetadata({
            imports:[MatBadgeModule]
        })
    ],
    argTypes: {
        color: {
          control: { type: 'radio' }, 
          options: Colors,
          description: 'Badge ' + descripcionComponent,
          table: {
            defaultValue: { summary: 'primary' }
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

const Template :Story<MatBagdeComponent> = (args: MatBagdeComponent) =>({ props:args })

export const MatBadge = Template.bind({});
  MatBadge.args = {};