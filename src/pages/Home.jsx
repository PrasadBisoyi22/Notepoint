import { topicCategories } from "../data/topics";
import TopicCard from "../components/TopicCard";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";

function Home() {
  // Get topics for each category
  const webTechTopics = topicCategories.find(cat => cat.id === "web-tech")?.topics || [];
  const javaTopics = topicCategories.find(cat => cat.id === "java")?.topics || [];
  const pythonTopics = topicCategories.find(cat => cat.id === "python")?.topics || [];

  return (
    <>
    <Navbar/>
    <Hero />
    <div className="home-container">
      <h1 className="page-title">Web Technology</h1>
      <div className="topics-grid">
        {webTechTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
      <h1 className="page-title">Java</h1>
      <div className="topics-grid">
        {javaTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
      <h1 className="page-title">Python</h1>
      <div className="topics-grid">
        {pythonTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;
