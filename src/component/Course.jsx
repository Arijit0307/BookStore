import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json"; // You already imported this
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 text-lg text-gray-700 dark:text-gray-300">
  Whether you're here to sharpen your skills, explore a new subject, or kickstart your learning journey,
  you've come to the right place. Our carefully curated courses are designed to inspire, educate, and
  empower learners of all levels. Dive in and start learning something new today — we're excited to see
  what you'll achieve!
</p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
