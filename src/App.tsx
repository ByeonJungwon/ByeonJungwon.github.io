import * as React from 'react';
import Title from './components/Title';
import Layout from './core/Layout';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';
import configs from './constants/configs';
import Footer from './core/Footer';
import Project from './components/Project';
import Article from './components/Article';
import Report from './components/Report';
import Webzine from './components/Webzine';
import BrandedContent from './components/BrandedContent';

function App() {
  return (
    <Layout>
      <Title name={configs.name} descriptions={configs.descriptions} />
      <About title="ABOUT ME" contents={configs.about} />
      <Education title="EDUCATION" items={configs.education} />
      <Experience title="EXPERIENCE" items={configs.experience} />
      <Project title="PROJECT" items={configs.project} />
      <Article title="ARTICLE" items={configs.article} />
      <Webzine title="WEBZINE" items={configs.webzine} />
      <BrandedContent title="BRANDED CONTENTS" items={configs.brandedContents} />
      <Report title="REPORT" items={configs.report} />
      <Contact title="CONTACT" email={configs.email} linkedin={configs.linkedin} />
      <Footer>Copyright © 2022 {configs.name}</Footer>
    </Layout>
  );
}

export default App;
