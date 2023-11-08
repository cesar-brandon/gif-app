import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const addToLocalStorage = (key, data) => {
  try {
    // Convierte los datos a una cadena JSON y guárdalos en localStorage
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    // Manejo de errores en caso de que no se pueda acceder a localStorage
    console.error("Error al agregar datos a localStorage: ", error);
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    // Elimina los datos asociados a la clave especificada de localStorage
    localStorage.removeItem(key);
  } catch (error) {
    // Manejo de errores en caso de que no se pueda acceder a localStorage
    console.error("Error al eliminar datos de localStorage: ", error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    // Obtiene los datos asociados a la clave especificada de localStorage
    const data = localStorage.getItem(key);
    // Si no hay datos, devuelve undefined
    if (!data) return undefined;
    // Convierte los datos JSON en un objeto de JavaScript
    return JSON.parse(data);
  } catch (error) {
    // Manejo de errores en caso de que no se pueda acceder a localStorage
    console.error("Error al obtener datos de localStorage: ", error);
    return undefined;
  }
}

// traer las keys de localStorage
export const getKeysFromLocalStorage = () => {
  try {
    // Obtiene las keys de localStorage
    const keys = Object.keys(localStorage);
    // Si no hay keys, devuelve undefined
    if (!keys) return undefined;
    // Devuelve las keys
    return keys;
  } catch (error) {
    // Manejo de errores en caso de que no se pueda acceder a localStorage
    console.error("Error al obtener las keys de localStorage: ", error);
    return undefined;
  }
}
