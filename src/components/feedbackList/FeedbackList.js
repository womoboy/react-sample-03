import useFetch from "../../customHooks/useFetch";
import '../../styles/feedbackList.scss';

const FeedbackList = () => {
  let myUrl = "http://localhost:8000/feedback";
  const { response, error, isPending, setPalse } = useFetch(myUrl);

  const handleDelete = (id) => {
    fetch(myUrl + `/${id}`,
      {
        method: 'DELETE'
      }
    )
    .then(() => {
      setPalse(true);
    })
  }

  return (
    <section className="feedback-list">
      <h2>Feedbacks</h2>
      {isPending && <div>loading...</div>}
      {error && <div>Error : {error}</div>}
      {response &&
        response.map((data) => {
          return (
            <div className="block" key={data.id}>
              <div className="user-content">
                <p>user: {data.fullname}</p>
                <p>email: {data.postmail}</p>
              </div>
              <p className="feedback-text">{data.description}</p>
              <button id="block-delete" onClick={() => {handleDelete(data.id)}}>delete</button>
            </div>
          );
        })}
    </section>
  );
};

export default FeedbackList;
