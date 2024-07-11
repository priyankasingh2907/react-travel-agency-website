import styled from "styled-components";
import logo from "../components/assets/logo.png";
import Button from "./Button";
export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destination",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Conditions",
    "Forum",
    "Tour Guide",
  ];
  return (
    <Section>
      <div className="upperFooter">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="description">
              You can dream, design and build the most wonderful place.
            </p>
          </div>
          <ul>
            <li>
              <span>6205956258</span>
            </li>
            <li>
              <span>priyanka.singh.2907.2k@gmail.com</span>
            </li>
            <li>
              <span>www.youtube.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>NewsLetter</h2>
          <div className="newsLetter">
            <input type="text" name="text" id="text" placeholder="Your Email" />
            <Button text="Subscribe Now" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyrights &copy; Travel , Designed by <a href="#">Priyanka singh</a>
        </span>
      </div>
    </Section>
  );
}
const Section = styled.section`
  .upperFooter {
    display: flex;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 2rem;
    gap: 5rem;

    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: flex-start;
      justify-content: flex-start;
      color: var(--secondary-text);
      h2 {
        color: var(--primary-text);
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .newsLetter {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 1rem;
        input {
          padding: 1rem 0.7rem;
          border: 1px solid var(--primary-color);
          font-size: 1.1rem;
          color: white;
          width: 70%;

          border-radius: 4px;
          cursor: pointer;
          background-color: #f8f8f8;
        }
      }
    }
  }
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1088px) {
    margin: 0 1rem;
    .upperFooter {
      display: flex;
      flex-direction: column;
    }
  }
`;
