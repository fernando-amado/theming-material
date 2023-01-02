import { MatChipsModule } from '@angular/material/chips';
import { MatChipOptionComponent } from './mat-chip-option.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/Chip-option',
  component: MatChipOptionComponent,
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

const Template: Story<MatChipOptionComponent> = (args: MatChipOptionComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Mat-Chip-option',
};
