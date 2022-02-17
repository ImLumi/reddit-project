import './App.scss';
import styled from 'styled-components';
import Header from './components/Header';
import HeaderImg from './components/HeaderImg';

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: #373c3f;
  width: 100%;
  height: 150vh;
`;

function App() {
  return (
    <div>
      <Header className="fixed-top" />
      <Wrapper>
        <HeaderImg />
        <div className="container">
          <h4>/r/space: news, articles and discussion</h4>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
