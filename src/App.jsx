import { useDispatch, useSelector } from "react-redux";
import { orderMeals } from "./actions/mealOrder.action";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const foodOrder = useSelector((state) => state.meals);
  const { meals } = foodOrder;
  const handleClick = () => {
    dispatch(
      orderMeals({
        items: [
          {
            item: "Biryani",
            quantity: 1,
          },
          {
            item: "Pasta",
            quantity: 1,
          },
          {
            item: "ice Cream",
            quantity: 2,
          },
        ],
        totalAmount: 200,
      })
    );
  };

  return (
    <>
      <input type="button" value={"Order Food"} onClick={handleClick} />
      {meals.items ? (
        <ul>
          {meals.items.map((food) => (
            <li key={food.item}>
              {food.item} {food.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No food ordered</p>
      )}
    </>
  );
};

export default App;
