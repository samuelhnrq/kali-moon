import { load } from 'cheerio';

export async function fetchToday(): Promise<string> {
	const result = await fetch('https://www.drikpanchang.com/?geoname-id=2988507');
	const htmlText = await result.text();
	const $ = load(htmlText);
	const header = $('#dpPHeaderId');
	const today = header.find('.dpPHeaderLeftTitle').text();
	return today;
}
