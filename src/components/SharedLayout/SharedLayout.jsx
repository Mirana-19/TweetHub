import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto flex xl:block flex-col justify-center items-center min-w-80 md:max-w-3xl md:px-8 xl:max-w-7xl xl:px-10 py-10">
        <Outlet />
      </main>
    </>
  );
};
