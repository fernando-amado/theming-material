import { Story                        } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { MatSlideToggleModule         } from '@angular/material/slide-toggle';
import { MatSlidetoggleComponent      } from 'src/stories/mat-slidetoggle/mat-slidetoggle.component';
import { Colors, descripcionComponent } from '../../model/modelo.model';

export default {
  title: 'Slide toggle',
  component: MatSlidetoggleComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: Colors,
      description: 'Slide' + descripcionComponent,
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

const Template: Story<MatSlidetoggleComponent> = (args: MatSlideToggleModule ) => ({ props: args });

export const MatSlideToggle = Template.bind({});
MatSlideToggle.args = {};
