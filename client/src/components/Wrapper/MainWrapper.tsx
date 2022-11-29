import { AppShell } from '@mantine/core';
import Footer from '../Footer';

import NavBar from '../Navbar';

const MainWrapper = (props: any) => {
  return (
    <main>
      <NavBar />

      <div
        style={{ minHeight: '80vh' }}
        className='max-w-4xl mx-auto bg-white p-4'
      >
        {props?.children}
      </div>
      <Footer />
    </main>
  );
};

export default MainWrapper;