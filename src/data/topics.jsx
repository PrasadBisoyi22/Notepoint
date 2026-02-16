export const topicCategories = [
  {
    id: "web-tech",
    title: "Web Technology",
    topics: [
      {
        id: "html",
        title: "HTML",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png"
      },
      {
        id: "css",
        title: "CSS",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
      }
    ]
  },
{
    id: "java",
    title: "Java",
    topics: [
      {
        id: "java",
        title: "Java",
        icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
      }
    ]
  },
  {
    id:"python",
    title:"Python",
    topics:[
      {
        id:"python",
        title:"Python",
        icon:"https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
      }
    ]
  }
];

// Helper function to get all topics flat
export const getAllTopics = () => {
  return topicCategories.flatMap(category => category.topics);
};

// Helper function to get topic by ID
export const getTopicById = (id) => {
  for (const category of topicCategories) {
    const topic = category.topics.find(t => t.id === id);
    if (topic) return topic;
  }
  return null;
};
