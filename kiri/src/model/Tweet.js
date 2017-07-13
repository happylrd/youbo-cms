
class Tweet{

	_createAt;
	_updateAt;
	_tweetFraments;
	_comments;
	_collections;
	_favorites;
	_userId;
	_id;
	
	get createAt() {
		return this._createAt;
	}
	
	set createAt(value) {
		this._createAt = value;
	}
	
	get updateAt() {
		return this._updateAt;
	}
	
	set updateAt(value) {
		this._updateAt = value;
	}
	
	get tweetFraments() {
		return this._tweetFraments;
	}
	
	set tweetFraments(value) {
		this._tweetFraments = value;
	}
	
	get comments() {
		return this._comments;
	}
	
	set comments(value) {
		this._comments = value;
	}
	
	get collections() {
		return this._collections;
	}
	
	set collections(value) {
		this._collections = value;
	}
	
	get favorites() {
		return this._favorites;
	}
	
	set favorites(value) {
		this._favorites = value;
	}
	
	get userId() {
		return this._userId;
	}
	
	set userId(value) {
		this._userId = value;
	}
	
	get id() {
		return this._id;
	}
	
	set id(value) {
		this._id = value;
	}
	
}

export default Tweet;







