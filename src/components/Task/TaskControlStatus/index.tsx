'use client';

import { Group, Badge, Text } from '@mantine/core';
import { useTaskContext } from '../TaskProvider';
import { TaskStatus } from '@/core/domains/tasks/tasks.types';

export default function TasksControlStatus() {
  const { tasks } = useTaskContext();

  const tasksPendentsLength =
    tasks.filter((task) => task.status === TaskStatus.Pendent).length || 0;

  const tasksCompletedsLength =
    tasks.filter((task) => task.status === TaskStatus.Completed).length || 0;

  return (
    <Group justify="space-between">
      <Group gap="xs">
        <Text fw={600} fz="md">
          Pendentes
        </Text>

        <Badge size="lg" color="gray" circle variant="light">
          {tasksPendentsLength}
        </Badge>
      </Group>

      <Group gap="xs">
        <Text fw={600} fz="md">
          Concluídas
        </Text>

        <Badge size="lg" color="green" variant="light" tt="none">
          {`${tasksCompletedsLength} de ${tasks.length}`}
        </Badge>
      </Group>
    </Group>
  );
}
