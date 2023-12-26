const Banner = () => {
  return (
    <div className="banner h-[700px] bg-black flex items-center justify-around lg:px-12">
      <div className="">
        <h2 className="text-2xl font-semibold text-primary">Hello!</h2>

        <h2 className="text-5xl font-bold text-white mt-2">
          You can manage your task.
        </h2>
        <button className="btn bg-action border-0 btn-lg text-xl text-white hover:bg-blue-400 mt-6 inline-block">
          Let&apos;s Explore
        </button>
      </div>
      <div className="">
        <img className="rounded-xl opacity-90" src="https://img.freepik.com/free-vector/project-management-goal-completion-list-questionnaire-survey-answering-business-organization-tool_335657-3289.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
