import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../Redux/cart";
import CheckoutDetail from "./CheckoutDetail";

const CheckoutList = ({ items, isEditable }) => {
  const dispatch = useDispatch();
  let finalprice = 0;
  return (
    <>
      {items.map((i) => {
        finalprice += parseFloat(i.price) * parseFloat(i.quantity);
        return (
          <CheckoutDetail key={i.id} item={i}>
            {isEditable && (
              <>
                <Button
                  key={"delete" + i.id}
                  onClick={() => {
                    dispatch(deleteItem(i));
                  }}
                >
                  -
                </Button>
                <Button
                  key={"add" + i.id}
                  onClick={() => {
                    dispatch(addItem(i));
                  }}
                >
                  +
                </Button>
              </>
            )}
          </CheckoutDetail>
        );
      })}
      <div key="TOTAL">Total: {finalprice}€</div>
    </>
  );
};
export default CheckoutList;
