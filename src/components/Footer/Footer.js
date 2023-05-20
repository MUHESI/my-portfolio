import React from 'react';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">+243-998799306</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:muhesi@outlook.fr">
            muhesi@outlook.fr
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I like challenges cause they make me  grow up

            <span>&#9996;</span>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MUHESI">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/moise-muhesi-5102951bb/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/MUHESImo"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
