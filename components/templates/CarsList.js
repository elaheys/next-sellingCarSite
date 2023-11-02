import { useRouter } from 'next/router';
//icons
import Back from '../icons/Back';
//styles
import styles from './CarsList.module.css';
//components
import Card from '../module/Card';

const CarsList = ({data}) => {

    const router = useRouter();
    const backHandler = () => {
        router.back(); 
    }

    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back/>
                <p>back</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map(car => <Card key={car.id} {...car}/>)
                }
            </div>
        </div>
    );
};

export default CarsList;