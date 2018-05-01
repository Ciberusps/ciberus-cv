// import "./App.css";

import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";
import { Carousel } from "react-responsive-carousel";

import SocialIcon from "./SocialIcon";
import Pin from "./Pin";
import { RankedTech, Props as IRankedTech } from "./RankedTech";
import ExpBlock from "./ExpBlock";

import photo from "../images/photo.jpg";
import Roboto from "../fonts/Roboto-Regular.ttf";
import Poppins from "../fonts/Poppins-Regular.ttf";
import OpenSans from "../fonts/OpenSans/OpenSans-Regular.ttf";
import tsd2_0 from "../images/tsd2-0.webp";

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

export enum Filter {
  ALL = "ALL",
  EXPERIENCE = "EXPERIENCE",
  PROJECTS = "PROJECTS",
  EDUCATION = "EDUCATION",
  HACKATHONS = "HACKATHONS"
}

export enum Language {
  en = "en",
  ru = "ru"
}

export interface Experience {
  name: string;
  location?: string;
  time: string;
  filter: Filter;
  description: string;
  role?: string;
  screenshots?: string[];
}

export interface SocialMedia {
  name: string;
  link: string;
}

export interface AppState {
  filter: Filter;
  lang: Language;
  programmingLanguages: string[];
  soft: string[];
  APIsAndSDKs: string[];
  libs: string[];
  otherSkills: string[];
  interests: string[];
  techs: IRankedTech[];
  experience: Experience[];
  socialMedia: SocialMedia[];
}

