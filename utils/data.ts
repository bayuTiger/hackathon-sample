import { DentalClinic } from "../types/types";
import dentalClinicsData from "../public/dental_clinics.json";

export const dentalClinics: DentalClinic[] = dentalClinicsData.features.map(
  (clinic) => ({
    ...clinic,
    geometry: {
      ...clinic.geometry,
      coordinates: clinic.geometry.coordinates.map((coord) =>
        typeof coord === "string" ? parseFloat(coord) : coord
      ),
    },
  })
);
