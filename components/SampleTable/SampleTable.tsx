'use client'

import { Table } from "@mantine/core";
import { IUser } from '@/models/User';

type Props = {
  elements: IUser[]
}

export const SampleTable: React.FC<Props> = ({ elements }) => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.email}>
      <Table.Td>{JSON.stringify(element._id)}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
