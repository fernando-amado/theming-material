import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormFieldComponent } from './form-field.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeDosTipos } from 'src/app/stories/module/module.module';

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
      table: {
        defaultValue: { summary: 'Medium' },
      },
      description: 'Form-Field ' + descriptionSizeDosTipos.description,
    },
  },
} as Meta;

const Template: Story<FormFieldComponent> = (args: MatFormFieldModule) => ({
  props: args,
});
export const size = Template.bind({});
size.args = { size: 'medium', label: 'Form Field' };
