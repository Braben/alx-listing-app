import React from "react";
import Card from "../components/common/Card";

const Home = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Beautiful Beach House"
        description="A cozy beach house with a sea view and private pool."
        imageUrl="https://via.placeholder.com/400x200"
        onClick={() => alert("Details clicked!")}
      />
      <Card
        title="Mountain Retreat"
        description="Peaceful cabin located in the heart of the mountains."
        imageUrl="https://via.placeholder.com/400x200"
        onClick={() => alert("Details clicked!")}
      />
    </div>
  );
};

export default Home;
