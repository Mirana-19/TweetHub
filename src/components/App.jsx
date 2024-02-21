import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/operations';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from './pages/Home';
import Tweets from './pages/Tweets';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ page: 2 }));
  }, [dispatch]);

  // dispatch(
  //   followUser({
  //     user: 'Nora Moen',
  //     tweets: 95868,
  //     followers: 5372,
  //     avatar:
  //       'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1129.jpg',
  //     id: '1',
  //   })
  // );

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
