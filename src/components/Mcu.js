import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Mcu() {

    const imgList = [
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B3F8B81C74FC28BE8224DAA848F4479A77421665893C6AA0E9F645EB9C189148/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9B07EEF821D077CBE5B4761CA3846B3EB844F9C634E1F13C2940A45AE2B0FBAF/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C40DB376BA00098BA1976D5D575CBD81825E687150229AEFF28F16EA2E647834/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/96B4A9850E858EF1304C98626C0FFE7DF01A09EE4E6B96038AE1EF1DC5BA12E0/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/55AAC08989A0BEA821F5E4F31F1529D0FAC4C496E27A545D233F1C4EF9868788/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ABF0A592E8E355DC90D4B6EF39CAA4435503B5BCA70B878F47D6277C54057EFE/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/645F2635DDB7F870F8E7658C48C69BFB0E8422F3A8D0A6DA6206EC5B8A71D695/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A0E99FE106D22E8E535DD54E62B6B556B3CFA2A9A19F6C1CEDEF352C23DAE50D/scale?width=400&aspectRatio=1.78&format=jpeg'
      ];

      let settings = {
        dots: false,
        infinite: false, 
        speed: 600,
        slideToShow: 4,
        slideToScroll: 4,
        autoplay: false
    
      };

  return (
    <Container>
    <h4>Marvel Cinematic Universe</h4>
    <Content {...settings}>
        {imgList.map(item=>(
            <Wrap>
                <img src={item}/>
           </Wrap>  
        ))}
    </Content>

    </Container>
  )
}

export default Mcu

const Container = styled.div`
`

const Content = styled(Slider)`
   display: grid;
   padding-bottom:28px;
   grid-gap: 25px ;
   grid-template-columns: repeat(4, minmax(0, 1fr));

   ul li button{
      &:before{
        font-size: 10px;
        color: rgb(150, 158, 171); }
    };

    li.slick-active button::before{
      color: white;
    };

    .slick-list{
      overflow: visible;
    };

    button{
      z-index:1;
    };
`

const Wrap = styled.div`
   border-radius: 10px;
   overflow: hidden;
   border: 3px solid rgba(249, 249, 249, 0.1);
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

   img{
       width: 100%;
       height:100%;
       object-fit: cover;
   }

   &:hover{
       transform: scale(1.05);
       box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
       border-color: rgba(249, 249, 249, 0.8);
   }
`