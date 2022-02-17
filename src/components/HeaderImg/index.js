import styled from 'styled-components';

const Container = styled.div`
  background-image: url("https://styles.redditmedia.com/t5_2qh87/styles/bannerBackgroundImage_88shzbklklf51.jpg?width=4000&format=pjpg&s=25d3830f9b937fb368783941518ce32927326291");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 207px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  letter-spacing: 40px;
  font-weight: 300;
  font-size: 58px;
`;

function HeaderImg() {
  return (
    <Container>
      SPACE
    </Container>
  );
}

export default HeaderImg;
