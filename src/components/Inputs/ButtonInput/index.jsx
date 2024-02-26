import { Button } from './styles';

export const ButtonInput = ({ onClick, title, type, size }) => {
	return (
		<Button onClick={onClick} type={type} className={size}>
			{title}
		</Button>
	);
};
