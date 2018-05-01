import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";

import { Filter } from "./App";

import {
  MAIN_COLOR,
  ADDITIONAL_COLOR,
  BACKGROUND_COLOR,
  BORDER_COLOR
} from "../consts";

export interface ExpBlockProps {
  name: string;
  time: string;
  location?: string;
  role?: string;
  description?: string;
  last?: boolean;
  filter: Filter;
  // query: string;
  // rank: number;
}

export class ExpBlock extends Component<ExpBlockProps, {}> {
  constructor(props) {
    super(props);

    // this.renderLocation = this.renderLocation.bind(this);
  }

  // renderLocation() {
  //   const { filter } = this.props;

  //   return (
  //     <div>
  //       <MapMarker className={"fas fa-map-marker-alt"} aria-hidden="true" />
  //       <Location>{location}</Location>
  //     </div>
  //   );
  // }

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
      screenshots
    } = this.props;

    const locationNode =
      filter !== Filter.PROJECTS ? (
        <LocationContainer>
          <MapMarker className={"fas fa-map-marker-alt"} aria-hidden="true" />
          <Location>{location}</Location>
        </LocationContainer>
      ) : (
        <LocationContainer />
      );

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

          {screenshots
            ? screenshots.map((screen, index) => {
                return (
                  <ScreenshotContainer key={index}>
                    <Screenshot src={screen} />
                  </ScreenshotContainer>
                );
              })
            : ""}

          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </ExpBlockContainer>
      </ExpBlockWrapper>
    );
  }
}

export const ExpBlockWrapper = styled.div`
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const DotLineContainer = styled.div`
  margin-right: 1em;
  flex-direction: column;
`;

export interface FilterProps {
  filter: Filter;
}

export const Dot = styled.div`
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

export const Line = styled.div`
  flex: 1;
  margin-left: 0.75em;
  margin-top: -0.75em;
  margin-bottom: -1em;
  max-width: 0.25em;
  background: ${(props: FilterProps) => getFilterColor(props.filter)};
`;

export const ExpBlockContainer = styled.div`
  flex: 9;
  background: #2c2541;
  padding: 1em;
  box-shadow: 0.2em 0.2em 1em #0002;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Name = styled.div`
  align-items: center;
  background: ${MAIN_COLOR}
    linear-gradient(
      135deg,
      ${(props: FilterProps) => getFilterColor(props.filter)},
      ${ADDITIONAL_COLOR + "4C"}
    );
  border-radius: 1em;
  padding: 0em 0.7em;
  margin: 0 0.2em;
  font-size: 1em;
  vertical-align: middle;
  /* cursor: help;
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: white;
    text-decoration: none;
  } */
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  /* justify-content: space-between; */
`;

export const LocationContainer = styled.div`
  flex: 1;
`;

export const MapMarker = styled.i`
  margin-left: 1em;
  margin-top: 2px;
  margin-right: 0.3em;
`;

export const Location = styled.div`
  flex: 1;
`;
export const Time = styled.div``;

export const Description = styled.div`
  padding: 0.4em;
`;

export const Role = styled.div`
  padding: 0 0.4em;
  padding-top: 0.2em;
  color: ${ADDITIONAL_COLOR};
`;

export const ScreenshotContainer = styled.div`
  max-height: 200px;
  max-width: 200px;
  border: 1px solid red;
`;

export const Screenshot = styled.img``;

export default ExpBlock;
