// import Header from '../components/Header';
import Image from '../components/Image';
import { ImageData } from '../components/ImageData';
import Loader from '../components/Loader';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

function Library() {
  const [isLoading, setIsLoading] = useState(true);

  // Loading effect
  useEffect(function () {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <section className="p-2">
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="grid grid-cols-1 place-items-center gap-6 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {ImageData.map((image) => (
            <Image image={image} key={image.id} />
          ))}
        </section>
      )}
    </section>
  );
}

export default Library;
