import MyAppBar from "./Components/AppBar";
import Pages from "./Components/Pages/Pages";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";

const App = () => {
  const productsQuantity = useSelector(
    (state: RootState) => state.cart.quantity
  );

  const itemsTotalPrice = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  const array = useSelector((state: RootState) => state.cart.items);
  console.log(array);
  return (
    <div>
      <MyAppBar
        productsQuantity={productsQuantity}
        itemsTotalPrice={itemsTotalPrice}
      />
      <Pages />
    </div>
  );
};

export default App;
