import { FaCalendarAlt } from "react-icons/fa";

const TasklistHeader = () => {
    return (
        <div className="flex items-center justify-between bg-white rounded-xl p-4">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <h4 className="text-sm">Friday, 10 Feb, 2023</h4>
        </div>
        <div className="flex items-center gap-2 bg-primary text-white p-2 rounded-xl">
          <FaCalendarAlt />
          <div>12-Oct-2023 12-Dec-2023</div>
        </div>
      </div>
    );
};

export default TasklistHeader;