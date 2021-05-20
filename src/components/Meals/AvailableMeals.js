import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Fish masala',
    description: 'Finest fish and veggies',
    price: 122.99,
  },
  {
    id: 'm2',
    name: 'Mutton curry',
    description: 'A indian specialty!',
    price: 116.5,
  },
  {
    id: 'm3',
    name: 'Indian Burger',
    description: 'indina, raw, meaty',
    price: 112.99,
  },
  {
    id: 'm4',
    name: 'Sahni Veg',
    description: 'Healthy...and green...',
    price: 118.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
