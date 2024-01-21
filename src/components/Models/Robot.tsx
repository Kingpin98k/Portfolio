/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

interface gltfProps {
	nodes: any;
	materials: any;
	animations: any;
}

export default function Robot(props: JSX.IntrinsicElements["group"]) {
	const group = useRef(null);
	const { nodes, materials, animations }: gltfProps = useGLTF(
		"/models/robot-draco.glb"
	);
	const { actions, names } = useAnimations(animations, group);

	const { animationOption } = useControls({
		animationOption: {
			options: names,
		},
	});

	React.useEffect(() => {
		actions[animationOption]?.reset().fadeIn(0.5).play();

		//Now we wan it to crossFade between animations
		//we can use the crossFadeTo()/crossFadeFrom() method for it

		// window.setTimeout(() => {
		// 	actions.Run.crossFadeTo(actions.Walk, 1, true);
		// 	actions.Walk.play();
		// }, 2000);

		//We need to stop the animation once the component is unmounted
		return () => {
			actions[animationOption]?.fadeOut(0.5);
		};
	}, [animationOption]);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Root_Scene">
				<group name="RootNode">
					<group
						name="RobotArmature"
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<primitive object={nodes.Bone} />
					</group>
					<group
						name="HandR"
						position={[-0.003, 2.37, -0.021]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<skinnedMesh
							name="HandR_1"
							geometry={nodes.HandR_1.geometry}
							material={materials.Main}
							skeleton={nodes.HandR_1.skeleton}
						/>
						<skinnedMesh
							name="HandR_2"
							geometry={nodes.HandR_2.geometry}
							material={materials.Grey}
							skeleton={nodes.HandR_2.skeleton}
						/>
					</group>
					<group
						name="HandL"
						position={[-0.003, 2.37, -0.021]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					>
						<skinnedMesh
							name="HandL_1"
							geometry={nodes.HandL_1.geometry}
							material={materials.Main}
							skeleton={nodes.HandL_1.skeleton}
						/>
						<skinnedMesh
							name="HandL_2"
							geometry={nodes.HandL_2.geometry}
							material={materials.Grey}
							skeleton={nodes.HandL_2.skeleton}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/robot-draco.glb");
