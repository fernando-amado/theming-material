import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { descriptionSizeDosTipos } from 'src/app/stories/module/module.module';

export default {
  title: 'Angular Material/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [MatTableModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'Medium' },
      },
      description: 'Chip' + descriptionSizeDosTipos.description,
    },
    
  },
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});
export const size = Template.bind({});
size.args = {
  size: 'medium',
};
