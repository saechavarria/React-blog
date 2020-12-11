import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogContent from "./components/BlogContent";
import Post from "./components/Post";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="App-header">
        <NavBar />
      </header>
      <main role="main">
        <section className="jumbotron text-center ">
          <div className="container">
            <h1 className="display-4">React Blog</h1>
            <p className="lead">
              Hello!! I am Santiago, and I'm ReactJs frontend developer. Here
              you can find my blog :3.
            </p>
          </div>
        </section>
      </main>

      <Switch>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/">
          <BlogContent />
        </Route>
      </Switch>
      <hr></hr>
      <Footer />
    </Router>
  );
}

export default App;
