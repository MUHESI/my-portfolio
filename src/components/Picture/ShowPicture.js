import React from "react";
// import myImg from '../../../public/images/myPicture.png'

import { Container, Img } from "./ShowPictureStyle";

const ShowPicuture = (props) => {
  const downloadFile = () => {
    const URL =
      "http://localhost:3000/CV_Moise_MUHESI_Full_stackWeb_engineer.pdf";
    fetch(URL)
      .then((Response) => Response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = URL.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <>
      <Container>
        <Img
          width={340}
          src="https://res.cloudinary.com/chanel-muhesi/image/upload/v1685518784/porfolio/profile-pic_1_mndgvo.png"
          alt="..."
        />

        {/* <Div1 style={{ margin: "30px 0" }}>
          <ButtonLink
            href={`https://bit.ly/muhesi-cv-en`}
            className=" text-center py-2 px-3 text-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </ButtonLink>
          <Button onClick={downloadFile}> Download CV </Button> 
        </Div1> */}
      </Container>
    </>
  );
};
export default ShowPicuture;
