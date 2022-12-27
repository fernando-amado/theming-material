import { Component,} from '@angular/core';
import  { moduleMetadata  } from "@storybook/angular";
import { MatButtonComponent } from "./mat-button.component";
import {MatButtonModule} from '@angular/material/button';
import { Meta, Story} from '@storybook/angular/types-6-0';

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

const Template :Story<MatButtonModule> = (args: MatButtonModule) =>({
    props:args
})

  
  export const Button = Template.bind({});
  Button.args = {
  };




  
