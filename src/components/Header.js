import React, { Component } from 'react';
import styled from 'styled-components';
import { media, color } from 'styles/utils';
import { NavLink, Link } from 'react-router-dom';
import LanguageSelect from "components/LanguageSelect";
import { FormattedMessage } from 'react-intl';
import {BrowserView,MobileView,isBrowser,isMobile,isTablet} from "react-device-detect";

import SiteTitle from './SiteTitle';

const Top = styled.div`
  z-index: 2;
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:999999999;
  .title-3 {
    display: block;
    letter-spacing: -.03em;
    font-size: 1.8em;
    font-weight: 700;
    padding: 0;
    ${media.phone`
      font-size: 1em;
      white-space: normal;
      text-align:center;
      padding:0 16px;
      line-height: 1.4;
    `}
    ${media.phablet`
      font-size: 1.8em;
      white-space: normal;
      text-align:center;
      padding:0 16px;
      line-height: 1.4;
    `}
  }
  .partners {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    padding-top: 1rem;
    justify-content: space-between;
    background-color: #000;
    .help-box {
      margin-right: 3rem;
      display: flex;
      justify-content: space-between;
      width: 20rem;
    }
    .partners-logo {
      align-self: end;
      img {
        width: auto;
        height: auto;
        max-height: 2vh;
        margin: 0 1rem;
        ${media.phablet`
        max-height: 15vh;
        max-width: 18vw;
        `}
        ${media.phone`
          max-height: 19vh;
          max-width: 22vw;
        `}
        ${media.desktop`
          margin: 0 2rem;
          max-height: 5vh;
        `}
        ${media.desktopHD`
          margin: 0 2rem;
          max-height: 7vh;
        `};
      }
    }
  }
  .color-white {
    color:#fff !important;
  }
  h1 {
    font-size: 1.1em;
    color: #fff;
    .logo {
      margin-left: -1rem;
    }
    ${media.tablet`
      font-size: 1.2em;
    `} ${media.desktopHD`
      font-size: 1.6em;
    `};
  }
  h2 {
    white-space: nowrap;
    color: #fff;
    font-size: 0.8em;
    font-style: italic;
    font-weight: normal;
    border-top: 1px solid #fff;
    margin: 2rem 0 0;
    padding: 0.5rem 2rem;
    ${media.tablet`
      font-size: 1em;
    `} ${media.desktopHD`
      margin: 3rem 0 0;
    `};
  }
  h3 {
    font-size: 0.6em;
    font-style: italic;
    font-weight: normal;
    ${"" /* color: rgba(255,255,255,0.8); */};
  }
`;

class Header extends Component {
  render () {
    return (
      <Top>
      <div className="partners">
        <div className="partners-logo title-3">
          <Link to="/" className='color-white'>
                <FormattedMessage
                  id="general.siteTitle3"
                  defaultMessage="Carbono Vivo" />
          </Link>
        </div>
        <nav className="help-box">
        {!isMobile &&
          <NavLink to="/glossary" className="color-white" title="Glossary">
            <FormattedMessage
                  id="glossary.pageTitle"
                  defaultMessage="Glossary" />
          </NavLink>
          }
          <LanguageSelect />
          <NavLink to="/about" className="color-white" title="About this">
            <span className="fa fa-info"></span>
          </NavLink>
          <NavLink to="/share" className="color-white" title="Share">
            <span className="fa fa-share-alt"></span>
          </NavLink>
          {isMobile &&
          <NavLink to="/glossary" className="color-white" title="Glossary">
            <span className="fa fa-book"></span>
          </NavLink>
          }
        </nav>
      </div>
    </Top>
    )
  }
}


export default Header;
