import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  SpanIcon,
  ItemTech,
} from "./TechnologiesStyles";

const technologies = {
  front: ["Reactjs", "Nextjs", "Typescript", "Tailwind", "Shadcn/ui", "MUI"],
  back: ["Nestjs", "Expresjs", "Typescript", "MongoDB", "MySql", "PostreSQL", "Redis"],
  UxIX: ["AdobeXD ", "Figma", "Canva"],
};

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end to front and sometimes Design.
    </SectionText>
    <List>
      <ListItem>
        {/* <picture>
          <DiReact size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            {technologies.front.map((tech) => (
              <ItemTech>
                <SpanIcon>&#10156;</SpanIcon>
                <span>{tech}</span>
              </ItemTech>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiFirebase size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            {technologies.back.map((tech) => (
              <ItemTech>
                <SpanIcon>&#10156;</SpanIcon>
                <span>{tech}</span>
              </ItemTech>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiece with <br />
            {technologies.UxIX.map((tech) => (
              <ItemTech>
                <SpanIcon>&#10156;</SpanIcon>
                <span>{tech}</span>
              </ItemTech>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
