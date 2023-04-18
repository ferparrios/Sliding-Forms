interface InputProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}
declare const Input: ({ value, onChange, placeholder }: InputProps) => JSX.Element;
export default Input;
