import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";
import axios from "axios"; // Import axios
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  //To keep the colour on List
  const location = useLocation(); // Get current route path

  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
        <h1 className="text-4xl font-extrabold tracking-wide relative">
          <span className="bg-gradient-to-r text-6xl from-purple-600 to-indigo-500 text-transparent bg-clip-text drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">
            Job
          </span>{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">
            Mitra
          </span>
        </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to={"/admin/companies"}>Companies</Link>
                </li>
                <li>
                  <Link to={"/admin/jobs"}>Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Link to={"/Home"}  className={`text-white py-2 px-4 rounded-full transition-all hover:bg-blue-600 hover:scale-150 hover:shadow-lg ${
                   location.pathname === "/Home" ? "bg-purple-600" : "bg-blue-500"
                 }`}>Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/Browse"} className={`text-white py-2 px-4 rounded-full transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-lg ${
                   location.pathname === "/Browse" ? "bg-purple-600" : "bg-blue-500"
                 }`}>Browse</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/Jobs"} className={`text-white py-2 px-4 rounded-full transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-lg ${
                   location.pathname === "/Jobs" ? "bg-purple-600" : "bg-blue-500"
                 }`}>Jobs</Link>
                </li>
                 
               {/* contact link */}
                <li>
                  {" "}
                  <Link to={"/Contact"} className={`text-white py-2 px-4 rounded-full transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-lg ${
                   location.pathname === "/Contact" ? "bg-purple-600" : "bg-blue-500"
                 }`}>Contact Us</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className=" flex items-center gap-2">
              <Link to={"/login"}>
                {" "}
                <Button variant="outline" className="bg-green-600 hover:bg-green-700 ">Login</Button>
              </Link>
              <Link to={"/register"}>
                {" "}
                <Button className="bg-red-600  hover:bg-red-700">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-2 text-gray-600  ">
                  {user && user.role === "Student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2></User2>
                      <Button variant="link">
                        {" "}
                        <Link to={"/Profile"}> Profile</Link>{" "}
                      </Button>
                    </div>
                  )}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut></LogOut>
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
