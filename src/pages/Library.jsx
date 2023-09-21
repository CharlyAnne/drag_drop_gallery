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
        <h1 className="large">We miss you already. Kindly log back in!</h1>
      )}
    </section>
  );
}

export default Library;
