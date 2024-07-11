'use client';

import { IRecipe } from '@/models/Recipe';
import { Anchor, Table } from '@mantine/core';

type Props = {
  elements: IRecipe[];
};

export const RecipeTable: React.FC<Props> = ({ elements }) => {
  const rows = elements.map((element) => (
    //@ts-expect-error
    <Table.Tr key={element._id.$oid}>
      <Table.Td>
        {/* @ts-expect-error */}
        <Anchor href={`/${element._id.$oid}`} underline="hover">
          {element.title}
        </Anchor>
      </Table.Td>
      <Table.Td>{element.type}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>Type</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
