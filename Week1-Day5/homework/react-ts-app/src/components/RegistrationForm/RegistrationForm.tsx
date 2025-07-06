import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

type Gender = "Male" | "Female" | "Other";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    country: "",
    hobbies: [] as string[],
    profilePicture: null as File | null,
    bio: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "hobbies") {
      const hobbies = [...formData.hobbies];
      if ((e.target as HTMLInputElement).checked) {
        hobbies.push(value);
      } else {
        const index = hobbies.indexOf(value);
        if (index > -1) hobbies.splice(index, 1);
      }
      setFormData({ ...formData, hobbies });
    } else if (name === "profilePicture") {
      const file = (e.target as HTMLInputElement).files?.[0] ?? null;
      setFormData({ ...formData, profilePicture: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phoneRegex = /^\d{10,}$/;

    if (formData.fullName.trim().length < 3)
      newErrors.fullName = "Full Name must be at least 3 characters.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must be at least 8 characters with letters and numbers.";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!phoneRegex.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be at least 10 digits.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    if (
      !formData.dob ||
      new Date().getFullYear() - new Date(formData.dob).getFullYear() < 18
    )
      newErrors.dob = "You must be at least 18 years old.";
    if (!formData.country) newErrors.country = "Please select a country.";
    if (formData.hobbies.length === 0)
      newErrors.hobbies = "Select at least one hobby.";
    if (
      formData.profilePicture &&
      !["image/jpeg", "image/png", "image/jpg"].includes(
        formData.profilePicture.type
      )
    )
      newErrors.profilePicture = "Must be a valid .jpg, .jpeg, or .png file.";
    if (formData.bio.length > 300)
      newErrors.bio = "Bio must be less than 300 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration successful!");
      console.log(formData);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        gender: "",
        dob: "",
        country: "",
        hobbies: [],
        profilePicture: null,
        bio: "",
      });
      setErrors({});
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <label>Full Name</label>
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

      <label>Email</label>
      <input name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <p className={styles.error}>{errors.email}</p>}

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}

      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && (
        <p className={styles.error}>{errors.confirmPassword}</p>
      )}

      <label>Phone Number</label>
      <input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      {errors.phoneNumber && (
        <p className={styles.error}>{errors.phoneNumber}</p>
      )}

      <label>Gender</label>
      <div className={styles.radioGroup}>
        {["Male", "Female", "Other"].map((g) => (
          <label key={g} className={styles.genderPicker}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={formData.gender === g}
              onChange={handleChange}
            />
            <span>{g}</span>
          </label>
        ))}
      </div>
      {errors.gender && <p className={styles.error}>{errors.gender}</p>}

      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      {errors.dob && <p className={styles.error}>{errors.dob}</p>}

      <label>Country</label>
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="Vietnam">Vietnam</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
        <option value="Other">Other</option>
      </select>
      {errors.country && <p className={styles.error}>{errors.country}</p>}

      <label>Hobbies</label>
      <div className={styles.checkboxGroup}>
        {["Reading", "Traveling", "Gaming"].map((hobby) => (
          <label key={hobby} className={styles.genderPicker}>
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={formData.hobbies.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        ))}
      </div>
      {errors.hobbies && <p className={styles.error}>{errors.hobbies}</p>}

      <label>Profile Picture</label>
      <input
        type="file"
        name="profilePicture"
        accept=".jpg,.jpeg,.png"
        onChange={handleChange}
      />
      {errors.profilePicture && (
        <p className={styles.error}>{errors.profilePicture}</p>
      )}

      <label>Bio</label>
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        maxLength={300}
      />
      {errors.bio && <p className={styles.error}>{errors.bio}</p>}

      <button type="submit" className={styles.submitButton}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
