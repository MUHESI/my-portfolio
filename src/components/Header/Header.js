import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';




const Header = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY > 20) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Container
      style={{
        background: `${isTopOfPage ? 'none' : 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)'
          }`
      }}
    >
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#blog">
            <NavLink>Blog</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MUHESI">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/moise-muhesi/"
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
      </Div3>
    </Container>
  )
}


export default Header;
