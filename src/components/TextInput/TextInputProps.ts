type TextInputProps = {
  label: string;
  defaultValue?: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string | null;
};

export default TextInputProps;
