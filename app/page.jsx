import FeaturedCategory from "./components/featuredCategory/FeaturedCategory"
import ProductCategory from "./components/productCategory/ProductCategory"
import SliderComp from "./components/slider/SliderComp"
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
