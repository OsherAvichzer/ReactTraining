import ProductGrid from "../ProductGrid";
import ProductData from "/OsherReactTrainingWorks/osher-react/src/ProductData";

type HomePageProps = {
  addToCart: (product: ProductData) => void;
};

const HomePage = (props: HomePageProps) => {
  return <ProductGrid addToCart={props.addToCart} />;
};

export default HomePage;
