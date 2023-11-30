import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import ProductData from "../../ProductData";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../state/cartReducer";
import { deleteItem } from "../../state/cartReducer";
import CustomTabPanel from "../CustomTabPanel";
import { RootState } from "../../state/store";

const Pages = () => {
  const dispatch = useDispatch();
  //TODO prittier way todo
  const itemsInCart = useSelector((state: RootState) => state.cart.items);

  const [value, setValue] = React.useState<number>(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const addToCart = (product: ProductData) => {
    dispatch(addItemToCart(product));
  };

  const deleteItemFromCart = (productIndex: number) => {
    dispatch(deleteItem(productIndex));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label={<ShoppingCartIcon />} />
          <Tab label={<HomeIcon />} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CartPage
          products={itemsInCart}
          deleteItem={(productIndex: number) =>
            deleteItemFromCart(productIndex)
          }
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HomePage addToCart={(product: ProductData) => addToCart(product)} />
      </CustomTabPanel>
    </Box>
  );
};

export default Pages;
