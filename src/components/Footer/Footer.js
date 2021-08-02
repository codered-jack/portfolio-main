import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Connect</LinkTitle>
        <LinkItem href="https://www.linkedin.com/in/sumit-kumar-1856a8148/">LinkedIn</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:sumitnbq@gmail.com">
          sumitnbq@gmail.com
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Tell me and I forget. Teach me and I remember. Involve me and I learn.</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/codered-jack">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sumit-kumar-1856a8148/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://facebook.com/sumitnbq">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
