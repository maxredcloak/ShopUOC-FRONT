const CheckoutDetail = ({ item, children }) => (
  <div key={"detailitem" + item.id}>
    Nombre: {item.name}-precio unidad: {item.price}€ - cantidad: {item.quantity}
    {children}
  </div>
);

export default CheckoutDetail;
