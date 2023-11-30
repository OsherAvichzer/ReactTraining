import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ProductData from "../ProductData";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

interface CartPageProps {
  products: ProductData[];
  deleteItem: (productIndex: number) => void;
}

const ItemsList = (props: CartPageProps) => {
  const handleDeleteItem = (productIndex: number) => {
    props.deleteItem(productIndex);
  };

  return (
    <List sx={{ bgcolor: "background.paper" }}>
      <>
        {props.products.map((product, index) => (
          <ListItem
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemAvatar>
                <Avatar alt={product.name} src={product.image} />
              </ListItemAvatar>
              <ListItemText primary={product.name} secondary={product.price} />
            </div>
            <Button onClick={() => handleDeleteItem(index)} color="warning">
              <DeleteIcon />
            </Button>
          </ListItem>
        ))}
      </>
    </List>
  );
};

export default ItemsList;
