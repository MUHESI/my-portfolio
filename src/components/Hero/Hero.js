import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { ButtonLink } from "../Picture/ShowPictureStyle";

const Hero = (props) => (
  <>
    <Section flex row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there ! <br />
          Call me MUHESI Moses
        </SectionTitle>
        <SectionText>
          I am a professional fullstack web engineer who has been working in
          this area for more than 3 years. I efficiently solve my clients's
          problems.
          <br />
        </SectionText>
        <div
          style={{
            textAlign: "right",
            paddingBottom: "40px",
          }}
        >
          <ButtonLink
            href={`https://bit.ly/muhesi-cv-en`}
            className=" text-center py-2 px-3 text-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leran More
          </ButtonLink>
        </div>

        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
