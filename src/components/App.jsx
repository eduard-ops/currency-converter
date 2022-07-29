import Header from './Header/Header';

import Main from './Main';

import Section from './Section';

import Converter from './Converter';

import Footer from './Footer';

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <Converter />
        </Section>
      </Main>
      <Footer />
    </>
  );
}
