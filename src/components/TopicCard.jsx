import { useNavigate } from "react-router-dom";

function TopicCard({ topic }) {
  const navigate = useNavigate();

  return (
    <div
      className="topic-card"
      onClick={() => navigate(`/${topic.id}`)}
    >
      <img src={topic.icon} alt={topic.title} />
      <h3>{topic.title}</h3>
    </div>
  );
}

export default TopicCard;
