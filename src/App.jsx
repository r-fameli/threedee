import { Fragment } from 'react';
import GlobalStyle from './globalStyles.styled';
import AnimatedBlocks from './components/AnimatedBlocks/AnimatedBlocks';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AnimatedBlocks/>
    </Fragment>
  )
}

export default App;
