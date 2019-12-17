import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import MainPage from "./components/MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import GamePage from "./components/GamePage/GamePage";
import { Box } from "@material-ui/core";
import LibraryPage from "./components/LibraryPage/LibraryPage";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Box py={6} />
      <Switch>
        <Route path="/games/:id" component={GamePage} />
        <Route path="/library" component={LibraryPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={MainPage} />
      </Switch>
      <Box py={6} />
      <Footer />
    </div>
  );
}

export default App;
