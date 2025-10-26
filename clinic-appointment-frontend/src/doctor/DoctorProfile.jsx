import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCamera } from "react-icons/fa";

const DoctorProfile = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const defaultDoctor = {
    firstName: "Amal",
    lastName: "Perera",
    nic: "200012345678",
    dob: "1980-05-10",
    title: "Consultant Cardiologist",
    specializations: ["Cardiology", "Internal Medicine"],
    fee: 5000,
    phone: "+94 77 123 4567",
    email: "amal.perera@example.com",
    address: "No. 123, Galle Road, Colombo 03",
    registrationNumber: "SLMC/12345",
    notes: "Specializes in heart conditions. Fluent in Sinhala & English.",
    profileImage: "",
    availability: daysOfWeek.reduce((acc, day) => {
      acc[day] = { active: false, from: "09:00", to: "12:00" };
      return acc;
    }, {}),
  };

  const [doc, setDoc] = useState(defaultDoctor);
  const [editingDoc, setEditingDoc] = useState(defaultDoctor);
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const doctorId = "670fd96e7b2b0f6f2e8a1f99"; // sample ID

  // ✅ Fetch doctor data from API
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/doctors/${doctorId}`);
        setDoc(res.data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };
    fetchDoctor();
  }, [doctorId]);

  // ✅ Handle Edit Mode
  const handleEdit = () => {
    setEditingDoc(doc);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditingDoc(doc);
    setIsEditing(false);
  };

  // ✅ Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingDoc((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Save (API Update)
  const handleSave = async () => {
    try {
      const formData = new FormData();
      for (const key in editingDoc) {
        if (key === "availability" || key === "specializations") {
          formData.append(key, JSON.stringify(editingDoc[key]));
        } else {
          formData.append(key, editingDoc[key]);
        }
      }
      if (imageFile) formData.append("profileImage", imageFile);

      const res = await axios.put(
        `http://localhost:4000/api/doctors/${doctorId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setDoc(res.data.doctor);
      setIsEditing(false);
      setImageFile(null);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to save changes.");
    }
  };

  const updateField = (field, value) => {
    setEditingDoc((prev) => ({ ...prev, [field]: value }));
  };

  const currentDoc = isEditing ? editingDoc : doc;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Doctor Profile</h1>
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <img
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : currentDoc.profileImage ||
                    "https://www.outsourceyourmarketing.co.uk/wp-content/uploads/2023/09/doctor-linkedin-marketing-10.jpeg"
              }
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow"
            />
            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
                <FaCamera className="text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            {currentDoc.firstName} {currentDoc.lastName}
          </h2>
          <p className="text-gray-500">{currentDoc.title}</p>
        </div>

        {/* Doctor Info */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600">First Name</label>
            <input
              type="text"
              disabled={!isEditing}
              value={currentDoc.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-600">Last Name</label>
            <input
              type="text"
              disabled={!isEditing}
              value={currentDoc.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              disabled={!isEditing}
              value={currentDoc.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-600">Phone</label>
            <input
              type="text"
              disabled={!isEditing}
              value={currentDoc.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-600">Address</label>
            <textarea
              disabled={!isEditing}
              value={currentDoc.address}
              onChange={(e) => updateField("address", e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>
        </div>

        {/* Action Buttons */}
        {isEditing && (
          <div className="flex justify-end mt-8 space-x-4">
            <button
              onClick={handleCancel}
              className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
