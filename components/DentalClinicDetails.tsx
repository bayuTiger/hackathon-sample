import React from "react";
import { DentalClinic } from "../types/types";

interface Props {
  clinic: DentalClinic | null;
}

const DentalClinicDetails: React.FC<Props> = ({ clinic }) => {
  if (!clinic) {
    return <div className="w-2/3 p-4">歯科医院を選択してください</div>;
  }

  return (
    <div className="w-2/3 p-4">
      <h2 className="text-2xl font-bold mb-4">
        {clinic.properties["施設名称"]}
      </h2>
      <p>
        <strong>住所:</strong> {clinic.properties["施設所在地"]}
      </p>
      <p>
        <strong>電話番号:</strong> {clinic.properties["施設電話番号"]}
      </p>
      <p>
        <strong>開設日:</strong> {clinic.properties["施設開設日"]}
      </p>
      <p>
        <strong>診療科目:</strong> {clinic.properties["診療科目名称"]}
      </p>
      <p>
        <strong>座標:</strong> {clinic.geometry.coordinates.join(", ")}
      </p>
    </div>
  );
};

export default DentalClinicDetails;
