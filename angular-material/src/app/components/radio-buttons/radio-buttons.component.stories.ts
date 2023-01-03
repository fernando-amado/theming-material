import { MatRadioModule } from '@angular/material/radio';
import { RadioButtonsComponent } from './radio-buttons.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/Radio',
  component: RadioButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<RadioButtonsComponent> = (args: RadioButtonsComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Radio-button',
};
