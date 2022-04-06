import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Movies() {

  const imgList = [
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C789D8D8D2EA3997EECA6A6E558A61151F5E286C5FBB8394D289D9F457281138/scale?width=400&aspectRatio=1.78&format=jpeg',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C5ACC7C5E3486B687854F35E19463DB303ACA9B57C81EE829C9EF420BC54DE7/scale?width=400&aspectRatio=1.78&format=jpeg',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC2BD3D0355C58B637CB6C5120D77996D7C0979AAB0C12B7A1E360EF18AA738F/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3A6EE27EABCBDA56EE7484CA280FCB14006240BC7AAD422C9C8F21342882CAFA/scale?width=400&aspectRatio=1.78&format=jpeg',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C8053A4B2C8584E12B78CCC6B7E3545C72E32497CF110D15618CA952A43CAE5/scale?width=400&aspectRatio=1.78&format=jpeg',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1B401B3180D0D1CFDA6BC36BA9DD5AF78D1DB8B447DB3B40718331D56141BD8B/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B4479EB1053BBA5CC2B6A1FDE26291705D04F48F9545DBF471B48A17C3BD8B8B/scale?width=400&aspectRatio=1.78&format=jpeg',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2895609CF231C765C3C7E036A79721B531AF2E966154D377BE0A05E3C2BD2D09/scale?width=400&aspectRatio=1.78&format=jpeg'
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
        <h4>Recommended for You</h4>
        <Content {...settings}>
            {imgList.map(item=>(
                <Wrap >
                    <img src={item}/>
               </Wrap>      
            ))};      
        </Content>
    </Container>
  )
}

export default Movies


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
    }

    li.slick-active button::before{
      color: white ;
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