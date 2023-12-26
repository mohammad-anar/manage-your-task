import { Link } from "react-router-dom";
import Logo from "../shared/Logo";

const Footer = () => {
    return (
        <div>
            <div>
      <footer className="footer grid grid-cols-2 lg:grid-cols-4 p-10 bg-purple-500  text-gray-200">
        <nav className="text-base w-full flex justify-start md:justify-center">
          <div>
          <header className="text-xl text-white font-bold">Contact Us</header>
          <p>TaskMingle</p>
          <p>No. 1259 Freedom, New York</p>
          <p>United States +91-987654321</p>
          <p>emo@exampledemo.com</p>
          </div>
        </nav>
        <nav className="text-base w-full felx justify-center">
          <div>
          <header className="text-xl text-white font-bold">Information</header>
          
          <a className="link link-hover hover:text-red-600 duration-300">
            Checkout
          </a>
          <a className="link link-hover hover:text-red-600 duration-300">
            License Policy
          </a>
          <a className="link link-hover hover:text-red-600 duration-300">
            Affiliate
          </a>
          </div>
        </nav>
        <nav className="text-base w-full flex justify-start md:justify-center">
          <div className="space-y-4">
          <header className="text-xl text-white font-bold">
            Customer Service
          </header>
          <div className="flex flex-col ">
          <a className="link link-hover hover:text-red-600 duration-300">
            Help Center
          </a>
          <a className="link link-hover hover:text-red-600 duration-300">
            Redeem Voucher
          </a>
          <a className="link link-hover hover:text-red-600 duration-300">
            Contact Usy
          </a>
          <a className="link link-hover hover:text-red-600 duration-300">
            Policies & Rules
          </a>
          </div>
          </div>
        </nav>

        <nav className="w-full flex justify-start md:justify-center">
          <div>
          <Link to="/"><Logo/></Link>
          <div className="flex items-center gap-2 mt-4">
            <img className="w-10" src='https://cdn-icons-png.flaticon.com/512/174/174861.png' alt="card icon" />
            <img className="w-10 ml-4"  src='https://cdn-icons-png.flaticon.com/512/174/174861.png' alt="card icon" />
            <img className="w-14" src='https://cdn-icons-png.flaticon.com/512/174/174861.png'alt="card icon" />
          </div>
          </div>
        </nav>
      </footer>
      <footer>
        <h3 className="text-center text-white bg-black p-4 text-base">Copyright &copy; Team90Degree | Built with drou by Team90Degree.</h3>
      </footer>
    </div>
        </div>
    );
};

export default Footer;