import { Story              } from '@storybook/angular/types-6-0';
import { colors, descripcionComponent } from '../model/.model';

import { moduleMetadata     } from '@storybook/angular';
import { MatSliderModule    } from '@angular/material/slider';
import { MatSliderComponent } from './mat-slider.component';

export default {
  title: 'Slider',
  component: MatSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: colors,
      description: 'Slider ' + descripcionComponent.descripcion,
      defaultValue: colors.primary,
    },
  },
  Parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }],
    },
  },
};

const Template: Story<MatSliderComponent> = (
  args: MatSliderModule
) => ({
  props: args,
});
export const MatSlider = Template.bind({});
MatSlider.args = {};
