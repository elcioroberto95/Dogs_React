import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import useFetch from '../../Hooks/useFetch';
import { GET_PHOTO } from './../../Api';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  console.log(id);
  const { data, loading, request, error } = useFetch;

  React.useEffect(() => {
    const { url } = GET_PHOTO(id);

    request(url);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
};

export default Photo;
