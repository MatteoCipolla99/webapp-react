export default function Logo({ width = 100 }) {
  return (
    <img
      src="/BoolMovies1.jpeg"
      alt="Logo"
      className="rounded-full object-cover inline-block"
      style={{ width: `${width}px`, height: `${width}px` }}
    />
  );
}
