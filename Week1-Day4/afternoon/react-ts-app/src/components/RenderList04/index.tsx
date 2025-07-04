import ProductItem from "./ProductItem";

interface IProductProps {
  id: number;
  imageUrl: string;
  title: string;
  priceNew: string;
  priceOld: string;
  discount: string;
}

const ProductsList = ({ data }: { data: IProductProps[] }) => {
  return (
    data.length > 0 &&
    data.map((product) => {
      return (
        <ProductItem
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          priceNew={product.priceNew}
          priceOld={product.priceOld}
          discount={product.discount}
        />
      );
    })
  );
};

export default ProductsList;
