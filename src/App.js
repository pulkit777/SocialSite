
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box,  Stack } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {


  return (
    <Box >
    <Navbar />
    <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
    <Sidebar />
    <Feed/>
    <Rightbar />
    </Stack> 
    </Box>
  );
}

export default App;
