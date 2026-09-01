import { useEffect, useState } from "react";

/**
 * Estado sincronizado con localStorage, tolerante a navegación privada
 * o a navegadores que bloquean el almacenamiento.
 */
export function usePersistentState(key, getDefaultValue, isValid = () => true) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null && isValid(stored)) return stored;
    } catch {
      // Almacenamiento no disponible: seguimos con el valor por defecto.
    }

    return getDefaultValue();
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Almacenamiento no disponible: el valor solo vive en memoria.
    }
  }, [key, value]);

  return [value, setValue];
}
