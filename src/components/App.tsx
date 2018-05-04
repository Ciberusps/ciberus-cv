// import "./App.css";

import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";

import { SocialMedia } from "./SocialMedia";
import { Pin } from "./Pin";
import { RankedTech, Props as IRankedTech } from "./RankedTech";
import { ExpBlock, Props as IExperience } from "./ExpBlock";
import { FDiv } from "../styles";
import { Filter, Language, SocialMedia as ISocialMedia } from "../models";

import photo from "../images/photo.jpg";
import Roboto from "../fonts/Roboto-Regular.ttf";
import Poppins from "../fonts/Poppins-Regular.ttf";
import OpenSans from "../fonts/OpenSans/OpenSans-Regular.ttf";

// Projects
import tsd2Logo from "../images/tsd2-logo.webp";
import tsd2_0 from "../images/tsd2-0.webp";
import tsd2_1 from "../images/tsd2-1.webp";
import tsd2_2 from "../images/tsd2-2.webp";
import tsd2_3 from "../images/tsd2-3.webp";
import tsd2_4 from "../images/tsd2-4.webp";
import tsd2_5 from "../images/tsd2-5.webp";
import tsd2_6 from "../images/tsd2-6.webp";
import tsd2_7 from "../images/tsd2-7.webp";

import gameStatLogo from "../images/gamestat-logo.png";

import bubbleTextLogo from "../images/bubbletext-logo.png";
import bubbleTextGif from "../images/bubbletext-gif.gif";

