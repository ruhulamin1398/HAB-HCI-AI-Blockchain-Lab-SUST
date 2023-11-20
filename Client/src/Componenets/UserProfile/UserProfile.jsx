import React from "react";
import { Link } from "react-router-dom";
import { SingUserPublications } from "../../hocks/singleUserPublication.hock";
import { useUserProfile } from "../../hocks/user.hock";
const UserProfile = () => {
  const user = useUserProfile();
  const authors = SingUserPublications();
  return (
    <div className="container mx-auto mt-64 flex flex-wrap">
      {/* Left side - User Details */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt="User Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold"></h2>
              <p className="text-gray-600"></p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Research's Information</h3>
            <p className="text-gray-600">
              <strong>Name: {user.length > 0 && user[0].name} </strong>
            </p>
            <p className="text-gray-600">
              <strong>Email: {user.length > 0 && user[0].email}</strong>
            </p>

            <p className="text-gray-600">
              <strong>Roll: {user.length > 0 && user[0].roll}</strong>
            </p>
            <p className="text-gray-600">
              <strong>
                Registration: {user.length > 0 && user[0].registration}
              </strong>
            </p>
          </div>

          <div>
            <Link to="/EditProfile">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Publication Details</h3>
          <ul className="list-disc list-inside">
            {authors.length > 0 &&
              authors.map((publication, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {publication.authors} {`"${publication.title}"`}{" "}
                  {publication.date}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
