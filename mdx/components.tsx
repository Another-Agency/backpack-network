// Title.jsx
export const Title = ({ children }: { children?: React.ReactNode }) => (
  <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
    {children}
  </h1>
);

// Paragraph.jsx
export const Paragraph = ({ children }: { children?: React.ReactNode }) => (
  <p style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.6" }}>
    {children}
  </p>
);

// List.jsx
export const List = ({ children }: { children?: React.ReactNode }) => (
  <ul style={{ color: "#ccc", fontSize: "16px", paddingLeft: "20px" }}>
    {children}
  </ul>
);

// ListItem.jsx
export const ListItem = ({ children }: { children?: React.ReactNode }) => (
  <li style={{ marginBottom: "10px" }}>{children}</li>
);

// Subtitle.jsx
export const Subtitle = ({ children }: { children?: React.ReactNode }) => (
  <h2
    style={{
      color: "#aaaaaa",
      fontSize: "20px",
      fontWeight: "normal",
      marginBottom: "10px",
    }}
  >
    {children}
  </h2>
);

// email.jsx
export const Email = ({ children }: { children?: React.ReactNode }) => (
  <a
    style={{
      color: "#aaaaaa",
      fontSize: "20px",
      fontWeight: "normal",
      marginBottom: "10px",
    }}
  >
    {children}
  </a>
);
