import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";

import { MAIN_COLOR, ADDITIONAL_COLOR } from "../consts";

export interface Props {
  children: Object;
}

export class Pin extends Component<Props, {}> {
  render() {
    const { children } = this.props;

    return (
      <PinStyle
        href={`https://google.com/search?q=${children}`}
        target="_blank"
      >
        {children}
      </PinStyle>
    );
  }
}

export const PinStyle = styled.a`
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
