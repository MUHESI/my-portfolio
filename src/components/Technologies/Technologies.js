import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ItemTech,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  SpanIcon,
} from "./TechnologiesStyles";

const technologies = {
  front: ["Reactjs", "Nextjs", "Vite js", "Typescript", "Tailwind", "Shadcn/ui", "MUI"],
  back: ["Nestjs", "Expresjs", "Typescript", "langchain", "LLM Models", "flask", "Django"],
  db: ["MongoDB", "MySql", "PostreSQL", "Redis", "Sqlite"],
  architecture: ["Monolith ", "Microservices", "Serveless", "Mono repo"],
  deployment: ["VPS", "Nginx", "Apache2", "pm2", "Bash",],
  other: ["RabitMq ", "Git Actions", "cron job", "websocket"],
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
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experiece with <br />
            {technologies.db.map((tech) => (
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
          <ListTitle>Architecture</ListTitle>
          <ListParagraph>
            Experiece with <br />
            {technologies.architecture.map((tech) => (
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
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Experiece with <br />
            {technologies.deployment.map((tech) => (
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
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experiece with <br />
            {technologies.other.map((tech) => (
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
