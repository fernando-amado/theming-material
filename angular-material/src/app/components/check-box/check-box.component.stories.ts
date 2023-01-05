import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckBoxComponent } from './check-box.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeTresTipos } from '../../stories/module/module.module';

export default {
  title: 'Angular Material/CheckBox',
  component: CheckBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule],
    }),
  ],
  argTypes: {
    label: {
      description: 'Checkbox',
      defaultValue: 'CHECKBOX',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'Medium' },
      },
      description:
        'Checkbox ' +
        descriptionSizeTresTipos.description +
        ' `SMALL` O `LARGE`',
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
