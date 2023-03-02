import "./DarkModeButton.css"

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";
const DarkModeButton = () => {
    const { toggleDarkMode } = useDarkModeContext()

    return (
      <div className="toggle-theme-wrapper">
        <img className="me-1" src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/sun.png?alt=media&token=6a24f085-ee7a-483b-90af-f8c4dd9ad866" alt="" />
        <label className="toggle-theme" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onInput={() => toggleDarkMode()}/>
          <div className="slider round"></div>
        </label>
        <img className="ms-1 moon" src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/moon.png?alt=media&token=06f451d6-e292-4512-b461-ca4c80460937" alt="" />
      </div>
    );
  };

export default DarkModeButton;
