//현재 페이지에 Namespace를 선언합니다.
var page = Forguncy.Page;

//Cell Name이 pitvottablecell이라고 명명된 셀 인스턴스 정보를 가져옵니다.
var pivottable = page.getCell("pivottablecell");

//ready 메소드의 CallBack 함수를 생성합니다.
page.ready(function () {

	//pitvottablecell 셀에 pivottableClick을 binding합니다.
	pivottable.bind("pivottableClick", function () {

		//미리 지정한 문구를 화면에 표시합니다.
		alert("안녕하세요. Forguncy!");
		});
});