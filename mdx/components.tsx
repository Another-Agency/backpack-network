// Title.tsx
export const Title = ({ children }: { children?: React.ReactNode }) => (
  <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
    {children}
  </h1>
);

// Paragraph.tsx
export const Paragraph = ({ children }: { children?: React.ReactNode }) => (
  <p style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.6" }}>
    {children}
  </p>
);

// List.tsx
export const List = ({ children }: { children?: React.ReactNode }) => (
  <ul style={{ color: "#ccc", fontSize: "16px", paddingLeft: "20px" }}>
    {children}
  </ul>
);

// ListItem.tsx
export const ListItem = ({ children }: { children?: React.ReactNode }) => (
  <li style={{ marginBottom: "10px" }}>{children}</li>
);

// Subtitle.tsx
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

// email.tsx
export const Email = ({
  children,
  email,
}: {
  children?: React.ReactNode;
  email: string;
}) => (
  <a
    href={`mailto:${email}`}
    style={{
      color: "#ff00c7",
      textDecoration: "none", // Typically, email links are not underlined, but adjust as needed
      cursor: "pointer", // To indicate it's clickable
      // Rest of your styling here
    }}
  >
    {children}
  </a>
);

// we need a Bold component now
export const Bold = ({ children }: { children?: React.ReactNode }) => (
  <span style={{ fontWeight: "bold" }}>{children}</span>
);

// Remember to replace the color codes with the actual colors from your site's theme
