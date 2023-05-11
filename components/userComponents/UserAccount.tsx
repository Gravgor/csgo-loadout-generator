"use client";

import { IUser } from "@/addons/interfaces/interface";
import Image from "next/image";
import { useState } from "react";

export default function UserAccount({ user }: { user: IUser }) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showTwoFactorForm, setShowTwoFactorForm] = useState(false);
  const [password, setPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Send request to update password
    setPassword("");
    setShowPasswordForm(false);
  };

  const handleTwoFactorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Send request to enable two-factor authentication
    setTwoFactorEnabled(true);
    setShowTwoFactorForm(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <div className="flex flex-col mt-5 w-full lg:w-1/2 rounded-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Account Details</h1>
        <div className="flex flex-col lg:flex-row mb-4">
          <div className="relative w-48 h-48">
            <Image
              src={user.avatar}
                width={200}
                height={200}
              alt="user image"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col ml-8">
            <h2 className="text-2xl font-bold text-white mb-2">{user.username}</h2>
            <p className="text-lg text-gray-600 mb-4">{user.email}</p>
            <p className="text-lg text-gray-600">Account created: {" "}  {
                        new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })
                    }</p>
            <div className="mt-4 flex flex-col space-y-2">
              {!showPasswordForm && (
                <button
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                  onClick={() => setShowPasswordForm(true)}
                >
                  Update Password
                </button>
              )}
              {showPasswordForm && (
                <form onSubmit={handlePasswordSubmit} className="flex flex-col space-y-2">
                  <label htmlFor="password" className="text-lg text-gray-600">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                  >
                    Save Password
                  </button>
                </form>
              )}
              {!showTwoFactorForm && (
                <button
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                  onClick={() => setShowTwoFactorForm(true)}
                >
                  Enable Two-Factor Authentication
                </button>
              )}
              {showTwoFactorForm && (
                <form onSubmit={handleTwoFactorSubmit} className="flex flex-col space-y-2">
                  <p className="text-lg text-gray-600">
                    Scan the QR code below with your authenticator app to enable two-factor
                  </p>
                    <div className="relative w-48 h-48">
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                    >
                        Enable Two-Factor Authentication
                    </button>
                </form>
                )}
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}