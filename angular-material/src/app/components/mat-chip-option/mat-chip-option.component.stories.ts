import { MatChipsModule } from '@angular/material/chips';
import { MatChipOptionComponent } from './mat-chip-option.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeDosTipos } from 'src/app/stories/module/module.module';

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
      table: {
        defaultValue: { summary: 'Medium' },
      },
      description: 'Chip Option ' + descriptionSizeDosTipos.description,
    },
  },
} as Meta;

const Template: Story<MatChipOptionComponent> = (
  args: MatChipOptionComponent
) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
  label: 'Mat-Chip-option',
};
