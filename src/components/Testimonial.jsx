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
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            expedita atque commodi velit unde pariatur possimus quos error
            labore soluta incidunt est iste, minus totam? Sunt ipsam delectus
            cum impedit.
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
`;
