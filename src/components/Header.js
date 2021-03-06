import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background: #22242c;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 1140px) {
    width: 960px;
  }
  @media (max-width: 1297px) {
    width: 1180px;
  }
  @media (max-width: 1400px) {
    width: 1200px;
  }
  @media (max-width: 1600px) {
    width: 1300px;
  }
  @media (max-width: 1920px) {
    width: 92%;
  }
`;

const Figure = styled.figure`
  margin: 0px;
  width: 130px;
  display: block;
`;

const Link = styled.a`
  color: #3c75ff;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  padding-top: 10px;
`;

const Header = (props) => {
  const { logo, logoAlt } = props;
  return (
    <Container>
      <Article>
        <Figure>
          <Link href='/'>
            <Image src={logo} alt={logoAlt || 'Logo'} />
          </Link>
        </Figure>
      </Article>
    </Container>
  );
};

export default Header;
