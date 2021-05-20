import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sahi Fish',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Sahni Veg & Non Veg',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: ' Burger',
    description: 'indian, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Mutton Masal',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
