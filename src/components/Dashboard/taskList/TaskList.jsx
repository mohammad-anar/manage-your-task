
import TasklistHeader from "./TasklistHeader";
import TaskSection from "./TaskSection";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const TaskList = () => {


  const {data:tasks, isLoading, refetch} = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5001/tasks")
      return await res.data;
    }
  });
  // const [tasks, setTask] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:5001/tasks").then((res) => {
  //     setTask(res?.data);
  //   });
  // }, []);
  console.log(tasks);

  const statuses = ["todo", "inprogress", "completed"];
  return (
    <div>
      <TasklistHeader />
        {isLoading? <h2 className="text-3xl text-red-600">Loading........</h2>:<div className="grid grid-cols-3 gap-10 my-12">
          {statuses.map((sts, indx) => {
            return (
              <TaskSection
                key={indx}
                tasks={tasks}
                refetch={refetch}
                status={sts}
              />
            );
          })}
        </div>}
    </div>
  );
};

export default TaskList;
