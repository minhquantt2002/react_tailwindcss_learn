import { Input } from "./Input";
import { Review } from "./Review";

export const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="font-meri text-2xl font-black">Overall rating</h1>

      <div>
        <Review />
        <p className="text-sm font-normal">Click to rate</p>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      />

      <p>Would you recommend this product to a friend?</p>
      <div className="flex gap-8">
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="yes"
            value="yes"
            name="product"
          />
          <label className="cursor-pointer" htmlFor="yes">
            Yes
          </label>
        </div>
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="no"
            value="no"
            name="product"
          />
          <label className="cursor-pointer" htmlFor="no">
            No
          </label>
        </div>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
        type="textarea"
      />

      <div className="flex gap-x-2">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>

        <div className="grow">
          <Input
            title="Email address (will not be published)"
            placeholder="Example: your@email.com"
            type="text"
          />
        </div>
      </div>

      <div>
        <input
          className="mr-2 scale-150 accent-[#121633]"
          type="radio"
          id="accept"
          value="accept"
          name="product"
        />
        <label className="cursor-pointer" htmlFor="accept">
          I accept the terms and conditions
        </label>
      </div>

      <p className="text-sm font-medium">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </p>

      <button className="rounded-md bg-[#121633] p-4 text-white">
        Submit product review
      </button>
    </div>
  );
};
