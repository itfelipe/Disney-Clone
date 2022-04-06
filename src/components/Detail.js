import React from 'react';
import Header from './Header';
import styled from 'styled-components';


function Detail() {
  return (
    <Container>
        <Background>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70EC78052CC5B5505D0D44319F2C9EF2B1FD71481BAD3C391775B6F12B5B77E6/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
        </Background>

        <ImageTitle>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B5918887AF9F2C00693E1B743F793813299C629D1D8BE28322F9A3599D5F3413/scale?width=1440&aspectRatio=1.78&format=png"/>
        </ImageTitle>

        <Controls>
          <PlayButton>
            <img src='/images/play-icon-black.png'/>
            <span>PLAY</span>
          </PlayButton>

          <TrailerButton>
            <img src='/images/play-icon-white.png'/>
            <span>TRAILER</span>
          </TrailerButton>

          <AddButton>
            <span>+</span>
          </AddButton>

          <GroupWatchButton>
            <img src='/images/group-icon.png'/>
          </GroupWatchButton>
        </Controls>

        <SubTitle>
            2021  • 2h 16min  • Drama, Crime
        </SubTitle>

        <Description>
          Starring Emma Stone, Disney's "Cruella" Features Rebel Youth
          of one of cinema's most hired villains, the legendary Cruella de Vil. set in london
          the 1970s, in the midst of the punk rock revolution, the film follows a young crook named Estella
          and reveals the events that lead her to embrace her evil side and become the evil and vengeful Cruella.
        </Description>

    </Container>
  )
}

export default Detail;


const Container = styled.div`
 min-height: calc(100vh - 70px);
 padding: 0 calc(3.5vw + 5px);
 position: relative;
`

const Background = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: -1;
   opacity: 0.8;

   img{
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
`

const ImageTitle = styled.div`
   height: 30vh;
   min-height: 170px;
   width: 35vh;
   min-width: 200px;
   margin-top: 60px;
   
   img{
     width: 100%;
     height: 100%;
     object-fit: contain;
   }
`

const Controls = styled.div`
   display: flex;
   align-items: center;
`

const PlayButton = styled.button`
   border-radius: 4px;
   font-size: 15px;
   padding: 0px 24px;
   margin-right: 22px;
   display: flex;
   align-items: center;
   height: 56px;
   background: rgb(249, 249, 249);
   border: none;
   letter-spacing: 1.8px;
   cursor: pointer;

   &:hover {
     background: rgb(198, 198, 198);
   }
`

const TrailerButton = styled(PlayButton)`
     background: rgb(0, 0, 0, 0.3);
     border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
     text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0.6);
    cursor: pointer;

    span{
      font-size: 30px;
      color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
   background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 768px ;

`