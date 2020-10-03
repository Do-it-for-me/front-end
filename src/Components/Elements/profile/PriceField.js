import React, { useState, useContext } from "react";
import { StyledInputField } from "../../Styled-Components/StyledInputField";
import useUpdateProfile from "../../../data/useUpdateProfile";
import UserContext from "../../../data/UserContext";
import PriceSlider from "../PriceSlider";

const PriceField = ({ field, FieldTitle }) => {
  const {
    clearField,
    handelUpdateProfile,
    handlePriceChange,
    newUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const { user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  return (
    <StyledInputField>
      <label htmlFor={field}>{FieldTitle}</label>

      <div className="price">
        <PriceSlider
          disabled={!active}
          defaultValue={
            active
              ? newUserData[field] || oldUserData[field]
              : oldUserData[field] || 0
          }
          onChange={handlePriceChange}
          name={field}
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

export default PriceField;
