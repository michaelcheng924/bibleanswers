import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";

const Search = ({ onChange, placeholder, value }) => {
  const [focused, setFocused] = useState;

  return (
    <div className="search">
      <FaSearch color={focused ? "#039BE5" : "#bdbdbd"} />
      <TextField
        className="search__input"
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        value={value}
      />

      <style jsx global>{`
        .search {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .search__input {
          margin-left: 10px;
          width: 320px;
        }

        .search__input input {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Search;
