import styles from "./Todo.module.scss";
import classNames from "classnames/bind";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const cx = classNames.bind(styles);

function Todo() {
  const [job, setJob] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (job !== "") {
      setTodos([...todos, { title: job, completed: false }]); // Sửa đổi để mảng todos bao gồm đối tượng có title và trạng thái hoàn thành (completed) ban đầu là false
      setJob("");
    }
  };

  const handleCompleted = (index) => {
    const updatedTodos = [...todos]; // Tạo bản sao của mảng todos bằng cách sử dụng toán tử spread
    updatedTodos[index].completed = !updatedTodos[index].completed; // Đảo ngược trạng thái hoàn thành của công việc có chỉ số index
    setTodos(updatedTodos); // Cập nhật lại mảng todos với công việc đã được đánh dấu hoàn thành
  };
  const handleRemove = (index) => {
    const removedArr = [...todos].filter((todo, i) => index !== i);
    setTodos(removedArr); // Cập nhật lại mảng todos với công việc đã được đánh dấu hoàn thành
  };

  return (
    <Box
      width={600}
      height={760}
      backgroundColor={"#f6f9fc"}
      borderRadius={4}
      mt={4}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 className={cx("title")}>Todo-list</h1>
      </div>
      <Stack
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          sx={{ width: 400 }}
          value={job}
          id="standard-basic"
          label="What do you need to do today ?"
          variant="standard"
          onChange={(e) => {
            setJob(e.target.value);
          }}
        />

        <Button variant="contained" onClick={handleSubmit}>
          ADD
        </Button>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <ul className={cx("list")}>
          {todos.map((job, index) => {
            return (
              <li
                style={{ display: "flex", justifyContent: "space-between" }}
                key={index}
                className={cx({
                  red: job.completed, // Nếu công việc đã được đánh dấu hoàn thành (completed = true) thì sử dụng lớp CSS "red"
                  blue: !job.completed, // Ngược lại, sử dụng lớp CSS "blue"
                })}
              >
                <div>
                  {job.completed ? (
                    <Checkbox disabled checked />
                  ) : (
                    <Checkbox
                      checked={job.completed} // Đặt trạng thái hoàn thành của Checkbox bằng với trạng thái của công việc
                      onChange={() => handleCompleted(index)} // Khi Checkbox được thay đổi trạng thái, gọi hàm handleCompleted để cập nhật trạng thái hoàn thành của công việc tương ứng
                    />
                  )}
                  {job.title}
                </div>
                <div>
                  {job.completed ? (
                    <IconButton aria-label="delete" disabled>
                      <DeleteIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleRemove(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
}

export default Todo;
