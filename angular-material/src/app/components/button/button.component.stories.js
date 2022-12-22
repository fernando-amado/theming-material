import { MatButtonModule } from '@angular/material/button';
import {ButtonComponent} from './button.component.ts'
import { Meta } from '@storybook/angular/type-6-0';
import {Meta, moduleMetadata } from '@storybook/angular';
export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule]
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio'},
    }
  },
} 

