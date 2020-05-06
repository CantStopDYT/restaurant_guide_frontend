import React from "react";
import { Formik, Form, Field } from "formik";

import { from_hours_select, to_hours_select } from "./AddForm/hourSelect";
import {
  validateName,
  validateUrl,
  validateRequired,
} from "./AddForm/validationFunctions";
import DisplayError from "./AddForm/DisplayError";
//import * as yup from "yup";

function AddForm() {
  const initialValues = {
    name: "",
    status: "",
    website_url: "",
    menu_url: "",
    location: [
      {
        street_address: "",
        city: "",
        state: "OH",
        zipcode: "",
        phone_number: "",
        hours: [
          { weekday: "Monday", from_hour: "", to_hour: "", closed: false },
          { weekday: "Tuesday", from_hour: "", to_hour: "", closed: false },
          { weekday: "Wednesday", from_hour: "", to_hour: "", closed: false },
          { weekday: "Thursday", from_hour: "", to_hour: "", closed: false },
          { weekday: "Friday", from_hour: "", to_hour: "", closed: false },
          { weekday: "Saturday", from_hour: "", to_hour: "", closed: false },
          { weekday: "Sunday", from_hour: "", to_hour: "", closed: false },
        ],
      },
    ],
    order_methods: [],
    delivery_options: [],
    pickup_options: [],
    dietary_options: [],
  };

  return (
    <div className="sm:w-3/5 m-auto">
      <p> this is the form</p>
      <pre></pre>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className="">
            <div className="bg-red-500">
              {/* */}{" "}
              <pre className="text-left">{JSON.stringify(values, null, 4)}</pre>
            </div>
            <div className="m-3 flex flex-row">
              <label
                htmlFor="name"
                className="text-gray-800 text-left pr-4 font-semibold w-1/3 m-auto"
              >
                Business Name
              </label>
              <Field
                name="name"
                type="text"
                className="appearance-none bg-gray-200 border-gray-200 rounded p-2 w-2/3"
                validate={validateName}
                onChange={handleChange}
              />
            </div>
            {errors.name && touched.name && (
              <DisplayError>{errors.name}</DisplayError>
            )}
            <div className="m-3 flex flex-row">
              <label
                htmlFor="status"
                className="text-gray-800 text-left pr-4 font-semibold w-1/3 m-auto"
              >
                Status
              </label>
              <Field
                name="status"
                as="select"
                className="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-2/3"
              >
                <option value="Regular Hours">Regular Hours</option>
                <option value="Regular Hours">Regular Hours</option>
                <option value="Temporarily Closed">Temporarily Closed</option>
              </Field>
            </div>
            <div className="p-2 flex flex-row">
              <label
                htmlFor="website_url"
                className="text-gray-800 text-left pr-4 font-semibold w-1/3 m-auto"
              >
                Website
              </label>
              <Field
                name="website_url"
                className="appearance-none bg-gray-200 border-gray-200 rounded p-2 w-2/3"
                placeholder="https://restaurant-website.com"
                validate={validateUrl}
                onChange={handleChange}
              />
            </div>
            {errors.website_url && touched.website_url && (
              <DisplayError>{errors.website_url}</DisplayError>
            )}
            <div className="p-2 flex flex-row">
              <label
                htmlFor="menu_url"
                className="text-gray-800 text-left pr-4 font-semibold w-1/3 m-auto"
              >
                Link to Menu
              </label>

              <Field
                name="menu_url"
                className="appearance-none bg-gray-200 border-gray-200 rounded p-2 w-2/3"
              />
            </div>
            <hr />

            <div className="p-2 flex flex-row">
              <label
                htmlFor="street_address"
                className=" text-left text-gray-800 pr-4 font-semibold w-1/3 m-auto"
              >
                Street Address
              </label>

              <Field
                name="location[0].street_address"
                className="appearance-none bg-gray-200 border-gray-200 rounded p-2 w-2/3"
              />
            </div>

            <div className="p-2 flex flex-row">
              <label
                htmlFor="location[0].city"
                className=" text-left text-gray-800 pr-4 font-semibold w-1/3 m-auto"
              >
                City
              </label>

              <Field
                name="location[0].city"
                className="appearance-none bg-gray-200 border-gray-200 rounded p-2 w-2/3"
                onChange={handleChange}
                validate={validateRequired}
              />
            </div>
            {errors.location && touched.location && (
              <DisplayError>{errors.location[0].city}</DisplayError>
            )}
            <div className="p-2 flex flex-row">
              <label
                htmlFor="location[0].zipcode"
                className="text-left text-gray-800 pr-4 font-semibold w-1/3 m-auto"
              >
                Zip Code
              </label>

              <Field
                name="location[0].zipcode"
                className="appearance-none bg-gray-200 border-gray-200 rounded p-2 w-2/3"
                onChange={handleChange}
                validate={validateRequired}
              />
            </div>
            {errors.location && touched.location && (
              <DisplayError>{errors.location[0].zipcode}</DisplayError>
            )}
            <div className="p-2 flex flex-row">
              <label
                htmlFor="location[0].phone_number"
                className="text-left text-gray-800 pr-4 font-semibold w-1/3 m-auto"
              >
                Phone Number
              </label>

              <Field
                name="location[0].phone_number"
                className="appearance-none bg-gray-200 border-gray-200 rounded p-2 w-2/3"
                placeholder="9371234567"
              />
            </div>
            <hr />
            {/* Hours */}
            <div>
              <h2 className="font-bold text-xl text-left text-gray-800 p-1">
                Hours
              </h2>

              {/*Monday*/}
              <div className="flex flex-row flex-wrap">
                <p className="text-left text-gray-800 font-semibold p-2 w-full">
                  Monday
                </p>
                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">From</label>
                  <Field
                    name="location[0].hours[0].from_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {from_hours_select}
                  </Field>
                </span>

                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">To</label>
                  <Field
                    name="location[0].hours[0].to_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {to_hours_select}
                  </Field>
                </span>
                <span className="p-1 w-full sm:w-1/3 text-gray-800 text-left m-auto">
                  <label className=" m-auto">
                    <Field
                      type="checkbox"
                      name="location[0].hours[0].closed"
                      className="m-2 float-left"
                    />
                    Closed
                  </label>
                </span>
                <hr className="w-full m-2" />
              </div>
              {/*Tuesday*/}
              <div className="flex flex-row flex-wrap">
                <p className="text-left text-gray-800 font-semibold p-2 w-full">
                  Tuesday
                </p>
                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">From</label>
                  <Field
                    name="location[0].hours[1].from_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {from_hours_select}
                  </Field>
                </span>

                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">To</label>
                  <Field
                    name="location[0].hours[1].to_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {to_hours_select}
                  </Field>
                </span>
                <span className="p-1 w-full sm:w-1/3 text-gray-800 text-left m-auto">
                  <label className=" m-auto">
                    <Field
                      type="checkbox"
                      name="location[0].hours[1].closed"
                      className="m-2 float-left"
                    />
                    Closed
                  </label>
                </span>
                <hr className="w-full m-2" />
              </div>
              {/*Wednesday*/}
              <div className="flex flex-row flex-wrap">
                <p className="text-left text-gray-800 font-semibold p-2 w-full">
                  Wednesday
                </p>
                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">From</label>
                  <Field
                    name="location[0].hours[2].from_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {from_hours_select}
                  </Field>
                </span>

                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">To</label>
                  <Field
                    name="location[0].hours[2].to_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {to_hours_select}
                  </Field>
                </span>
                <span className="p-1 w-full sm:w-1/3 text-gray-800 text-left m-auto">
                  <label className=" m-auto">
                    <Field
                      type="checkbox"
                      name="location[0].hours[2].closed"
                      className="m-2 float-left"
                    />
                    Closed
                  </label>
                </span>
                <hr className="w-full m-2" />
              </div>
              {/*Thursday*/}
              <div className="flex flex-row flex-wrap">
                <p className="text-left text-gray-800 font-semibold p-2 w-full">
                  Thursday
                </p>
                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">From</label>
                  <Field
                    name="location[0].hours[3].from_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {from_hours_select}
                  </Field>
                </span>

                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">To</label>
                  <Field
                    name="location[0].hours[3].to_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {to_hours_select}
                  </Field>
                </span>
                <span className="p-1 w-full sm:w-1/3 text-gray-800 text-left m-auto">
                  <label className=" m-auto">
                    <Field
                      type="checkbox"
                      name="location[0].hours[3].closed"
                      className="m-2 float-left"
                    />
                    Closed
                  </label>
                </span>
                <hr className="w-full m-2" />
              </div>

              {/*Friday*/}
              <div className="flex flex-row flex-wrap">
                <p className="text-left text-gray-800 font-semibold p-2 w-full">
                  Friday
                </p>
                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">From</label>
                  <Field
                    name="location[0].hours[4].from_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {from_hours_select}
                  </Field>
                </span>

                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">To</label>
                  <Field
                    name="location[0].hours[4].to_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {to_hours_select}
                  </Field>
                </span>
                <span className="p-1 w-full sm:w-1/3 text-gray-800 text-left m-auto">
                  <label className=" m-auto">
                    <Field
                      type="checkbox"
                      name="location[0].hours[4].closed"
                      className="m-2 float-left"
                    />
                    Closed
                  </label>
                </span>
                <hr className="w-full m-2" />
              </div>

              {/*Saturday*/}
              <div className="flex flex-row flex-wrap">
                <p className="text-left text-gray-800 font-semibold p-2 w-full">
                  Saturday
                </p>
                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">From</label>
                  <Field
                    name="location[0].hours[5].from_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {from_hours_select}
                  </Field>
                </span>

                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">To</label>
                  <Field
                    name="location[0].hours[5].to_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {to_hours_select}
                  </Field>
                </span>
                <span className="p-1 w-full sm:w-1/3 text-gray-800 text-left m-auto">
                  <label className=" m-auto">
                    <Field
                      type="checkbox"
                      name="location[0].hours[5].closed"
                      className="m-2 float-left"
                    />
                    Closed
                  </label>
                </span>
                <hr className="w-full m-2" />
              </div>
              {/*Sunday*/}
              <div className="flex flex-row flex-wrap">
                <p className="text-left text-gray-800 font-semibold p-2 w-full">
                  Sunday
                </p>
                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">From</label>
                  <Field
                    name="location[0].hours[6].from_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {from_hours_select}
                  </Field>
                </span>

                <span className="p-1 w-1/2 sm:w-1/3 text-gray-800 text-left">
                  <label className="px-3">To</label>
                  <Field
                    name="location[0].hours[6].to_hour"
                    as="select"
                    className="bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {to_hours_select}
                  </Field>
                </span>
                <span className="p-1 w-full sm:w-1/3 text-gray-800 text-left m-auto">
                  <label className=" m-auto">
                    <Field
                      type="checkbox"
                      name="location[0].hours[6].closed"
                      className="m-2 float-left"
                    />
                    Closed
                  </label>
                </span>
              </div>
            </div>

            <hr className="mt-2" />
            {/* Order Methods*/}
            <div className="">
              <h2 className="text-xl text-left font-bold text-gray-800 py-1">
                Order Methods
              </h2>
              <p className="text-gray-800 text-left font-semibold p-3">
                Check all the order method that apply
              </p>
              <div className="flex flex-row flex-wrap">
                <label className="text-gray-800 text-left block w-full sm:w-1/2 ">
                  <Field
                    type="checkbox"
                    name="order_methods"
                    value="Direct Call"
                    className="m-2 float-left"
                  />
                  Direct Call
                </label>

                <label className="text-gray-800 text-left block w-full sm:w-1/2">
                  <Field
                    type="checkbox"
                    name="order_methods"
                    value="Delivery Apps"
                    className="m-2 float-left"
                  />
                  Delivery Apps
                </label>

                <label className="text-gray-800 text-left block w-full sm:w-1/2">
                  <Field
                    type="checkbox"
                    name="order_methods"
                    value="Wesbite"
                    className="m-2 float-left"
                  />
                  Website
                </label>

                <label className="text-gray-800 text-left block w-full sm:w-1/2">
                  <Field
                    type="checkbox"
                    name="order_methods"
                    value="Other"
                    className="m-2 float-left"
                  />
                  Other
                </label>
              </div>
            </div>

            <hr />
            {/* Delivery Methods*/}
            <div>
              <div className="">
                <h2 className="text-xl text-left font-bold text-gray-800 py-1">
                  Delivery Methods
                </h2>
                <p className="text-gray-800 text-left font-semibold p-3">
                  Check all the delivery methods that apply
                </p>
                <div className="flex flex-row flex-wrap">
                  <label className="text-gray-800 text-left block w-full sm:w-1/2 ">
                    <Field
                      type="checkbox"
                      name="delivery_methods"
                      value="DR"
                      className="m-2 float-left"
                    />
                    Direct From Restaurant
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="delivery_methods"
                      value="GH"
                      className="m-2 float-left"
                    />
                    Grubhub
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="delivery_methods"
                      value="PM"
                      className="m-2 float-left"
                    />
                    Posmates
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="delivery_methods"
                      value="DD"
                      className="m-2 float-left"
                    />
                    Door Dash
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="delivery_methods"
                      value="UE"
                      className="m-2 float-left"
                    />
                    Uber Eats
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="delivery_methods"
                      value="SL"
                      className="m-2 float-left"
                    />
                    Seamless
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="delivery_methods"
                      value="OT"
                      className="m-2 float-left"
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>
            <hr />
            {/* Pick Up Options*/}
            <div>
              <div className="">
                <h2 className="text-xl text-left font-bold text-gray-800 py-1">
                  Pick Up Options
                </h2>
                <p className="text-gray-800 text-left font-semibold p-3">
                  Check all the delivery methods that apply
                </p>
                <div className="flex flex-row flex-wrap">
                  <label className="text-gray-800 text-left block w-full sm:w-1/2 ">
                    <Field
                      type="checkbox"
                      name="pickup_options"
                      value="CO"
                      className="m-2 float-left"
                    />
                    Carry Out
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="pickup_options"
                      value="CS"
                      className="m-2 float-left"
                    />
                    Curbside
                  </label>
                </div>
              </div>
            </div>

            <hr />
            {/* Dietary Options*/}
            <div>
              <div className="">
                <h2 className="text-xl text-left font-bold text-gray-800 py-1">
                  Dietary Options
                </h2>
                <p className="text-gray-800 text-left font-semibold p-3">
                  Check all the dietary options that apply
                </p>
                <div className="flex flex-row flex-wrap">
                  <label className="text-gray-800 text-left block w-full sm:w-1/2 ">
                    <Field
                      type="checkbox"
                      name="dietary_options"
                      value="VT"
                      className="m-2 float-left"
                    />
                    Vegetarian
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="dietary_options"
                      value="VG"
                      className="m-2 float-left"
                    />
                    Vegan
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="dietary_options"
                      value="PF"
                      className="m-2 float-left"
                    />
                    Peanut Free
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="dietary_options"
                      value="DF"
                      className="m-2 float-left"
                    />
                    Dairy Free
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="dietary_options"
                      value="SF"
                      className="m-2 float-left"
                    />
                    Soy Free
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="dietary_options"
                      value="GF"
                      className="m-2 float-left"
                    />
                    Gluten Free
                  </label>

                  <label className="text-gray-800 text-left block w-full sm:w-1/2">
                    <Field
                      type="checkbox"
                      name="dietary_options"
                      value="OT"
                      className="m-2 float-left"
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="py-2 px-4 m-2 bg-green-500 rounded-md w-1/2 sm:w-1/4 text-gray-800 font-bold text-xl text-center"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddForm;
