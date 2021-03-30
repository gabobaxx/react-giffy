import React from 'react';
import Gif from 'components/Gif';
import Spinner from 'components/Spinner';
import { Helmet } from 'react-helmet';
import { useSingleGif } from 'hooks/useSingleGif';
import { Redirect } from 'wouter';
import { useSEO } from 'hooks/useSEO';

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : '';

  useSEO({ title, description: `Details of ${title}` });

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
