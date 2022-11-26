import { ErrorImagen } from "../components/error/ErrorImagen";
import Logo from "/src/assets/images/home/logo.png";

export const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: "4rem",
        }}
      >
        <img src={Logo} />
      </div>
      <ErrorImagen />
    </div>
  );
};
