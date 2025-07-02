type TagButtonProps = {
  text: string;
  background: string;
  color?: string;
};

function TagButton({ text, background, color = '#222' }: TagButtonProps) {
  return (
    <span
      style={{
        background,
        color,
        fontWeight: 500,
        borderRadius: 12,
        padding: '4px 14px',
        fontSize: 14,
        display: 'inline-block',
      }}
    >
      {text}
    </span>
  );
}

export default TagButton;