import React, { useState } from "react";
import Layout from "../components/Layout";
import DentalClinicList from "../components/DentalClinicList";
import DentalClinicDetails from "../components/DentalClinicDetails";
import { dentalClinics } from "../utils/data";
import { DentalClinic } from "../types/types";

const Home: React.FC = () => {
  const [selectedClinic, setSelectedClinic] = useState<DentalClinic | null>(
    null
  );

  return (
    <Layout>
      <div className="flex">
        <DentalClinicList
          clinics={dentalClinics}
          onSelectClinic={setSelectedClinic}
        />
        <DentalClinicDetails clinic={selectedClinic} />
      </div>
    </Layout>
  );
};

export default Home;
