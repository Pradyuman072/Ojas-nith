
import { ccdata } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import React from "react";

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='OUR CLUB COORDINATORS' className='title-bg' />
          </div>
          <br />
          <br />
          {/* about us */}
          <div className='cc-card'>
            {ccdata.map((coordinator) => (
              <div className="card__collection clear-fix" key={coordinator.id}>
                <div className="cards cards--two">
                  <img src={coordinator.cover} className="img-responsive" alt={coordinator.title} />
                  <span className="cards--two__rect"></span>
                  <span className="cards--two__circle"></span>
                  <p>{coordinator.title}</p>
                  <ul className="cards__list">
                    <li>
                      <Link href={coordinator.handlegit} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="card-svg-icon" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256">
                          <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                     
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowCase;