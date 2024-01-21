import { ReactNode } from "react";

interface IFrameProps {
	children: ReactNode;
	color: string;
}

export default function ProjectView({
	children,
	color,
}: IFrameProps): ReactNode {
	console.log(color);
	return (
		<>
			<rectAreaLight
				width={2.5}
				height={1.65}
				color={color}
				intensity={45}
				position={[0, 0.55, -1.15]}
				rotation={[0.1, Math.PI, 0]}
			/>
			{children}
		</>
	);
}
