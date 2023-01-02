import { MatChipsModule } from '@angular/material/chips';
import { MatChipComponent } from './mat-chip.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/Chip',
  component: MatChipComponent,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<MatChipComponent> = (args: MatChipComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Mat-Chip',
};
