import useFetch from "../../customHooks/useFetch";

const FeedbackList = () => {

    const myUrl = 'http://localhost:8000/feedback';
    const { response } = useFetch(myUrl);
    
    return (  
        <div className="feedback-list">
            { response &&
                response.map((data) => {
                    return (
                        <div className="feedback" key={data.id}>
                            <h3>{data.author}</h3>
                            <p>{data.text}</p>
                        </div>
                    )
                })
            }
            
        </div>
    );
}
 
export default FeedbackList;