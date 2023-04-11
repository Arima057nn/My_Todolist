import styles from "./Todo.module.scss";
import classNames from "classnames/bind";
import { Box, Button, Checkbox, Stack, TextField } from "@mui/material";
import { useState } from "react";

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
    const updatedTodos = [...todos]; // Tạo bản sao của mảng todos
    updatedTodos[index].completed = !updatedTodos[index].completed; // Đảo ngược trạng thái hoàn thành của công việc có chỉ số index
    setTodos(updatedTodos); // Cập nhật lại mảng todos với công việc đã được đánh dấu hoàn thành
  };

  return (
    <Box width={560} backgroundColor={"#ebbd94"}>
      <h3 className={cx("red")}>Todo-list</h3>
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

      <Stack direction="column">
        <ul className={cx("ulli")}>
          {todos.map((job, index) => {
            return (
              <Stack key={index} direction="column">
                <li
                  className={cx({
                    red: job.completed, // Nếu công việc đã được đánh dấu hoàn thành (completed = true) thì sử dụng lớp CSS "red"
                    blue: !job.completed, // Ngược lại, sử dụng lớp CSS "blue"
                  })}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: 500 }}
                  >
                    <Checkbox
                      checked={job.completed} // Đặt trạng thái hoàn thành của Checkbox bằng với trạng thái của công việc
                      onChange={() => handleCompleted(index)} // Khi Checkbox được thay đổi trạng thái, gọi hàm handleCompleted để cập nhật trạng thái hoàn thành của công việc tương ứng
                    />
                    {job.title}
                  </Stack>
                </li>
              </Stack>
            );
          })}
        </ul>
      </Stack>
    </Box>
  );
}

export default Todo;
