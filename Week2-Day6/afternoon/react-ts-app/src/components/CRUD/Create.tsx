import React from "react";

type Props = {
  onCreated?: (customer: any) => void; // Optional callback when a customer is created
};

const url = "https://server.aptech.io/online-shop/customers";

export default function Create({ onCreated }: Props) {
  // State to hold form data
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthday: "",
  });

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/;
    const addressRegex = /^[a-zA-Z0-9\s.,\-\/]+$/;

    if (formData.firstName.trim().length < 1)
      newErrors.firstName = "First name mustn't be empty.";

    if (formData.lastName.trim().length < 1)
      newErrors.lastName = "Last name mustn't be empty.";

    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!phoneRegex.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be at least 10 digits.";

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters long";
    }

    if (formData.address.length > 100) {
      newErrors.address = "Address must be less than 100 characters";
    }

    if (!addressRegex.test(formData.address)) {
      newErrors.address = "Address contains invalid characters";
    }

    if (
      !formData.birthday ||
      new Date().getFullYear() - new Date(formData.birthday).getFullYear() < 18
    )
      newErrors.birthday = "You must be at least 18 years old.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    console.log(`Input changed: ${id} = ${value}`);
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    if (!validate()) {
      return; // Nếu có lỗi thì không gửi request và hiển thị lỗi luôn
    }

    // Send a POST request to create a new customer
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUxODYyNjI1LCJleHAiOjE3ODM0MjAyMjV9.IdQYdVwk1MC6HDZ0KcALJ7S1asehEWygJ8xbZXURC4E",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (validate()) {
        const data = await response.json();
        console.log("Customer created successfully:", data);
        // Reset form data after successful creation
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          birthday: "",
        });
        alert("Customer created successfully!");
        if (onCreated && typeof onCreated === "function") {
          onCreated(data); // Call the callback with the created customer data
        }
      }
    } catch (error) {
      console.error("Error creating customer:", error);
    } finally {
      //
    }
  };

  return (
    <div className="container mx-auto bg-white rounded shadow mb-4 p-4">
      {/* Create tailwindcss Form (firstName, lastName, email, phoneNumber, address, birthday) */}

      <form
        className="p-4 bg-white rounded shadow mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Create Customer</h2>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-red-500 mt-3">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          {errors.lastName && (
            <p className="text-red-500 mt-3">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 mt-3">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 mt-3">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-500 mt-3">{errors.address}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="birthday"
          >
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            value={formData.birthday}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          {errors.birthday && (
            <p className="text-red-500 mt-3">{errors.birthday}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Create Customer
        </button>
      </form>
    </div>
  );
}
