import useFetch from "../../customHooks/useFetch";

const FeedbackList = () => {
  const myUrl = "http://localhost:8000/feedback";
  const { response, error, isPending } = useFetch(myUrl);

  return (
    <div className="feedback-list">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {response &&
        response.map((data) => {
          return (
            <div className="block" key={data.id}>
              <h3>{data.author}</h3>
              <p>{data.text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FeedbackList;
