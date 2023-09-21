import Skeleton from 'react-loading-skeleton';

const ImageBody = ({ images }) => {
  return Array(images)
    .fill(0)
    .map((index) => {
      <Skeleton key={index} width={100} height={20} />;
    });
};

export default ImageBody;
