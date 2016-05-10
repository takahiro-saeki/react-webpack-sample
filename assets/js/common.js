import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './component/menu';
import Grid from './component/grid';
import Footer from './component/footer';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <section>
    <Menu />
    <Grid />
    <Footer />
  </section>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
