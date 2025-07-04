import SaleItem from "./SaleItem";

interface ISaleProps {
  id: number;
  imageUrl: string;
  title: string;
  priceNew: string;
  priceOld: string;
  discount: string;
  sold: string;
  rating: number;
}

const SalesList = ({ data }: { data: ISaleProps[] }) => {
  return (
    data.length > 0 &&
    data.map((sale) => {
      return (
        <SaleItem
          key={sale.id}
          imageUrl={sale.imageUrl}
          title={sale.title}
          priceNew={sale.priceNew}
          priceOld={sale.priceOld}
          discount={sale.discount}
          sold={sale.sold}
          rating={sale.rating}
        />
      );
    })
  );
};

export default SalesList;
