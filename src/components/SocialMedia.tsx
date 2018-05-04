import React, { Component, HTMLProps } from "react";
import styled, { injectGlobal } from "styled-components";

import { MAIN_COLOR, ADDITIONAL_COLOR } from "../consts";
import { SocialMedia as ISocialMedia } from "../models";
import { FDiv } from "../styles";

import vk from "../images/vk.png";
import github from "../images/github.png";
import twitch from "../images/twitch.png";
import facebook from "../images/fb.png";
import twitter from "../images/twitter.png";
import medium from "../images/medium.png";
import steam from "../images/steam.png";
import mail from "../images/mail.png";
import telegram from "../images/telegram.png";
import skype from "../images/skype.png";
import linkedin from "../images/linkedin.png";
import android from "../images/android.png";
import website from "../images/website.png";

export class SocialMedia extends Component<ISocialMedia, {}> {
  render() {
    const { name, link } = this.props;

    let image = "";
    // let iconLink;

    switch (name) {
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
      case "skype":
        image = skype;
        break;
      case "linkedin":
        image = linkedin;
        break;
      case "android":
        image = android;
        break;
      case "website":
        image = website;
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
  display: flex;
  flex-wrap: wrap;
  width: 44px;
  height: 44px;
  margin: 0 10px 6px 0;
  background: linear-gradient(-45deg, ${MAIN_COLOR}, ${ADDITIONAL_COLOR});
  border-radius: 20px;
  transition: all 0.2s ease;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-4px) scale(1.05);
  }
`;

export const SocialIconImage = styled.img`
  width: 40px;
  height: 40px;
`;
