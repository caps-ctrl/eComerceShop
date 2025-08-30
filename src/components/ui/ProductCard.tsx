import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/Cart/cartSlice";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  name,
  price,
  image,
  id,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductCardProps) => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <CardContent className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 mb-4 ">{price} zł</p>
        <Button
          className="cursor-pointer"
          onClick={() =>
            handleAddToCart({
              id,
              name,
              price,
              image,
            })
          }
        >
          Dodaj do koszyka
        </Button>
      </CardContent>
    </Card>
  );
}
