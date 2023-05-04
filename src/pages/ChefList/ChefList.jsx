import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChefList = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Chef List</h2>
      <div>
        {chef.map((chef) => (
          <p key={chef.id}>
            <Link to={`/chef/${chef.id}`} className="text-body text-decoration-none">{chef.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChefList;
