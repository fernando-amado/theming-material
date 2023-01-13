import { Meta, Story                  } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from "@storybook/angular";
import { MatProgressBarModule         } from "@angular/material/progress-bar";
import { MatProgressBarComponent      } from "./mat-progress-bar.component";
import { Colors, descripcionComponent } from '../../model/modelo.model';

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
          options: Colors,
          control: { type: 'radio' },
          description: 'Progress bar ' + descripcionComponent,
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

const Template : Story<MatProgressBarComponent> = (args: MatProgressBarComponent) =>({ props:args })

export const progressBar = Template.bind({});
progressBar.args = {};