import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const CreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // onsubmit fn ================================
  const onSubmit = async (data) => {
    const date = new Date();
    const title = data?.title;
    const description = data?.description;
    const task = {
      title, description, status: "todo" ,date: date.toLocaleDateString() 
    }
    axios.post("http://localhost:5001/tasks", task).then(res => {
      if(res.data?.insertedId){
        toast.success("task created");
      }
    }).catch(err => console.log(err))
    console.log(task);
  };
  return (
    <div className="bg-white h-full rounded-xl flex items-center col-span-10 justify-center">
      <div className="px-5 md:px-12 flex flex-col items-center justify-center">
        <form
          className="flex flex-col items-center py-12 px-8 shadow-md w-[320px] md:w-[450px] lg:w-[520px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="mb-6 mt-4 text-primary text-3xl font-semibold">
            Add task
          </h2>
          {/* input 3  */}
          <div className="w-full mt-4">
            <label
              className="font-medium mb-2 ml-2 inline-block"
              htmlFor="title"
            >
              Title<span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="title"
              className="border w-full p-3 outline-0 bg-white rounded-full px-5"
              {...register("title", { required: true })}
              placeholder="Enter task's title "
            />
            {errors.title && (
              <span className="text-primary text-sm ml-2">
                Title is required
              </span>
            )}
          </div>
          {/* input 3  */}
          <div className="w-full mt-4">
            <label
              className="font-medium mb-2 ml-2 inline-block"
              htmlFor="description"
            >
              Description<span className="text-primary">*</span>
            </label>
            <textarea
            rows={5}
            id="description"
              className="border w-full p-3 outline-0 bg-white rounded-xl resize-none px-5"
              placeholder="Task description..."
              {...register("description", { required: true })}
            ></textarea>
            {errors.Description && (
              <span className="text-primary text-sm ml-2">
                Description is required
              </span>
            )}
          </div>

          <input
            type="submit"
            value={"Submit"}
            className="btn bg-primary text-white text-base font-bold rounded-full w-full mt-4 border-0"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
