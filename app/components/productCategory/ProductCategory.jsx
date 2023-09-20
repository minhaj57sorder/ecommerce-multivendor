import Image from "next/image";
async function getCategory() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const ProductCategory = async () => {
  const data = await getCategory();
  return (
    <div className="flex flex-wrap justify-center max-w-full py-2 px-2 2xl:px-0">
      <div className="2xl:w-[1536px] w-full">
        <div>Product Category</div>
        <div className="flex flex-wrap mx-[-0.5rem] px-[0.5rem] items-stretch">
          {data.map((e, index) => (
            <div className="xl:w-1/12 lg:w-1/6 sm:w-1/4 w-1/3" key={index}>
              <div className="bg-white text-black overflow-auto h-full flex items-center flex-col sm:py-2 py-0 sm:px-2 px-0 border-[1px] hover:shadow-md">
                <div className="h-16 w-full flex justify-center items-center relative">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={`${e.image}`}
                    alt={`${e.category}`}
                  />
                </div>
                <div className="text-xs sm:text-sm sm:mx-3 mx-0 mt-2">
                  {e.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
