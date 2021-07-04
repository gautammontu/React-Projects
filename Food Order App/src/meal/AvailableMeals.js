import { useEffect,useState } from 'react';
import classes from '../meal/AvailableMeals.module.css'
import Card from '../Card/Card'
import MealsItems from './MealItems/MealItems'
/*
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ]; */

  let DUMMY_MEALS;
  


const AvailableMeals=()=>{

  const [meals, setMeals] = useState("")
  const [isLoading,setLoading]=useState(false)

  
  /*
    const meals=DUMMY_MEALS.map(mel=>{

        return <MealsItems key={mel.id} 
        name={mel.name} 
        price={mel.price} 
        description={mel.description} 
        id={mel.id}/>
    })
   */


    const fetchMenu= async ()=>{

      try
      {
        setLoading(true)

      const response = await fetch("https://react-http-f3620-default-rtdb.firebaseio.com/menu.json");

      const datajson=  await  response.json()

      if(!response.ok){
         
        throw new Error(" Some Thing went wrong!!")

      }

     for(let mydata in datajson ){

    DUMMY_MEALS = datajson[mydata]
    
    
   }



  let  meals1=DUMMY_MEALS.map(mel=>
    {
   
    return <MealsItems key={mel.id} 
    name={mel.name} 
    price={mel.price} 
    description={mel.description} 
    id={mel.id}/>
      })
       setMeals(meals1)

       setLoading(false)

      }
      catch(error){
 
        setMeals(error.message)

      }

  }


  useEffect(()=>{

    fetchMenu()
  },[])




return (
    <section className={classes.meals}>
       <Card>
        <ul>
      {isLoading && "Loading..."}    
      {meals}
     
        </ul>

        </Card> 
    </section>
)

}

export default AvailableMeals;