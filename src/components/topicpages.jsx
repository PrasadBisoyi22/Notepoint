import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

// Map topic IDs to JSON file paths
const topicFileMap = {
  html: "../data/notes/html.json",
  css: "../data/notes/css.json",
  java: "../data/notes/Java.json"
};

function TopicPage() {
  const { topicId } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const filePath = topicFileMap[topicId];
        if (!filePath) {
          setPageData(null);
          setLoading(false);
          return;
        }
        
        const response = await import(filePath);
        setPageData(response.default);
        setLoading(false);
      } catch (error) {
        console.error("Error loading topic data:", error);
        setPageData(null);
        setLoading(false);
      }
    };

    if (topicId) {
      loadData();
    }
  }, [topicId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <h1>Topic Not Found</h1>;
  }

  return (
    <>
      <Navbar />
    <div className="topic-page">
      <div className="content-wrapper">
        <h1>{pageData.title}</h1>
        
        {pageData.sections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="section">
            <h2>{section.title}</h2>
            
            {section.subsections?.map((subsection, subIndex) => (
              <div key={subIndex} className="subsection">
                <h3>{subsection.title}</h3>
                
                {subsection.content?.map((block, blockIndex) => {
                  // Handle different content types
                  if (block.type === "text") {
                    return <p key={blockIndex}>{block.value}</p>;
                  }
                  
                  if (block.type === "bullet") {
                    return (
                      <ul key={blockIndex} className="styled-list">
                        {block.items?.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {typeof item === "string"
                              ? item
                              : `${item.label}: ${item.value}`}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  
                  if (block.type === "definition") {
                    return (
                      <div key={blockIndex} className="definition-box">
                        <strong>{block.term}</strong>
                        <p>{block.value}</p>
                      </div>
                    );
                  }

                  if (block.type === "ordered-list") {
                    return (
                      <ol key={blockIndex} className="styled-list">
                        {block.items?.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ol>
                    );
                  }

                  if (block.type === "comparison") {
                    return (
                      <div key={blockIndex} className="comparison">
                        {block.items?.map((item, itemIndex) => (
                          <div key={itemIndex} className="comparison-item">
                            <h4>{item.title}</h4>
                            <ul className="styled-list">
                              {item.points?.map((point, pointIndex) => (
                                <li key={pointIndex}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    );
                  }

                  if (block.type === "analogy") {
                    return (
                      <div key={blockIndex} className="analogy">
                        {block.items?.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            <strong>{item.label}:</strong> {item.value}
                          </div>
                        ))}
                      </div>
                    );
                  }

                  if (block.type === "protocol") {
                    return (
                      <div key={blockIndex} className="protocol">
                        <strong>{block.name}</strong>
                        <ul className="styled-list">
                          {block.details?.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  if (block.type === "layer") {
                    return (
                      <div key={blockIndex} className="layer-card">
                        <h4>{block.title}</h4>
                        <ul>
                          {block.items?.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  if (block.type === "diagram") {
                    return (
                      <pre key={blockIndex} className="code-block">
                        <code>{block.value}</code>
                      </pre>
                    );
                  }

                  return null;
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default TopicPage;
