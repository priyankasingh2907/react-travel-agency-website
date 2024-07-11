import styled from "styled-components";
import tour1 from "../components/assets/tour1.png";
import tour2 from "../components/assets/tour2.png";
import tour3 from "../components/assets/tour3.png";

import ellipse from "../components/assets/ellipse.png";
import { BsFillStarFill } from "react-icons/bs";

export default function Tour() {
  const data = [
    {
      id: 1,
      image: tour1,
      title: "Santorini, Oia Greece ",
      price: 2000,
      reviews: "5k Reviews",
    },
    {
      id: 2,
      image: tour2,
      title: "Lighthouse , Hellwood",
      price: 4000,
      reviews: "3k Reviews",
    },
    {
      id: 3,
      image: tour3,
      title: "Riverfront , Japan",
      price: 6000,
      reviews: "4k Reviews",
    },
  ];
  return (
    <Section id="tour">
      <h2>Choose Your Destination.</h2>
      <img src={ellipse} alt="ellipse" className="ellipse" />
      <div className="tours">
        {data.map((item) => (
          <div className="tour" key={item.id}>
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="info">
              <div className="details">
                <h4>{item.title}</h4>
                <div className="price-details">
                  <span className="price">{item.price}</span>
                  <div className="reviews">
                    <div className="starts">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <div className="review">{item.reviews}</div>
                  </div>
                </div>
              </div>
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 8rem;
  margin-bottom: 5rem;
  position: relative;
  .ellipse {
    position: absolute;
    right: -5rem;
    top: -20rem;
    height: 30rem;
  }
  h2 {
    text-align: center;
    transform: translateY(-150px);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .tours {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .tour {
      position: relative;
      &:nth-of-type(2) {
        transform: translateY(-150px);
      }
      .image {
        img {
          height: 25rem;
        }
      }
      .info {
        position: absolute;
        bottom: -30px;
        right: 0;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 5px 7px 29px 5px;
        button {
          padding: 0%.5rem 0.7rem;
          background-color: var(--primary-color);
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: rgba(100, 100, 111, 0.2) 5px 7px 29px 5px;

          .price-details {
            display: flex;
            gap: 1rem;
            .price {
              color: var(--primary-color);
              font-weight: bolder;
            }
            .reviews {
              display: flex;
              gap: 0.5rem;
              .starts {
                svg {
                  color: #ffc01e;
                }
              }

              .review {
                color: var(--secondary-text);
              }
            }
          }
        }
      }
    }
  }
`;
