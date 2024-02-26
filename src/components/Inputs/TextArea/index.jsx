import {  InputTextArea } from "./styles";

export const TextArea = ({ onChange, value, placeholder, type}) => {
	return (
		<InputTextArea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
	);
};
