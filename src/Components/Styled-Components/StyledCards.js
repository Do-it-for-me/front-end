import styled from "styled-components";
import colors from "./General-Styles/colors";
import image1 from "../../images/profileImage.jpg";

export const StyledCards = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 450px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.dark};
  background-color: rgb(206, 204, 204);

  .profilePic {
    background-image: url(${(props) => (props.image ? props.image : image1)});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 231px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .infoSection {
    background-color: ${colors.middle};
    position: absolute;
    width: 100%;
    transition: all ease-in-out 0.5s;
    height: ${(props) => (props.extend ? "430px" : "230px")};
    top: ${(props) => (props.extend ? "30px" : "230px")};
    display: flex;
    flex-direction: column;

    .__namePriceContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      margin-bottom: -1rem;

      h3 {
        font-weight: 700;
        font-size: 18px;
      }

      .fee {
        font-weight: 700;
        font-size: 18px;
      }
    }

    .__container {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 1rem;
      flex-grow: 1;
      .skills,
      .note {
        font-size: 12px;
        font-weight: 600;
        width: 234px;
        height: 20px;
      }

      .text {
        font-size: 10px;
        line-height: 12px;
        margin-top: 0.5rem;
        .more {
          font-size: 2rem;
          cursor: pointer;
          ${(props) =>
            props.extend ? `transform:rotate(90deg)` : `transform:rotate(0)`};
        }
      }
    }

    .__buttonContainer {
      width: 100%;
      display: flex;

      .viewProfile {
        margin: 0.2rem;
        width: 50%;
        height: 30px;
        font-weight: 700;
        font-size: 14px;
        background-color: ${colors.primary};
        border-radius: 3px;
        border: none;
        transition: all ease-in-out 0.5s;
        z-index: 40;
        cursor: pointer;

        span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;

          ::after {
            content: "»";
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            transition: 0.5s;
          }
        }

        :hover span {
          padding-right: 25px;
        }
        :hover span:after {
          opacity: 1;
          right: 0;
        }

        :focus {
          outline: none;
        }
      }
      .contact {
        margin: 0.2rem;
        width: 50%;
        height: 30px;
        font-weight: 700;
        font-size: 14px;
        background-color: ${colors.secondary};
        border-radius: 3px;
        border: none;
        transition: all ease-in-out 0.5s;
        z-index: 40;
        cursor: pointer;

        span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;

          ::after {
            content: "»";
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            transition: 0.5s;
          }
        }

        :hover span {
          padding-right: 25px;
        }
        :hover span:after {
          opacity: 1;
          right: 0;
        }

        :focus {
          outline: none;
        }
      }
    }
  }
`;
