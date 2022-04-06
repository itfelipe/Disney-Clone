import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewsInDisney() {

    const imgList = [
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A125196BFEED318CDEE68244A1400C3996354B0AEA00B241BD5ACBB8B9D0BDC6/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/40D69DCFFE770C33E3F64CA90F8A179908C4B651EC0A1AE2176BFBEA95A481C6/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FCBA844D72BE91855C00406136F035285763D4A66D33AC2CB683EBF157B0EE1D/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/745752447B26CBB5E7BE666CE236044284500ADDE715AE1EFA1349E202155B47/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26B39F2C0819F20A3EE6E8CD9BB77BDB86B22ED97A59C263E9BF36439D01413A/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5F2F2438D8BAB9ABED6D57AD99B14A43F4210FA108CA8D9823B06842CE532E4/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/195338E07C82D28C45BC88814F90474EA5EE3FEE1C8B12FD95113D0556B58B98/scale?width=400&aspectRatio=1.78&format=jpeg',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99DAD5C3E9EDBF35030E93F1DE7706CC308408838F5BA4D62331347C295C5DE4/scale?width=400&aspectRatio=1.78&format=jpeg'
      ];

      let settings = {
        dots: false,
        infinite: false, 
        speed: 600,
        slideToShow: 4,
        slideToScroll: 4,
        autoplay: false
    
      }


  return (

    <Container>
        <h4>News in Disney+</h4>
        <Content {...settings}>
            {imgList.map(item=>(
                <Wrap>
                    <a href='http://localhost:3000/detail'><img  src={item}/></a>
               </Wrap>  
            ))};  
        </Content>
    </Container>
  )
}

export default NewsInDisney

const Container = styled.div`
`

const Content = styled(Slider)`
   display: grid;
   padding-bottom:28px;
   grid-gap: 25px;
   grid-template-columns: repeat(4, minmax(0, 1fr));

   ul li button{
      &:before{
        font-size: 10px;
        color: rgb(150, 158, 171); 
      };
    };

    li.slick-active button::before {
      color: white;
    }

    .slick-list{
      overflow: visible;
    }

    button{
      z-index:1;
    }
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