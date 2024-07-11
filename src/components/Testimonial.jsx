import styled from "styled-components";
import testimonial1 from "../components/assets/testimonial1.png";
import testimonial2 from "../components/assets/testimonial2.png";
import avatar from "../components/assets/avatar.png";

export default function Testimonial() {
  return (
    <Section id="blog">
      <div className="title">
        <h1>What Our Happy Customer Say About Us.</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={testimonial1} alt="testimonial1" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Priyank Singh</h3>
              <span>Full Stack Devloper</span>
              <hr />
            </div>
          </div>
          <p className="description">
          Jetrips Hotel is an excellent choice for anybody for considering
            hosting their events there. Top level facilities and excellent staff
            make for a briallant environment within which to operate. The hotel
            is meticulous in its planning.
          </p>
        </div>
        <div className="testimonial-image-two">
          <img src={testimonial2} alt="testimonial" />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 40%;
    }
  }
  .testimonials {
    display: flex;
    gap: 3rem;
    .testimonial {
      border-radius: 4px;
      margin-top: 4rem;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 5px 17px 29px 5px;
      border-top: 0.5rem solid var(--primary-color);

      .title {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        .image {
          img {
            height: 3rem;
          }
        }
        .info {
          span {
            color: var(--primary-text);
          }
        }
      }
      .description {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 5rem;
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .testimonials {
      flex-direction: column;
      overflow: hidden;
      .testimonial-image-one,
      .testimonial-image-two {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;
