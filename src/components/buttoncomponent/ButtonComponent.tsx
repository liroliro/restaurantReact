import React from 'react';

interface IButtonComponentProps {
	value: string;
}

export default function ButtonComponent(props: IButtonComponentProps) {
	return <button value={props.value}>{props.value}</button>;
}
