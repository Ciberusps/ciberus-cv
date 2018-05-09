import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";
import Lightbox from "react-images";

import { Filter, SocialMedia as ISocialMedia } from "../models";
import { FDiv } from "../styles";

import { SocialMedia } from "./SocialMedia";

import {
  MAIN_COLOR,
  ADDITIONAL_COLOR,
  BACKGROUND_COLOR,
  BORDER_COLOR
} from "../consts";

export interface Props {
  name: string;
  time: string;
  location?: string;
  role?: string;
  description?: string;
  last?: boolean;
  filter: Filter;
  videoLink?: string;
  screenshots?: string[];
  socialMedia?: ISocialMedia[];
  logo?: string;
  link?: string;
}

export interface State {
  isLightBoxOpened: boolean;
  currentImage: number;
}

export class ExpBlock extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { isLightBoxOpened: false, currentImage: 0 };
    // this.closeLightbox = this.closeLightbox.bind(this);
    // this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index) {
    this.setState({ isLightBoxOpened: true, currentImage: index });
  }

  closeLightbox() {
    this.setState({ isLightBoxOpened: false });
  }

  gotoPrevious() {
    const { screenshots } = this.props;
    const { currentImage } = this.state;

    this.setState({ currentImage: currentImage - 1 });
  }

  gotoNext() {
    const { screenshots } = this.props;
    const { currentImage } = this.state;

    this.setState({
      currentImage:
        currentImage + 1 > screenshots.length - 1 ? 0 : currentImage + 1
    });
  }

  renderScreenshots() {
    const { screenshots } = this.props;
    const { isLightBoxOpened, currentImage } = this.state;

    if (screenshots) {
      let normalizeScreenshots = [];
      screenshots.map((screenshot, index) => {
        normalizeScreenshots.push({ src: screenshot });
      });

      return (
        <ScreenshotsWrapper>
          <Lightbox
            images={normalizeScreenshots}
            isOpen={isLightBoxOpened}
            showThumbnails={true}
            onClickThumbnail={index => {
              this.setState({ currentImage: index });
            }}
            currentImage={currentImage}
            onClickImage={this.gotoNext.bind(this)}
            onClickPrev={this.gotoPrevious.bind(this)}
            onClickNext={this.gotoNext.bind(this)}
            onClose={this.closeLightbox.bind(this)}
          />
          {screenshots.map((screenshot, index) => {
            return (
              <ScreenshotContainer
                key={index}
                img={screenshot}
                onClick={this.openLightbox.bind(this, index)}
              >
                {/* <Screenshot src={screenshot} /> */}
              </ScreenshotContainer>
            );
          })}
        </ScreenshotsWrapper>
      );
    }

    return null;
  }

  render() {
    const {
      children,
      name,
      location,
      description,
      time,
      role,
      last,
      filter,
      videoLink,
      screenshots,
      socialMedia,
      logo,
      link
    } = this.props;

    const { isLightBoxOpened, currentImage } = this.state;

    const locationNode =
      filter !== Filter.PROJECTS ? (
        <LocationContainer>
          <MapMarker className={"fas fa-map-marker-alt"} aria-hidden="true" />
          <Location>{location}</Location>
        </LocationContainer>
      ) : (
        <LocationContainer />
      );

    const socialMediaNode = socialMedia
      ? socialMedia.map((item, index) => {
          return <SocialMedia key={item.name} {...item} />;
        })
      : null;

    return (
      <ExpBlockWrapper>
        <DotLineContainer>
          <Dot filter={filter} />
          {!last ? <Line filter={filter} /> : ""}
        </DotLineContainer>
        <ExpBlockContainer>
          <Header>
            <Name filter={filter}>{name}</Name>
            {locationNode}
            <Time>{time}</Time>
          </Header>

          <Role>{role}</Role>

          {logo ? <Logo href={link} target={"_blank"} src={logo} /> : null}

          {videoLink ? (
            <iframe
              width={"100%"}
              height={"340px"}
              src={`http://www.youtube.com/embed/${videoLink}?enablejsapi=1`}
              frameBorder="0"
            />
          ) : null}

          {this.renderScreenshots()}

          <Description dangerouslySetInnerHTML={{ __html: description }} />

          <SocialMediaRow>{socialMediaNode}</SocialMediaRow>
        </ExpBlockContainer>
      </ExpBlockWrapper>
    );
  }
}

