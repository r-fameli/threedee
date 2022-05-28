import { Fragment } from 'react';
import CubeEntryAnimation from './components/CubeEntryAnimation/CubeEntryAnimation';
import GlobalStyle from './globalStyles.styled';

function App() {
  return (
    <Fragment>
      <GlobalStyle opacity/>
      <CubeEntryAnimation />
      {/* <AnimatedBlocks/> */}
    </Fragment>
  )
}

export default App;
