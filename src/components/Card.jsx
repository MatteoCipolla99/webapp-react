import Paragraph from "./Paragraph";
import Button from "./Button";
import { Link } from "react-router";

export default function Card({ image, title, director, abstract, link, vote }) {
  return (
    <div className="bg-white flex rounded-xl shadow h-full">
      <div className="w-1/2">
        <img className="h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-4 w-1/2 space-y-2 flex flex-col">
        <h4 className="text-xl font-medium">{title}</h4>
        {director && <h6 className="text-md">{director}</h6>}
        <Paragraph size="sm" className="line-clamp-3">
          {abstract}
        </Paragraph>
        <div className="mt-auto text-center from-red-500 to-red-800">
          <Link to={link}>
            <Button>Scopri di più</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