import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  ADDITIONAL_COLOR,
  TEXT_COLOR,
  BORDER_COLOR
} from "../consts";

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
  experience: IExperience[];
  socialMedia: ISocialMedia[];
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
        "Blockchain",
        "UI/UX"
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
          time: "2004-2013",
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
          filter: Filter.EXPERIENCE,
          name: 'Studio "Peppers"',
          location: "Yaroslavl, Russia",
          time: "08.2015-11.2015",
          role: "Intern",
          description: "-Development of game prototypes <br />-AR apps"
        },
        {
          filter: Filter.PROJECTS,
          name: "Treasure Simulator DOTA 2",
          location: "Yaroslavl, Russia",
          time: "07.2015-01.2016",
          role: "Unity3D app(Android) - Owner",
          logo: tsd2Logo,
          link:
            "https://play.google.com/store/apps/details?id=com.CiberusINC.TreasureSimulator2",
          description:
            "App simulate opening treasures from Dota 2. Drop rate of items similar with the actual. In our app u can buy treasures, get sets or items in your inventory from treasure. To make money sell items and sets from your inventory. App contains over 125 treasures with 600+ items and 270+ sets. Also you can try your luck in Roulette and get prizes.",
          screenshots: [
            tsd2_0,
            tsd2_1,
            tsd2_2,
            tsd2_3,
            tsd2_4,
            tsd2_5,
            tsd2_6,
            tsd2_7
          ],
          socialMedia: [
            {
              name: "android",
              link:
                "https://play.google.com/store/apps/details?id=com.CiberusINC.TreasureSimulator2"
            },
            { name: "vk", link: "https://vk.com/cibdev" }
          ]
        },
        {
          name: "Dojo-Game/Adv Online",
          location: "Yaroslavl, Russia",
          time: "03.2016-05.2016",
          role: "Developer/Site administrator",
          filter: Filter.EXPERIENCE,
          description: "-PSD to HTML <br /> -Site administration"
        },
        {
          filter: Filter.HACKATHONS,
          location: "Yaroslavl, Russia",
          name: "GetHub",
          time: "11.06.2016-12.06.2016",
          role: "YarParking project",
          link: "http://gethub.ru/",
          description: "Yaroslavl hackathon"
        },
        {
          name: "Casual INC",
          location: "Los Angeles, CA",
          time: "05.2016-07.2017",
          role: "Remote Developer",
          filter: Filter.EXPERIENCE,
          description:
            "-Reskin Unity3D apps <br />-Ad SDK's Integration <br />-Publishing apps(released ~80 apps) <br /> <br />Casual INC - daughter company of AdToApp(one of Ad mediation platform that lets you serve ads from multiple source aimed to bring the most revenue for publishers)"
        },
        {
          filter: Filter.PROJECTS,
          name: "Treasure Simulator 2",
          time: "24.01.2017-present",
          role: "Prototype - Owner",
          link: "https://vk.com/cibdev",
          description: "",
          videoLink: "OFeBb1Kb1W8",
          screenshots: [
            "https://pp.userapi.com/c639431/v639431655/1c1b/RBEhIKR-7KE.jpg",
            "https://pp.userapi.com/c639431/v639431655/1c24/7PZky7JLth4.jpg",
            "https://pp.userapi.com/c639431/v639431655/1c2d/YhbLKd4qj-0.jpg",
            "https://pp.userapi.com/c639431/v639431655/1c36/_g48o2tKTGo.jpg",
            "https://pp.userapi.com/c639431/v639431655/1c40/oVe_BCt0vPI.jpg",
            "https://psv4.userapi.com/c810137/u199887655/docs/77a526a6886a/1.png?extra=rWNjMV3hlRM3OKqUjLuEHFZYEa2NEgrcThYepPbDpixhEbY6ADx5fG2BgfZmjYI5s0Ktga_yhzNk0lk3q6PyXKWaTT4t8g3rfktdRy5G1kSIqhuAFGi_PWFdu7dBBdniSPsxWHJGwxqskjg",
            "https://psv4.userapi.com/c810137/u199887655/docs/e4cbe199e568/2.png?extra=rq3UE7lfJin-a4NYY1WAK_uZGWq7NhKp6LWe5FIfM0xZpxLlA3Cx1XNGU_M47ZwWw3uTiLM2V-GajZq85cFxy9b6S89v6OZQXb91ae9ipqdlx3i1plzSSQlauxV8f1GP1YANueJHZwjff0U",
            "https://psv4.userapi.com/c810137/u199887655/docs/2d9bdeb1dbb0/3.png?extra=d87Sf_Xrc5Xk7GLkQ_BE95j7t99msMd8QSVWmy8y2HfsSyQjUOKG-QFZ6tL0Vc_AW4_zwGkZMbyp7cH5ENFRHte5-4SDaW6SVmEf74t74BM5XaJT-CCKLKEkSpHZUi4iljvVfFEWhh6_uF8",
            "https://psv4.userapi.com/c810137/u199887655/docs/010d7e237194/4.png?extra=nUG9DSQxSU4TdS7VGwVjRHtKD_Ou1G5VRsWcMxlSOq3MTjtiuvFdRRvXzroMB14yJgp7VJJwwECMbDh8bJXlmFj8FPvxcCJYZ4Pmm0U4h7errl8rraPygro49JgGfPf1E46Ad3m-rHgq5X0",
            "https://psv4.userapi.com/c810137/u199887655/docs/7a7453ca2041/5.png?extra=29up3C0-SPMuSzXlmmAqIiFdS3RNJQo49iNOL3sJ9hKKUDc59r9zjGwVe4HIDmZLPFHaTvzLjIqHUb4aDPpalt9beq02kIIoPdC9z4ZmGyRpRpGiMtmc_52EKWtXtqCnn9UG6pgGhKbzw7c",
            "https://psv4.userapi.com/c810137/u199887655/docs/e6e5046d6e24/6.png?extra=3gJk1eSDqdtAWRV0W1IXSr6j39PdBTUQpBBi04WnjTzznVQXeYEIHHFdtAxU8ymbt4QhfP_9dRE_F9xBFQud19DNwjwwZf-aBUFNA_b0kWLd1JovSiZxcODzBKnzwxOk6jW36cW3wyqhFx0"
          ],
          socialMedia: [{ name: "vk", link: "https://vk.com/cibdev" }]
        },
        {
          name: "SkinSwap",
          location: "Moscow, Russia",
          time: "07.2017-04.2018",
          role: "Remote Developer/Manager",
          filter: Filter.EXPERIENCE,
          description: "Prototype developer"
        },
        {
          filter: Filter.PROJECTS,
          name: "Game Stat",
          time: "09.2017-present",
          role: "Twitch extension - Owner",
          link: "https://gamestatext.com/",
          logo: gameStatLogo,
          description:
            'Twitch extension provide in-game statistics for the streamers currently support DOTA 2 <br/> <br/> Also integrated data from awesome personal esports training lab - <a href="https://GOSU.AI" target="_blank">GOSU.AI</a>&nbspu can read about it&nbsp<a href="https://vk.com/@gamestatext-gamestat-gosuai" target="_blank">here</a>',
          screenshots: [
            "https://media-elerium.cursecdn.com/attachments/218/514/screenshot1.png",
            "https://media-elerium.cursecdn.com/attachments/218/515/screenshot2.png"
          ],
          socialMedia: [
            { name: "vk", link: "https://vk.com/gamestatext" },
            { name: "twitter", link: "https://twitter.com/gamestatext" },
            { name: "medium", link: "https://medium.com/gamestat" },
            { name: "website", link: "https://gamestatext.com" },
            { name: "mail", link: "mailto:gamestat.ciberus@gmail.com" }
          ]
        },
        {
          filter: Filter.PROJECTS,
          name: "BubbleText",
          time: "04.2018-present",
          role: "Twitch extension(Front-End developer) - Co-founder",
          link: "http://bubbletext.io/",
          logo: bubbleTextLogo,
          description:
            'First of several exts using "Bits in Extensions". Selected by&nbsp<a href="https://twitch.tv/" target="_blank">Twitch.tv</a> for feature placement. <br/><br/> Bubble Text allows streamers to install an interactive speech bubble on their stream. Viewers can then use bits to get a set of text, animation and bubble style that will be displayed on the stream. By providing a variety of options, bubble text assures a unique and personalized experience for every user. This extension makes viewers feel more engaged by providing a gateway from Twitch to streamer’s screen. For streamers, this extension gives an opportunity to monetize their stream by giving them a portion of each sale. <br /><br /> Made in collaboration with @drazzzer(Kubatko Daniil)',
          screenshots: [
            bubbleTextGif,
            "https://5pogkiewjnqz3f2lydhxwqqxncbpx8.ext-twitch.tv/5pogkiewjnqz3f2lydhxwqqxncbpx8/0.0.2/904c3932dedfb505502c59b883c44444/internal/screenshots/227/879/config.png",
            "https://5pogkiewjnqz3f2lydhxwqqxncbpx8.ext-twitch.tv/5pogkiewjnqz3f2lydhxwqqxncbpx8/0.0.2/904c3932dedfb505502c59b883c44444/internal/screenshots/227/880/viewer.png",
            "https://5pogkiewjnqz3f2lydhxwqqxncbpx8.ext-twitch.tv/5pogkiewjnqz3f2lydhxwqqxncbpx8/0.0.2/904c3932dedfb505502c59b883c44444/internal/screenshots/227/881/widget.png"
          ],
          socialMedia: [
            { name: "vk", link: "https://vk.com/bubbletext" },
            { name: "twitter", link: "https://twitter.com/bubbletext" },
            { name: "medium", link: "https://medium.com/bubbletext" },
            {
              name: "facebook",
              link: "https://www.facebook.com/groups/bubbletext/"
            },
            { name: "twitch", link: "https://www.twitch.tv/bubbletext" },
            { name: "website", link: "http://bubbletext.io/" },
            { name: "mail", link: "mailto:bubbletext.ext@gmail.com" }
          ]
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
                // const { name, link } = social;
                return (
                  <SocialMedia
                    key={social.name}
                    name={social.name}
                    link={social.link}
                  />
                );
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

  #root {
    display: flex;
    flex-wrap: wrap;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${BACKGROUND_COLOR};
    color: ${TEXT_COLOR};
  }

  body * {
    /* display: flex;
    flex-wrap: wrap; */
    transition: all 0.1s ease;
    /* flex: 1; */
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

  a {
    color: ${ADDITIONAL_COLOR};
    text-decoration: none;
  }
`;

export const AppContainer = styled(FDiv)`
  max-width: 1024px;
  width: 1024px;
  margin: auto;
`;

export const Header = styled(FDiv)`
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

export const PhotoContainer = styled(FDiv)`
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 10px;
  flex: 1;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const MainInfoWrapper = styled(FDiv)`
  flex-direction: column;
  justify-items: center;
  padding: 0 20px;
  font-size: 1.2em;
  line-height: 1.5em;
  flex: 2;
`;

export const ShortDescription = styled(FDiv)`
  color: #7d7d80;
`;

export const FullName = styled(FDiv)`
  font-size: 1.875em;
  line-height: 1.25em;
`;

export const Nickname = styled(FDiv)`
  color: #df358d;
`;

export const Location = styled(FDiv)`
  display: inline-block;
  align-content: flex-start;
  flex-direction: column;
`;

export const MapMarker = styled.i`
  margin-right: 0.3em;
  margin-top: -10px;
  color: ${MAIN_COLOR};
`;

export const LocationName = styled(FDiv)`
  display: inline-block;
`;

export const LinearGradient = styled.svg`
  position: absolute;
`;

export const SocialIconRow = styled(FDiv)`
  margin-top: 10px;
  flex-direction: row;
`;

export const MainSection = styled(FDiv)`
  border-top: 1px solid ${BORDER_COLOR};
  flex-direction: row;
  margin-top: 2em;
  transition: opacity 5s ease-in-out;
`;

export const SkillsContainer = styled(FDiv)`
  flex-direction: column;
  flex: 1;
`;

export const SkillsHeader = styled(FDiv)`
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

export const SkillsContent = styled(FDiv)`
  display: flex;
  flex-direction: column;
  /* padding: 10px 0; */
  padding: 1em;
`;

export const InterestsContent = styled(FDiv)`
  display: flex;
  flex-direction: row;
  padding: 1em;
`;

export const CVContainer = styled(FDiv)`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${BORDER_COLOR};
  flex: 2.25;
`;

export const CVWrapper = styled(FDiv)`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const Menu = styled(FDiv)`
  height: 60px;
  width: 100%;
  font-size: 0.9em;
`;

export interface MenuButtonProps {
  selected: boolean;
}

export const MenuButton = styled.button`
  background: ${(props: MenuButtonProps) =>
    props.selected ? MAIN_COLOR + "0F" : "transparent"};
  border: 0;
  color: white;
  font-size: 1em;
  flex: 1;
  height: 60px;
  justify-content: center;
  border-bottom: 1px solid
    ${props => (props.selected ? MAIN_COLOR : BORDER_COLOR)};
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

export const SkillHeader = styled(FDiv)``;

export const PinRow = styled(FDiv)`
  margin-bottom: 0.5em;
`;

export const CarouselItem = styled(FDiv)`
  display: block;
`;
