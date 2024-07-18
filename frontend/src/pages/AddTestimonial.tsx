import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { convertToBase64 } from "../functions/convertToBase64";
import axios from "axios";

const url = "http://localhost:3000/testimonials";

interface ITestimonial {
  name: String;
  phone_number: String;
  testimonial: String;
  role: String;
  organization: String;
}

const AddTestimonial = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [testimonial, setTestimonial] = useState<string>("");
  const [role, setRole] = useState<String>("");
  const [organization, setOrganization] = useState<String>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTestimonial: ITestimonial = {
      name,
      phone_number: phoneNumber,
      testimonial,
      role,
      organization,
    };

    createTestimonial(newTestimonial);
  };

  const createTestimonial = async (testimonial: ITestimonial) => {
    try {
      await axios.post(url, testimonial);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div className="flex items-center justify-center gap-20">
        <div className="w-[420px]">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <div className="flex mb-10">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bonnie Green"
            />
          </div>
        </div>
        <div className="w-[420px]">
          <label
            htmlFor="phone-number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <div className="flex mb-10">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FaPhone />
            </span>
            <input
              type="tel"
              id="phone-number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+94 12 345 6789"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-10 justify-center gap-20">
        <div>
          <label
            htmlFor="organization"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Organization
          </label>
          <input
            type="text"
            id="organization"
            onChange={(e) => setOrganization(e.target.value)}
            className="bg-gray-50 border w-[420px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="London Stock Exchange Group"
            required
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            onChange={(e) => setRole(e.target.value)}
            className="bg-gray-50 border w-[420px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Business Analyst"
            required
          />
        </div>
      </div>

      <div className="flex mb-10 justify-center">
        <div>
          <label
            htmlFor="testimonial"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your testimonial
          </label>
          <textarea
            id="testimonial"
            rows={5}
            onChange={(e) => setTestimonial(e.target.value)}
            className="block p-2.5 w-[920px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave your testimonial here..."
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[920px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTestimonial;
