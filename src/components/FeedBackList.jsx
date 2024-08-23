import FeedbackItem from "./FeedbackItem";

const FeedBackList = ({ feedback }) => {
  
  return (
    <div>
       {
        feedback.map((list) => (
          <FeedbackItem key={list.id} list={list} />
        ))
    }
    </div>);
};

export default FeedBackList;
