import { useState } from "react";
import { getQr } from "../api/qr";

export const useBase64 = () => {
  const [base64, setBase64] = useState("");

  const getBase64 = async (searchString: string) => {
    try {
      const data = await getQr(searchString);

      setBase64(data);
    } catch (error) {
      console.error("Error fetching QR:", error);
      throw error;
    }
  };

  return { base64, getBase64 };
};
