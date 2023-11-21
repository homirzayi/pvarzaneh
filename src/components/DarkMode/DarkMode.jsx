import "./DarkMode.css";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const DarkMode = ({ darkMode, handleChange }) => {
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleChange}
        checked={darkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <MdSunny className="sun" />
        <IoMdMoon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
