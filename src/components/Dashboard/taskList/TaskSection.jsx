/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import axios from "axios";
import toast from "react-hot-toast";

const TaskSection = ({ tasks, refetch, status }) => {
  const todos = tasks?.filter((task) => task.status === "todo");
  const inProgress = tasks?.filter((task) => task.status === "inprogress");
  const completed = tasks?.filter((task) => task.status === "completed");
  //   console.log(status, todos, inProgress, completed);

  let cartValue = status === "todo" ? todos : [];
  if (status === "inprogress") {
    cartValue = inProgress;
  }
  if (status === "completed") {
    cartValue = completed;
  }
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addToSection(item?.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
//   drop fn for set item 
  const addToSection = (id) => {
    axios.patch(`http://localhost:5001/tasks?id=${id}&status=${status}`).then(res => {
        
        if (res.data.modifiedCount > 0){
            toast.success("drag & drop complete 🔥");
            refetch();
        }
    }).catch(err => toast.error(err.message))
  }

  return (
    <div ref={drop} className={`${isOver && "bg-blue-300 "} duration-300 bg-gray-100 p-5 rounded-xl`}>
      {/* section title  */}
      <h2
        className={` capitalize text-xl font-bold p-2 rounded-xl text-white text-center mb-5 ${
          status === "todo" && "bg-warning"
        } ${status === "inprogress" && "bg-purple-600"} ${
          status === "completed" && "bg-success"
        }`}
      >
        {status === "inprogress" ? "In Progress" : status}
      </h2>
      <div>
        {cartValue?.map((task) => (
          <TaskCard key={task?._id} task={task} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
