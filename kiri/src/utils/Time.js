 export function timeToString(time) {
	 //time is array[6]
	 if(time!==undefined){
	    return time[0]+"年"+time[1]+"月"+time[2]+"日"+time[3]+"时"+time[4]+"分"+time[5]+"秒";
	 }else{
		 return "错误时间";
	 }
 }
