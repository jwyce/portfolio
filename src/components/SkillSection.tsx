import { motion } from 'framer-motion';
import React from 'react';
import { Skill } from 'src/App';
import { TechStackItem } from './TechStackItem';

interface SkillProps {
	skill: Skill;
}

export const SkillSection: React.FC<SkillProps> = ({ skill }) => {
	switch (skill) {
		case Skill.GREAT:
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
						href="https://beta.reactjs.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_reactjs.svg"
						name="React"
					/>
					<TechStackItem
						href="https://graphql.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_graphql.svg"
						name="GraphQL"
					/>
					<TechStackItem
						href="https://www.apollographql.com/"
						url="https://avatars.githubusercontent.com/u/17189275?s=200&v=4"
						name="Apollo"
					/>
					<TechStackItem
						href="https://docs.microsoft.com/en-us/aspnet/core/?WT.mc_id=dotnet-35129-website&view=aspnetcore-6.0"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_csharp2.svg"
						name="C#"
					/>
					<TechStackItem
						href="https://www.postgresql.org/"
						url="https://camo.githubusercontent.com/dc28aca23d813c31cfdda2682f527f08b9cfc482fc8e11f30f3911ba15736034/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f322f32392f506f737467726573716c5f656c657068616e742e737667"
						name="PostgreSQL"
					/>
				</motion.div>
			);
		case Skill.GOOD:
			return (
				<motion.div className="tech-stack-container">
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
						href="https://socket.io/"
						url="https://camo.githubusercontent.com/07aa2b658522a1484d90bade21c57204955c2d64a307f5366108e13800ed7f5d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39362f536f636b65742d696f2e737667"
						name="Socket.io"
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
						href="https://jestjs.io/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_jest_snapshot.svg"
						name="Jest"
					/>
					<TechStackItem
						href="https://www.docker.com/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_docker2.svg"
						name="Docker"
					/>
				</motion.div>
			);
		case Skill.LIKE:
			return (
				<motion.h3 className="tech-stack-container">
					<TechStackItem
						href="https://elixirschool.com/en"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_elixir.svg"
						name="Elixir"
					/>
					<TechStackItem
						href="https://www.rust-lang.org/"
						url="https://rustacean.net/assets/rustacean-orig-noshadow.svg"
						name="Rust"
					/>
					<TechStackItem
						href="https://www.python.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_python.svg"
						name="Python"
					/>
					<TechStackItem
						href="https://deno.land/"
						url="https://deno.land/logo.svg"
						name="Deno"
					/>
					<TechStackItem
						href="https://www.solidjs.com/"
						url="https://www.solidjs.com/assets/logo.123b04bc.svg"
						name="Solid.js"
					/>
					<TechStackItem
						href="https://www.cypress.io/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_cypress.svg"
						name="Cypress"
					/>
					<TechStackItem
						href="https://vitejs.dev/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_vite.svg"
						name="Vite"
					/>
				</motion.h3>
			);
		case Skill.STACK:
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
						href="https://beta.reactjs.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_reactjs.svg"
						name="React"
					/>
					<TechStackItem
						href="https://trpc.io/"
						url="https://camo.githubusercontent.com/a7595afbaba8729f686ca2ee06c266505aa82c5dd81bb5b369a27bfbbcc49927/68747470733a2f2f747270632e696f2f696d672f6c6f676f2d6e6f2d746578742e737667"
						name="tRPC"
					/>
					<TechStackItem
						href="https://tailwindcss.com/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_tailwind.svg"
						name="Tailwind CSS"
					/>
					<TechStackItem
						href="https://nextjs.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_next.svg"
						name="Next.js"
					/>
					<TechStackItem
						href="https://www.prisma.io/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_prisma.svg"
						name="Prisma"
					/>
					<TechStackItem
						href="https://planetscale.com/"
						url="https://planetscale.com/favicon.svg"
						name="PlanetScale"
					/>
					<TechStackItem
						href="https://next-auth.js.org/"
						url="https://next-auth.js.org/img/logo/logo-sm.png"
						name="NextAuth"
					/>
					<TechStackItem
						href="https://react-query.tanstack.com/"
						url="https://camo.githubusercontent.com/88a0a0e7271c20473dcea78f99c6e8c419ebcbe5e1a62229b2b3fae336825175/68747470733a2f2f72656163742d71756572792e74616e737461636b2e636f6d2f5f6e6578742f7374617469632f696d616765732f656d626c656d2d6c696768742d36323830383036363066646462333537383766663663373765393763613433652e737667"
						name="React Query"
					/>
					<TechStackItem
						href="https://pusher.com/"
						url="https://avatars.githubusercontent.com/u/739550?s=200&v=4"
						name="Pusher"
					/>
					<TechStackItem
						href="https://vercel.com/home"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_zeit.svg"
						name="Vercel"
					/>
					<TechStackItem
						href="https://railway.app/"
						url="https://railway.app/favicon-96x96.png"
						name="Railway"
					/>
					<TechStackItem
						href="https://turborepo.org/"
						url="https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_turbo.svg"
						name="Turborepo"
					/>
					<TechStackItem
						href="https://github.com/home"
						url="https://github.com/fluidicon.png"
						name="GitHub"
					/>
				</motion.div>
			);
		default:
			return <></>;
	}
};