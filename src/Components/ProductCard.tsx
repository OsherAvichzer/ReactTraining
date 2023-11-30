import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductData from "/OsherReactTrainingWorks/osher-react/src/ProductData";
import DetailsDialog from "./Pages/DetailsDialog";

interface ProductCardProps {
  product: ProductData;
  addToCart: (product: ProductData) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card
      sx={{
        height: "100",
        width: "100",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {<CardMedia sx={{ height: 140 }} image={product.image} />}
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ textAlign: "center" }}>
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          {product.price}₪
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAddToCart}
        >
          הוסף לעגלה
        </Button>
        <DetailsDialog addToCart={() => addToCart(product)} product={product} />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
