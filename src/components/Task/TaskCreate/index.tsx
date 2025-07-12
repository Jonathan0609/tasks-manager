'use client';

import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import TaskForm from '../TaskForm';

export default function TasksCreate() {
  const [isViewInputs, setIsViewInputs] = useState<boolean>(false);

  return (
    <>
      {!isViewInputs && (
        <Button
          fullWidth
          size="xl"
          leftSection={<IconPlus size={18} />}
          variant="light"
          color="violet"
          onClick={() => setIsViewInputs(true)}
        >
          Nova tarefa
        </Button>
      )}

      {isViewInputs && (
        <TaskForm onCancel={() => setIsViewInputs(!isViewInputs)} />
      )}
    </>
  );
}
