interface IQrImage {
  base64: string;
}

export const QrImage: React.FC<IQrImage> = ({ base64 }) => {
  return (
    <div>
      {base64 && <img src={`data:image/png;base64,${base64}`} alt="QR Code" />}
    </div>
  );
};
