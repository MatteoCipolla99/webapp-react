export default function Card({ image, title, author, content, link, vote }) {
  return (
    <div className="bg-white flex rounded-xl shadow h-full">
      <div className="w-1/2">
        <img className="h-full object-cover" src={image} alt={title} />
      </div>
    </div>
  );
}
