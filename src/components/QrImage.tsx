import { useBase64 } from "../hooks/useBase64";

export const QrImage: React.FC = () => {
  const { base64 } = useBase64();

  console.log("base64", base64);

  return (
    <div>
      {base64 && <img src={`data:image/png;base64,${base64}`} alt="QR Code" />}
    </div>
  );
};
