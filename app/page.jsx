import FeaturedCategory from "@/app/components/featuredCategory/FeaturedCategory"
import ProductCategory from "@/app/components/productCategory/ProductCategory"
import FeaturedProducts from "@/app/components/featuredProduct/FeaturedProducts"
import SliderComp from "@/app/components/slider/SliderComp"
import { getServerSession } from "next-auth"
import { nextAuthOptions } from "@/app/utils/authOptions"
import { redirect } from "next/navigation"

export default async function page() {
  const session = await getServerSession(nextAuthOptions)
  if(!session){
    redirect('api/auth/signin')
  }else{
    console.log("session :", session)
  }
  return (
    <div>
      <SliderComp/>
      <FeaturedCategory/>
      <ProductCategory/>
      <FeaturedProducts/>
    </div>
  )
}
