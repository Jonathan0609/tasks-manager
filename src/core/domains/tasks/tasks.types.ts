export interface Task {
  id: string;
  name: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Pendent = 'PENDENT',
  Completed = 'COMPLETED',
}
