import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface LinearProps {
  itemsQuantity: number;
}

const LinearDeterminate = (props: LinearProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      //  setProgress((oldProgress) => {
      //   const newProgress = Math.min(
      //     oldProgress + 100 / props.itemsQuantity,
      //     100
      //   );
      //   if (newProgress >= 100) {
      //     clearInterval(timer);
      //   }
      //   return newProgress;
      // });
      setProgress((oldProgress) =>
        oldProgress >= 100
          ? 100
          : Math.min(oldProgress + 100 / props.itemsQuantity, 100)
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default LinearDeterminate;
