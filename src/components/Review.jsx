import Paragraph from "./Paragraph";
import Stars from "./Stars";

export default function Review({ review }) {
  return (
    <>
      <p className="font-semibold">{review.name}</p>
      <Stars vote={review.vote} />
      <Paragraph>{review.text}</Paragraph>
    </>
  );
}
