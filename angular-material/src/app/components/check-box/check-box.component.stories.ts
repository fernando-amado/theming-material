import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckBoxComponent } from './check-box.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/CheckBox',
  component: CheckBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<CheckBoxComponent> = (args: CheckBoxComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Check-box',
};
