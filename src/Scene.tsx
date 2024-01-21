import {
	ContactShadows,
	Environment,
	Float,
	Html,
	PresentationControls,
	Text,
	useGLTF,
} from "@react-three/drei";
import MacDoc from "./MacDoc";
import ProjectView from "./components/Projects/ProjectView";
import Robot from "./components/Models/Robot";
// import { useLayoutEffect } from "react";

export default function Scene(): JSX.Element {
	const macbook = useGLTF("./models/macbook.gltf");
	const spaeShip = useGLTF("./models/model.gltf");

	return (
		<>
			<Environment preset="city" />
			<PresentationControls
				global
				rotation={[0.13, 0.9, 0]}
				polar={[-0.4, 0.2]}
				azimuth={[-0.75, 0.25]}
				config={{ mass: 2, tension: 400 }}
				snap={{ mass: 4, tension: 400 }}
			>
				<Float rotationIntensity={0.4}>
					<primitive object={macbook.scene} position={[-1, -1.2, 0.5]}>
						<ProjectView color="#a9a3ff">
							<Html
								transform
								wrapperClass="htmlScreen"
								distanceFactor={1.17}
								zIndexRange={[0, 1]}
								position={[0, 1.56, -1.4]}
								rotation-x={-0.256}
							>
								<iframe src="https://hotel-booking-app-project.vercel.app/" />
								<MacDoc />
							</Html>
						</ProjectView>
					</primitive>
					<Text
						font="/fonts/Bangers-Regular.ttf"
						fontSize={1}
						position={[3, 0.9, 0.75]}
						rotation-y={-1.25}
						maxWidth={2}
					>
						Click TO view Projects
					</Text>
				</Float>
				<Float rotationIntensity={0.4}>
					<Robot position={[-3.5, -1.2, -1]} scale={0.3} />
				</Float>
				<Float>
					<primitive
						object={spaeShip.scene}
						position={[1, 1.2, 2.5]}
						rotation={[0.3, -0.5, 0.5]}
						scale={0.5}
					/>
				</Float>
			</PresentationControls>
			<ContactShadows position-y={-1.4} opacity={0.4} scale={10} />
		</>
	);
}
