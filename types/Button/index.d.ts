interface ButtonProps {
    title: string;
    onPress: () => void;
}
declare const Button: ({ title, onPress }: ButtonProps) => JSX.Element;
export default Button;
