import styled from 'styled-components';
import RedditLogo from './RedditLogo';

const StyledHeader = styled.header`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #fff;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.5rem;
`;

const Buttongroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 32px;
  width: max-content;
  & .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 7px;
    font-weight: 700;
    font-size: 1rem;
    height: 100%;
    width: 100px;
    
  }
  & .btn-outline-primary:hover {
    background-color: inherit;
    color: #0d6efd;
  }
`;

function Header({ className }) {
  return (
    <StyledHeader className={className}>
      <Box>
        <RedditLogo />
        reddit
      </Box>
      <Buttongroup>
        <button className="btn btn-sm btn-outline-primary rounded-pill" type="button">Log In</button>
        <button className="btn btn-sm btn-primary rounded-pill" type="button">Sign Up</button>
      </Buttongroup>
    </StyledHeader>
  );
}

export default Header;
