import React from 'react';
import { ChefHat } from 'lucide-react';
import { FOOD_TYPES_ENUM } from '@/lib/types';
import { FoodIcon } from '@/components/FoodIcon/FoodIcon';
import { Card, Flex, Text } from '@mantine/core';

const items = [
  {
    title: 'ALL',
    icon: <ChefHat />,
  },
];

Object.entries(FOOD_TYPES_ENUM).map(([key, value]) =>
  items.push({
    title: key,
    icon: <FoodIcon type={value} />,
  })
);

export const Navbar = () => {
  return (
    <>
      {items.map(({ title, icon }, index) => (
        <Card key={index} shadow="sm" p="sm" mt="sm" withBorder>
          <Flex w="100%">
            {icon}
            <Flex justify="center" style={{ flexGrow: 1 }}>
              <Text>{title}</Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </>
  );
};
