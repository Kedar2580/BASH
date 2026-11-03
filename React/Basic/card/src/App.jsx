import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-gray-200 px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>

        <div className="bg-violet-400 h-[4px] w-1/5 mt-1"></div>

        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
