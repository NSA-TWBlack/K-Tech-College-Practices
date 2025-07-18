import type { Task } from '../types/Task';
import { useAuthStore } from '../useAuthStore';

const apiBaseUrl = 'https://server.aptech.io';

const getAuthHeaders = () => {
  const access_token = useAuthStore.getState().access_token;
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(access_token && { Authorization: `Bearer ${access_token}` }),
  };
};

/**
 * Logs in a user with username and password
 */
export const login = async (username: any, password: any) => {
  const response = await fetch(`${apiBaseUrl}/auth/login`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return await response.json();
};

/**
 * Retrieves all tasks
 */
export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return await response.json();
};

/**
 * Updates an existing task
 */
export const updateTask = async (task: Task): Promise<Task> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${task.id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify({ ...task, id: undefined }),
  });
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
  return await response.json();
};

/**
 * Retrieves a specific task by its ID
 */
export const getTaskById = async (taskId: string | number): Promise<Task> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${taskId}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch task');
  }
  return await response.json();
};

/**
 * Creates a new task
 */
export const createTask = async (task: Task): Promise<Task> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return await response.json();
};
