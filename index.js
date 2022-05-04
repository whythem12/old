const { Client } = require('discord.js'),
	fetch = require('node-fetch'),
	bot = new Client(),
	mhm = async () => {
		const subs = ["subredditsYouWant"],
			randomSub = subs[Math.floor(Math.random() * subs.length)];

		const posts = (await fetch(
				`https://reddit.com/r/${randomSub}/hot.json?limit=100`
			).then(resp => resp.json()))['data']['children'],
			post = posts[Math.floor(Math.random() * posts.length)]['data'];

		return post['url'];
	};

bot.on('ready', () => {
	console.log("con started!");
});

bot.on('message', message => {
	if (message.content === 'start')
		setInterval(async () => message.channel.send(await mhm()), 5000);
});

bot.login('Your token goes here'); 
