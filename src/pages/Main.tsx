import { useEffect } from "react";
import { getQr } from "../api/qr";

export const Main: React.FC = () => {
  useEffect(() => {
    getQr("www");
  });
  return <h1>Main</h1>;
};
