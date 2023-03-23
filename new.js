var i = 0;
var images = [];
var time = 5000; // 이미지 전환 간격(ms)
var Check = [];

images[0] = "images/1.jpg"; //images폴더 안에 있는 1.jpg이미지
images[1] = "images/2.jpg"; //images폴더 안에 있는 2.jpg이미지
images[2] = "images/3.jpg";
images[3] = "images/4.jpg"
images[4] = "images/5.jpg"


function change(){ //change라는 함수를 만듬
    document.slide.src = images[i]; //js와 연결되있는 html 파일에서 만들어진 class의 위치를 가져옴
        if(i < images.length -1){
            i++;
        }else{
            i=0;
        }
    setTimeout("change()",time); //change함수에서 불러온 html class에서 time 함수에 지정된 초단위 마다 바뀌게끔 
}
window.onload = change; //change함수에 지정된 html 파일을 가져오고 change 함수가 실행되게끔