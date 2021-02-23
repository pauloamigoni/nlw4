import React  from "react";
import { ThemeProvider , DefaultTheme } from "styled-components";
import usePersistedStates from "./utils/usePersistedStates";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { ExperienceBar } from './components/ExperienceBar';
import Header from "./components/Header";
import GlobalStyle from './styles/global';
import './styles/global.css';

function App() {
  const [theme, setTheme] = usePersistedStates<DefaultTheme>('theme',light);

  const toggleTheme = () => {
    setTheme(theme.title ==='light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="container">
      <GlobalStyle />
    
      <ExperienceBar/>

    </div> 

    <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;
