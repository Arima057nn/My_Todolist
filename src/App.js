import { Stack } from "@mui/material";
import Todo from "./Todo";
import { useTheme } from "@mui/material/styles";
import BgImage from "./assets/learning.jpg";

function App() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Todo />
    </Stack>
  );
}

export default App;
