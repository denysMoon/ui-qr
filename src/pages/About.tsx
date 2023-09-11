export const About: React.FC = () => {
  return (
    <div className="contentWrapper">
      <h1>About</h1>
      <p>
        The application is centered around the generation of QR codes for
        various content types such as links and phrases. The backend is
        constructed using FastAPI, a high-performance web framework for Python.
        On the frontend, a tech stack was used, including React for the user
        interface, TypeScript for strong typing, React-Bootstrap for responsive
        components, and Axios for handling API requests. Additionally,
        react-hook-forms and yup were used to efficiently manage forms within
        the application. This combination of technologies ensures a seamless and
        responsive user experience.
      </p>
    </div>
  );
};
