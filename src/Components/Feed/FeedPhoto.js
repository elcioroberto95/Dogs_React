import React from 'react';
import useFetch from '../../Hooks/useFetch';
import FeedPhotoItem from './FeedPhotoItem';
import { PHOTOS_GET } from '../../Api';
import Loading from '../../Helper/Loading';
import styles from './FeedPhoto.module.css';
import Error from '../../Helper/Error';
const FeedPhoto = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPost() {
      const { url, options } = PHOTOS_GET({ page: 0, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }

    fetchPost();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotoItem photo={photo} key={photo.id} />
          ))}
        </ul>
      </div>
    );
  else return null;
};

export default FeedPhoto;
