import { FaCalendarAlt } from "react-icons/fa";
import Charts from "./Charts";
import { LuRefreshCcw } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
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
      <div className="bg-primary rounded-xl text-white mt-5 flex items-center justify-around p-12">
        <div>
          <h2 className="text-4xl font-bold mb-5">
            Optimize your task and <br /> performance
          </h2>
          <p className="text-lg">Do it with certainly in small steps</p>
        </div>
        <div>
          <img
            className="w-40 z-10 rounded-full -ml-10"
            src="https://media.licdn.com/dms/image/C4D33AQHTygjUmQBoYQ/productpage-image_1128_635/0/1617608358883/milople_subscriptions_recurring_payments_for_m2_image?e=1704232800&v=beta&t=P-EIUjCkqfxtURXtL7I0cTOlksXjKBCckiAdVMRaPXU"
            alt=""
          />
          <img
            className="w-40 z-0 rounded-full -mt-24"
            src="https://media.licdn.com/dms/image/C4D33AQHTygjUmQBoYQ/productpage-image_1128_635/0/1617608358883/milople_subscriptions_recurring_payments_for_m2_image?e=1704232800&v=beta&t=P-EIUjCkqfxtURXtL7I0cTOlksXjKBCckiAdVMRaPXU"
            alt=""
          />
        </div>
      </div>
      <div className="bg-white p-6 mt-6 rounded-xl">
        <div className="bg-white p-6 mt-6 rounded-xl flex items-center justify-around">
          <div className="bg-gray-200 p-12 inline-block rounded-xl">
            <h2 className="text-2xl font-bold text-black">Total Project</h2>
            <h2 className="text-action text-5xl font-bold">1200</h2>
          </div>
          <div>
            <div className="flex items-center justify-between my-8">
              <h2 className="text-2xl font-semibold">Weekly report</h2>
              <div className="text-lg flex items-center gap-5">
                <div>
                  <div className="badge badge-primary badge-sm mr-2"></div>
                  Project
                </div>
                <div>
                  <div className="badge badge-primary badge-sm mr-2"></div>Task
                </div>
              </div>
            </div>
            {/* charts use here ===================== */}
            <Charts />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 justify-evenly flex-wrap mt-14">
            {/* 1  */}
            <div className="bg-primary  flex-1 gap-10 p-6 px-12 justify-between rounded-xl space-y-4 text-white flex items-center">
              <div>
                <LuRefreshCcw size={50} />
                <h3 className="text-xl mt-4">On going</h3>
              </div>
              <h2 className="text-5xl  font-bold text-white">200</h2>
            </div>
            {/* 1  */}
            <div className="bg-action flex-1  gap-10 p-6 px-12 justify-between rounded-xl space-y-4 text-white flex items-center">
              <div>
                <FaHandPaper size={50} />
                <h3 className="text-xl mt-4">On hold</h3>
              </div>
              <h2 className="text-5xl  font-bold text-white">129</h2>
            </div>
            {/* 1  */}
            <div className="bg-success flex-1 gap-10 p-6 px-12 justify-between rounded-xl space-y-4 text-white flex items-center">
              <div>
                <FaCheckCircle size={50} />
                <h3 className="text-xl mt-4">Done</h3>
              </div>
              <h2 className="text-5xl  font-bold text-white">99</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
