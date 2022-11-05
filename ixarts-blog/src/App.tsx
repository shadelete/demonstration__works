import React from 'react';
import Header from "./Components/Header";
import Info from "./Components/Main/Info";
import ProjectRecent from "./Components/Main/ProjectRecent";
import LatestPosts from "./Components/Main/LatestPosts";
import Subscribe from "./Components/Main/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
		<Header/>
		<Info/>
		<ProjectRecent/>
		<LatestPosts/>
		<Subscribe/>
		<Footer/>
	</>
  );
}

export default App;
