import { Component,} from '@angular/core';
import  { moduleMetadata  } from "@storybook/angular";
import { MatSliderComponent } from './mat-slider.component';
import {MatSliderModule} from '@angular/material/slider';
import { Meta, Story} from '@storybook/angular/types-6-0';

export default {
    title: 'MatButton',
    component: MatSliderComponent ,
    decorators:[
        moduleMetadata({
            imports:[MatSliderModule]
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

const Template :Story<MatSliderModule> = (args: MatSliderModule) =>({
    props:args
})

  
  export const Slider = Template.bind({});
  Slider.args = {};




  
