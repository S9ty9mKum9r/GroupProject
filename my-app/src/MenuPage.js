import React, { useEffect, useState } from 'react'
function MenuPage(){
    const[dataone, setdataone] = useState([]);
    const[datatwo, setdatatwo] = useState([]);
    const[datathree, setdatathree] = useState([]);
    const[datafour, setdatafour] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const api = 'https://63c9b142320a0c4c954daee6.mockapi.io/products';
    const fetchdata = async()=>{
        try {
            const response = await fetch(api);
            const realdata = await response.json();
            const filteredone = realdata.filter((item) => item.category === 'Chicken Bucket');
            setdataone(filteredone);
            const filteredtwo = realdata.filter((item) => item.category === 'hot Deals');
            setdatatwo(filteredtwo);
            const filteredthree = realdata.filter((item) => item.category === 'Hot Lunchs');
            setdatathree(filteredthree);
            const filteredfour = realdata.filter((item) => item.category === 'Box Meals');
            setdatafour(filteredfour);
        }
         catch (error){
            console.log(error);
        }
    }
    const ClickOne=()=>{

    }
    const ClickTwo=()=>{

    }
    const ClickThree=()=>{

    }
    const ClickFour=()=>{
      
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return(
    <div>
      <button onClick = {ClickOne}>ChickenBucket</button>
      <button onClick = {ClickTwo}>HotDeals</button>
      <button onClick = {ClickThree} >HotLunch</button>
      <button onClick = {ClickFour} >BoxMeals</button>
    </div>
  )
}
export default MenuPage
