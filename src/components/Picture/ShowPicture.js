import React from 'react';
// import myImg from '../../../public/images/myPicture.png'
import styled from 'styled-components'


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Button, ButtonLink, Container, Img, Div1 } from './ShowPictureStyle';



const ShowPicuture = (props) => {

    const downloadFile = () => {
        const URL = "http://localhost:3000/CV_Moise_MUHESI_Full_stackWeb_engineer.pdf";
        fetch(URL).then(Response => Response.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = URL.split('/').pop();
            const aTag = document.createElement('a');
            aTag.href = blobURL
            aTag.setAttribute('download', fileName)
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })
    }


    return (
        <>
            <Container>

                <Img width={350}
                    src="https://res.cloudinary.com/chanel-muhesi/image/upload/v1676726074/porfolio/profile-pic_4_tolvjx.png"
                    alt="..." />

                <Div1 style={{ margin: '30px 0' }}>
                    <Button onClick={downloadFile}> Download CV </Button>
                </Div1>
            </Container>
        </>
    )
}
export default ShowPicuture;
