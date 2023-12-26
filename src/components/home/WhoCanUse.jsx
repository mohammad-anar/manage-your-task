const WhoCanUse = () => {
  return (
    <div className="my-12">
      <h2 className="text-4xl font-semibold text-center">Who can use these website</h2>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-12 justify-around">
      <img src="https://zahiraccounting.com/en-my/wp-content/uploads/2015/10/zahir-accounting-software-have-more-than-60.000-users.png" alt="" />
        <h2 className="text-xl max-w-2xl ">
          The people whow are need to manage task or work in an secure place, he
          can use the web. You can  manage your task securely here. It will push notification for every un complete task.
          <p className="text-2xl font-semibold mt-4">who can use?</p>
          <ul className="ml-5">
            <li>1. Developers</li> 
            <li>2. engineers</li> 
            <li>3. Doctors</li> 
            <li>4. Teachers</li> 
          </ul>
        </h2>
        <p></p>
      </div>
    </div>
  );
};

export default WhoCanUse;
