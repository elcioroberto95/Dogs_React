import React from 'react';
import useFetch from '../../Hooks/useFetch';
import FeedPhotoItem from './FeedPhotoItem';
import { PHOTOS_GET } from '../../Api';
import Loading from '../../Helper/Loading';
import styles from './FeedPhoto.module.css';
import Error from '../../Helper/Error';
const FeedPhoto = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPost() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPost();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotoItem
              photo={photo}
              key={photo.id}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </div>
    );
  else return null;
};

export default FeedPhoto;
