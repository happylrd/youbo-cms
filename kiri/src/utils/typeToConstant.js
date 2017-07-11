export function typeToConstant(type) {
	switch(type){
		case 1:
			return "文字";
		case 2:
			return "图片";
		case 3:
			return "音频";
		case 4:
			return "视频";
		default:
			return "default title";
	}
}