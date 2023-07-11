import styled from "styled-components"
import Center from "./Center";

const FooterStyled = styled.div`
    position: fixed;
    background-color: #222;
    width: 100%;
    bottom: 0;
    height: 15rem;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 0;
`;

const BigText = styled.h3`
    color: #ffffff;
`;

const Column = styled.div`
    display: grid;
    column-gap: 0cap;
`;

const TextAbout = styled.p`
    font-size: 14px;
    text-align: justify;
    color: #ffff;
`;

export default function Footer() {
    return ( 
    <FooterStyled>
        <Center>
            <Wrapper>
            <Column>
                <BigText>About Us</BigText>
                <TextAbout>Destinasi terbaik untuk menemukan beragam snack lezat yang terbuat dari ikan teri. Kami bangga menyajikan produk-produk berkualitas tinggi yang menggabungkan cita rasa otentik dengan kesehatan yang baik. Di Mastery, kami percaya bahwa kepuasan pelanggan adalah yang utama, oleh karena itu kami berkomitmen untuk memberikan pengalaman berbelanja online yang terbaik. Setiap snack yang kami tawarkan telah dipilih dengan hati-hati, menggabungkan tradisi dan inovasi dalam setiap gigitannya. Nikmati kelezatan yang unik dan kenikmatan yang tak terlupakan dengan snack kami.</TextAbout> 
            </Column>
            <Column>
            <BigText>Follow Us</BigText>
            
            </Column>
            </Wrapper>
        </Center>  
    </FooterStyled>
    )
}