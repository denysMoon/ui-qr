import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <div className="loaderWrapper">
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </div>
  );
};

export default Loader;
