const HighlightedText = ({ children }) => {
  return (
    <span
      style={{
        color: "black",
        fontWeight: "bold",
        backgroundColor: "rgba(29, 98, 189, 0.99)",
        padding: "2px 4px",
        borderRadius: "4px",
      }}
    >
      {children}
    </span>
  );
};

export default HighlightedText;
