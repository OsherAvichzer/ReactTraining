import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

interface AppBarProps {
  productsQuantity: number;
  itemsTotalPrice: number;
}

const MyAppBar = (props: AppBarProps) => {
  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Badge color="default" badgeContent={props.productsQuantity}>
            <ShoppingCartIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          </Badge>
        </div>
        <div>
          <Typography variant="h6">
            סכום כולל: {props.itemsTotalPrice}₪
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default MyAppBar;
