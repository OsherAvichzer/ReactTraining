import Button from "@mui/material/Button";
import ProductData from "/OsherReactTrainingWorks/osher-react/src/ProductData";
import { orderItem } from "../../state/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ItemsList from "../../Components/ItemsList";
import PoppingAlert from "../PoppingAlert";
import React from "react";
import ProgressBar from "../ProgressBar";

interface CartPageProps {
  products: ProductData[];
  deleteItem: (productIndex: number) => void;
}

const CartPage = (props: CartPageProps) => {
  const dispatch = useDispatch();

  const totaItemslPrice: number = props.products.reduce(
    (total, product) => total + product.price,
    0
  );

  const userState = useSelector((state: RootState) => state.cart);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleCloseAlert = () => {
    setAnchorEl(null);
  };

  // const handleShowLinear = () => {
  //   React.useEffect(() => {
  //     setProgress((oldProgress) =>
  //       oldProgress >= props.products.length
  //         ? props.products.length
  //         : Math.min(oldProgress + 1, props.products.length)
  //     );
  //   });
  //   return progress;
  // };

  // const progressBar = () => {
  //   React.useEffect(() => {
  //     setProgress((oldProgress) => {
  //       const maxProgress = props.products.length;

  //       if (oldProgress >= maxProgress) {
  //         props.products.forEach((item) => {
  //           dispatch(orderItem(item));
  //           return Math.min(oldProgress + 1, maxProgress);
  //         });
  //       }
  //       return maxProgress;
  //     });
  //   }, [props.products, dispatch, orderItem]);
  // };

  const handleOrderItems = (event: React.MouseEvent<HTMLButtonElement>) => {
    let productsProcess = 0;
    if (totaItemslPrice > userState.totalPrice) {
      //check if it is needed
      setAnchorEl(event.currentTarget);
    } else {
      handleCloseAlert();
      props.products.forEach((item) => {
        <ProgressBar
          show={true}
          progress={productsProcess}
          limit={props.products.length}
        />;
        dispatch(orderItem(item));
      });
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {props.products.length > 0 ? (
          <>
            <PoppingAlert anchorEl={anchorEl} close={handleCloseAlert} />
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              color="primary"
              size="small"
              onClick={handleOrderItems}
            >
              הזמן {totaItemslPrice}₪
            </Button>
          </>
        ) : (
          <>העגלה ריקה</>
        )}
      </div>
      <div
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          direction: "rtl",
        }}
      >
        <ItemsList products={props.products} deleteItem={props.deleteItem} />
      </div>
    </>
  );
};

export default CartPage;
