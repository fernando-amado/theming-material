import { Meta, Story }  from '@storybook/angular/types-6-0';
import { MatProgressBarComponent } from "./mat-progress-bar.component";

import  {moduleMetadata  } from "@storybook/angular";
import { MatProgressBarModule } from "@angular/material/progress-bar";

export default{
    title: 'MatProgressBar',
    component: MatProgressBarComponent ,
    decorators:[
        moduleMetadata({
            imports:[MatProgressBarModule]
        })
    ],
    argTypes: {
         color: {
          options: ['primary', 'accent', 'warn','success', 'info', 'warning'],
          control: { type: 'radio' },
          description: 'MatProgressBar componente usa por defecto el color primary, para hacer uso de los otros colores solo debe cambiar la propiedad `color=" " ` por cualquiera de los siguientes opciones : ',
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

const Template :Story<MatProgressBarComponent> = (args: MatProgressBarComponent) =>({
    props:args
})

export const progressBar = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
progressBar.args = {};
