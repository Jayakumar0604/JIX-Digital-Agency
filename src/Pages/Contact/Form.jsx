import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    YourName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.YourName.trim())
      newErrors.YourName = "This field is required.";
    if (!formData.email.trim()) newErrors.email = "This field is required.";
    if (!formData.message.trim()) newErrors.message = "This field is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const inputClass = (field) =>
    `w-full p-[10px] bg-[#FAFAFA] border ${
      errors[field] ? "border-red-500" : "border-[#dddddd]"
    }`;

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <div className="px-5 md:px-10 bg-white py-5 lg:py-10">
        <div className="space-y-5">
          <div>
            <input
              type="text"
              name="YourName"
              placeholder="Your Name"
              value={formData.YourName}
              onChange={handleChange}
              className={`${inputClass("YourName")} outline-none rounded-md`}
            />
            {errors.YourName && (
              <p className="text-red-500 text-sm">{errors.YourName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputClass("email")} outline-none rounded-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass(
                "message"
              )} p-[12px] outline-none rounded-md`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="px-10 py-2 bg-blue-500 rounded-md text-white raleway-font"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
