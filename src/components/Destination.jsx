import styled from "styled-components";
import cuba from "../components/assets/cuba.png";
import japan from "../components/assets/japan.png";
import paris from "../components/assets/paris.png";
import Button from "./Button";

export default function Destination() {
  const data = [
    {
      id: 1,
      name: "cuba city",
      image: cuba,
    },
    {
      id: 3,

      name: "japan",
      image: japan,
    },
    {
      id: 2,

      name: "paris",
      image: paris,
    },
  ];
  return (
    <Section id="Destination">
      <div className="info">
        <h2>
          Top <span>Destination</span>In the World.{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus
          in nunc tincidunt fermentum. Sed sed ligula id nisi consectetur
          finibus.
        </p>
        <Button text="Discover More" />
      </div>
      <div className="destinations">
        {data.map((item) => (
          <div className="destination" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 5rem;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3rem;
    h2 {
      font-size: 2rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-color);
    }
  }
  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination {
      position: relative;
      img {
        height: 20rem;
      }
      h3 {
        position: absolute;
        bottom: 20%;
        left: -6.5%;
        height: 80%;
        width: 100%;
        background: linear-gradient(to bottom, #ffffff14, #000000ae);
        display: flex;
        flex-direction: column-reverse;
        margin-left: 1rem;
        font-size: 1.5rem;
        color: white;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
        }
      }
    }
  }
`;
