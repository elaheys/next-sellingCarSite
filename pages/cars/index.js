import Categories from "@/components/module/Categories";
import CarsPage from "../../components/templates/CarsPage";
import CarsData from "../../data/CarsData";
import SearchBar from "../../components/module/SearchBar";

const Details = () => {
    return (
        <div>
            <SearchBar/>
            <Categories/>
            <CarsPage data={CarsData}/>
        </div>
    );
};

export default Details;