function Accordion({ items }) {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{items.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
