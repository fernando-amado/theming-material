import { Meta, Story            } from '@storybook/angular/types-6-0';
import { colors, descripcionComponent } from '../model/.model';

import { moduleMetadata         } from "@storybook/angular";
import { MatBagdeComponent      } from './mat-bagde.component';
import { MatBadgeModule         } from '@angular/material/badge';
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
          options: colors,
          description: 'Badge ' + descripcionComponent.descripcion,
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

const Template :Story<MatBagdeComponent> = (args: MatBagdeComponent) =>({
    props:args
})

export const MatBadge = Template.bind({});
  MatBadge.args = {};