import {  InputText } from "./styles";

export const TextInput = ({ onChange, value, placeholder, type}) => {
	return (
		<InputText
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
	);
};
