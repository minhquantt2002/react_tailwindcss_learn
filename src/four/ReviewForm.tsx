export const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="font-meri text-2xl font-black">Overall rating</h1>

      <div>
        <p>5 stars</p>
        <p className="text-sm font-normal">Click to rate</p>
      </div>

      <div>
        <label id="title" htmlFor="">
          Review title
        </label>
        <input type="text" id="title" placeholder="Example: Easy to use ..." />
      </div>
    </div>
  );
};
