export default function SplitLine({ as: Tag = "span", className = "", children, ...props }) {
  return (
    <Tag className={`split-line ${className}`.trim()} {...props}>
      <span>{children}</span>
    </Tag>
  );
}
