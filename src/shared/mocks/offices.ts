export interface Office {
  id: string;
  city: "Astana" | "Almaty";
  cityLabel: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export const MOCK_OFFICES: Office[] = [
  {
    id: "astana-1",
    city: "Astana",
    cityLabel: "Астана",
    name: "BCC Bank — Центральный офис",
    address: "ул. Кабанбай Батыра, 11, Астана",
    lat: 51.1622,
    lng: 71.47,
  },

  {
    id: "almaty-1",
    city: "Almaty",
    cityLabel: "Алматы",
    name: "BCC HUB — Офис в Promenade",
    address: "просп. Абая, 44а",
    lat: 43.2364,
    lng: 76.9457,
  },
  {
    id: "almaty-2",
    city: "Almaty",
    cityLabel: "Алматы",
    name: "BCC HUB — Офис на Назарбаева",
    address: "просп. Назарбаева, 226, Алматы",
    lat: 43.2196,
    lng: 76.9465,
  },
];
