import "../App.css";

function AnswerBox() {
  return (
    <div
      id="answer"
      className={` max-w-xs md:max-w-xl h-80 card bg-primary text-secondary  py-8 px-6 rounded-3xl`}
    >
      <div className="overflow-auto scrollbar">
        <p className=" text-lg md:text-2xl text-left p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Amet a dignissimos officia nostrum vitae sequi maxime,
          delectus non iste, error consequatur consequuntur ad
          deleniti est aspernatur vero laborum tenetur fugiat!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Amet a
          dignissimos officia nostrum vitae sequi maxime, delectus non
          iste, error consequatur consequuntur ad deleniti est
          aspernatur vero laborum tenetur fugiat!
        </p>
      </div>
      <div>
        {/* Added functionality Card actions can go here for alternate answers, etc */}
      </div>
    </div>
  );
}
export default AnswerBox;
