type SideButtonProps = {
  label: string;
  variant: 'yes' | 'no';
  onClick: () => void;
  disabled?: boolean;
};

export function SideButton({ label, variant, onClick, disabled }: SideButtonProps) {
  return (
    <button
      className={`side-btn side-btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
}
