import Image from "next/image";
import Rating from "../ratings/Rating";
import Link from "next/link";
async function getProducts() {
  const res = await fetch(
    "https://fakestoreapi.com/products/"
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
const maxCharLength = (str,len)=>{
  return str.slice(0,len) +( str.length > len ? '...' : '');
}
const FeaturedProducts = async () => {
  const data = await getProducts();
  // console.log(data);
  return (
    <div className="flex flex-wrap justify-center max-w-full py-2 px-2 2xl:px-0">
      <div className="2xl:w-[1536px] w-full">
        <div>Category</div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 mx-[-0.5rem] px-[0.5rem] items-stretch">
          {data.map((e, index) => (
            <div className=" bg-white" key={index}>
              <div className=" text-black overflow-auto h-full flex flex-col sm:py-2 py-1 sm:px-2 px-1 border-[1px] hover:border-yellow-400 hover:shadow-md relative">
                <div className="absolute top-0 left-0 z-10 p-1 text-xs bg-yellow-400 text-white  after:h-full after:border-[0.75rem] after:border-yellow-400 after:border-b-transparent after:border-r-transparent after:absolute after:left-full after:top-0">Best Seller</div>
                <div className="h-64 bg-slate-100 w-full flex justify-center items-center relative cursor-pointer">
                  <Image
                    fill
                    style={{objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={`${e.image}`}
                    alt={`${e.category}`}
                  />
                </div>
                <Rating value={3.5} text={'40'}/>
                
                <Link href={`/products/${e.id}`}><div className="text-xs sm:text-sm cursor-pointer hover:text-yellow-500"> {maxCharLength(e.title,120)} </div> </Link>
                <div className="flex items-baseline">
                  <div className="text-[1.6rem]">${e.price}</div>
                  <div className="text-xs ml-1">List: ${e.price}</div>
                </div>
                <div className="text-xs">Used Product</div>
                <div className="text-xs">Ships to Rajbari</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
