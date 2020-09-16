import React from "react";
import { AutoComplete } from "antd";
import "antd/dist/antd.css";
import { StyledSelectServices } from "../Styled-Components/StyledSelectServices";

export default function SelectServices(props) {
  const options = props.options;
  return (
    <StyledSelectServices>
      <AutoComplete
        style={{}}
        options={options}
        placeholder={`Select a ${props.type}`}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </StyledSelectServices>
  );
}
