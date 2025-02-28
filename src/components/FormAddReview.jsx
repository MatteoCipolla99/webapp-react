import Button from "./Button";

export default function FormAddReview() {
  return (
    <form className="space-y-2">
      <div>
        <label className="inline-block mb-2" htmlFor="name">
          Nome
        </label>
        <input
          className="w-full border border-neutral-200 p-2 rounded-sm"
          name="name"
          type="text"
          placeholder="Inserisci il tuo nome"
        />
      </div>
      <div>
        <label className="inline-block mb-2" htmlFor="vote">
          Voto
        </label>
        <input
          className="w-full border border-neutral-200 p-2 rounded-sm"
          id="vote"
          name="vote"
          type="number"
          min={0}
          max={5}
          placeholder="Inserisci il voto"
        />
      </div>
      <div>
        <label className="inline-block mb-2" htmlFor="text">
          Recensione
        </label>
        <textarea
          className="w-full border border-neutral-200 p-2 rounded-sm"
          id="text"
          name="text"
          placeholder="Inserisci il testo della recensione"
          rows={5}
        ></textarea>
      </div>
      <Button type="submit">Invia</Button>
    </form>
  );
}
