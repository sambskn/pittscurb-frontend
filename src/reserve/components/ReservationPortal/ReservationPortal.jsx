import React from 'react';
import {
  Feedback,
  Overlay,
  SalesPoints,
  SearchSection,
  Wrapper,
  Footer,
} from './styles';

import SpotSearchCard from './SpotSearchCard';

import burgerAndSoda from '../../../common/svgs/burger_and_soda.svg';
import arrow from '../../../common/svgs/arrow.svg';
import best_spot from '../../../common/svgs/best_spot.svg';
import hamburger_magnify from '../../../common/svgs/hamburger_magnify.svg';
import cellphone_checkmark from '../../../common/svgs/cellphone_checkmark.svg';

export default () => (
  <Wrapper>
    <Overlay>
      <h2>
        Find & reserve open parking spots
      </h2>

      <h4>
        The up-to-date parking map for picking up anything from food to dry cleaning.
      </h4>
    </Overlay>

    <SearchSection>
      <SpotSearchCard />

      <div className="icon-container">
        <img src={arrow} alt="" />

        <div>
          Closest spot to me
        </div>
      </div>

      <div className="icon-container">
        <img src={burgerAndSoda} alt="" />

        <div>
          Local specials
        </div>
      </div>
    </SearchSection>

    <SalesPoints>
      <h2>
        The easiest way to search and save parking spaces, updated in real time.
      </h2>

      <div className="sales-points-list">
        <div className="sales-point-item">
          <img src={hamburger_magnify} alt="" />

          <div>
            Search for the business you're picking up from and choose the 20 minute window that fits best.
          </div>
        </div>

        <div className="sales-point-item">
          <img src={best_spot} alt="" />

          <div>
            We’ll auto-find the best available spot in newly created parking areas, and you'll get safe pickup instructions.
          </div>
        </div>

        <div className="sales-point-item">
          <img src={cellphone_checkmark} alt="" />

          <div>
            You'll get an SMS confirmation link with an easy way to tell the business you've arrived, change your reservation, and a receipt to show patrol officers if necessary.
          </div>
        </div>
      </div>
    </SalesPoints>

    <Feedback>
      <div className="feedback-content">
        <div className="questions">
          Questions? Feedback?
        </div>

        <div className="feedback-email">
          <a href="mailto:hello@pittscurb.com">
            Email us at hello@pittscurb.com
          </a>
        </div>
      </div>
    </Feedback>
    <Footer>
      <div className="supported">
        <img className="pittsburgh-img" src="/pittsburgh_coa.png" alt="" />
        Supported by the City of Pittsburgh
      </div>
      <div className="copyright">
        &copy; PittsCurb 2020
        </div>
    </Footer>
  </Wrapper>
);
