export const ProductItem = ({ title, image, description, price }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>

      <div>{description}</div>

      <div className="priceCont">
        <div>{price}₽</div>
        <button>В корзину</button>
      </div>
    </div>
  )
}
