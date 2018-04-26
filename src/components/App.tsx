// import "./App.css";

import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";

import SocialIcon from "./SocialIcon";
import SkillWithRank from "./SkillWithRank";

import photo from "../images/photo.jpg";
import Roboto from "../fonts/Roboto-Regular.ttf";

import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  ADDITIONAL_COLOR,
  TEXT_COLOR,
  BORDER_COLOR
} from "../consts";

// // Logs the name of the method - quick test to ensure decorators are working
// const log = (target: object, name: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
//   // tslint:disable-next-line:no-console
//   console.log(`${name}()`);
//
//   return descriptor;
// };

export class App extends Component<{}, {}> {
  // @log
  public render() {
    const props: HTMLProps<object> = {
      alt: "Ciberus photo",
      // className: "App-logo",
      src: photo
    };

    // Making sure object destructuring and rest operator work
    const { src, ...rest }: HTMLProps<object> = props;

    return (
      <AppContainer>
        <LinearGradient width="0" height="0">
          <linearGradient id="rg" r="0.89" x1="0" y1="1" x2="0" y2="0">
            <stop stopColor={MAIN_COLOR} offset="0" />
            <stop stopColor={ADDITIONAL_COLOR + "B3"} offset="1" />
          </linearGradient>
        </LinearGradient>
        {/* <div className="App-header">
          <img src={src} {...rest} />
          <h1>React TypeScript Demo</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App.tsx</code> and save to
          reload reload. fasdfasdreload. fasdfasdreload. fasdfasdreload.
        </p> */}
        <Header>
          <PhotoWrapper>
            <Photo src={photo} {...rest} />
          </PhotoWrapper>
          <MainInfoWrapper>
            <FullName>Penkov Pavel (21 years)</FullName>
            <ShortDescription>
              Developer, Designer, Enterpreneur
            </ShortDescription>
            <Nickname>@Ciberus</Nickname>
            <Location>
              <MapMarker
                className={"fas fa-map-marker-alt"}
                aria-hidden="true"
              />
              <LocationName>Yaroslavl, Russia</LocationName>
            </Location>

            <SocialIconRow>
              <SocialIcon type={"vk"} link={"https://vk.com/ciberus"} />
              <SocialIcon
                type={"twitter"}
                link={"https://twitter.com/ciberusps"}
              />
              <SocialIcon
                type={"twitch"}
                link={"https://twitch.tv/ciberusps"}
              />
              <SocialIcon
                type={"github"}
                link={"https://github.com/ciberusps"}
              />
              <SocialIcon type={"telegram"} link={"https://t.me/Ciberus"} />
              <SocialIcon type={"mail"} link={"mailto:ciberus.ps@gmail.com"} />
              <SocialIcon
                type={"medium"}
                link={"https://medium.com/@ciberus.ps"}
              />
              <SocialIcon
                type={"facebook"}
                link={"https://www.facebook.com/ciberusps"}
              />
              <SocialIcon
                type={"steam"}
                link={"https://steamcommunity.com/id/ciberusps/"}
              />
            </SocialIconRow>
          </MainInfoWrapper>
        </Header>
        <MainSection>
          <SkillsContainer>
            <SkillsHeader>Techs</SkillsHeader>
            <SkillsContent>
              fasdkfjafapsoijf
              <br />fasdkfjafapsoijf
              <br />fasdkfjafapsoijf
              <br />fasdkfjafapsoijf
              <br />fasdkfjafapsoijf
              <br />fasdkfjafapsoijf
            </SkillsContent>
            <SkillsHeader>Interests</SkillsHeader>
            <SkillsContent>
              <InterestPin>DOTA 2</InterestPin>
              <InterestPin>Crypto</InterestPin>
              <InterestPin>ESport</InterestPin>
              <InterestPin>Programming</InterestPin>
              <InterestPin>Twitch extensions</InterestPin>
              <InterestPin>Science</InterestPin>
              <InterestPin>AI</InterestPin>
              <InterestPin>ICO</InterestPin>
              <InterestPin>Ad Integration</InterestPin>
              <InterestPin>AR/VR/MR</InterestPin>
            </SkillsContent>
          </SkillsContainer>
          <CVContainer>
            <Menu>
              <MenuButton>Experience</MenuButton>
              <MenuButton>Projects</MenuButton>
              <MenuButton>Education</MenuButton>
              <MenuButton>Hackathons</MenuButton>
            </Menu>
          </CVContainer>
        </MainSection>
      </AppContainer>
    );
  }
}

