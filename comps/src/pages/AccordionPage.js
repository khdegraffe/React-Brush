import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      key: 1234,
      label: "Can I use React?",
      content: "You can indeed, You can indeed, You can indeed, You can indeed",
    },
    {
      key: 4321,
      label: "Can I use JavaScript?",
      content:
        "You can indeed, You can indeed, You can indeed, You can indeed, You can indeed",
    },
    {
      key: 8976,
      label: "Can I use CSS?",
      content:
        "You can indeed, You can indeed, You can indeed, You can indeed, You can indeed",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
