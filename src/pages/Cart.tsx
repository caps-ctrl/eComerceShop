import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  selectCart,
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../features/Cart/cartSlice";
import type { RootState } from "@/app/store/store";

export default function Cart() {
  const cart = useSelector((state: RootState) => selectCart(state));
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mx-auto max-w-4xl p-6 caret-transparent">
      <h1 className="mb-6 text-3xl font-bold">🛒 Twój koszyk</h1>

      {cart.length === 0 ? (
        <p className="text-muted-foreground">Koszyk jest pusty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.price} zł × {item.quantity} ={" "}
                      <span className="font-bold">
                        {item.price * item.quantity} zł
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                        })
                      )
                    }
                  >
                    +
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Usuń
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <h2 className="text-xl font-semibold">Razem: {total} zł</h2>
            <Button variant="destructive" onClick={() => dispatch(clearCart())}>
              Wyczyść koszyk
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
