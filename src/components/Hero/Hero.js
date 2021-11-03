import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Sumit's Technical Portfolio <br />
      </SectionTitle>
      <SectionText>
        Hi, I am Sumit Kumar. I have a bachelor's degree in technology and have
        been working in the software industry for 2 and half years .As a part of
        my job I build Web & Mobile applications . Check out my workfolio below
        -
      </SectionText>
      <Button
        onClick={() => (window.location = "https://workfolio.vercel.app/")}
      >
        Workfolio
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
