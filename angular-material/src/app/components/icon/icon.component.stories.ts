import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './icon.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeTresTipos } from 'src/app/stories/module/module.module';
export default {
  title: 'Angular Material/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table:{
        defaultValue: { summary: 'Medium' },
      },
      description: 'Icon ' + descriptionSizeTresTipos.description + ' `SMALL` O `LARGE`'
    },
  },
} as Meta;

const Template: Story<MatIconModule> = (args: MatIconModule) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
};
