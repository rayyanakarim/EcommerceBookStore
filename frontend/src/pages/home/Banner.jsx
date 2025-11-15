import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-screen-2xl mx-auto px-4 py-10 font-primary gap-12">
      {/* Right Section: Image */}

      <div className="md:w-1/2 w-full flex items-center md:justify-end ">
        <img src={bannerImg} alt="Books Banner" />
      </div>

      {/* Left Section: Text and Button */}

      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Welcome to the Book Store
        </h1>
        <p className="mb-10">
          Discover your next great read with us!Discover your next great read
          with us!Discover your next great read with us!Discover your next great
          read with us!Discover your next great read with us!Discover your next
          great read with us!
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
