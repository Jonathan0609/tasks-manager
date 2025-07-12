'use client';

import { Task, TaskStatus } from '@/core/domains/tasks/tasks.types';
import {
  Card,
  Grid,
  GridCol,
  Group,
  Checkbox,
  ActionIcon,
  Text,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useTaskContext } from '../../TaskProvider';

interface TaskCardProps {
  task: Task;
  onRemoveTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export default function TaskCard({
  task,
  onRemoveTask,
  onEditTask,
}: TaskCardProps) {
  const { setTasks } = useTaskContext();

  const isTaskCompleted = task.status === TaskStatus.Completed;

  return (
    <Card p="lg" withBorder>
      <Grid>
        <GridCol span={{ xs: 12, sm: 'auto' }}>
          <Group gap="md" wrap="nowrap">
            <Checkbox
              checked={isTaskCompleted}
              onChange={(event) =>
                setTasks?.((prevTasks) => {
                  const taskFinded = prevTasks.find(
                    (prevTask) => prevTask.id === task.id
                  );

                  if (taskFinded) {
                    taskFinded.status = event.target.checked
                      ? TaskStatus.Completed
                      : TaskStatus.Pendent;

                    return [...prevTasks];
                  }

                  return [...prevTasks];
                })
              }
            />

            <Text
              fw={600}
              td={isTaskCompleted ? 'line-through' : undefined}
              lineClamp={1}
            >
              {task.name}
            </Text>
          </Group>
        </GridCol>

        <GridCol span={{ xs: 12, sm: 'content' }}>
          <Group gap="xs">
            <ActionIcon
              size="md"
              variant="default"
              onClick={() => onEditTask(task)}
              disabled={isTaskCompleted}
            >
              <IconPencil size={18} />
            </ActionIcon>

            <ActionIcon
              size="md"
              variant="light"
              color="red"
              onClick={() => onRemoveTask(task.id)}
            >
              <IconTrash size={18} />
            </ActionIcon>
          </Group>
        </GridCol>
      </Grid>
    </Card>
  );
}
