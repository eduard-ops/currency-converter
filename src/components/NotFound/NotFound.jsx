import notFound from '../../images/not-found-image.jpg';

export default function NotFound() {
  return (
    <div className="not-found-wrap">
      <img src={notFound} alt="not-found-wrap__image" />
    </div>
  );
}
