import React from 'react'
import Banner from '../../utils/Banner';
import NotFound from './NotFound';

function NotFoundPage() {
  return (
    <>
      <Banner path={"Home / 404 Not Found"} page={"404 Not Found"}/>
      <NotFound/>
    </>
  )
}

export default NotFoundPage;
