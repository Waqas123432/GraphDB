import { useState } from "react";
import BlueButton from "src/components/BlueButton";
import InputField from "src/components/InputField";
import VectorIcon from "src/assets/vector.svg";

interface CreateDatabaseModalProps {
  closeAction: () => void;
}

export default function CreateDatabaseModal({
  closeAction,
}: CreateDatabaseModalProps) {
  const [formData, setFormData] = useState({
    databaseType: "",
    installationPath: "",
    port: "",
    minMemoryUsage: "",
    maxMemoryUsage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., API call)
    console.log("Form Data:", formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-4xl w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-[#373F41] font-mulish font-bold text-[20px]">
            Create a new Database
          </h2>
          <button onClick={closeAction} className="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-[#54595E99] font-mulish text-[14px] mt-2 mb-6">
          To create a new database, select the database type and enter the
          installation path and port. Additionally, if you enter the
          minimum/maximum memory usage, the database will run accordingly.
        </p>

        <form onSubmit={handleSubmit}>
          <fieldset className="mb-8">
            <legend className="text-[#25282B] font-bold text-[16px] font-mulish">
              Required
            </legend>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col space-y-10">
                <label className="text-nowrap text-[#25282B] font-medium text-[16px] font-mulish">
                  Database type
                </label>
                <label className="text-nowrap text-[#25282B] font-medium text-[16px] font-mulish">
                  Installation Path
                </label>
                <label className="text-nowrap text-[#25282B] font-medium text-[16px] font-mulish">
                  Port
                </label>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="w-44 relative">
                  <select
                    name="databaseType"
                    value={formData.databaseType}
                    onChange={handleChange}
                    className="border-none outline-none px-3 py-2 border border-[#A4A6B3] rounded-md text-[#52575C] appearance-none bg-white"
                  >
                    <option value="">Select a database</option>
                    <option value="mysql">MySQL</option>
                    <option value="postgresql">PostgreSQL</option>
                    <option value="mongodb">MongoDB</option>
                  </select>
                  <img
                    src={VectorIcon}
                    alt="Dropdown arrow"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-40">
                    <BlueButton
                      label="Choose folder"
                      action={() => {
                        /* Handle choose folder */
                      }}
                    />
                  </div>
                  <InputField
                    name="installationPath"
                    value={formData.installationPath}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-[170px]">
                  <InputField
                    name="port"
                    value={formData.port}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-8 space-y-4">
            <legend className="text-[#25282B] font-bold text-[16px] font-mulish">
              Optional
            </legend>
            <div className="flex items-center gap-6">
              <label className="text-[#25282B] font-medium text-[16px] font-mulish">
                Minimum Memory Usage(-Xmx)
              </label>
              <div className="w-[170px]">
                <InputField
                  name="minMemoryUsage"
                  value={formData.minMemoryUsage}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <label className="text-[#25282B] font-medium text-[16px] font-mulish">
                Maximum Memory Usage(-Xms)
              </label>
              <div className="w-[170px]">
                <InputField
                  name="maxMemoryUsage"
                  value={formData.maxMemoryUsage}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>
          <div className="w-[30%] mx-auto">
            <BlueButton
              label="Create database"
              action={() => {
                /* Handle create database */
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
