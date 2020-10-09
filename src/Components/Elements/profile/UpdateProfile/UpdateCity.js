import React, { useState, useContext } from "react";
import { StyledInputField } from "../../../Styled-Components/StyledInputField";
import useUpdateProfile from "../../../../data/useUpdateProfile";
import UserContext from "../../../../data/UserContext";
import SelectServices from "../../forms/SelectServices";
import { useOptionsFetch } from "../../../../data/useOptionsFetch";

import { AutoComplete } from "antd";
import { StylesSelectServicesProfile } from "../../../Styled-Components/StylesSelectServicesProfile";

const UpdateCity = ({ field, FieldTitle }) => {
  const [{ services, cities }] = useOptionsFetch();

  const {
    clearField,
    handelUpdateProfile,
    handleServiceChange,
    handleCityChange,
    newUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const { user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  return (
    <StyledInputField>
      <label htmlFor={field}>{FieldTitle}</label>
      <div className="select">
        <AutoComplete
          disabled={!active}
          placeholder={oldUserData[field] || ""}
          onChange={(v) => handleCityChange(v)}
          disabled={!active}
          options={cities}
          value={active ? newUserData[field] || "" : oldUserData[field] || ""}
          defaultValue={oldUserData[field]}
          name={field}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>

      <div className="editButtons">
        {!active ? (
          <button name={field} onClick={(e) => setActive(true)}>
            edit
          </button>
        ) : (
          <>
            <button
              className="save"
              name={field}
              onClick={(e) => {
                handelUpdateProfile(e, oldUserData._id);
                setActive(false);
              }}
            >
              save
            </button>
            <button
              className="cancel"
              name={field}
              onClick={(e) => {
                setActive(false);
                clearField(e.target.name);
              }}
            >
              cancel
            </button>
          </>
        )}
      </div>
    </StyledInputField>
  );
};

export default UpdateCity;
