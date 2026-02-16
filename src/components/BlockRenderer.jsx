function BlockRenderer({ block }) {
  switch (block.type) {
    case "text":
      return <p>{block.value}</p>;

    case "bullet":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              {typeof item === "string"
                ? item
                : `${item.label}: ${item.value}`}
            </li>
          ))}
        </ul>
      );

    case "ordered-list":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case "definition":
      return (
        <div>
          <strong>{block.term}: </strong>
          <span>{block.value}</span>
        </div>
      );

    case "diagram":
      return (
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
          {block.value}
        </pre>
      );

    case "protocol":
      return (
        <div>
          <h4>{block.name}</h4>
          <ul>
            {block.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      );

    case "layer":
      return (
        <div>
          <h4>{block.title}</h4>
          <ul>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

export default BlockRenderer;
