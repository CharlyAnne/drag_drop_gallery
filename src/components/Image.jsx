import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/* eslint-disable react/prop-types */
function Image({ image }) {
  const { tag, id, img } = image;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div className="img-container">
      <img
        className="img h-64 w-72 cursor-grab"
        ref={setNodeRef}
        {...attributes}
        style={style}
        {...listeners}
        src={img}
        alt={tag}
        loading="lazy"
      />
    </div>
  );
}

export default Image;
