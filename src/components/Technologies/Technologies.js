import React from 'react';
import { DiFirebase, DiReact, DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="tech">
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
      For over two years I had many opportunity to work in a vast spectrum of web technologies which let me gather a significant amount of various experience.
      Working for different teams around the region I met and learnt from amazing and awesome people.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experience with <br/>
                React, Redux , JavaScript, TypeScript, SCSS, Next JS, Tailwind
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with <br/>
                NodeJS, Express, ASP.NET, GraphQL
              </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDocker size="3rem"/>
          <ListContainer>
            <ListTitle>DevOps</ListTitle>
              <ListParagraph>
                Familiar with <br/>
                Nginx, Docker
              </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
