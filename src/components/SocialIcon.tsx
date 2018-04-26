import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";

import { MAIN_COLOR, ADDITIONAL_COLOR } from "../consts";

import vk from "../images/vk.png";
import github from "../images/github.png";
import twitch from "../images/twitch.png";
import facebook from "../images/fb.png";
import twitter from "../images/twitter.png";
import medium from "../images/medium.png";
import steam from "../images/steam.png";
import mail from "../images/mail.png";
import telegram from "../images/telegram.png";

export interface SocialIconProps {
  type: string;
  link: string;
}

export class SocialIcon extends Component<SocialIconProps, {}> {
  render() {
    const { type, link } = this.props;

    let image = "";
    // let iconLink;

    switch (type) {
      case "vk":
        image = vk;
        break;
      case "github":
        image = github;
        break;
      case "twitch":
        image = twitch;
        break;
      case "facebook":
        image = facebook;
        break;
      case "twitter":
        image = twitter;
        break;
      case "medium":
        image = medium;
        break;
      case "steam":
        image = steam;
        break;
      case "mail":
        image = mail;
        break;
      case "telegram":
        image = telegram;
        break;

      default:
        break;
    }

    return (
      <SocialIconLink href={link} target="_blank">
        <SocialIconImage src={image} />
      </SocialIconLink>
    );
  }
}

export const SocialIconLink = styled.a`
  width: 40px;
  height: 40px;
  margin: 0 10px 6px 0;
  padding: 2px;
  background: linear-gradient(-45deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR});
  border-radius: 20px;
  /* border: 2px solid ; */
`;

export const SocialIconImage = styled.img`
  width: 40px;
  height: 40px;
`;

export default SocialIcon;
