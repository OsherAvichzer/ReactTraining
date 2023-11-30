import ProductJason from "../Data/Products.json";
import ProductData from "../ProductData";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  addToCart: (product: ProductData) => void;
}

const ProductGrid = (props: ProductGridProps) => {
  const products: ProductData[] = ProductJason;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{ direction: "rtl" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
      >
        {products.map((product) => (
          <Grid item key={product.id}>
            {}
            <ProductCard
              product={product}
              addToCart={() => props.addToCart(product)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductGrid;
