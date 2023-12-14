import React, { useEffect, useState } from 'react';
function HotLunch() {
  const [chickenBucketItems, setChickenBucketItems] = useState([]);
  const api = 'https://63c9b142320a0c4c954daee6.mockapi.io/products';
  const fetchChickenBucketItems = async () => {
    try {
      const response = await fetch(api);
      const realdata = await response.json();
      const filteredItems = realdata.filter((item) => item.category === 'Hot Lunchs');
      setChickenBucketItems(filteredItems);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchChickenBucketItems();
  }, []);
  return (
    <div>
      {chickenBucketItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <p>{item.price}</p>
          <p>{item.name}</p>
          <p>{item.discription}</p>
        </div>
      ))}
    </div>
  );
}
export default HotLunch;
