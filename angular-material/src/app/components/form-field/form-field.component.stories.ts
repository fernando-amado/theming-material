import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormFieldComponent } from './form-field.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/Form-field',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [MatFormFieldModule, MatInputModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<FormFieldComponent> = (args: MatFormFieldModule) => ({
  props: args,
});
export const size = Template.bind({});
size.args = { size: 'medium', label:'Form Field' };
