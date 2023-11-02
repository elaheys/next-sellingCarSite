import Categories from "../components/module/Categories";
import CarsPage from "../components/templates/CarsPage";
import CarsData from "../data/CarsData";
import SearchBar from "../components/module/SearchBar";
import AllCarsButton from "@/components/module/AllCarsButton";

function Index() {
  const cars = CarsData.slice(0,3)
  return (
    <div>
      <SearchBar/>
      <Categories/>
      <AllCarsButton/>
      <CarsPage data={cars}/>
    </div>
  )
}

export default Index;
