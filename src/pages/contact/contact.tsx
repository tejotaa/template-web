import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./contact.scss";

export default function Contact() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CONTACT</h1>
    </>
  );
}
