import Loader from "./Loader";

interface IQrImage {
  base64: string;
  loading: boolean;
}

export const QrImage: React.FC<IQrImage> = ({ base64, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {base64 && <img src={`data:image/png;base64,${base64}`} alt="QR Code" />}
    </div>
  );
};
