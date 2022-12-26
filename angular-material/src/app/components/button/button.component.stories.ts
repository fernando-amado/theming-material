import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  argTypes:{
    tipo:{
      options:[ 'raised' ],
      control:{type:'radio'}
    }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Button',
  tipo:'raised'
};



