import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../data/sidebarData";

function Sidebar() {
  const [openTopics, setOpenTopics] = useState({});

  const toggleTopic = (key) => {
    setOpenTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="sidebar">
      {Object.entries(sidebarData).map(([categoryKey, category]) => (
        <div key={categoryKey}>
          <h3>{category.title}</h3>

          {Object.entries(category.topics).map(([topicKey, topic]) => (
            <div key={topicKey}>
              <div
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => toggleTopic(topicKey)}
              >
                {topic.title}
              </div>

              {openTopics[topicKey] &&
                topic.subtopics.map((sub) => (
                  <div key={sub} style={{ paddingLeft: "15px" }}>
                    <Link to={`/${categoryKey}/${sub}`}>
                      {sub}
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
