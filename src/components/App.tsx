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
import PoppinsOptimized from "../fonts/poppins-regular-webfont.ttf";
import OpenSans from "../fonts/OpenSans/OpenSans-Regular.ttf";

// Projects

//// TSD 2
import tsd2Logo from "../images/tsd2-logo.png";
import tsd2_0 from "../images/tsd2-0.png";
import tsd2_1 from "../images/tsd2-1.png";
import tsd2_2 from "../images/tsd2-2.png";
import tsd2_3 from "../images/tsd2-3.png";
import tsd2_4 from "../images/tsd2-4.png";
import tsd2_5 from "../images/tsd2-5.png";
import tsd2_6 from "../images/tsd2-6.png";
import tsd2_7 from "../images/tsd2-7.png";
import d2wp_0 from "../images/DOTA 2 Wiki Parser/d2wp_0.png";
import d2wp_1 from "../images/DOTA 2 Wiki Parser/d2wp_1.jpg";
import d2wp_2 from "../images/DOTA 2 Wiki Parser/d2wp_2.jpg";
import d2wp_3 from "../images/DOTA 2 Wiki Parser/d2wp_3.jpg";

//// TS 2
import ts2_0 from "../images/ts2/0.png";
import ts2_1 from "../images/ts2/1.png";
import ts2_2 from "../images/ts2/2.png";
import ts2_3 from "../images/ts2/3.png";
import ts2_4 from "../images/ts2/4.png";
import ts2_5 from "../images/ts2/5.png";
import ts2_6 from "../images/ts2/6.png";
import ts2_7 from "../images/ts2/7.png";
import ts2_8 from "../images/ts2/8.png";
import ts2_9 from "../images/ts2/9.png";
import ts2_10 from "../images/ts2/10.png";
import ts2_11 from "../images/ts2/11.png";
import ts2_12 from "../images/ts2/12.png";
import ts2_13 from "../images/ts2/13.png";
import ts2_14 from "../images/ts2/14.png";
import ts2_15 from "../images/ts2/15.png";
import ts2_16 from "../images/ts2/16.png";

import gameStatLogo from "../images/gamestat-logo.png";

import bubbleTextLogo from "../images/bubbletext-logo.png";
import bubbleTextGif from "../images/bubbletext-gif.gif";

import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  ADDITIONAL_COLOR,
  TEXT_COLOR,
  BORDER_COLOR,
  breakpoint
} from "../consts";

export interface State {
  filter: Filter;
  lang: Language;
  programmingLanguages: string[];
  softAndTools: string[];
  APIsAndSDKs: string[];
  libs: string[];
  otherSkills: string[];
  interests: string[];
  frontendStack: string[];
  backendStack: string[];
  gamedevStack: string[];
  techs: IRankedTech[];
  experience: IExperience[];
  socialMedia: ISocialMedia[];
}

