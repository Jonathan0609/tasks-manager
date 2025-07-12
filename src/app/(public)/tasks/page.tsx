import TasksControlStatus from '@/components/Task/TaskControlStatus';
import TasksCreate from '@/components/Task/TaskCreate';
import TaskList from '@/components/Task/TaskList';
import TaskProvider from '@/components/Task/TaskProvider';
import { Card, Group, Stack, Title } from '@mantine/core';
import { IconListCheck } from '@tabler/icons-react';

export default function TasksPage() {
  return (
    <TaskProvider>
      <Card w={700} bg="none">
        <Stack gap="md">
          <Group gap="xs">
            <IconListCheck size={30} color="green" />

            <Title order={2}>ToDo List</Title>
          </Group>

          <TasksControlStatus />

          <TasksCreate />

          <TaskList />
        </Stack>
      </Card>
    </TaskProvider>
  );
}
