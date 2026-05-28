interface Review {
	text: string;
	author: string;
	platform: 'Amazon' | 'Goodreads';
	stars?: number;
}
const reviewCards: Review[] = [
	{
		text: "Little Levi is such a relatable, endearing character, and the book explores an important message about managing emotions…I will be buying a copy for every kid’s birthday and baby shower for the foreseeable future!",
		author: "Nicole",
		platform: "Amazon",
		href: "https://www.amazon.com/gp/customer-reviews/RZNS9SDNNVMG9?ref=pf_vv_at_pdctrvw_srp",
	},
	{
		text: "The writing is funny and engaging, and the illustrations are whimsical and beautiful. We absolutely love this book.",
		author: "Kendra",
		platform: "Goodreads",
		href: "https://www.goodreads.com/review/show/8464652414",
	},
	{
		text: "Love this book! It has such a good message and will help lots of kids navigate big feelings. 10/10 recommend!",
		author: "Anonymous",
		platform: "Amazon",
		href: "https://www.amazon.com/gp/customer-reviews/R35M9TWFV37IJ6/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8",
	},
];

interface UpcomingCard {
  icon: string;
  status: string;
  title: string;
  description: string;
}
const upcomingCards: UpcomingCard[] = [
	{
		icon: "📚",
		status: "In the works",
		title: "The Next Little Levi Adventure",
		description: "Little Levi returns with a brand new feeling, a brand new coping skill, and a whole lot of heart. Stay tuned!",
	},
	{
		icon: "🇪🇸",
		status: "Coming soon",
		title: "Spanish Edition",
		description: "¡En Español también! The Spanish edition of Little Levi is on its way — perfect for bilingual families and dual-language classrooms.",
	},
	{
		icon: "🎧",
		status: "Coming soon",
		title: "eBook & Audio Book",
		description: "Little Levi is getting ready for storytime anywhere! Read along on your favorite device or listen together at bedtime — the eBook and audiobook are on their way.",
	},
];

type Retailer = {
	name: string;
	href: string;
	icon: string;
	sub: string;
	badge?: string;
	featured?: boolean;
};

const retailerCards: Retailer[] = [
	{
		name: 'EmpowerMint Press',
		href: 'https://www.empowermintpress.com/shop/little-levi',
		icon: '🏭',
		sub: 'Direct from the publisher',
		badge: 'Signed copies',
		featured: true,
	},
	{
		name: 'Amazon',
		href: 'https://www.amazon.com/Little-Levi-Bedtime-Scaries-Newton/dp/1733256385/',
		icon: '📦',
		sub: 'Hardcover & Paperback',
	},
	{
		name: 'Barnes & Noble',
		href: 'https://www.barnesandnoble.com/w/little-levi-and-the-bedtime-scaries-kate-newton/1149485624?ean=9781733256384',
		icon: '📚',
		sub: 'In-store & Online',
	},
	{
		name: 'Half Off Books',
		href: 'https://www.hobrf.com/product/little-levi-and-the-bedtime-scaries/2845',
		icon: '📖',
		sub: 'Independent bookseller',
	},
	{
		name: 'SheraChic Boutique',
		href: 'https://www.google.com/maps/place/SheraChic+Boutique/@36.8247371,-119.7018407,17z/data=!3m1!4b1!4m6!3m5!1s0x80945d4a30238e4f:0xfaf3683e9bde4d00!8m2!3d36.8247371!4d-119.7018407!16s%2Fg%2F11y36bg2yl',
		icon: '🛍️',
		sub: 'Shop local',
	},
	{
		name: 'The Inkbound Bookshop',
		href: 'https://www.theinkboundbookshop.com',
		icon: '📚',
		sub: 'Independent bookstore',
	},
	{
		name: 'Novel Tales Bookstore',
		href: 'https://www.walkermercantile.com',
		icon: '🏪',
		sub: 'Inside Walker Mercantile Company',
	},
];

type Character = {
	name: string;
	speech: string;
	image: string;
	imageAlt: string;
	description: string;
	className: string;
};

const characterCards: Character[] = [
	{
		name: 'Little Levi',
		speech: 'The brave one!',
		image: '/images/books/bedtime-scaries/levi.png',
		imageAlt: 'Little Levi',
		className: 'levi',
		description: "Levi is curious, kind, and full of heart — even when the Bedtime Scaries show up uninvited. He's learning that being brave doesn't mean not being scared. It means doing hard things anyway.",
	},
	{
		name: 'Scrunch',
		speech: 'His best pal!',
		image: '/images/books/bedtime-scaries/scrunch.png',
		imageAlt: 'Scrunch',
		className: 'scrunch',
		description: "Scrunch is Levi's loyal stuffed companion — always there for a squeeze when the worries creep in. Because everyone needs a good snuggle buddy on a scary night.",
	},
	{
		name: 'Momster',
		speech: 'Always there to help!',
		image: '/images/books/bedtime-scaries/momster.png',
		imageAlt: 'Momster',
		className: 'momster',
		description: 'Momster helps Levi navigate big feelings with patience, love, and just the right amount of bedtime magic.',
	},
];

export const booksConfig = {
	bedtimeScaries: {
		title: "Little Levi and the Bedtime Scaries",
		cover: "/images/books/bedtime-scaries/cover.jpg",
		description: [
			"Meet Little Levi, a lovable little monster who dreads bedtime because he just knows there is a kid hiding under his bed. Sound familiar? This sweet, funny role reversal helps children process bedtime anxiety in a totally fresh way.",
			"Complete with <strong>built-in breathing exercises</strong>, Little Levi and the Bedtime Scaries gives kids (and parents!) real tools for managing big feelings, wrapped in a story they will want to read again and again.",
		],
		tags: ["Picture Book", "Ages 3-8", "32 Pages", "Anxiety & Coping"],
		formats: ["Hardcover", "Paperback"],
		reviews: {
			title: "What readers are saying",
			subtitle: "",
			cards: reviewCards,
			ctas: {
				amazon: "https://www.amazon.com/review/create-review/?ie=UTF8&channel=glance-detail&asin=1733256350",
				goodreads: "https://www.goodreads.com/book/show/248104296-little-levi-and-the-bedtime-scaries?from_search=true&from_srp=true&qid=tMtJsj6scY&rank=3#:~:text=Write%20a-,Review",
			},
		},
		upcoming: {
			title: "More adventures on the way!",
			subtitle: "Little Levi is just getting started. Here's a peek at what's coming next.",
			cards: upcomingCards,
		},
		retailers: {
			title: "Get your copy of Little Levi!",
			subtitle: "Available wherever books are sold — online, local bookstores, and more [hardcover and paperback].",
			cards: retailerCards,
		},
		characters: {
			title: "The stars of Little Levi!",
			subtitle: "Two best friends navigating big feelings together.",
			cards: characterCards,
		},
	}
} as const;
