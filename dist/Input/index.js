"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Input = ({ value, onChange, placeholder }) => {
    // const [text, setText] = useState('');
    return (<react_native_1.TextInput placeholder={placeholder} value={value} onChangeText={onChange} style={{ borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5 }}/>);
};
exports.default = Input;
