import { setLoading, setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    // adharcard: "",
    adminPassword:"",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const ChangeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true)); // Start loading
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed");
    } finally {
      dispatch(setLoading(false)); // End loading
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-5xl mx-auto mt-14
                bg-white p-10 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.3)] 
                transform transition-all duration-300 hover:scale-105 hover:shadow-[15px_15px_25px_rgba(0,0,0,0.4)]">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 my-5"
        >
          <h1 className="font-extrabold text-3xl text-center text-blue-600 
               drop-shadow-[3px_3px_5px_rgba(0,0,0,0.5)] 
               bg-gradient-to-r from-blue-500 to-indigo-600 
               text-transparent bg-clip-text">
            Login
          </h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="johndoe@gmail.com"
            ></Input>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="********"
            ></Input>
          </div>
          {/* <div className="my-2">
            <Label>Adhar Card Number</Label>
            <Input
              type="text"
              value={input.adharcard}
              name="password"
              onChange={changeEventHandler}
              placeholder="123456789012"
            ></Input>
          </div> */}

           {/* added admin password */}
           <div className="my-2">
            <Label>Admin Password</Label>
            <Input
              type="password"
              value={input.adminPassword}
              name="adminPassword"
              onChange={changeEventHandler}
              placeholder="For admin password, go to 'Contact Us' and drop a message "
              className="placeholder:text-xs placeholder:italic"
            ></Input>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5 ">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-3/4 py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-blue-600 hover:bg-blue-800/90 rounded-md"
            >
              Login
            </button>
          )}

          <div className=" ">
            <p className="text-gray-700  text-center my-2">
              Create new Account{" "}
              <Link to="/register" className="text-blue-700">
                <button className=" w-1/2 py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-red-600  hover:bg-red-700 rounded-md">
                  Register
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
