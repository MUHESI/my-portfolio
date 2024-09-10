import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ButtonLink } from "../Picture/ShowPictureStyle";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section flex row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there ! <br />
          My name is MUHESI Moïse
        </SectionTitle>
        <SectionText>
          As a versatile Full-Stack Engineer, I have a proven track record of crafting innovative software solutions that drive business growth. My passion for technology and ability to work independently have enabled me to successfully deliver projects in fast-paced, remote environments.
          <br />
        </SectionText>
        <div
          style={{
            textAlign: "right",
            paddingBottom: "40px",
          }}
        >
          <ButtonLink
            href='./RESUME_MUHESI_Moise_software_engineer.pdf'
            download='./CV_MUHESI_MOISE_software_engineer.pdf'
            className=" text-center py-2 px-3 text-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get resume
          </ButtonLink>
        </div>

        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
