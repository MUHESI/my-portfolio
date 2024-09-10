import React from "react";

import {
  Item,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ButtonLink2 } from "../Picture/ShowPictureStyle";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const blogs = [
  {
    img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1708530733045/ca84d2e3-d8c2-4c1f-abe8-469bdf0b4836.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    title: 'Mastering File Uploads using NestJS and multer',
    link: 'https://muhesi.hashnode.dev/mastering-file-uploads-using-nestjs-and-multer',
    description: "In this article, we will see how to implement the functionality of Uploading a file using the nests framework. This functionality can be useful for scenarios like data import, file processing, report generation, etc. We'll use the @nestjs/platform-express module to handle HTTP requests, the multer module to handle file upload, and the fs module to read the file content"
  },
  {
    img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1707298967244/81527423-ac67-47bc-afc7-5b38f22da429.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    title: 'An ultime guide to create a WhatsApp bot in Nestjs framework',
    link: 'https://muhesi.hashnode.dev/an-ultime-guide-to-create-a-whatsapp-bot-in-nestjs-framework'
  },
]

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
  <Section id='blog'>
    <SectionTitle>My latest blogs </SectionTitle>
    {blogs.map((item) =>
      <Item>
        <div>
          <img src={item.img} alt='....' style={{ borderRadius: '5px', width: '100%', maxWidth: '400px', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <p className="" style={{ fontSize: '1.5em', fontWeight: 'bold' }} >
              {item.title}
            </p>
          </div>
          <div style={{ textAlign: 'center', }}>
            <ButtonLink2
              href={item.link}
              className=" text-center mt-5 py-2 px-3 text-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </ButtonLink2>
          </div>

        </div>
      </Item>

    )}



    {/* <SectionTitle>My favorite challenges </SectionTitle> */}
    {/* 
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
      </div> */}

    {/* <div class="container">
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
      </div> */}
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
    {/* </div> */}
  </Section>
);

export default Acomplishments;
