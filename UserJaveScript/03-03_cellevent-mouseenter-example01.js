  //CallBack으로 사용할 이벤트를 정의합니다.
  var enteringMouseEvent = function(arg) {
      alert("안녕하세요. Forguncy!");
  }
  
  //현재 페이지에 Namespace를 선언합니다.
  var page = Forguncy.Page;

  //Cell Name이 picture라고 되어 있는 셀 인스턴스 속성을 가져옵니다.
  var cell = page.getCell("picture");

  //picture 셀에 enteringMouseEvent 이벤트를 binding합니다.
  cell.bind("mouseEnter", enteringMouseEvent);