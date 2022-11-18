import { MainIngredients } from '../main-ingredients/main-ingredients';
import styles from '../burger-constructor/burger-constructor.module.css';

export const MainIngredientsContainer = () => {
    return (
        <div className={styles.content}>
            <MainIngredients />
        </div>
    );
}