export class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      filter: Filter.ALL,
      lang: Language.en,
      socialMedia: [
        { name: "vk", link: "https://vk.com/ciberus" },
        { name: "twitter", link: "https://twitter.com/ciberusps" },
        { name: "twitch", link: "https://twitch.tv/ciberusps" },
        { name: "github", link: "https://github.com/ciberusps" },
        { name: "telegram", link: "https://t.me/Ciberus" },
        { name: "mail", link: "mailto:ciberus.ps@gmail.com" },
        { name: "medium", link: "https://medium.com/@ciberus.ps" },
        { name: "facebook", link: "https://www.facebook.com/ciberusps" },
        { name: "steam", link: "https://steamcommunity.com/id/ciberusps/" },
        { name: "skype", link: "skype:ciberus.ps" },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/pavel-penkov-8b3788128/"
        }
      ],
      programmingLanguages: [
        "C#",
        "C++",
        "HTML/CSS",
        "SQL",
        "JavaScript/TypeScript",
        "Java",
        "PHP"
      ],
      soft: [
        "VS Code",
        "Resharper",
        "Visual Studio",
        "Photoshop",
        "Premiere Pro",
        "After Effects",
        "Xcode",
        "Git",
        "Postman",
        "Unity3D",
        "Expo",
        "OBS",
        "FileZilla",
        "Bebo"
      ],
      APIsAndSDKs: [
        "AdToApp",
        "Appodeal",
        "Leap Motion",
        "Opendota",
        "Steam Web API",
        "Unity Ads",
        "Telegram API",
        "Google VR SDK",
        "Vuforia",
        "Twitch API"
      ],
      interests: [
        "DOTA 2",
        "Crypto",
        "AI",
        "ESports",
        "ESports market",
        "Twitch extensions",
        "Science",
        "Ad Integration",
        "AR/VR/MR",
        "Programming",
        "Streaming",
        "Blockchain"
      ],
      libs: [
        "Lottie",
        "ReactLottie",
        "Babel",
        "Webpack",
        "Webpack Dev Server",
        "MobX",
        "MobX-React",
        "Enzyme",
        "Jest",
        "styled-components"
      ],
      otherSkills: ["AmoCRM"],
      techs: [
        { name: "React", rank: 3 },
        { name: "React Native", rank: 3 },
        { name: "Unity3d", rank: 3 }
      ],
      experience: [
        {
          name: "School 4",
          location: "Yaroslavl, Russia",
          time: "2013-2017",
          filter: Filter.EDUCATION,
          description: "School with deep english learning"
        },
        {
          name: "Auto mechanical college",
          location: "Yaroslavl, Russia",
          time: "2013-2017",
          role: "Student",
          filter: Filter.EDUCATION,
          description: "Programming in computer systems(Computer science)"
        },
        {
          name: "Treasure Simulator DOTA 2",
          location: "Yaroslavl, Russia",
          time: "07.2015-01.2016",
          role: "Application",
          filter: Filter.PROJECTS,
          description: "App",
          screenshots: [tsd2_0]
        },
        {
          name: 'Studio "Peppers"',
          location: "Yaroslavl, Russia",
          time: "08.2015-11.2015",
          role: "Intern",
          filter: Filter.EXPERIENCE,
          description: "-Development of game prototypes <br />-AR apps"
        },
        {
          name: "Dojo-Game/Adv Online",
          location: "Yaroslavl, Russia",
          time: "03.2016-05.2016",
          role: "Developer/Site administrator",
          filter: Filter.EXPERIENCE,
          description: `-PSD to HTML ${<br />} -Site administration`
        },
        {
          name: "Casual INC",
          location: "Los Angeles, CA",
          time: "05.2016-07.2017",
          role: "Remote Developer",
          filter: Filter.EXPERIENCE,
          description:
            "-Reskin Unity3D apps <br />-Ad SDK's Integration <br />-Publishing apps <br /> <br />Casual INC - daughter company of AdToApp(one of Ad mediation platform that lets you serve ads from multiple source aimed to bring the most revenue for publishers)"
        },
        {
          name: "SkinSwap",
          location: "Moscow, Russia",
          time: "07.2017-04.2018",
          role: "Remote Developer/Manager",
          filter: Filter.EXPERIENCE,
          description: "MVP developer"
        }
      ]
    };
    // this.onInterestClick = this.onInterestClick.bind(this);
  }

  onMenuButtonClick(filter: Filter) {
    this.setState({ filter: filter });
  }

  render() {
    const props: HTMLProps<object> = {
      alt: "Ciberus photo",
      // className: "App-logo",
      src: photo
    };

    // Making sure object destructuring and rest operator work
    const { src, ...rest }: HTMLProps<object> = props;
    const {
      filter,
      programmingLanguages,
      soft,
      APIsAndSDKs,
      interests,
      libs,
      otherSkills,
      techs,
      socialMedia,
      experience
    } = this.state;

    const expFiltered = experience.filter(
      item => filter == Filter.ALL || item.filter == filter
    );

    return (
      <AppContainer>
        <LinearGradient width="0" height="0">
          <linearGradient id="rg" r="0.89" x1="0" y1="1" x2="0" y2="0">
            <stop stopColor={MAIN_COLOR} offset="0" />
            <stop stopColor={ADDITIONAL_COLOR + "B3"} offset="1" />
          </linearGradient>
        </LinearGradient>
        <LinearGradient width="0" height="0">
          <linearGradient id="stars" r="0" x1="0" y1="0" x2="0.7" y2="0.7">
            <stop stopColor={MAIN_COLOR} offset="0" />
            <stop stopColor={"#8f2caf"} offset="1" />
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
          <PhotoContainer>
            <Photo src={photo} {...rest} />
          </PhotoContainer>
          <MainInfoWrapper>
            <FullName>Penkov Pavel (20 years)</FullName>
            <ShortDescription>
              Developer, Designer, Enterpreneur
            </ShortDescription>
            <Nickname>@CiberusPS</Nickname>
            <Location>
              <MapMarker
                className={"fas fa-map-marker-alt"}
                aria-hidden="true"
              />
              <LocationName>Yaroslavl, Russia</LocationName>
            </Location>

            <SocialIconRow>
              {socialMedia.map(social => {
                const { name, link } = social;
                return <SocialIcon key={name} type={name} link={link} />;
              })}
            </SocialIconRow>
          </MainInfoWrapper>
        </Header>
        <MainSection>
          <SkillsContainer>
            <SkillsHeader>Techs</SkillsHeader>
            <SkillsContent>
              {techs.map(tech => {
                const { name, rank } = tech;
                return <RankedTech key={name} name={name} rank={rank} />;
              })}
            </SkillsContent>

            <SkillsHeader>Interests</SkillsHeader>
            <InterestsContent>
              {interests.map(val => {
                return <Pin key={val}>{val}</Pin>;
              })}
            </InterestsContent>

            <SkillsHeader>Skills</SkillsHeader>
            <SkillsContent>
              <SkillHeader>Programming Languages:</SkillHeader>
              <PinRow>
                {programmingLanguages.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>Software:</SkillHeader>
              <PinRow>
                {soft.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>SDK / API:</SkillHeader>
              <PinRow>
                {APIsAndSDKs.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>Libs/Packages:</SkillHeader>
              <PinRow>
                {libs.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>Other:</SkillHeader>
              <PinRow>
                {otherSkills.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>
            </SkillsContent>
          </SkillsContainer>
          <CVContainer>
            <Menu>
              <MenuButton
                onClick={this.onMenuButtonClick.bind(this, Filter.ALL)}
                selected={filter == Filter.ALL}
              >
                All
              </MenuButton>
              <MenuButton
                onClick={this.onMenuButtonClick.bind(this, Filter.EXPERIENCE)}
                selected={filter == Filter.EXPERIENCE}
              >
                Experience
              </MenuButton>
              <MenuButton
                onClick={this.onMenuButtonClick.bind(this, Filter.PROJECTS)}
                selected={filter == Filter.PROJECTS}
              >
                Projects
              </MenuButton>
              <MenuButton
                onClick={this.onMenuButtonClick.bind(this, Filter.EDUCATION)}
                selected={filter == Filter.EDUCATION}
              >
                Education
              </MenuButton>
              <MenuButton
                onClick={this.onMenuButtonClick.bind(this, Filter.HACKATHONS)}
                selected={filter == Filter.HACKATHONS}
              >
                Hackathons
              </MenuButton>
            </Menu>
            <CVWrapper>
              {expFiltered.map((item, index) => {
                return (
                  <ExpBlock
                    key={item.name}
                    {...item}
                    last={index == expFiltered.length - 1}
                  />
                );
              })}
            </CVWrapper>
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
`;

export const Header = styled.div`
  flex: 1;
  margin-top: 2.5em;
`;

export const Photo = styled.img`
  max-width: 160px;
  max-height: 160px;
  border-radius: 80px;
  padding: 2px;
  background: linear-gradient(-45deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR});
  clip-path: circle(50% at center);
`;

// export const PhotoWrapper = styled.div`
// `

export const PhotoContainer = styled.div`
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 10px;
  flex: 1;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const MainInfoWrapper = styled.div`
  flex-direction: column;
  justify-items: center;
  padding: 0 20px;
  font-size: 1.2em;
  line-height: 1.5em;
  flex: 2;
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
  margin-top: 2em;
  transition: opacity 5s ease-in-out;
`;

export const SkillsContainer = styled.div`
  flex-direction: column;
  flex: 1;
`;

export const SkillsHeader = styled.div`
  border-top: 1px solid ${BORDER_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};
  height: 59px;
  margin: 0;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-top: 0;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 10px 0; */
  padding: 1em;
`;

export const InterestsContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
`;

export const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${BORDER_COLOR};
  flex: 2.25;
`;

export const CVWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
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

export interface MenuButtonProps {
  selected: boolean;
}

export const MenuButton = styled.button`
  /* background: ${MAIN_COLOR} linear-gradient(135deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR +
  "4C"}); */
  background: ${(props: MenuButtonProps) =>
    props.selected ? MAIN_COLOR + "0F" : "transparent"};
  border: 0;
  color: white;
  font-size: 1em;
  flex: 1;
  height: 60px;
  justify-content: center;
  border-bottom: 1px solid ${props =>
    props.selected ? MAIN_COLOR : BORDER_COLOR};
  border-left: 1px solid ${BORDER_COLOR};

  &:hover {
    border-bottom: 4px solid ${MAIN_COLOR};
    color: ${MAIN_COLOR};
    background: ${MAIN_COLOR + "0F"};
  }

  &:first-child {
    border-left: 0;
  }
`;

export const SkillHeader = styled.div``;

export const PinRow = styled.div`
  margin-bottom: 0.5em;
`;

export const CarouselItem = styled.div`
  display: block;
`;

injectGlobal`
  @font-face {
    font-family: Poppins;
    src: url('${Poppins}') format("ttf");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal; 
  }

  @font-face {
    font-family: OpenSans;
    src: url('${OpenSans}') format("ttf");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal; 
  }

  html {
    font-size: 100%;
    font-family: Poppins, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.5px;
  }

  @media only screen and (max-device-width: 480px) {
    html { font-size: 75%; // 16px }
  }

  body {
    
    margin: 0;
    padding: 0;
    background: ${BACKGROUND_COLOR};
    color: ${TEXT_COLOR};
  }

  body * {
    display: flex;
    flex-wrap: wrap;
    /* flex: 1; */
    transition: all 0.1s ease;
  }

  *:focus {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  .fa-map-marker-alt * {
    fill: url(#rg);
  }

  .fa-star * {
    /* fill: red; */
    fill: url(#stars);
  }
`;
