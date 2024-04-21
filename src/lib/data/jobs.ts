type Job = {
	title: string;
	company: string;
	location: string;
	duration: string;
	description: string;
	image: string;
	url: string;
	tools: Tool[];
};

type Tool = {
	name: string;
	url: string;
};

export const jobs: Job[] = [
	{
		title: 'Senior Full-Stack Developer',
		company: 'The Football Association',
		location: 'Wembley Stadium, London',
		duration: 'Aug 2023 - Present',
		description: 'Working for England Teams',
		url: 'https://www.thefa.com',
		image: 'https://cdn.thefa.com/thefawebsite/assets/images/for-all-logo.png',
		tools: [
			{ name: 'React', url: 'https://reactjs.org' },
			{ name: 'Node.js', url: 'https://nodejs.org' },
			{ name: 'TypeScript', url: 'https://www.typescriptlang.org' },
			{ name: 'GCP', url: 'https://cloud.google.com' }
		]
	},
	{
		title: 'Full-Stack Developer',
		company: 'Comic Relief',
		location: 'London',
		duration: 'May 2022 - Aug 2023',
		url: 'https://www.comicrelief.com',
		image:
			'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OTUgNDk1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTUgNDk1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0U1MjYzMTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NzMuNzIsNDk1LjVIMjIuMjhjLTExLjk4LDAtMjEuNzgtOS44LTIxLjc4LTIxLjc4VjIyLjI4QzAuNSwxMC4zLDEwLjMsMC41LDIyLjI4LDAuNWg0NTEuNDQKCWMxMS45OCwwLDIxLjc4LDkuOCwyMS43OCwyMS43OHY0NTEuNDRDNDk1LjUsNDg1LjY5LDQ4NS43LDQ5NS41LDQ3My43Miw0OTUuNXoiLz4KPGcgaWQ9IkNPTUlDX1JFTElFRl8tX29wdGljYWxfdHdlYWsiPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTg1LjY5LDIwMy41MmMwLDEwLjc3LDEuMzUsMTcuNyw5LjYyLDE3LjdzOS42Mi02LjkyLDkuNjItMTcuN3YtMTMuMDhoMjcuNXY1LjU4CgkJYzAsMjguMjctOS4wNCw0OC4wOC0zNi41NCw0OC4wOGMtMjguMjcsMC0zOS4yNC0xOS4wNC0zOS4yNC01My44NXYtMTYuNTRjMC0zNC44MSwxMC45Ni01My44NSwzOS4yNC01My44NQoJCWMyNy41LDAsMzYuNTQsMTkuODEsMzYuNTQsNDguMDh2NS41OGgtMjcuNXYtMTMuMDhjMC0xMC43Ny0xLjM1LTE3LjctOS42Mi0xNy43cy05LjYyLDYuOTItOS42MiwxNy43VjIwMy41MnoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMTYuMjEsMTg5LjQ4YzAsMzQuODEtMTAuOTYsNTQuNjItMzkuMjQsNTQuNjJjLTI4LjI3LDAtMzkuMjQtMTkuODEtMzkuMjQtNTQuNjJ2LTE1CgkJYzAtMzQuODEsMTAuOTYtNTQuNjIsMzkuMjQtNTQuNjJjMjguMjcsMCwzOS4yNCwxOS44MSwzOS4yNCw1NC42MlYxODkuNDh6IE0xNjYuOTcsMjAzLjEzYzAsMTAuNzcsMS43MywxOC4wOCwxMCwxOC4wOAoJCXMxMC03LjMxLDEwLTE4LjA4di00Mi4zMWMwLTEwLjc3LTEuNzMtMTguMDgtMTAtMTguMDhzLTEwLDcuMzEtMTAsMTguMDhWMjAzLjEzeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI3MS4zMiwxODIuOTRoMC43N2wxMS41NC02MS41NWgzNS41OHYxMjEuMTdoLTI2LjE2di02OS4wNWgtMC43N2wtMTMuMjcsNjkuMDVoLTE3LjdsLTEzLjY2LTY5LjA1aC0wLjc3CgkJdjY5LjA1aC0yNC44MVYxMjEuMzloMzYuMzVMMjcxLjMyLDE4Mi45NHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNTYuNDEsMTIxLjM5djEyMS4xN2gtMjguMjdWMTIxLjM5SDM1Ni40MXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zOTIuMzksMjAzLjUyYzAsMTAuNzcsMS4zNSwxNy43LDkuNjIsMTcuN2M4LjI3LDAsOS42Mi02LjkyLDkuNjItMTcuN3YtMTMuMDhoMjcuNXY1LjU4CgkJYzAsMjguMjctOS4wNCw0OC4wOC0zNi41NCw0OC4wOGMtMjguMjcsMC0zOS4yNC0xOS4wNC0zOS4yNC01My44NXYtMTYuNTRjMC0zNC44MSwxMC45Ni01My44NSwzOS4yNC01My44NQoJCWMyNy41LDAsMzYuNTQsMTkuODEsMzYuNTQsNDguMDh2NS41OGgtMjcuNXYtMTMuMDhjMC0xMC43Ny0xLjM1LTE3LjctOS42Mi0xNy43Yy04LjI3LDAtOS42Miw2LjkyLTkuNjIsMTcuN1YyMDMuNTJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTA1LjEyLDM3NC42M2MtMS41NC00LjYyLTEuOTItMTEuNzMtMi42OS0yNi4zNWMtMC41OC0xMS41NC0zLjQ2LTE3LjUtMTIuMzEtMTcuNWgtMy42NXY0My44NUg1OC41N1YyNTMuNDYKCQloMzQuODFjMjcuMTIsMCwzOS4yNCwxNC4yMywzOS4yNCwzNS43N2MwLDE5LjA0LTguNjYsMjguNDctMjAuOTcsMzAuNThjMTIuNjksMi44OCwxNi45MywxMS45MiwxNy44OSwyNy4xMgoJCWMwLjk2LDE1Ljk2LDAuNzcsMjIuMTIsMy40NiwyNy43SDEwNS4xMnogTTg5LjE2LDMwOC40NmMxMS4zNSwwLDE1Ljc3LTMuNjUsMTUuNzctMTUuOTZjMC0xMC45Ni00LjQyLTE2LjM1LTE1Ljc3LTE2LjM1aC0yLjY5CgkJdjMyLjMxSDg5LjE2eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIwMC40MiwzNzQuNjNoLTYxLjM2VjI1My40Nmg2MS4zNnYyMy4yN2gtMzMuNjZ2MjQuODFoMjV2MjMuMDhoLTI1djI2Ljc0aDMzLjY2VjM3NC42M3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMzUuMjcsMjUzLjQ2djk3LjloMzIuN3YyMy4yN0gyMDdWMjUzLjQ2SDIzNS4yN3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMDEuNTMsMjUzLjQ2djEyMS4xN2gtMjguMjdWMjUzLjQ2SDMwMS41M3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNzEuNiwzNzQuNjNoLTYxLjM2VjI1My40Nmg2MS4zNnYyMy4yN2gtMzMuNjZ2MjQuODFoMjV2MjMuMDhoLTI1djI2Ljc0aDMzLjY2VjM3NC42M3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNzguMTgsMzc0LjYzVjI1My40Nmg1OS4wNXYyMy4yN2gtMzAuNzd2MjguMDhoMjIuNXYyMi44OWgtMjIuNXY0Ni45M0gzNzguMTh6Ii8+CjwvZz4KPC9zdmc+Cg==',
		description:
			'As a Full-Stack Engineer, I played a key role in maintaining and enhancing our React front-end and NodeJS back-end services. Alongside a collaborative team, we efficiently managed our infrastructure using AWS CloudFormation and the Serverless Framework. Testing was a priority, so we utilized Cypress, Jest, and Mocha to ensure robustness, even during peak campaigns like Red Nose Day. Collaboration was vital—I closely engaged with stakeholders and team members to keep our digital fundraising projects on track. Additionally, I contributed to the transition from JavaScript to TypeScript, enhancing our codebase for long-term sustainability.',
		tools: [
			{ name: 'React', url: 'https://reactjs.org' },
			{ name: 'Node.js', url: 'https://nodejs.org' },
			{ name: 'TypeScript', url: 'https://www.typescriptlang.org' },
			{ name: 'AWS', url: 'https://aws.amazon.com' },
			{ name: 'Serverless Framework', url: 'https://www.serverless.com' }
		]
	},
	{
		title: 'Lead Mobile Developer',
		company: '2D Media',
		duration: 'March 2021 - May 2022',
		location: 'Witham',
		image: 'https://www.2dmedia.co.uk/images/logo.png',
		description:
			"I spearheaded our company's venture into mobile app development using React Native, advocating for modern tooling and frameworks to enhance code consistency and quality. Among my projects was the creation of custom mobile apps, including a social network tailored for the health and social care sector. Additionally, I played a role in adapting internal tools such as the CRM, project management software, and e-commerce codebase into native mobile applications. Managing app distribution through the Play Store and App Store was also part of my responsibilities. Throughout these endeavors, I maintained close communication with stakeholders to ensure the delivery of top-notch products.",
		url: 'https://www.2dmedia.com',
		tools: [
			{ name: 'React Native', url: 'https://reactnative.dev' },
			{ name: 'Node.js', url: 'https://nodejs.org' },
			{ name: 'TypeScript', url: 'https://www.typescriptlang.org' }
		]
	},
	{
		title: 'Web Developer',
		company: '2D Media',
		duration: 'Jan 2021 - March 2021',
		location: 'Witham',
		image: 'https://www.2dmedia.co.uk/images/logo.png',
		description:
			'I utilized our internal CMS and platform to develop and maintain e-commerce websites. These platforms were tailored to our specific needs and operated similarly to popular e-commerce solutions. I was responsible for setting up and optimizing these sites for performance and user experience, leveraging our internal tools and systems for seamless integration and functionality. By leveraging our internal resources, I created customized e-commerce solutions that effectively met our business requirements and provided a competitive edge in the market.',
		url: 'https://www.2dmedia.com',
		tools: [
			{ name: 'React', url: 'https://reactjs.org' },
			{ name: 'Node.js', url: 'https://nodejs.org' },
			{ name: 'TypeScript', url: 'https://www.typescriptlang.org' },
			{ name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
			{ name: 'PHP', url: 'https://www.php.net' }
		]
	}
];
