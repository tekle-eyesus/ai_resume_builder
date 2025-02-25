import React from "react";
import AddResume from "./components/addResume";
function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      {/* <Header /> */}
      <h2 className='font-bold text-3xl'>Dashboard</h2>
      <p>Create your stunning resume with AI.</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <AddResume />
      </div>
    </div>
  );
}

export default Dashboard;
