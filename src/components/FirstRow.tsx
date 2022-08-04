import { TodoProps } from "../types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import "./FirstRow.css";

export const FirstRow = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => (
  <div className="container">
    <div className="row">
      <p className="task-name">{task}</p>

      <div>
        <Checkbox
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
          inputProps={{ "aria-label": "controlled" }}
        />

        <Button
          onClick={() => handleDeleteTodo(id)}
          variant="outlined"
          startIcon={<DeleteIcon />}
          size="small"
          color="error"
        >
          Delete
        </Button>
      </div>
    </div>
  </div>
);
