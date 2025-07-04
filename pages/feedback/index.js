import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = (props) => {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.feedback}</li>
      ))}
    </ul>
  );
};

const getStaticProps = async () => {
  console.log("getStaticProps starting!");

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  console.log("function worked!");

  return {
    props: {
      feedbackItems: data,
    },
  };
};

export { getStaticProps };
export default FeedbackPage;
