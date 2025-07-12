'use client';

import { Stack } from '@mantine/core';
import { useTaskContext } from '../TaskProvider';
import { Task } from '@/core/domains/tasks/tasks.types';
import TaskCard from './TaskCard';
import { useState } from 'react';
import TaskForm from '../TaskForm';

export default function TaskList() {
  const { tasks, setTasks } = useTaskContext();

  const [taskEdit, setTaskEdit] = useState<Task>();

  const handleRemoveTask = (taskId: string) => {
    setTasks?.((prevTasks) => [
      ...prevTasks.filter((prevTask) => prevTask.id !== taskId),
    ]);
  };

  return (
    <Stack gap="sm">
      {tasks.map((task, index) => {
        if (task.id === taskEdit?.id) {
          return (
            <TaskForm
              key={index}
              task={taskEdit}
              onCancel={() => setTaskEdit(undefined)}
            />
          );
        }

        return (
          <TaskCard
            key={index}
            task={task}
            onRemoveTask={handleRemoveTask}
            onEditTask={(task) => setTaskEdit(task)}
          />
        );
      })}
    </Stack>
  );
}
