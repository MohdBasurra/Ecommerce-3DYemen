import ProductDescription from "../../components/ProductDescription";
import ProductImage from "../../components/productImage";
import RelatedProducts from "../../components/RelatedProducts";

const Product = () => {
  return (
    <div>
      <div className="w-full h-full  ">
        <div className="parent flex flex-col sm:flex-row w-full order">
          <div className=" border-t sm:border-r sm:border-t-0 border-gray-500   w-full sm:w-1/2 order-1 sm:order-1">
            <ProductImage />
          </div>
          <div className=" child2 h-full w-full sm:w-1/2 order-2 sm:order-2">
            <ProductDescription />
          </div>
        </div>
        <div className="justify-center flex items-center">
          <div className="jsutify-start sm:w-3/4 w-full ">
            <RelatedProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
