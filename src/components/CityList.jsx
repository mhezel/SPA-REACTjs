
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";


function CityList({cities, isLoading}){

    console.log(cities);
    
    if(isLoading) return <Spinner/>;
    if (!cities.length > 0) return <Message message={'Add your first city by clicking on the Map feature'}/>
    return(
        <ul className={styles.CityList}>
            {cities.map((city) => (
            <CityItem city={city} key={city.id}/>
            ))}
        </ul>
    );
}
export default CityList;


