// Represents options in the dropdown
export type Option = {
  value: string;
  label: string;
};

// Props for the Dropdown component
export type DropdownProps = {
  options: Option[];
  onOptionSelected: (option: Option) => void;
};
