import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

export const RadioButtons = ({ options }) => {
  return (
    <FormControl>
      <h2 className="radio-header">VEHICLE TYPE</h2>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          onClick={options.vehicleSelector}
          value="Car"
          control={<Radio color="default" />}
          label="Car"
        />

        <FormControlLabel
          onClick={options.vehicleSelector}
          value="SUv"
          control={<Radio color="default" />}
          label="SUv"
        />
        <FormControlLabel
          onClick={options.vehicleSelector}
          value="Pickup"
          control={<Radio color="default" />}
          label="Pickup"
        />
      </RadioGroup>
    </FormControl>
  );
};
