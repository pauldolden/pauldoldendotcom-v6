type Job = {
	title: string;
	company: string;
	location: string;
	duration: string;
	description: string;
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
		company: 'The FA',
		location: 'Wembley Stadium, London',
		duration: 'Aug 2023 - Present',
		description: 'Working for England Teams',
		url: 'https://www.thefa.com',
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
