import ProductDataState from "./ProductDataState";
import Image from "next/image";

export const ProductsList = ({ products, isFetchingData, error, id }) => {
  return (
    <ProductDataState
      isFetchingData={isFetchingData}
      data={products}
      error={error}
    >
      <div className="contain">
        {products.map((item, index) => (
          <div className="list-item" key={index}>
            <div className="list-item-thumb">
              <Image width={300} height={300} src={item.image} alt="" />
            </div>

            <h3 className="list-item-title">{item.title}</h3>

            <div className="list-item-package">{item.package}</div>

            <p className="list-item-content">{item.description}</p>

            <div className="list-item-price">
              <div className="wrap">
                <div className="list-item-price-title">特別限定価格</div>
                <p>
                  {parseInt(item.price_sell).toLocaleString("en-US").toString()}{" "}
                  <span>(税込)</span>
                </p>
              </div>

              <a href={`/products/${id}/${item.id}`}>今すぐ購入する</a>
            </div>
          </div>
        ))}
      </div>
    </ProductDataState>
  );
};
