import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  const { productDetails, setProductDetails, loading, setLoading } =
    useContext(ShoppingCartContext);

  async function fetchProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    // console.log(result);
    if (result) {
      setLoading(false);
      setProductDetails(result);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <h3>Loading Product Details! Please Wait</h3>;
  }

  console.log(productDetails);

  return (
    <div className="flex justify-center align-middle">
      <div className="px-4 rounded grid grid-cols-2 mx-4 shadow-lg lg:w-3/4 lg:grid-cols-2">
        <div>
          <div className="flex justify-center align-middle">
            <img
              className=""
              src={productDetails?.thumbnail}
              alt={productDetails?.title}
            />
          </div>
          <div className="my-4 flex justify-center align-middle gap-4 sm: py-4 ">
            {productDetails?.images.length > 0 ? (
              productDetails?.images.map((singleImage) => (
                <div className=" sm: py-4 shadow-md rounded">
                  <img
                    className="lg:w-auto"
                    src={singleImage}
                    alt={singleImage}
                  />
                </div>
              ))
            ) : (
              <h4>Not Found</h4>
            )}
          </div>
        </div>

        <div className="py-6 flex flex-col justify-center text-center">
          <h2>{productDetails?.title}</h2>
          <div>
            <p>${productDetails?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
