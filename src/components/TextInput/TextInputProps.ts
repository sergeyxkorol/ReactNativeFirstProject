type TextInputProps = {
  label: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string | null;
};

export default TextInputProps;
