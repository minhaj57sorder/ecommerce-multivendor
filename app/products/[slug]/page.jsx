import Image from "next/image";
import React from "react";
import Rating from "@/app/components/ratings/Rating";
import Link from "next/link";
import { createElement } from "react";
import ProductsFromSameStore from "@/app/components/suggestedProducts/ProductsFromSameStore";
import RelatedProducts from "@/app/components/suggestedProducts/RelatedProducts";
import ProductsDetailsSlider from "@/app/components/productDetailsSlider/ProductDetailsSlider.jsx";

async function getProductDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const options = [
  {
    name: "Brand",
    value: "Apple",
  },
  {
    name: "Condition",
    value: "Used Product",
  },
  {
    name: "Color",
    value: "Red",
  },
  {
    name: "Delivery",
    value: "Ships to Rajbari",
  },
];

const page = async ({ params }) => {
  const data = await getProductDetails(params.slug);
  return (
    <div className="bg-slate-100">
      <div className="flex flex-wrap justify-center max-w-full py-2 px-2 xl:px-0">
        <div className="xl:w-[1280px] w-full">
          <div className="bg-white">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 items-stretch">
              <div className="">
                {/* <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={`${data.image}`}
                  alt={`${data.category}`}
                /> */}
                <ProductsDetailsSlider/>
              </div>
              <div className="pt-4 pr-4">
                <div className="text-2xl">{data.title}</div>

                <span className="text-xs hover:text-orange-600 hover:underline cursor-pointer">
                  Visit Appel Store
                  {/* <Link to="#"></Link> */}
                </span>
                <Rating value={3.5} text={"40"} />
                <div className="w-full border-t-[1px] border-slate-200"></div>
                <div className="flex items-baseline">
                  <div className="text-[1.6rem] text-orange-600">-7%</div>
                  <div className="text-[1.6rem] ml-1">${data.price}</div>
                </div>
                <div className="text-sm line-through">
                  <span className="font-bold">List: </span>${data.price}
                </div>
                <table className="text-sm">
                  <tbody>
                    {options.map((option) => (
                      <tr className="">
                        <td className="">
                          <span className="font-bold">{option.name}: </span>
                        </td>
                        <td className="px-4">
                          <span className="">{option.value}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 p-4">
              <div>Description</div>
              <div>{data.description}</div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mt-4 p-4">
              <ProductsFromSameStore/>
            </div>

            <div className="w-full border-t-[1px] border-slate-200"></div>
            <div className=" p-4">
              <RelatedProducts/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
