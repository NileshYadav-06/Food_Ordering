import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // API Calls
  }, []);

 
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <button onClick={() => updateCount()}>Update</button>
      <h2>Name: {name}</h2>
      <h3>Location: Bhadohi</h3>
      <h4>Contact: nilesh4149yaduvanshi@gmail.com</h4>
    </div>
  );
};

export default User;
