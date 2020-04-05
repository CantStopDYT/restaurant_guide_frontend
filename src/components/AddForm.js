import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

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
          { weekday: "Sunday", from_hour: "", to_hour: "", closed: false }
        ]
      }
    ],
    order_methods: [],
    delivery_options: [],
    pickup_options: [],
    dietary_options: []
  };
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "The name should be at least 3 characters long")
      .required("The name of the business is required"),
    status: "",
    website_url: yup.string().url("This is not valid website address"),
    menu_url: yup.string().url("This is not valid website address"),
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
          { weekday: "Sunday", from_hour: "", to_hour: "", closed: false }
        ]
      }
    ],
    order_methods: [],
    delivery_options: [],
    pickup_options: [],
    dietary_options: []
  });

  const from_hours_select = (
    <>
      <option value="00:00">12:00 AM</option>
      <option value="00:30">12:30 AM</option>
      <option value="01:00">01:00 AM</option>
      <option value="01:30">01:30 AM</option>
      <option value="02:00">02:00 AM</option>
      <option value="02:30">02:30 AM</option>
      <option value="03:00">03:00 AM</option>
      <option value="03:30">03:30 AM</option>
      <option value="04:00">04:00 AM</option>
      <option value="04:30">04:30 AM</option>
      <option value="05:00">05:00 AM</option>
      <option value="05:30">05:30 AM</option>
      <option value="06:00">06:00 AM</option>
      <option value="06:30">06:30 AM</option>
      <option value="07:00">07:00 AM</option>
      <option value="07:30">07:30 AM</option>
      <option value="08:00">08:00 AM</option>
      <option value="08:30">08:30 AM</option>
      <option value="09:00">09:00 AM</option>
      <option value="09:30">09:30 AM</option>
      <option value="10:00">10:00 AM</option>
      <option value="10:30">10:30 AM</option>
      <option value="11:00">11:00 AM</option>
      <option value="11:30">11:30 AM</option>
      <option value="12:00">12:00 PM</option>
      <option value="12:30">12:30 PM</option>
      <option value="13:00">01:00 PM</option>
      <option value="13:30">01:30 PM</option>
      <option value="14:00">02:00 PM</option>
      <option value="14:30">02:30 PM</option>
      <option value="15:00">03:00 PM</option>
      <option value="15:30">03:30 PM</option>
      <option value="16:00">04:00 PM</option>
      <option value="16:30">02:30 PM</option>
      <option value="17:00">03:00 PM</option>
      <option value="17:30">05:30 PM</option>
      <option value="18:00">06:00 PM</option>
    </>
  );

  const to_hours_select = (
    <>
      <option value="12:00">12:00 PM</option>
      <option value="12:30">12:30 PM</option>
      <option value="13:00">01:00 PM</option>
      <option value="13:30">01:30 PM</option>
      <option value="14:00">02:00 PM</option>
      <option value="14:30">02:30 PM</option>
      <option value="15:00">03:00 PM</option>
      <option value="15:30">03:30 PM</option>
      <option value="16:00">04:00 PM</option>
      <option value="16:30">02:30 PM</option>
      <option value="17:00">03:00 PM</option>
      <option value="17:30">05:30 PM</option>
      <option value="18:00">06:00 PM</option>
      <option value="18:30">06:30 PM</option>
      <option value="19:00">07:00 PM</option>
      <option value="19:30">07:30 PM</option>
      <option value="20:00">03:00 PM</option>
      <option value="20:30">03:30 PM</option>
      <option value="21:00">04:00 PM</option>
      <option value="21:30">02:30 PM</option>
      <option value="22:00">03:00 PM</option>
      <option value="22:30">05:30 PM</option>
      <option value="23:00">06:00 PM</option>
      <option value="23:30">03:30 PM</option>
      <option value="00:00">12:00 AM</option>
      <option value="00:30">12:30 AM</option>
      <option value="01:00">01:00 AM</option>
      <option value="01:30">01:30 AM</option>
      <option value="02:00">02:00 AM</option>
    </>
  );

  return (
    <div className="sm:w-3/5 m-auto">
      <p> this is the form</p>
      <pre></pre>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={async values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
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
              />
            </div>
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
                <option value="Limited Hours">Limited Hours</option>
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
              />
              <ErrorMessage name="website_url" />
            </div>
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
              />
            </div>

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
              />
            </div>

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
