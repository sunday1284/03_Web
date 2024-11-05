
//리터럴 방식으로 배열 선언
function f_arr1(){
    // alert("연결됐는지 확인");
    const v_arr1 = ['apple','banana',1,false,null,'orange',undefined,"2"];
    console.log(v_arr1[1]);
    document.getElementsByTagName('div')[0].innerText = v_arr1;
}

//생성자 방식으로 배열 생성
//자바스크립트는 내장객체를 갖고 있으며, Array객체의 생성자를 이용해 새 배열을 만듦
function f_arr2(){
    const v_arr2 = new Array();
    v_arr2[0] = "브레드";
    v_arr2[2] = "초코";
    v_arr2[3] = "윌크";
    v_arr2[5] = "소세지";

    //배열정보를 string변수에 담아서 출력
    //일반적인 for문 사용
    let strArr = "";
    for(let i=0; i<v_arr2.length; i++){
        if(i>0) strArr += " ✔ "; //첫 항목울 제외하고 데이터 삽입전에 구분자 설정
        strArr += v_arr2[i];
        // strArr += v_arr2[i] + " / "; //현재는 가장 마지막 항목 뒷쪽에도 구분자가 붙음
    }
    document.querySelector('div').innerText = strArr;


    const v_arr3 = new Array("듈리","고길동","또치","도우너");
    
    //forEach()사용
    let strArr2 = "";
    v_arr3.forEach(function(val,idx,arr){
        // console.log(val,idx,arr);
        if(idx>0) strArr2 += " - ";
        // strArr2 += val;
        strArr2 += arr[idx]; //전체 배열값중 idx인 정보 저장
    });
    document.querySelectorAll('div')[0].innerText = strArr2;

    //for-in문 사용
    //for(변수로 key/index를 받음 in 객체-배열포함해서)
    let strArr3 = "";
    for(idx in v_arr3){
        console.log(idx, v_arr3[idx]);
        //strArr3에 정보를 담고 div로 최종 출력하기
        if(idx>0) strArr3 += " 👏 "; //구분자   
        strArr3 += v_arr3[idx];
    }
    document.getElementsByTagName('div')[0].innerText
     ="forIn문 활용해서 >> " + strArr3;

    //for-of문
    //for(값 of 배열(열거가능 컬렉션)-객체는 안됌)
    let strArr4 = "";
    let count = 0;
    for(val of v_arr3) {
        //자바스크립트는 동적으로 타입변환을 제공함
        //0, ""(빈문자열), null, undefined 등등이 false로 자동변환됨
        //반대로 0이 아닌 숫자(음수포함), 모든 문자는 true로 변환...
        if(count) strArr4 += " & "; //구분자 
        strArr4 += val;
        count++;
    }
    document.querySelector('div').innerText
    = "forOf문 활용해서 >> " + strArr4;
}
 