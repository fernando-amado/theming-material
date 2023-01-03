import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from './slider.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/Slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', ],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
};
