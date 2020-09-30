import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledProfile = styled.div`
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.dark};
  padding-top: 7rem;
  margin: 0;

  .ImageUploadComponentContainer {
    z-index: 100;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .ImageUploadComponentBG {
      position: fixed;
      width: 100vw;
      height: 100vh;
      -webkit-filter: blur(8px);
      filter: blur(8px);
      z-index: 100;
      background-color: ${colors.dark};
      opacity: 90%;
    }
    .uploadImageComponent {
      z-index: 101;
      position: relative;
      .close {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: 700;
        cursor: pointer;
        color: ${colors.light};
      }
    }
  }
  .profileContainer {
    width: 90%;
    max-width: 1400px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .profileHeader {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
      .imageContainer {
        margin: 1rem;
        width: 100%;
        max-width: 340px;
        position: relative;
        margin: 1rem 0;
        img {
          display: block;
          width: 100%;
        }
        .uploadImageIcon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          svg {
            font-size: 2rem;
            color: ${colors.secondary};
          }
        }
      }
      .shortInfoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        width: 100%;
        max-width: 340px;
        .addressContainer,
        .name {
          background-color: ${colors.middle};
          width: 100%;
        }
        h2 {
          font-weight: 600;
        }
        .rateContainer {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: ${colors.middle};
          padding-bottom: 1rem;

          .ratersQuantity {
            color: ${colors.dark};
            margin: 0 0 0 1rem;
          }
        }
        .services {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1rem;
          width: 100%;
          max-width: 340px;
          .service {
            background-color: ${colors.primary};
            margin: 0.2rem;
            border-radius: 0.2rem;
            padding: 0.2rem;
            width: 100%;
          }
          .date {
            background-color: ${colors.secondary};
            margin: 0.2rem;
            border-radius: 0.2rem;
            padding: 0.2rem;
            width: 100%;
          }
        }
      }
      .bioContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        width: 100%;
        max-width: 340px;
      }
    }
  }
`;
