import { setSearchedQuery } from "@/redux/jobSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
 
// //css
import '../run.css';


 
const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mern Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];


const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchjobHandler = (query) => {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
  }
  return (
    <div>
      <div>
        
        {/* added continous message as of now during testing in further updateswill remove it */}
        <div className="relative w-full mt-4 flex justify-center">
              <div className="marquee-container">
                <p className="marquee-text text-2xl font-bold text-red-500">
                  🚀 Find Your Dream Job | Apply Now | Top Companies Hiring! 🚀
                </p>
              </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-blue-600 mt-4 ">
            Job Categories
        </h1>
        <p className="text-center text-gray-600">
           Browse through a wide range of career opportunities.
        </p>
      </div>
      {/* <Carousel className="w-full   max-w-xl  mx-auto my-10">
        <CarouselContent>
          {Category.map((category, index) => {
            return (
              <CarouselItem className="md:basis-1/2 lg-basis-1/3 ">
                <Button onClick={() => searchjobHandler(category)}>
                  {category}
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

<Carousel className="w-full max-w-xl mx-auto my-10 overflow-hidden relative">
  <CarouselContent className="flex carousel-marquee">
    {Category.map((category, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex-shrink-0">
        <Button onClick={() => searchjobHandler(category)}>{category}</Button>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  );
};

export default Categories;
