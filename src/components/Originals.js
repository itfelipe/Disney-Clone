import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Originals() {

    const imgList = [
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72413ED0B1C82EF42C205C73BDF419C3E36FB42BA27394D991633614F63B90A1/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B5F5AD8D36B452515DC212D4D0C61A44FBA9CDE8C5E90EE61DB6E9C245C81881/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ABB83AAD404F42D252A5BC3ABFBF7414732770F736859DC079D02B42DD4DB2D7/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD6401B7047D5A9B2897BE7C0F3F032E8D62BE095529851E3FB8B57DB3341314/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D3272A46C21A5DF3EA7E68595AD2E703EF471A733C5D979261C7DAC7738587E5/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1B47772E316370392848F67BA2A6F8796536060B03C09C6D566E112123020691/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F06707242153AB8EE90AAA8F3D3FA773A2C6BC80C2A7E5D508F4FE22EACD3BB/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal',
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7A9AAB6DC0DB7B687B1D08960A58F1456704F7CB8FB93893DD3A024B916E2AF5/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal'
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
              <h4>Originals</h4>
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

export default Originals

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
        color: rgb(150, 158, 171);
       };
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