'use client';

import { Task } from '@/core/domains/tasks/tasks.types';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface TaskContextProps {
  tasks: Task[];
  setTasks?: Dispatch<SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
});

export const useTaskContext = () => useContext(TaskContext);

interface TaskProviderProps {
  children: ReactNode;
}

export default function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksList = localStorage.getItem('tasks');

    const tasks = tasksList ? (JSON.parse(tasksList) as Task[]) : [];

    setTasks(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
