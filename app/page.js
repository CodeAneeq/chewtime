import PrimaryBtn from "@/components/Buttons/PrimaryBtn";
import CategoryCard from "@/components/Cards/CategoryCard";
import FoodCard from "@/components/Cards/FoodCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-30 mt-10 flex justify-around flex-col  ">
      <figure className="h-120 w-full relative bg-[url('/frontend_assets/header_img.png')] rounded-2xl bg-cover p-10 flex flex-col justify-end">
        <h1 className="text-6xl text-white font-medium">Order your <br/> favourite food here</h1>
        <p className="text-white max-w-1/2 mt-5 text-sm">Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <PrimaryBtn style={{backgroundColor: "white", border: "none", marginTop: "20px"}}>View Menu</PrimaryBtn>
      </figure>
      <div className="mt-15">
        <h2 className="text-3xl font-medium">Explore Our Menu</h2>
        <p className="mt-3 w-2/3">Choose from a diverse menu featuring a detectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="flex gap-14 mt-12">
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
        </div>
      </div>
        <hr className="text-gray-400 border-2 my-10 w-full"/>
      <div className="flex flex-col justify-start ">
        <h2 className="text-3xl font-medium">Top Dishes Near You</h2>
         <div className="flex gap-1 justify-between mt-12 flex-wrap">
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 mb-20">
        <h2 className="text-5xl font-medium text-center">For Better Exprience Download <br/> ChewTime App</h2>
        <div className="mt-10 flex gap-8">
          <Image src="/frontend_assets/play_store.png" width={200} height={100} alt="playstore"/>
          <Image src="/frontend_assets/app_store.png" width={200} height={100} alt="appstore"/>
        </div>
      </div>
    </div>
  );
}
