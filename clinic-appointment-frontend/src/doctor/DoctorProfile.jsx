import React, { useState, useEffect } from "react";
import { MdPerson, MdPhone, MdEmail } from "react-icons/md";
import { FaStethoscope, FaPills, FaCamera } from "react-icons/fa";

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
    registration: "SLMC/12345",
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

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("doctorProfile");
    if (saved) {
      setDoc(JSON.parse(saved));
    }
  }, []);

  const handleEdit = () => {
    setEditingDoc(doc);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditingDoc(doc);
    setIsEditing(false);
  };

  const handleSave = () => {
    setDoc(editingDoc);
    localStorage.setItem("doctorProfile", JSON.stringify(editingDoc));
    setIsEditing(false);
    alert("Doctor profile saved!");
  };

  const updateField = (field, value) => {
    setEditingDoc((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDay = (day) => {
    setEditingDoc((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability[day],
          active: !prev.availability[day].active,
        },
      },
    }));
  };

  const updateTime = (day, type, value) => {
    setEditingDoc((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: { ...prev.availability[day], [type]: value },
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentDoc = isEditing ? editingDoc : doc;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Doctor Profile</h1>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
            >
              Edit Profile
            </button>
          ) : null}
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <img
              src={
                currentDoc.profileImage ||
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

        {/* Personal Info */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <MdPerson /> Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isEditing ? (
              <>
                <div>
                  <label className="text-sm text-gray-500">First Name</label>
                  <input
                    value={editingDoc.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Last Name</label>
                  <input
                    value={editingDoc.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">NIC</label>
                  <input
                    value={editingDoc.nic}
                    onChange={(e) => updateField("nic", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Date of Birth</label>
                  <input
                    type="date"
                    value={editingDoc.dob}
                    onChange={(e) => updateField("dob", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
              </>
            ) : (
              <>
                <p>
                  <strong>NIC:</strong> {currentDoc.nic}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {currentDoc.dob}
                </p>
              </>
            )}
          </div>
        </section>

        {/* Channeling Details */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <FaStethoscope /> Channeling Details
          </h2>
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="text-sm text-gray-500">Specializations</label>
                <input
                  value={editingDoc.specializations.join(", ")}
                  onChange={(e) =>
                    updateField(
                      "specializations",
                      e.target.value.split(",").map((s) => s.trim())
                    )
                  }
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-500">
                  Consultation Fee
                </label>
                <input
                  type="number"
                  value={editingDoc.fee}
                  onChange={(e) => updateField("fee", Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-2">
                  Availability
                </label>
                <div className="space-y-3">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                    >
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={
                            editingDoc.availability[day]?.active || false
                          }
                          onChange={() => toggleDay(day)}
                        />
                        <span>{day}</span>
                      </label>
                      {editingDoc.availability[day]?.active && (
                        <div className="flex items-center gap-2">
                          <input
                            type="time"
                            value={editingDoc.availability[day].from}
                            onChange={(e) =>
                              updateTime(day, "from", e.target.value)
                            }
                            className="border rounded-md px-2 py-1"
                          />
                          <span>to</span>
                          <input
                            type="time"
                            value={editingDoc.availability[day].to}
                            onChange={(e) =>
                              updateTime(day, "to", e.target.value)
                            }
                            className="border rounded-md px-2 py-1"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <p>
                <strong>Specializations:</strong>{" "}
                {currentDoc.specializations.join(", ")}
              </p>
              <p>
                <strong>Fee:</strong> Rs. {currentDoc.fee}
              </p>
              <div>
                <strong>Availability:</strong>
                <ul className="list-disc ml-6">
                  {daysOfWeek.map((day) => {
                    const val = currentDoc.availability[day];
                    return val.active ? (
                      <li key={day}>
                        {day}: {val.from} - {val.to}
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </>
          )}
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <MdPhone /> Contact Information
          </h2>
          {isEditing ? (
            <div className="space-y-4">
              <input
                value={editingDoc.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
              <input
                value={editingDoc.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
              <input
                value={editingDoc.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
            </div>
          ) : (
            <>
              <p>
                <strong>Phone:</strong> {currentDoc.phone}
              </p>
              <p>
                <strong>Email:</strong> {currentDoc.email}
              </p>
              <p>
                <strong>Address:</strong> {currentDoc.address}
              </p>
            </>
          )}
        </section>

        {/* Notes */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <FaPills /> Additional Notes
          </h2>
          {isEditing ? (
            <textarea
              value={editingDoc.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              rows={4}
            />
          ) : (
            <p>{currentDoc.notes}</p>
          )}
        </section>

        {/* Buttons */}
        {isEditing && (
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancel}
              className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