export class App extends Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      filter: Filter.ALL,
      lang: Language.en,
      socialMedia: [
        { name: "vk", link: "https://vk.com/ciberus" },
        { name: "twitter", link: "https://twitter.com/gamestatext" },
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
      techs: [
        { name: "React", rank: 3 },
        { name: "React Native", rank: 3 },
        { name: "Angular", rank: 2 },
        { name: "Unity3d", rank: 3 }
      ],
      interests: [
        "DOTA 2",
        "ESports",
        "ESports market",
        "Crypto",
        "Twitch extensions",
        "Science",
        "AI",
        "ML",
        "Ad Integration",
        "AR/VR/MR",
        "Programming",
        "Streaming",
        "Blockchain",
        "UI/UX",
        "PWA"
      ],
      programmingLanguages: [
        "C#",
        "C++",
        "HTML/XAML/XML",
        "CSS",
        "SASS/LESS",
        "SQL",
        "JavaScript",
        "TypeScript",
        "Java",
        "PHP",
        "Pascal/Delphi"
      ],
      frontendStack: [
        "React/React Native",
        "Angular",
        "MobX",
        "RxJS",
        "JavaScript",
        "TypeScript",
        "TSLint",
        "Webpack",
        "Jest",
        "Enzyme",
        "npm/yarn"
      ],
      backendStack: ["Firebase"],
      gamedevStack: ["Unity3d", "C#"],
      softAndTools: [
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
        "Bebo",
        "Sketch",
        "Framer",
        "Zeplin",
        "Trello",
        "Bitbucket",
        "FileZilla",
        "phpMyAdmin",
        "Wordpress",
        "Joomla",
        "Code::Blocks",
        "Notepad++",
        "Sublime Text",
        "Android Studio",
        "Intellij Idea",
        "Texture Packer",
        "npm"
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
        "Twitch API",
        "Facebook SDK",
        "Google Play Services",
        "Unofficial Kinopoisk API",
        "Firebase",
        "Instagram API"
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
        "styled-components",
        "ESLint",
        "TSLint",
        "Flow",
        "Prettier",
        "Gulp",
        "jQuery",
        "Bootstrap",
        "Magnific Popup",
        "Volley",
        "UIL",
        "HtmlAgilityPack",
        ".Net Core",
        "MetroFramework - Modern UI",
        "MiniJSON",
        "Owl Carousel",
        "NGUI",
        "TouchScript",
        "AVPro Windows Media",
        "Json.NET",
        "OpenIAB",
        "DOTween",
        "iTween",
        "Scaleform",
        "PagedRect"
      ],
      otherSkills: ["AmoCRM", "ASO", "AES", "FSM", "PVRTC"],

      experience: [
        {
          name: "School 4",
          location: "Yaroslavl, Russia",
          time: "2004-2013",
          filter: Filter.EDUCATION,
          // description: "School with deep english learning"
          techs: ["C++", "HTML", "CSS", "Pascal"]
        },
        {
          name: "Auto mechanical college",
          location: "Yaroslavl, Russia",
          time: "2013-2017",
          role: "Student",
          filter: Filter.EDUCATION,
          description:
            "Programming in computer systems(same as Computer Science associate degree)",
          techs: ["Pascal/Delphi", "SQL", "C++"]
        },
        {
          filter: Filter.EXPERIENCE,
          name: 'Studio "Peppers"',
          location: "Yaroslavl, Russia",
          time: "08.2015-11.2015",
          role: "Intern",
          description: `Development of games/apps prototypes 

Projects:
1) "Photo with fish" app prototype - AR app with 2 markers between which is placed the curving fish. 
Challenges:
  - Realtime chroma key to place user fingers on the front layer'
  - Model curving/autoscaling

2) "TomCat" copycat app prototype - app hears for any noise if user says anything app start recording and after phrase repeat with changed pitch. Learned how digital audio works, sampling rate, discretization and so on.

3) "Spaceship" game prototype - game goal finish race with best score. Optionally player can control ship with Leap Motion
`,
          techs: [
            "Unity",
            "C#",
            "AR",
            "Vuforia",
            "NGUI",
            "DOTween",
            "TouchScript",
            "Leap Motion",
            "Instagram API",
            "Google VR SDK"
          ]
        },
        {
          filter: Filter.PROJECTS,
          name: "Treasure Simulator DOTA 2",
          location: "Yaroslavl, Russia",
          time: "07.2015-01.2016",
          role: "App(Android) - Owner",
          logo: tsd2Logo,
          link:
            "https://play.google.com/store/apps/details?id=com.CiberusINC.TreasureSimulator2",
          description: `App simulate opening treasures from DOTA 2.
Items are parsed from DOTA 2 Wiki with my "DOTA 2 Wiki Parser"`,
          screenshots: [
            tsd2_0,
            tsd2_1,
            tsd2_2,
            tsd2_3,
            tsd2_4,
            tsd2_5,
            // tsd2_6,
            tsd2_7,
            // d2wp_1,
            // d2wp_2,
            // d2wp_3,
            d2wp_0
          ],
          socialMedia: [
            {
              name: "android",
              link:
                "https://play.google.com/store/apps/details?id=com.CiberusINC.TreasureSimulator2"
            },
            { name: "vk", link: "https://vk.com/cibdev" }
          ],
          techs: [
            "Unity3d",
            "C#",
            "Texture Packer",
            "PVRTC",
            "NGUI",
            "UnityAds",
            "Photoshop",
            "base64",
            "AES",
            "Visual Studio",
            "Resharper",
            "git(Bitbucket)",
            "MiniJSON",
            "WPF",
            "HtmlAgilityPack",
            "MetroUI"
          ]
        },
        {
          name: "Dojo-Game/Adv Online",
          location: "Yaroslavl, Russia",
          time: "03.2016-05.2016",
          role: "Developer/Site administrator",
          filter: Filter.EXPERIENCE,
          description: `-PSD to HTML
-Site administration`,
          techs: [
            "HTML",
            "CSS",
            "Gulp",
            "FileZilla",
            "phpMyAdmin",
            "Wordpress",
            "Joomla"
          ]
        },
        {
          filter: Filter.HACKATHONS,
          location: "Yaroslavl, Russia",
          name: "GetHub",
          time: "11.06.2016-12.06.2016",
          role: "YarParking project",
          link: "https://gethub.ru/",
          description: "Yaroslavl hackathon"
        },
        {
          filter: Filter.EXPERIENCE,
          name: "Casual INC",
          location: "Los Angeles, CA",
          time: "05.2016-07.2017",
          role: "Remote Developer",
          description: `-Reskin Unity3D apps
-Ad SDK's Integration
-Publishing apps(released ~80 apps)`,
          techs: [
            "Unity3d",
            "C#",
            "Facebook SDK",
            "AdToApp",
            "Texture Packer",
            "ASO"
          ]
        },
        {
          filter: Filter.PROJECTS,
          name: "Treasure Simulator 2",
          time: "24.01.2017-present",
          role: "Prototype - Owner",
          link: "https://vk.com/cibdev",
          description: `Second version of my "Treasure Simulator DOTA 2" app.
Refactored and updated "DOTA 2 Wiki Parser" to v2.`,
          videoLink: "OFeBb1Kb1W8",
          screenshots: [
            ts2_0,
            ts2_1,
            ts2_2,
            ts2_3,
            // ts2_4,
            ts2_5,
            ts2_6,
            ts2_7,
            ts2_8,
            ts2_9,
            // ts2_10,
            ts2_11,
            ts2_12,
            ts2_13,
            ts2_14,
            ts2_15,
            ts2_16
          ],
          socialMedia: [{ name: "vk", link: "https://vk.com/cibdev" }],
          techs: [
            "Unity3d",
            "C#",
            "Texture Packer",
            "PVRTC",
            "NGUI",
            "Photoshop",
            "base64",
            "AES",
            "Visual Studio",
            "Resharper",
            "git(Bitbucket)"
          ]
        },
        {
          name: "SkinSwap",
          location: "Moscow, Russia",
          time: "07.2017-04.2018",
          role: "Remote Developer",
          filter: Filter.EXPERIENCE,
          description: `-Develop prototype`,
          techs: [
            "React Native",
            "Unity3d",
            "Zeplin",
            "Framer",
            "Sketch",
            "Expo",
            "Postman"
          ]
        },
        {
          filter: Filter.PROJECTS,
          name: "Game Stat",
          time: "09.2017-present",
          role: "Twitch extension - Owner",
          link: "https://gamestatext.com/",
          logo: gameStatLogo,
          description: `Twitch extension provide in-game statistics for the streamers currently support DOTA 2
Also integrated data from awesome personal esports training lab - <a href="https://gosu.ai">GOSU.AI</a> u can read about it <a href="https://vk.com/@gamestatext-gamestat-gosuai">here</a>`,
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
          ],
          techs: [
            "React",
            "Postman",
            "Babel",
            "Webpack",
            "MobX",
            "Flow",
            "Prettier",
            "Firebase",
            "Opendota",
            "Twitch API",
            "Twitch Extensions"
          ]
        },
        {
          filter: Filter.PROJECTS,
          name: "BubbleText",
          time: "04.2018-present",
          role: "Twitch extension(Front-End developer) - Co-founder",
          link: "https://bubbletext.io/",
          logo: bubbleTextLogo,
          description: `First of several exts using "Bits in Extensions". Selected by&nbsp<a href="https://twitch.tv/" target="_blank">Twitch.tv</a> for feature placement.

Bubble Text allows streamers to install an interactive speech bubble on their stream. Viewers can then use bits to get a set of text, animation and bubble style that will be displayed on the stream. By providing a variety of options, bubble text assures a unique and personalized experience for every user. This extension makes viewers feel more engaged by providing a gateway from Twitch to streamer’s screen. For streamers, this extension gives an opportunity to monetize their stream by giving them a portion of each sale.

Made in collaboration with @drazzzer(Kubatko Daniil)`,
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
            { name: "website", link: "https://bubbletext.io/" },
            { name: "mail", link: "mailto:bubbletext.ext@gmail.com" }
          ],
          techs: [
            "React",
            "TypeScript",
            "MobX",
            "styled-components",
            "Webpack",
            "socket.io",
            "Twitch API",
            "Twitch Extensions"
          ]
        }
      ]
    };
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
      softAndTools,
      APIsAndSDKs,
      interests,
      libs,
      otherSkills,
      techs,
      socialMedia,
      experience,
      frontendStack,
      backendStack,
      gamedevStack
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
            <FullName>Penkov Pavel (21 years)</FullName>

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

            <SkillsHeader>Stack</SkillsHeader>
            <InterestsContent>
              <SkillHeader>Front-end:</SkillHeader>
              <PinRow>
                {frontendStack.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>Back-end:</SkillHeader>
              <PinRow>
                {backendStack.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>GameDev:</SkillHeader>
              <PinRow>
                {gamedevStack.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>
            </InterestsContent>

            <SkillsHeader>Interests</SkillsHeader>
            <InterestsContent>
              {interests.map(val => {
                return <Pin key={val}>{val}</Pin>;
              })}
            </InterestsContent>

            {/* <SkillsHeader>Favourite techs</SkillsHeader>
            <InterestsContent>
              {frontendStack.map(val => {
                return <Pin key={val}>{val}</Pin>;
              })}
            </InterestsContent> */}

            <SkillsHeader>Skills</SkillsHeader>
            <SkillsContent>
              <SkillHeader>Programming Languages:</SkillHeader>
              <PinRow>
                {programmingLanguages.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>Soft and Tools:</SkillHeader>
              <PinRow>
                {softAndTools.map(val => {
                  return <Pin key={val}>{val}</Pin>;
                })}
              </PinRow>

              <SkillHeader>SDKs/APIs:</SkillHeader>
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
    src: url('${PoppinsOptimized}') format("ttf");
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
    line-height: 1.25em;
    font-family: Poppins, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 1.5px;
    
    @media (max-width: ${breakpoint.sm}) {
      /* font-size: 90%; */
    }
  }

  #root {
    display: flex;
    flex-wrap: wrap;
  }

  body {
    font-size: inherit;
    margin: 0;
    padding: 0;
    background: ${BACKGROUND_COLOR};
    color: ${TEXT_COLOR};
  }

  body * {
    /* display: flex;
    flex-wrap: wrap; */
    /* transition: all 0.1s ease; */
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
  flex-wrap: wrap;
  flex: 1;

  margin-top: 2.5rem;
  padding: 0 20px;
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

  @media (max-width: ${breakpoint.sm}) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const MainInfoWrapper = styled(FDiv)`
  flex-direction: column;
  justify-items: center;
  flex: 1;
  flex-basis: 290px;

  padding: 0 20px;

  font-size: 1.2em;
  line-height: 1.5em;
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

  min-width: 300px;
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
  flex-wrap: wrap;
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

  /* flex-wrap: wrap; */
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

export const SkillHeader = styled(FDiv)`
  flex: 100%;
`;

export const PinRow = styled(FDiv)`
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CarouselItem = styled(FDiv)`
  display: block;
`;
