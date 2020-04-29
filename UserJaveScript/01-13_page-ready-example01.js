  //현재 페이지를 불러옵니다.
  var page = Forguncy.Page;
  
  //ready Method의 Callback 함수에 아래 로직을 추가합니다.
  page.ready(function () {
    
    //"button"이라는 이름의 Cell에 "Click" 이벤트를 binding합니다.
    page.getCell("button").bind("click", function () {
      
      //현재 사용 중인 사용자의 이름을 팝업으로 표시합니다.
      alert(page.getUserName());
    })
  });