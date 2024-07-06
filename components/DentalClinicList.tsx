import React, { useState } from "react";
import { DentalClinic } from "../types/types";

interface Props {
  clinics: DentalClinic[];
  onSelectClinic: (clinic: DentalClinic) => void;
}

const DentalClinicList: React.FC<Props> = ({ clinics, onSelectClinic }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClinics = clinics.filter((clinic) =>
    clinic.properties["施設名称"]
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-1/3 overflow-auto h-screen">
      <input
        type="text"
        placeholder="検索..."
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredClinics.map((clinic) => (
          <li
            key={clinic.properties["施設名称"]}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectClinic(clinic)}
          >
            {clinic.properties["施設名称"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DentalClinicList;
