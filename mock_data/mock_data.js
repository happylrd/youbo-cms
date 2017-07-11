
var faker = require('faker');

module.exports = () => {
	faker.locale = "zh_CN";
	const data = {
		orgs: [],
		user_roles: [],
		users: [],
		user_follows: [],
		tweets: [],
		favorites: [],
		collections: [],
		comments: [],
		tweet_fragments: [],
		org_members: [],
		roles: []
	};

	//roles--------------------------------
	let roles = ["管理员","用户","草泥马"];
	for (let i = 0; i < 3; i++) {
		data.roles.push({ id: i, name:roles[i],createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37] })
	}
	// orgs---------------------------------
	for (let i = 0; i < 30; i++) {
		data.orgs.push({ id: i, name: faker.name.findName(),createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37] })
	}
	//users----------------------------------
	for (let i = 0; i < 20; i++) {
		data.users.push({ id: i,
			username: faker.name.findName(),createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37] })
	}
	//role_follows---------------------------
	faker.seed(100);
	for(let i=1;i<100;i++){
		data.user_follows.push({id:i,createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37],
			originId:faker.random.number(),targetId:faker.random.number()
		})
	}
	//tweets----------------------------------
	for(let i=1;i<100;i++){
		data.tweets.push({id:i,createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37],
			userId:faker.random.number()
		})
	}

	//favorites------------------------------------------
	for(let i=1;i<150;i++){
		data.favorites.push({
			id:i,userId:faker.random.number(),tweetId:faker.random.number(),
			createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37],enabled:true
		})
	}

	//collections-----------------------------------------
	for(let i=1; i<150;i++){
		data.collections.push({id:i,userId:faker.random.number(),tweetId:faker.random.number(),
			createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37],enabled:true})
	}

	//comments-----------------------------------------
	for(let i=1;i<150;i++){
		data.comments.push({
			id:i,userId:faker.random.number(),tweetId:faker.random.number(),
			createAt:[2017,7,10,10,40,36],updateAt:[2017,7,10,10,40,37],
			content:faker.lorem.sentences()
		})
	}

	//tweet_fragments---------------------------------------
	for(let i=1;i<200;i++){
		let tf = {id:i,tweetId:faker.random.number(),
			createAt:[2017,7,10,10,40,36],
			updateAt:[2017,7,10,10,40,37]};
		tf["type"] = Math.floor(Math.random()(4)+1);
		data.tweet_fragments.push(tf);
	}

	return data
};