import { AddTodoProps } from "../types";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "./AddTodo.css";

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className="form-box" onSubmit={handleSubmitTodo}>
    <input
      className="input-content"
      type="text"
      name="task"
      value={task}
      placeholder="What do you have planned?"
      onChange={handleChange}
    />

    <Button
      startIcon={<AddIcon />}
      variant="contained"
      color="error"
      size="small"
      type="submit"
    >
      Add task
    </Button>
  </form>
);
