import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ProductData from "../../ProductData";

interface DetailsDialogProps {
  product: ProductData;
  addToCart: (product: ProductData) => void;
}

export default function DetailsDialog(props: DetailsDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    props.addToCart(props.product);
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ margin: "10px" }}
        variant="contained"
        color="secondary"
        size="small"
        onClick={handleClickOpen}
      >
        פרטים
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ direction: "rtl" }} id="alert-dialog-title">
          {props.product.name}
        </DialogTitle>
        <DialogContent style={{ direction: "rtl" }}>
          <div className="details-row">
            <span className="property-value">{props.product.description}</span>
          </div>
          <div className="details-row">
            <span className="property-label">מחיר: </span>
            <span className="property-value">{props.product.price} ₪</span>
          </div>
          <div className="details-row">
            <img
              style={{
                height: 350,
                width: 350,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="product-image"
              src={props.product.image}
              alt="Product"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            סגור
          </Button>
          <Button onClick={handleAddToCart}>הוסף לעגלה</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
