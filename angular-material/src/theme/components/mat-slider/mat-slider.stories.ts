import { Story                        } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { MatSliderModule              } from '@angular/material/slider';
import { MatSliderComponent           } from './mat-slider.component';
import { Colors, descripcionComponent } from '../../model/modelo.model';

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
      options: Colors,
      description: 'Slider ' + descripcionComponent,
      table: {
        defaultValue: { summary: 'Primary' }
      }, 
    },
  },
  Parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#000' }],
    },
  },
};

const Template: Story<MatSliderComponent> = ( args: MatSliderModule ) => ({ props: args });
export const MatSlider = Template.bind({});
MatSlider.args = {};