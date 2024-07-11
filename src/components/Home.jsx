import styled from "styled-components";
import Hero from "../components/assets/hero.png";
import { useState } from "react";
import Button from "./Button";

export default function Home() {
  const [value, setValue] = useState("$5000-$10000");
  return (
    <Section>
      <div className="background">
        <img src={Hero} alt="hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>Its Time To </h1>
          <h1>Explore the World</h1>
          <Button text="Plan Your Trip" />
        </div>
        <div className="planner">
          <form>
            <div className="row">
              <label htmlFor="Destinations">Destinations</label>
              <select name="Destinations" id="Destinations">
                <option value="Arab">Arab Egypt</option>
                <option value="Udaipur">Udaipur India</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="">Check In</label>
              <input type="date" name="" id="" />
            </div>
            <div className="row">
              <label htmlFor="">Price Range</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <Button text="Discover More" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin-top: 2rem;
  position: relative;
  .background {
    img {
      height: 90vh;
      width: 100%;
    }
  }
  .content {
    .info {
      position: absolute;
      top: 3rem;
      margin-left: 7rem;
      h1 {
        font-size: 4rem;
        margin-bottom: 2rem;
      }
    }
    .planner {
      position: absolute;
      bottom: 2rem;
      right: 0;
      background-color: #f5e9e9;
      padding: 1rem;
      border-radius: 4px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px;
            padding-bottom: 0.3rem;
          }
          input:focus {
            outline: none;
          }
          input[type="date"]::-webkit-calander-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
