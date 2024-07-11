import styled from "styled-components";
import service1 from "../components/assets/service1.png";
import service2 from "../components/assets/service2.png";
import service3 from "../components/assets/service3.png";
import service4 from "../components/assets/service4.png";

export default function Services() {
  const data = [
    {
      id: 1,
      image: service1,
      title: "Lor ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus in nunc tincidunt fermentum.",
    },
    {
      id: 2,
      image: service2,
      title: "Lorem ipsum  sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus in nunc tincidunt fermentum.",
    },
    {
      id: 3,
      image: service3,
      title: "Lorem sum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus in nunc tincidunt fermentum.",
    },
    {
      id: 4,
      image: service4,
      title: "Lorem ipsum dolor  amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus in nunc tincidunt fermentum.",
    },
  ];
  return (
    <Section id="sevices">
      <div className="services">
        {data.map((item) => (
          <div className="service" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    border-radius: 5px;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-gray);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(100, 100, 111, 0.2) 2px 7px 29px 5px;

      gap: 1rem;
      h3 {
        color: var(--primary-text);
      }

      p {
        color: var(--seconday-text);
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: var(--primary-color);
        transform: scale(1.05);
        transition: var(--default-transition);
        border-radius: 5px;
        color: wheat;
        box-shadow: rgba(100, 100, 111, 0.2) 2px 7px 29px 5px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
