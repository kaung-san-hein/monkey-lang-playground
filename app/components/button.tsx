interface ButtonProps {
  onClick: () => void;
  text: string;
  bgColor: string;
  hoverColor: string;
}

export function Button({ onClick, text, bgColor, hoverColor }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} hover:${hoverColor} text-white px-4 py-1 rounded text-sm`}
    >
      {text}
    </button>
  );
}
