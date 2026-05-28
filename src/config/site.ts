export const siteConfig = {
	author: {
		name: "Kate Newton",
		nickname: "Kate",
		email: "hello@kateknewton.com",
		instagram: {
			url: "https://www.instagram.com/itskatenewton",
			username: "@itskatenewton",
		},
		image: "/images/kate.jpg",
	},
	navigation: [
		{ title: 'Books', href: '#books' },
		{ title: 'About Kate', href: '#about' },
		{ title: 'Where to Buy', href: '#buy' },
		{ title: 'Reviews', href: '#reviews' },
		{ title: 'Characters', href: '#characters' },
		{ title: 'Coming Soon', href: '#upcoming' },
		{ title: 'Events & Visits', href: '#inquiry' },
	],
} as const;
