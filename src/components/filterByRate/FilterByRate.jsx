import React, { useState } from "react";
import { Flex, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const FilterByRate = ({ onRateChange }) => {
  const [searchRate, setSearchRate] = useState(0);

  const handleRateChange = (value) => {
    setSearchRate(value);
    onRateChange(value);
  };

  return (
    <Flex className="SearchRate" gap="middle" vertical>
      <h5>Search By Rate</h5>
      <Rate tooltips={desc} onChange={handleRateChange} value={searchRate} />
    </Flex>
  );
};

export default FilterByRate;