export const AppContainer = styled.div`
  max-width: 1024px;
  width: 1024px;
  margin: auto;
  flex-direction: column;
`;

export const Header = styled.div`
  flex: 1;
  margin-top: 2.5em;
`;

export const Photo = styled.img`
  max-width: 160px;
  max-height: 160px;
  clip-path: circle(50% at center);
`;

export const PhotoWrapper = styled.div`
  justify-content: flex-end;
  /* align-items: center; */
  margin-right: 20px;
  margin-top: 20px;
  flex: 1;
  /* padding: 0 20px; */

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const MainInfoWrapper = styled.div`
  flex-direction: column;
  justify-items: center;
  padding: 0 20px;
  font-size: 1.25em;
  line-height: 1.5em;
  flex: 1.25;
`;

export const ShortDescription = styled.div`
  color: #7d7d80;
`;

export const FullName = styled.div`
  font-size: 1.875em;
  line-height: 1.25em;
`;

export const Nickname = styled.div`
  color: #df358d;
`;

export const Location = styled.div`
  display: inline-block;
  align-content: flex-start;
  flex-direction: column;
`;

export const MapMarker = styled.i`
  margin-right: 0.3em;
  margin-top: -10px;
  color: ${MAIN_COLOR};
`;

export const LocationName = styled.div`
  display: inline-block;
`;

export const LinearGradient = styled.svg`
  position: absolute;
`;

export const SocialIconRow = styled.div`
  margin-top: 10px;
  flex-direction: row;
`;

export const MainSection = styled.div`
  border-top: 1px solid ${BORDER_COLOR};
  flex-direction: row;
`;

export const SkillsContainer = styled.div`
  flex-direction: column;
  flex: 1;
`;

export const SkillsHeader = styled.div`
  border-top: 1px solid ${BORDER_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};
  padding: 20px 0;
  justify-content: center;

  &:first-child {
    border-top: 0;
  }
`;

export const SkillsContent = styled.div`
  /* border-bottom: 1px solid ${BORDER_COLOR}; */
  padding: 20px 0;
  /* justify-content: center; */
`;

export const InterestPin = styled.div`
  background: ${MAIN_COLOR} linear-gradient(135deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR +
  "4C"});
  border-radius: 1em;
  padding: 0.2em 0.5em;
  margin: 0.2em 0.2em;
  font-size: 0.9em;
  /* border-bottom: 1px solid ${BORDER_COLOR}; */
  /* padding: 20px 0; */
  /* justify-content: center; */
`;

export const CVContainer = styled.div`
  border-left: 1px solid ${BORDER_COLOR};
  /* padding: 20px; */
  /* height: 100vh; */
  flex: 2.25;
`;

export const Menu = styled.div`
  /* background: ${MAIN_COLOR} linear-gradient(135deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR +
  "4C"}); */
  /* border-bottom: 1px solid ${BORDER_COLOR}; */
  height: 60px;
  width: 100%;
  /* border-radius: 1em; */
  /* padding: 0.2em 0.5em; */
  /* margin: 0.2em 0.2em; */
  font-size: 0.9em;
  /* border-bottom: 1px solid ${BORDER_COLOR}; */
  /* padding: 20px 0; */
  /* justify-content: center; */
`;

export const MenuButton = styled.button`
  /* background: ${MAIN_COLOR} linear-gradient(135deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR +
  "4C"}); */
  background: transparent;
  border: 0;
  color: white;
  /* font-family: Roboto, sans-serif; */
  font-size: 1em;
  flex: 1;
  height: 60px;
  justify-content: center;
  /* align-content: center; */
  /* align-self: center; */
  /* align-items: center; */
  border-bottom: 1px solid ${BORDER_COLOR};
  border-left: 1px solid ${BORDER_COLOR};

  &:hover {
    border-bottom: 4px solid ${MAIN_COLOR};
    color: ${MAIN_COLOR};
  }

  &:first-child {
    border-left: 0;
  }
`;

injectGlobal`
  @font-face {
    font-family: Roboto;
    src: url('${Roboto}') format("ttf");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal; 
  }

  html {
    font-size: 100%;
  }

  @media only screen and (max-device-width: 480px) {
    html { font-size: 75%; // 16px }
  }

  body {
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.5px;
    margin: 0;
    padding: 0;
    background: ${BACKGROUND_COLOR};
    color: ${TEXT_COLOR};
  }

  body * {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-wrap: wrap;
    /* flex: 1; */
  }

  *:focus {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  div svg * {
    fill: url(#rg);
  }
`;

export default App;
