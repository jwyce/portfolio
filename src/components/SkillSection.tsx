import { motion } from 'framer-motion';
import React from 'react';
import { Skill } from 'src/App';
import { TechStackItem } from './TechStackItem';

interface SkillProps {
	skill: Skill;
}

export const SkillSection: React.FC<SkillProps> = ({ skill }) => {
	switch (skill) {
		case Skill.BACKEND:
			return (
				<motion.div className="tech-stack-container">
					<TechStackItem
						href="https://www.typescriptlang.org/docs/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_typescript_official.svg"
						name="TypeScript"
					/>
					<TechStackItem
						href="https://nodejs.org/en/docs/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_node.svg"
						name="Node"
					/>
					<TechStackItem
						href="https://graphql.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_graphql.svg"
						name="GraphQL"
					/>
					<TechStackItem
						href="https://elixirschool.com/en"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_elixir.svg"
						name="Elixir"
					/>
					<TechStackItem
						href="https://docs.microsoft.com/en-us/aspnet/core/?WT.mc_id=dotnet-35129-website&view=aspnetcore-6.0"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_csharp2.svg"
						name="C#"
					/>
					<TechStackItem
						href="https://trpc.io/"
						url="https://camo.githubusercontent.com/a7595afbaba8729f686ca2ee06c266505aa82c5dd81bb5b369a27bfbbcc49927/68747470733a2f2f747270632e696f2f696d672f6c6f676f2d6e6f2d746578742e737667"
						name="tRPC"
					/>
					<TechStackItem
						href="https://www.postgresql.org/"
						url="https://camo.githubusercontent.com/dc28aca23d813c31cfdda2682f527f08b9cfc482fc8e11f30f3911ba15736034/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f322f32392f506f737467726573716c5f656c657068616e742e737667"
						name="PostgreSQL"
					/>
					<TechStackItem
						href="https://redis.io/"
						url="https://camo.githubusercontent.com/c9543ed7615a649ef70e39eef9c09d8b6b8559a3bbfed522ef2944d805f32324/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f72656469732f72656469732d69636f6e2e737667"
						name="Redis"
					/>
					<TechStackItem
						href="https://planetscale.com/"
						url="https://camo.githubusercontent.com/b99b8e1ae85a393848c829fe70748d3191ef24f1c5859cb77444a3a5cefed948/68747470733a2f2f706c616e65747363616c652e636f6d2f66617669636f6e2e737667"
						name="PlanetScale"
					/>
					<TechStackItem
						href="https://www.prisma.io/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_prisma.svg"
						name="Prisma"
					/>
					<TechStackItem
						href="https://next-auth.js.org/"
						url="https://camo.githubusercontent.com/a1f2b2f62f33c58fd71d7abd9acc67683f3d9c393b5c75478fb5d1a475be129f/68747470733a2f2f6e6578742d617574682e6a732e6f72672f696d672f6c6f676f2f6c6f676f2d78732e706e67"
						name="NextAuth"
					/>
					<TechStackItem
						href="https://pusher.com/"
						url="https://avatars.githubusercontent.com/u/739550?s=200&v=4"
						name="Pusher"
					/>
					<TechStackItem
						href="https://socket.io/"
						url="https://camo.githubusercontent.com/07aa2b658522a1484d90bade21c57204955c2d64a307f5366108e13800ed7f5d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39362f536f636b65742d696f2e737667"
						name="Socket.io"
					/>
				</motion.div>
			);
		case Skill.FRONTEND:
			return (
				<motion.div className="tech-stack-container">
					<TechStackItem
						href="https://beta.reactjs.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_reactjs.svg"
						name="React"
					/>
					<TechStackItem
						href="https://reactnative.dev/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_reactts.svg"
						name="React Native"
					/>
					<TechStackItem
						href="https://expo.dev/home"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_expo.svg"
						name="Expo"
					/>
					<TechStackItem
						href="https://nextjs.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_next.svg"
						name="Next.js"
					/>
					<TechStackItem
						href="https://vitejs.dev/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_vite.svg"
						name="Vite"
					/>
					<TechStackItem
						href="https://www.solidjs.com/"
						url="https://www.solidjs.com/assets/logo.123b04bc.svg"
						name="Solid.js"
					/>
					<TechStackItem
						href="https://react-query.tanstack.com/"
						url="https://camo.githubusercontent.com/88a0a0e7271c20473dcea78f99c6e8c419ebcbe5e1a62229b2b3fae336825175/68747470733a2f2f72656163742d71756572792e74616e737461636b2e636f6d2f5f6e6578742f7374617469632f696d616765732f656d626c656d2d6c696768742d36323830383036363066646462333537383766663663373765393763613433652e737667"
						name="React Query"
					/>
					<TechStackItem
						href="https://rxjs.dev/"
						url="https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png"
						name="RxJS"
					/>
					<TechStackItem
						href="https://tailwindcss.com/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_tailwind.svg"
						name="tailwindcss"
					/>
					<TechStackItem
						href="https://stitches.dev/"
						url="https://stitches.dev/favicon.svg"
						name="Stitches"
					/>
					<TechStackItem
						href="https://www.radix-ui.com/"
						url="https://www.radix-ui.com/favicon.svg"
						name="Radix UI"
					/>
					<TechStackItem
						href="https://chakra-ui.com/"
						url="https://chakra-ui.com/favicon.png"
						name="Chakra UI"
					/>
					<TechStackItem
						href="https://nextui.org/"
						url="https://raw.githubusercontent.com/nextui-org/nextui/main/apps/docs/public/isotipo.png"
						name="Next UI"
					/>
					<TechStackItem
						href="https://mui.com/"
						url="https://mui.com/static/icons/180x180.png"
						name="Material UI"
					/>
					<TechStackItem
						href="https://react-iconly.jrgarciadev.com/"
						url="https://react-iconly.jrgarciadev.com/favicon.ico"
						name="React Iconly"
					/>
				</motion.div>
			);
		case Skill.DEVOPS:
			return (
				<motion.h3 className="tech-stack-container">
					<TechStackItem
						href="https://github.com/home"
						url="https://github.com/fluidicon.png"
						name="GitHub"
					/>
					<TechStackItem
						href="https://vercel.com/home"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_zeit.svg"
						name="Vercel"
					/>
					<TechStackItem
						href="https://jestjs.io/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_jest_snapshot.svg"
						name="Jest"
					/>
					<TechStackItem
						href="https://www.cypress.io/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_cypress.svg"
						name="Cypress"
					/>
					<TechStackItem
						href="https://www.datadoghq.com/"
						url="https://imgix.datadoghq.com/img/favicons/apple-touch-icon.png"
						name="Datadog"
					/>
					<TechStackItem
						href="https://www.docker.com/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_docker2.svg"
						name="Docker"
					/>
					<TechStackItem
						href="aws.amazon.com"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_aws.svg"
						name="AWS"
					/>
					<TechStackItem
						href="https://www.atlassian.com/software/jira"
						url="https://symbols.getvecta.com/stencil_85/33_jira-icon.70390a6f88.svg"
						name="Jira"
					/>
				</motion.h3>
			);
		case Skill.OTHER:
			return (
				<motion.div className="tech-stack-container">
					<TechStackItem
						href="https://code.visualstudio.com/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_vscode.svg"
						name="VSCode"
					/>
					<TechStackItem
						href="https://github.com/vim/vim"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_vim.svg"
						name="Vim"
					/>
					<TechStackItem
						href="https://fishshell.com/"
						url="https://user-images.githubusercontent.com/920838/47597523-5614b000-d944-11e8-88e2-3de62d581ec2.gif"
						name="Fish Shell"
					/>
					<TechStackItem
						href="https://turborepo.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_turbo.svg"
						name="Turborepo"
					/>
					<TechStackItem
						href="https://gitmoji.dev/"
						url="https://gitmoji.dev/static/apple-icon-180x180.png"
						name="Gitmoji"
					/>
					<TechStackItem
						href="https://insomnia.rest/"
						url="https://insomnia.rest/favicon.ico"
						name="Insomnia"
					/>
					<TechStackItem
						href="https://www.jetbrains.com/datagrip/"
						url="https://cdn.icon-icons.com/icons2/3053/PNG/512/intellij_datagrip_macos_bigsur_icon_190058.png"
						name="Datagrip"
					/>
					<TechStackItem
						href="https://www.notion.so/"
						url="https://www.notion.so/front-static/favicon.ico"
						name="Notion"
					/>
					<TechStackItem
						href="https://www.figma.com/"
						url="https://static.figma.com/app/icon/1/favicon.svg"
						name="Figma"
					/>
				</motion.div>
			);
		default:
			return <></>;
	}
};
