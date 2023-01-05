import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeTresTipos } from '../../stories/module/module.module';
export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  argTypes: {
    size: {
      description: 'Button ' + descriptionSizeTresTipos.description,
    },
    tipo: {
      options: ['raised'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Button',
  tipo: 'raised',
};
