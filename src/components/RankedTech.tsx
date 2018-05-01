import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";

import { MAIN_COLOR, ADDITIONAL_COLOR } from "../consts";

export interface Props {
  rank: number;
  name: string;
  // query: string;
  // rank: number;
}

export class RankedTech extends Component<Props, {}> {
  render() {
    const { children, rank, name } = this.props;
    const rateArr = Array(5).fill(0);

    return (
      <Tech>
        <Pin href={`https://google.com/search?q=${name}`} target="_blank">
          {name}
        </Pin>:
        <StarRow>
          {rateArr.map((val, index) => {
            if (index < rank) {
              return <StarIcon key={index} className={"fas fa-star"} />;
            }
            return <StarIcon key={index} className={"far fa-star"} />;
          })}
        </StarRow>
        {/* {rate + "/5"} */}
      </Tech>
    );
  }
}

export const Tech = styled.div``;

export const Pin = styled.a`
  background: ${MAIN_COLOR}
    linear-gradient(135deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR + "4C"});
  border-radius: 1em;
  padding: 0em 0.7em;
  margin: 0.2em 0.2em;
  font-size: 0.9em;
  cursor: help;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: white;
    text-decoration: none;
  }
`;

export const StarIcon = styled.i`
  /* fill: red; */
  color: ${MAIN_COLOR};
  /* top: 8px; */
  /* background: ${MAIN_COLOR}
    linear-gradient(135deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR + "4C"});
  border-radius: 1em;
  padding: 0em 0.7em;
  margin: 0.2em 0.2em;
  font-size: 0.9em;
  cursor: help; */
`;

export const StarRow = styled.div`
  margin-top: 2px;
  margin-left: 8px;
  font-size: 1.3em;
`;

export default RankedTech;
