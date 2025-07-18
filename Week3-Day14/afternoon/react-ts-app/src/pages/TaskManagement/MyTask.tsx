import React, { useEffect } from "react";

import TaskFilterForm from "../../components/TaskFilterForm";
import TaskList from "../../components/TaskList";
import { searchTasks } from "../../utils";

import type { Filter, Task } from "../../types/Task";
import { getTasks } from "../../services/service";
import UpdateTask from "./UpdateTask";
import { useAuthStore } from "../../useAuthStore";
import { useNavigate } from "react-router";

export default function MyTask() {
  // Mock data for demonstration
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [filters, setFilters] = React.useState<Filter>({});
  const [editTaskId, setEditTaskId] = React.useState<
    string | number | undefined
  >(undefined);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { loggedInUser } = useAuthStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleSearch = (newFilters: Filter) => {
    setFilters(newFilters);
  };

  const handleEdit = (taskId: string | number | undefined) => {
    setEditTaskId(taskId);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setEditTaskId(undefined);
    // Optionally, refresh tasks after update
    // fetchTasks();
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-15">
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <TaskFilterForm onSearch={handleSearch} />
      </section>

      <div className="my-4" />

      {/* Task List */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <section className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Our tasks</h2>
            </div>
          </div>
        </section>

        <section>
          <div className="overflow-x-auto">
            <TaskList tasks={searchTasks(tasks, filters)} onEdit={handleEdit} />
          </div>
        </section>
      </section>
      <UpdateTask
        open={dialogOpen}
        onClose={handleDialogClose}
        taskId={editTaskId}
      />
    </div>
  );
}
