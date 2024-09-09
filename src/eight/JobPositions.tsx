export const JobPositions = () => {
  return (
    <div className="w-full space-y-24 text-center">
      <h1 className="font-meri text-3xl font-black">Open positions</h1>

      <div className="grid grid-cols-3">
        <div className="flex bg-white px-10 py-12">
          <div>Design</div>
          <button>4 open positions</button>
        </div>
      </div>

      <p className="mx-auto max-w-5xl [text-wrap:balance]">
        We are proud to be an equal opportunity employer that values diversity.
        We do not discriminate on the basis of race, religion, color, national
        origin, gender, sexual orientation, age, marital status, veteran status,
        or disability status.
      </p>
    </div>
  );
};
