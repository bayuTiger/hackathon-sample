export interface DentalClinic {
  type: string;
  geometry: {
    type: string;
    coordinates: (string | number)[];
  };
  properties: {
    施設名称: string;
    施設所在地: string;
    施設方書: string;
    施設電話番号: string;
    施設開設日: string;
    診療科目名称: string;
  };
}
