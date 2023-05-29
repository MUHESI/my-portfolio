import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments__ = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

// export default Acomplishments;

const Acomplishments = () => (
  <Section>
    <SectionTitle>My favorite challenges </SectionTitle>

    <div class="container-flex">
      <div class="container">
        <div class="card">
          <div class="card-layer card-layer-1"></div>
          <div class="card-layer card-layer-2"></div>
          <div class="card-layer card-layer-3"></div>
          <div class="chip"></div>
          <div class="bank">DOSH</div>
          <div class="number">0000 0000 0000 0000</div>
          <div class="expiry">Expiry: 01/27</div>
          <div class="cvv">CVV: 000</div>
          <div class="name">Mr MUHESI Moses</div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <div class="card-layer card-layer-1"></div>
          <div class="card-layer card-layer-2"></div>
          <div class="card-layer card-layer-3"></div>
          <div class="chip"></div>
          <div class="bank">DOSH</div>
          <div class="number">0000 0000 0000 0000</div>
          <div class="expiry">Expiry: 01/27</div>
          <div class="cvv">CVV: 000</div>
          <div class="name">Mr MUHESI Moses</div>
        </div>
      </div>
      {/* 
      <div class="container">
        <div class="card">
          <div class="card-layer card-layer-1"></div>
          <div class="card-layer card-layer-2"></div>
          <div class="card-layer card-layer-3"></div>
          <div class="chip"></div>
          <div class="bank">DOSH</div>
          <div class="number">0000 0000 0000 0000</div>
          <div class="expiry">Expiry: 01/22</div>
          <div class="cvv">CVV: 000</div>
          <div class="name">Mr Luke Bailey</div>
        </div>
      </div> */}
    </div>
  </Section>
);

export default Acomplishments;
