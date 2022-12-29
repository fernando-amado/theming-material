import { Meta, Story} from '@storybook/angular/types-6-0';
import { MatButtonComponent } from "./mat-button.component";

import  { moduleMetadata  } from "@storybook/angular";
import {MatButtonModule} from '@angular/material/button';

export default {
    title: 'MatButton',
    component: MatButtonComponent ,
    decorators:[
        moduleMetadata({
            imports:[MatButtonModule]
        })
    ],
    argTypes: {
        color: {
          control: { type: 'radio' }, 
          options: ['primary', 'accent', 'warn','success', 'info', 'warning'],
          description: 'MatButton componente usa por defecto el color primary, para hacer uso de los otros colores solo debe cambiar la propiedad `color=" " ` por cualquiera de los siguientes opciones : ',
          defaultValue: 'primary',

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

const Template :Story<MatButtonModule> = (args: MatButtonModule) =>({
    props:args
})

  export const Button = Template.bind({});
  Button.args = {
  };




  
