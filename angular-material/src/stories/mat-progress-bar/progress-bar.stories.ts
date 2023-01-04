import { Meta, Story }  from '@storybook/angular/types-6-0';
import { MatProgressBarComponent } from "./mat-progress-bar.component";
import { colors, descripcionComponent } from '../model/.model';

import  {moduleMetadata  } from "@storybook/angular";
import { MatProgressBarModule } from "@angular/material/progress-bar";

export default{
    title: 'Progress bar',
    component: MatProgressBarComponent ,
    decorators:[
        moduleMetadata({
            imports:[MatProgressBarModule]
        })
    ],
    argTypes: {
         color: {
          options: colors,
          control: { type: 'radio' },
          description: 'Progress bar ' + descripcionComponent.descripcion,
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

const Template :Story<MatProgressBarComponent> = (args: MatProgressBarComponent) =>({ props:args })
export const progressBar = Template.bind({});
progressBar.args = {};
