'use client';

import React from 'react';
import { IRecipe } from '@/models/Recipe';
import { Title, Text, List, Paper, Divider, Button, Card, Group } from '@mantine/core';
import { FOOD_TYPES_ENUM } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { FoodIcon } from '../FoodIcon/FoodIcon';

type Props = {
  element: IRecipe;
};

export const RecipeDetails: React.FC<Props> = ({ element }) => {
  const router = useRouter();

  return (
    <>
      <Button mb="md" variant="outline" onClick={() => router.back()}>
        <ChevronLeft />
      </Button>
      <Title order={1} mb="md">
        {element.title}
      </Title>

      <Group>
        <FoodIcon type={element.type} />
        <Text c="dimmed" size="sm">
          {Object.keys(FOOD_TYPES_ENUM)[element.type - 1]}
        </Text>
      </Group>

      <Divider my="md" />
      <Paper withBorder shadow="md" p="md">
        <Title order={2} mb="md">
          Description
        </Title>
        <Text>{element.description}</Text>
      </Paper>
      <Paper withBorder shadow="md" p="md" mt="md">
        <Title order={2} mb="md">
          Ingredients
        </Title>
        <List spacing="xs" size="sm" center>
          {element.ingredients.map((ingredient, index) => (
            <List.Item key={index}>{ingredient}</List.Item>
          ))}
        </List>
      </Paper>
      <Paper withBorder shadow="md" p="md" mt="md">
        <Title order={2}>Steps</Title>
        {element.steps.map((step, index) => (
          <Card key={index} shadow="sm" p="sm" mt="sm" withBorder>
            <Text>{`${index + 1}. ${step}`}</Text>
          </Card>
        ))}
      </Paper>
    </>
  );
};
