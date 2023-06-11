import FeaturedCategory from "@/app/components/featuredCategory/FeaturedCategory"
import ProductCategory from "@/app/components/productCategory/ProductCategory"
import SliderComp from "@/app/components/slider/SliderComp"
export default function page() {
  return (
    <div>
      <div className="h-96">
      <SliderComp/>
      <FeaturedCategory/>
      <ProductCategory/>
      </div>
    </div>
  )
}
