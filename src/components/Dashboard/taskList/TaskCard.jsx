/* eslint-disable react/prop-types */

import axios from "axios";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TaskCard = ({task, refetch}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task?._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      console.log(isDragging);

    //   delete task fn 
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "delete"
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`http://localhost:5001/tasks/${id}`)
              .then(res => {
                console.log(res?.data);
                if(res?.data?.deletedCount > 0) {
                    toast.success("task successfully deleted")
                    refetch();
                }
              }).catch(err => toast.error(err.message))
            }
          });
    }
    return (
        <div ref={drag} className={` ${isDragging? "opacity-50" : ""}bg-white p-4 rounded-xl mb-4 cursor-pointer`}>
            <h2 className="text-lg font-bold">{task?.title === "inprogress" ? "In Progress" :task?.title}</h2>
            <p>{task?.description.length > 100 ? task?.description.slice(0, 100) : task?.description}</p>
            <p>{task?.date}</p>
            <div className="flex justify-end">
                <button onClick={() => handleDelete(task?._id)} className="btn btn-circle btn-sm bg-red-600 text-white">X</button>
            </div>
        </div>
    );
};

export default TaskCard;