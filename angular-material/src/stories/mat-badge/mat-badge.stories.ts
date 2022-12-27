import { Component,} from '@angular/core';
import  { moduleMetadata  } from "@storybook/angular";
import { MatBadgeComponent } from './mat-badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import { Meta, Story} from '@storybook/angular/types-6-0';

export default {
    title: 'MatButton',
    component: MatBadgeComponent ,
    decorators:[
        moduleMetadata({
            imports:[MatBadgeModule]
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

const Template :Story<MatBadgeModule> = (args: MatBadgeModule) =>({
    props:args
})

  
  export const Button = Template.bind({});
  Button.args = {
  };




  
