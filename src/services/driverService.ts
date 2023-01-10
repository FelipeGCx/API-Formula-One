import driversData from "../data/drivers.json";
import { Driver } from "../types";

const drivers: Driver[] = driversData as Driver[];

export const getDrivers = (): Driver[] => drivers;

export const getDriver = (id: number | string): Driver | undefined => {
  if (typeof id == "number") {
    return drivers.find((d) => d.id === id);
  }
  return drivers.find((d) => d.name === id);
};

export const findDriver = (name: string): Driver | undefined => {
  return drivers.find((d) => d.name.includes(name));
};

// export const addDriver = (): undefined => {
//   const newDriver = {
//     id: Math.max(...drivers.map((d) => d.id)) + 1,
//   };
//   return newDriver;
// };
