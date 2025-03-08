import { useEffect, useState } from "react";
import AddResume from "./components/addResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../services/GlobalApi";
import ResumeItem from "./components/resumeItem";
import Loader from "./components/loading_item";
function Dashboard() {
  const { user } = useUser();
  const [userResumeList, setUserResumeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    user && getUserResumeList();
  }, [user]);

  // get user data
  const getUserResumeList = () => {
    GlobalApi.getUserResume(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        setUserResumeList(resp.data.data);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      {/* <Header /> */}
      <h2 className='font-bold text-3xl'>Dashboard</h2>
      <p>Create your stunning resume with AI.</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <AddResume />
        {!isLoading ? (
          <div className='flex'>
            {userResumeList &&
              userResumeList.map((resume, index) => (
                <ResumeItem resume={resume} key={index} />
              ))}
          </div>
        ) : (
          <Loader className='w-10' />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
