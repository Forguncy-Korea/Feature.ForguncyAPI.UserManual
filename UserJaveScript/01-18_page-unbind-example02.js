//현재 페이지에 Namespace를 선언합니다.
 var page = Forguncy.Page;
  
//가져온 현재 페이지를 로딩 시에 arg1, arg2를 사용하는 어떤 함수를 실행하도록 합니다.
var eventHandler = function (arg1, arg2) {
  
	//arg2.현재 페이지 이름을 보여주는 팝업을 표시합니다.
	alert(arg2.pageName);
};

//위에서 설정한 이벤트를 페이지에 bind합니다.
page.bind("Loaded", eventHandler);

//현재 페이지에 bind된 이벤트들을 모두 unbind all/모두 해제합니다.
page.unbindAll();