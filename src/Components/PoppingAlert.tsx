import { Alert } from "@mui/material";
import Popover from "@mui/material/Popover";

interface PoppingAlertProps {
  anchorEl: HTMLButtonElement | null;
  close: () => void;
}

const PoppingAlert = (props: PoppingAlertProps) => {
  const open = Boolean(props.anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={props.anchorEl}
        onClose={props.close}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        disablePortal={true}
      >
        <Alert icon={false} variant="filled" severity="error" sx={{ p: 2 }}>
          ההזמנה לא הושלמה
        </Alert>
      </Popover>
    </div>
  );
};

export default PoppingAlert;
