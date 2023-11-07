import React from "react";
import styled from "styled-components";
import TfqImage from "../assets/Thowfeek.jpg";
import jiniImage from "../assets/Jini.jpg";
import anbuImage from "../assets/Anbu.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          We had a very nice experience. The hotels were all nice; the guide was well-informed and courteous. The car they gave us was very comfortable and roomy.
          </p>
          <div className="info">
            <img src={TfqImage} alt="" />
            <div className="details">
              <h4>Thowfeek</h4>
             
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Very good and prompt service. Overall a good experience and smooth travel experience everything on time.
          </p>
          <div className="info">
            <img src={jiniImage} alt="" />
            <div className="details">
              <h4>Jini Tracy</h4>
        
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Trip booking and negotiations on 2rism was smooth and done swiftly. Price was decent and I liked the approach of travel agent, who unhesitatingly and tirelessly worked to fit the itinerary in our budget.
          </p>
          <div className="info">
            <img src={anbuImage} alt="" />
            <div className="details">
              <h4>Anbu</h4>
           
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      width:500px;
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
