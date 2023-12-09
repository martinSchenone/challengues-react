// 1. Build a User Registration Form
// Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages.
import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Skills tested: Form handling, input validation, state management
// Difficulty: Easy
// Tasks:

// Implement the user registration form UI
// Validate the form inputs and display error messages
// Integrate form submission with a mock API call (simulated delay).
// Add a success message upon successful registration
// Hints:

// Create a controlled form component with state to manage input values.
// Use regular expressions or a library like Yup for input validation.

const schema = z.object({
  userName: z
    .string()
    .min(5, { message: "Username must be at least 5 characters long" }),
  email: z.string().email({ message: "You did not enter a valid email" }),
  password: z.string().refine((value) => value.length >= 8, {
    message: "Password must be at least 8 characters long",
  }),
});
export const UserRegistration = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    console.log(e);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === "" || data.userName === "" || data.password === "") {
      return console.log("Completa todo el formulario");
    }
    sessionStorage.setItem("user", JSON.stringify(data));
    navigate("/welcome");
  };
  const checkIn = schema.safeParse(data) || null;
  const userNameErr =
    checkIn?.error?.issues.filter((e) => e.path == "userName") || null;
  const emailErr =
    checkIn?.error?.issues.filter((e) => e.path == "email") || null;
  const passwordErr =
    checkIn?.error?.issues.filter((e) => e.path == "password") || null;

  return (
    <div className="min-h-screen flex items-center justify-center text-white  font-mono ">
      <form
        className="flex flex-col gap-12 bg-blue-400 p-16 shadow-xl sm:rounded-xl w-[min(100%,30rem)]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-xl font-bold -tracking-tighter uppercase">
          Registration FORM
        </h1>

        <label className="flex flex-col gap-1">
          <input
            required
            type="text"
            onChange={handleInput}
            name="userName"
            placeholder="Username"
            className="font-bold border-b-2 p-2 bg-inherit placeholder:text-white outline-none"
          />
          {userNameErr && (
            <span className="text-red-200  text-xs opacity-40 ">
              {userNameErr[0]?.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          <input
            required
            type="email"
            onChange={handleInput}
            name="email"
            placeholder="Email"
            className="font-bold border-b-2 p-2 bg-inherit placeholder:text-white outline-none"
          />
          {emailErr && (
            <span className="text-red-200  text-xs opacity-40 ">
              {emailErr[0]?.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          <input
            required
            type="password"
            onChange={handleInput}
            name="password"
            placeholder="Password"
            className="font-bold border-b-2  p-2 bg-inherit placeholder:text-white outline-none"
          />
          {passwordErr && (
            <span className="text-red-200  text-xs opacity-40 ">
              {passwordErr[0]?.message}
            </span>
          )}
        </label>
        <button className="bg-blue-5000 p-2 rounded font-bold bg-indigo-500">Enviar</button>
      </form>
    </div>
  );
};
