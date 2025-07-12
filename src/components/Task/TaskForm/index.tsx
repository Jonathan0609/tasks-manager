'use client';

import {
  Grid,
  GridCol,
  Stack,
  Input,
  Divider,
  Group,
  ActionIcon,
  Card,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconX, IconCheck } from '@tabler/icons-react';

import { useTaskContext } from '../TaskProvider';
import { Task, TaskStatus } from '@/core/domains/tasks/tasks.types';
import { TaskFormValues } from './form.types';
import { useEffect } from 'react';

interface TaskCreateFormProps {
  onCancel: VoidFunction;
  task?: Task;
}

export default function TaskForm(props: TaskCreateFormProps) {
  const form = useForm<TaskFormValues>({ mode: 'uncontrolled' });

  const { setTasks } = useTaskContext();

  useEffect(() => {
    if (props.task) {
      const task = props.task;

      form.setValues({ name: task.name });
    }
  }, [props.task]);

  const handleSubmit = (values: TaskFormValues) => {
    if (props?.task) {
      setTasks?.((prevTasks) => {
        const taskFinded = prevTasks.find(
          (prevTask) => prevTask.id === props.task!.id
        );

        if (taskFinded) {
          taskFinded.name = values.name;

          return [...prevTasks];
        }

        return [...prevTasks];
      });
    } else {
      setTasks?.((prevTasks) => [
        ...prevTasks,
        {
          id: String(new Date()),
          name: values.name,
          status: TaskStatus.Pendent,
        },
      ]);
    }

    handleCancel();
  };

  const handleCancel = () => {
    form.reset();
    props.onCancel();
  };

  return (
    <Card p="lg" withBorder>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          <GridCol span="auto">
            <Stack gap={0}>
              <Input
                size="lg"
                variant="unstyled"
                placeholder="Informe uma tarefa"
                autoFocus
                {...form.getInputProps('name')}
                key={form.key('name')}
              />

              <Divider />
            </Stack>
          </GridCol>

          <GridCol span="content" display="flex">
            <Group gap={8}>
              <ActionIcon
                size="lg"
                variant="light"
                color="red"
                onClick={handleCancel}
              >
                <IconX size={20} />
              </ActionIcon>

              <ActionIcon size="lg" variant="light" color="green" type="submit">
                <IconCheck size={20} />
              </ActionIcon>
            </Group>
          </GridCol>
        </Grid>
      </form>
    </Card>
  );
}
