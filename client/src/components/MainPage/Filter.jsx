import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const Filter = ({ filter, currentFilter, text, setFilter }) => {
  return (
    <FormControlLabel
      style={{ width: "100%" }}
      control={
        <Checkbox
          checked={filter === currentFilter}
          onChange={() => setFilter(filter)}
        />
      }
      label={text}
    />
  );
};

export default Filter;
