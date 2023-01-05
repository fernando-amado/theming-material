import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeDosTipos } from 'src/app/stories/module/module.module';

export default {
  title: 'Angular Material/progress',
  component: SpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'Medium' },
      },
      description: 'Progress ' + descriptionSizeDosTipos.description,
    },
  },
} as Meta;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
};
