import React, { useState } from "react";
import Select from "react-select";

function Filter() {
  const [filter, setFilter] = useState("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <div>
      <h2 className="text-2xl tracking-tight font-semibold">Filters</h2>
      <Select
        className="basic-single"
        classNamePrefix="select"
        onChange={(value) => console.log(value)}
        defaultValue={options[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={options}
      />
    </div>
  );
}

export default Filter;
