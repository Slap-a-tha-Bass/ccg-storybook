import Table from "./Table";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    rows: { control: [""] },
    headers: { control: [""] },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  rows: [
    ["Row1", "Row1", "Row1", "Row1", "Row1"],
    ["Row2", "Row2", "Row2", "Row2", "Row2"],
    ["Row3", "Row3", "Row3", "Row3", "Row3"],
    ["Row4", "Row4", "Row4", "Row4", "Row4"],
  ],
  headers: ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"],
};