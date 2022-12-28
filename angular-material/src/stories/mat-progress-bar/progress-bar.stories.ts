import { Meta, Story }  from '@storybook/angular/types-6-0';
import { MatProgressBar } from "./mat-progress-bar.component";

import  {moduleMetadata  } from "@storybook/angular";
import { MatProgressBarModule } from "@angular/material/progress-bar";

export default{
    title: 'MatProgressBar',
    component: MatProgressBar ,
    decorators:[
        moduleMetadata({
            imports:[MatProgressBarModule]
        })
    ],
    argTypes: {
         color: {
          options: ['primary', 'accent', 'warn','success', 'info', 'warning'],
          control: { type: 'radio' },
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

const Template :Story<MatProgressBar> = (args: MatProgressBar) =>({
    props:args
})

export const progressBar = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
progressBar.args = {};
