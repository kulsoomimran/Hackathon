"use client"; // This tells Next.js it's a Client Component

import Link from "next/link";
import { useState } from "react";
import { SiNike } from "react-icons/si"

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleForm = () => {
    console.log({
      email,
      password,
      firstName,
      lastName,
      birthday,
      country,
      gender,
      termsAccepted,
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-lg sm:max-w-md">
        {/* Nike Logo */}
        <div className="flex justify-center mb-4 text-3xl text-gray-800">
          <SiNike />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-4">BECOME A NIKE MEMBER</h1>
        <p className="text-sm text-custom-dgray text-center mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            className="border border-custom-gray p-2 w-full rounded-md focus:ring-2 focus:ring-gray-500"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            className="border border-custom-gray p-2 w-full rounded-md focus:ring-2 focus:ring-gray-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* First Name */}
          <input
            type="text"
            className="border border-custom-gray p-2 w-full rounded-md focus:ring-2 focus:ring-gray-500"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <input
            type="text"
            className="border border-custom-gray p-2 w-full rounded-md focus:ring-2 focus:ring-gray-500"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Birthday Input */}
          <div>
            <input
              id="birthday"
              type="input"
              placeholder="Date of Birth"
              className="border border-custom-gray p-2 w-full rounded-md focus:ring-2 focus:ring-gray-500 mt-1"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <span className="text-sm text-custom-dgray">Get a Nike Member Reward every year on your Birthday.</span>
          </div>

          {/* Country Dropdown */}
          <select
            className="border text-custom-dgray border-custom-gray p-2 w-full rounded-md focus:ring-2 focus:ring-gray-500"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>

          {/* Gender Selection */}
          <div>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                className={`border p-2 rounded-md w-full ${gender === "Male"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-custom-dgray border-custom-gray hover:bg-gray-100"
                  }`}
                onClick={() => setGender("Male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`border p-2 rounded-md w-full ${gender === "Female"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-custom-dgray border-custom-gray hover:bg-gray-100"
                  }`}
                onClick={() => setGender("Female")}
              >
                Female
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-[20px] h-[20px] rounded-sm border-custom-gray"
            />
            <span className="text-sm text-custom-dgray">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </span>
          </div>

          {/* Legal Text */}
          <div className="text-sm text-custom-dgray mt-4 text-center leading-5">
            By Logging in, you agree to {'Nike\u0027s'}{" "}
            <span className="underline underline-offset-4">Privacy Policy</span> and{" "}
            <span className="underline underline-offset-4">Terms of Use</span>
          </div>
          
          {/* Join Us Button */}
          <button
            onClick={handleForm}
            disabled={email === "" || password === "" || firstName === "" || lastName === "" || birthday === "" || country === "" || gender === "" || !termsAccepted}
            className={`w-full py-3 rounded-md ${email && password && firstName && lastName && birthday && country && gender && termsAccepted ? "bg-custom-gray text-gray-600" : "bg-black text-white cursor-not-allowed"}`}
          >
            Join Us
          </button>

          {/* Already Signed-In Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-custom-dgray">
              Already a Member?{" "}
            </span>
            <Link href="../SignIn" className="text-black underline underline-offset-4 font-medium">
              Sign In.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
