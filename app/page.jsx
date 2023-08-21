import FeaturedCategory from "@/app/components/featuredCategory/FeaturedCategory"
import ProductCategory from "@/app/components/productCategory/ProductCategory"
import FeaturedProducts from "@/app/components/featuredProduct/FeaturedProducts"
import SliderComp from "@/app/components/slider/SliderComp"

export default function page() {
  return (
    <div>
      <SliderComp/>
      <FeaturedCategory/>
      <ProductCategory/>
      <FeaturedProducts/>
    </div>
  )
}
