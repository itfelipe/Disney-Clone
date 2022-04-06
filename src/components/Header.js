import React, {useState,useEffect} from 'react';
import styled from 'styled-components';



function Header() {

  const list = [
    {name:'HOME', imageLink:'/images/home-icon.svg'},
    {name:'SEARCH', imageLink:'/images/search-icon.svg'},
    {name:'WATCHLIST', imageLink:'/images/watchlist-icon.svg'},
    {name:'ORIGINALS', imageLink:'/images/original-icon.svg'},
    {name:'MOVIES', imageLink:'/images/movie-icon.svg'},
    {name:'SERIES', imageLink:'/images/series-icon.svg'}
  ];
  
  const [itemList, setItemList] = useState(list);

  const isPathnameLogin = window.location.pathname === '/login';

  useEffect(() => {
      if(isPathnameLogin){
        setItemList([])
      }
  }, []);
  

  return (
    <Nav>
        <Logo src='/images/logo.svg'/>
        <NavMenu>
          {itemList.map((item)=>(
            <Links href='http://localhost:3000/'>
              <img src={item.imageLink}/>
              <span>{item.name}</span>
            </Links>
          ))}
        </NavMenu>
        <UserImg src={
          isPathnameLogin ? 'https://icon2.cleanpng.com/20181110/spz/kisspng-computer-icons-login-scalable-vector-graphics-emai-5be73768cb2288.8298339815418796568321.jpg' 
          : 'https://i.pinimg.com/736x/16/93/ba/1693ba9655ab2a24ca242b24685aa373.jpg'}/> 
    </Nav>
  );
};

export default Header;

const Links = styled.a`
text-decoration: none;
color: white;
`

const Nav = styled.nav`
   height: 70px;
   background: #090b13;
   display: flex;
   align-items: center;
   padding:  0 36px;
   overflow-x: hidden;
`

const NavMenu = styled.div`
display: flex;
flex:1;
margin-left: 25px;
align-items: center;


    a{
       display: flex;
       align-items:center;
       padding: 0 12px;
       cursor: pointer;

    img {
       height: 20px ;
     }

    span {
       font-size: 13px ;
       letter-spacing: 1.42px ;
       position: relative ;

    &:after {
       content: "" ;
       height: 2px ;
       background: white ;
       position: absolute ;
       left: 0;
       right: 0;
       bottom: -6px ;
       opacity: 0 ;
       transform-origin: left center ;
       transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ;
       /* cubic bezier é uma função que define uma curca cubic bezier que é definida por 4 pontos */
       transform: scaleX(0);
     };
   };

   &:hover {
    span:after{
       transform: scaleX(1) ;
       opacity: 1 ;
    };
  };
};
`

const Logo = styled.img`
       width: 80px;
`

const UserImg = styled.img`
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
`