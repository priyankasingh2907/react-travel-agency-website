import styled from "styled-components";
import lightHouse from "../components/assets/lighthouse.png";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";
export default function Offer() {
  const data = [
    {
      text: "Best Travel Guide Always for youe service ",
      icon: <BsPerson />,
      color: "red",
    },
    {
      text: "World clas  Services Provided For You",
      icon: <BiWorld />,
      color: "green",
    },
    {
      text: "24/7 Strong Customer Support ",
      icon: <BsHeadphones />,
      color: "yellow",
    },
  ];

  return (
    <Section id="offer">
      <div className="image">
        <img src={lightHouse} alt="lighthouse" />
      </div>
      <div className="content">
        <div className="title">
          <h1>We are Offering in Total 793 Tours Across the World.</h1>
        </div>
        <ul className="list">
          {data.map((item) => (
            <li key={item.text}>
              <span className="icon" style={{ color: item.color }}>
                {item.icon}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;
  .image {
    img {
      height: 35rem;
    }
  }
  .content {
    .title {
      margin: 2rem 0;
      h1 {
        font-size: 3rem;
      }
    }
    .list {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin: 3rem 0;
        .icon {
          padding: 0%.5rem;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
      }
    }
  }
`;
