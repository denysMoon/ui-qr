import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </>
  );
};

export default Loader;
