export interface IAPIs {
	getData: string;
	postData: string;
}


let pythonAPI: IAPIs = {
	getData:
		`                               （ﾟ）（ﾟ）ミ
                                ﾉ      ミ
                               つ    （  
                              ノ        ー､
                            ／          人 ｀i
                           /           /  ) |
                          /  ,＿     /  (メ
        ＿＿＿           /  ／   ⌒、ヽ
      （＿＿＿二二二)ミﾘ (  <       ヾ ）
                         ⊂＿）    ⊂＿）
`,
	postData:
		`　
		  ┏━━━━━┓
		　┃　／　＼　┃
		　┃／　　　＼┃
		　┃ (ﾟ)(ﾟ)ミ ┃
		　┃ ﾉ　　 ミ ┃
		　┃ つ　　(　┃
		　┃　 )　 (　┃
		　┗━━━━━┛`,
}

let cppAPI: IAPIs = {
	getData:
		`Banmen getData(){
	return banmen;

	  　 彡　(ﾟ)(ﾟ) 
	　　 彡　　 と 
	　＿ノ ヽ　ノ ＼＿ 
	/　 / ⌒Ｙ⌒ Ｙ　ヽ 
	( 　(三ヽ人　 /　 　| 
	|　ﾉ⌒＼ ￣￣ヽ　 ノ 
	ヽ＿＿＿＞､＿＿_／ 
	　　 ｜( 王 ﾉ〈 
	　　 /ﾐ ー―彡ヽ 
	　　/　ヽ＿／　 | 
	　 ｜　　/　 ﾉ 
} `,
	postData:
		`void PostData(unchi)
なんかデータ送るコード
--------------------
　 　 i⌒i
　　　|　|　　　(ﾟ)(ﾟ)
　　　|　|　　彡　　と
　　 　| |　＿ﾉ    ー､
　　　（ミ)、    !ﾌ /
　　　￠＼二二二__ノ
　　　　　　|　　 /
　　　 　／ ソ⌒ 、ヽ
　　　　(　< 　　　ヽ ）
　　  　⊂＿）  　（＿つ
`
}

export var APICodes: { [key: string]: IAPIs } = {
	"python": pythonAPI,
	"C++": cppAPI
}

export var LangList: string[] = ["C++", "python"]