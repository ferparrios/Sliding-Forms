"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ title, onPress }) => {
    return (<react_native_1.TouchableOpacity style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
        }} onPress={onPress}>
      <react_native_1.Text>{title}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.default = Button;
