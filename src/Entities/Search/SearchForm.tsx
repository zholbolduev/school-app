import { ChangeEvent, useState } from "react";
// import { CiSearch } from 'react-icons/ci';
import "./SearchForm.scss";

export const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchForm">
      <form>
        <div className="searchInputField">
          {/* <CiSearch className={`searchIcon ${ value.length > 0 && 'searchIcon-active'}`} /> */}
          <input
            className="inputField"
            type="text"
            placeholder="Поиск"
            value={value}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
      </form>
    </div>
  );
};
