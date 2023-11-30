import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface LinearProps {
  show: boolean;
  progress: number;
  limit: number;
}

const ProgressBar = (props: LinearProps) => {
  console.log(props);
  if (props.show && props.progress < props.limit) {
    props.progress++;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={props.progress} />
    </Box>
  );
};

export default ProgressBar;