export const ExpBlockWrapper = styled(FDiv)`
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const DotLineContainer = styled(FDiv)`
  margin-right: 1em;
  flex-direction: column;
`;

export interface FilterProps {
  filter: Filter;
}

export const Dot = styled(FDiv)`
  /* position: absolute; */
  margin-top: 1em;
  width: 1.75em;
  height: 1.75em;
  border-radius: 1em;
  background: ${(props: FilterProps) => getFilterColor(props.filter)};
`;

const getFilterColor = filter => {
  switch (filter) {
    case Filter.EDUCATION:
      return MAIN_COLOR;
      break;
    case Filter.EXPERIENCE:
      return ADDITIONAL_COLOR;
      break;
    case Filter.PROJECTS:
      return "#00B8D4";
      break;
    case Filter.HACKATHONS:
      return "#FFC107";
      break;

    default:
      break;
  }

  return MAIN_COLOR;
};

export const Line = styled(FDiv)`
  flex: 1;
  margin-left: 0.75em;
  margin-top: -0.75em;
  margin-bottom: -1em;
  max-width: 0.25em;
  background: ${(props: FilterProps) => getFilterColor(props.filter)};
`;

export const ExpBlockContainer = styled(FDiv)`
  flex: 9;
  background: #2c2541;
  padding: 1em;
  box-shadow: 0.2em 0.2em 1em #0002;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Name = styled(FDiv)`
  align-items: center;
  background: ${MAIN_COLOR}
    linear-gradient(
      135deg,
      ${(props: FilterProps) => getFilterColor(props.filter)},
      ${ADDITIONAL_COLOR + "4C"}
    );
  border-radius: 1em;
  padding: 0em 0.7em;
  line-height: 1.5em;
  font-size: 1em;
  vertical-align: middle;
`;

export const Header = styled(FDiv)`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 0.25em 0;
`;

export const LocationContainer = styled(FDiv)`
  flex: 1;
`;

export const MapMarker = styled.i`
  margin-left: 1em;
  margin-top: 2px;
  margin-right: 0.3em;
`;

export const Location = styled(FDiv)`
  flex: 1;
`;
export const Time = styled(FDiv)``;

export const Description = styled(FDiv)`
  margin: 0.4em 0.2em;
  letter-spacing: 1;
  font-size: 0.9em;
`;

export const Role = styled(FDiv)`
  padding: 0 0.2em;
  padding-top: 0.2em;
  color: ${ADDITIONAL_COLOR};
`;

export const ScreenshotsWrapper = styled(FDiv)`
  margin: 0.5em 0em;

  /* @media (max-width: 480px) {
    justify-content: center;
  } */
`;

export const ScreenshotContainer = styled(FDiv)`
  border-radius: 1em;
  background: black url(${(props: { img: string }) => props.img}) center center
    no-repeat;
  background-size: cover;
  height: 8em;
  width: 8em;
  margin: 0.35em 0.5em 0 0;
  border: 1px solid ${MAIN_COLOR};
  cursor: pointer;

  &:hover {
    transform: translateY(-0.75em) scale(1.02);
    border-color: ${ADDITIONAL_COLOR};
  }
`;

export const Screenshot = styled.img``;

export const SocialMediaRow = styled(FDiv)`
  margin: 0.25em 0;
`;

export interface ILogo {
  src: string;
}

export const Logo = styled.a`
  height: 8em;
  width: 50%;
  /* margin: 0.25em 0; */
  background: url(${(props: ILogo) => props.src}) center center no-repeat;
  background-size: contain, contain;
  justify-self: center;
  align-self: center;
`;
