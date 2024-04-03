import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/system";

function valuetext(value: number) {
  return `${value}`;
}

const CustomSlider = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    backgroundColor: "#29ABE2",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#29ABE2",
  },
  // You can also try this approach if the previous one doesn't work
  "& .MuiSlider-track.MuiSlider-track": {
    backgroundColor: "#29ABE2",
  },
}));

const PriceRangeSlider = () => {
  const [value, setValue] = React.useState<number[]>([0, 20000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // Fetch product details using productId

  return (
    <>
      <div className="px-4">
        <Box sx={{ width: 280 }}>
          <CustomSlider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            min={0} // Set the minimum value to 0
            max={20000} // Set the maximum value to 20000
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        {/* Display selected price range */}
        <p className="flex items-center text-sm text-gray-900">
          PRICE: ₹
          <span className="ml-1 flex h-6 w-16 items-center justify-center border border-gray-200">
            {value[0]}
          </span>
          <span className="mx-3">-</span>₹
          <span className="ml-1 flex h-6 w-16 items-center justify-center border border-gray-200">
            {value[1]}
          </span>
        </p>
      </div>
    </>
  );
};

export default PriceRangeSlider;
