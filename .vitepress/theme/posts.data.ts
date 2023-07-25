import { createContentLoader } from "vitepress";

export interface Post {
	title: string;
	url: string;
	date: {
		time: number;
		string: string;
	};
	excerpt: string | undefined;
}

declare const data: Post[];
export { data };

const formatDate = (raw: string): Post["date"] => {
	const date = new Date(raw);
	date.setUTCHours(12);
	return {
		time: +date,
		string: date.toLocaleDateString("lt-LT", {
			year: "numeric",
			month: "long",
			day: "numeric",
		}),
	};
};

export default createContentLoader("pages/posts/*.md", {
	excerpt: true,
	transform(raw): Post[] {
		return raw
			.map(({ url, frontmatter, excerpt }) => ({
				title: frontmatter.title,
				url: url.replace("/pages", ""),
				excerpt,
				date: formatDate(frontmatter.date),
			}))
			.sort((a, b) => b.date.time - a.date.time);
	},
});
