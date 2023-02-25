import React, { useState } from "react";
import "./Navbar.css";
import { BiBed } from "react-icons/bi";
import { TbPlaneInflight } from "react-icons/tb";
import { GiWitchFlight } from "react-icons/gi";
import { MdAttractions, MdOutlineLocalTaxi } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { FcCalendar } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Navbar(type) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleOption = (name, oper) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: oper === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const icons = (icon, text) => {
    return (
      <div className="icon">
        <p className="para">{icon}</p>
        <p>{text}</p>
      </div>
    );
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <>
      <div className="navbar">
        <div className="NavbarList">
          <div className="navbarList__item">
            <div className="stays">{icons(<BiBed />, "Stays")}</div>
            <span onClick={() => navigate("/flights")}>
              {icons(<TbPlaneInflight />, "Flights")}
            </span>
            {icons(<GiWitchFlight />, "Flights + Hotels")}
            {icons(<MdAttractions />, "Attractions")}
            {icons(<MdOutlineLocalTaxi />, "Airport Taxis")}
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="text">
              <h1>Ski the Swiss Alps this winter</h1>
              <h3>
                Discover Switzerland's best ski resort and plan the perfect
                vacation
              </h3>
              <Button type="submit" className="bt" variant="primary">
                Explore
              </Button>
              <div className="headerSearch">
                <div className="headerSearch__item">
                  <span className="headerIcon">
                    <BiBed />
                  </span>
                  <input
                    type="text"
                    placeholder="Where are you going"
                    className="headerSearch__input"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearch__item">
                  <span className="headerIcon">
                    <FcCalendar />
                  </span>
                  <span
                    onClick={() => {
                      setOpenDate(!openDate);
                    }}
                    className="headerSearch__text"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date2"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearch__item ht">
                  <span className="headerIcon">
                    <BsPersonFill />
                  </span>
                  <span
                    className="headerSearch__text"
                    onClick={() => setOpenOptions(!openOptions)}
                  >
                    {`${options.adult}`}.adult {`${options.children}`}.children{" "}
                    {`${options.room}`}.room
                  </span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCount">
                          <button
                            className="optionCouterButton"
                            disabled={options.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterButton">
                            {options.adult}
                          </span>
                          <button
                            className="optionCouterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Child</span>
                        <div className="optionCount">
                          <button
                            className="optionCouterButton"
                            disabled={options.children <= 1}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterButton">
                            {options.children}
                          </span>
                          <button
                            className="optionCouterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCount">
                          <button
                            className="optionCouterButton"
                            disabled={options.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterButton">
                            {options.room}
                          </span>
                          <button
                            className="optionCouterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearch__item">
                  <Button
                    className="headerBtn"
                    variant="primary"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
