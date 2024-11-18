let v_btn = document.querySelectorAll('input')[1];
v_btn.addEventListener('click',function(){


    let file = document.querySelector('#attach').files; //fileList
    let rst_div = document.querySelector('#result');
    let info_div = document.querySelector('#info');
    //text or image 대상 접근 
    console.log("선택파일의 타입 >> ",file[0].type);
    
   
    //String객체 메소드 split(구분자) -> 구분자로 문자열을 나누어 배열로 반환
   
    let type = file[0].type.split("/")[0];

    console.log("선택파일의 타입 >> ",type);

    let reader = new FileReader();

        //첨부파일의 type으로 분기처리 
        if(type == 'image'){
            //FileReader객체의 readAsDataURL()
            reader.readAsDataURL(file[0]);
            reader.onload = function(){

                //요소를 노드로 생성했기 때문에 >> append() or appendChild()
                let v_img = document.createElement('img');
                v_img.src = reader.result; //img resource제공 >> img src속성 값
                v_img.alt = file[0].name; //파일명을 대체텍스트로 사용
                
                rst_div.appendChild(v_img);
               
                info_div.innerHTML = f_info(file[0]);
                //    "파일 명 : " + file[0].name + "<br>"
                // +  `확장자 :  ${file[0].type} <br>`
                // +  `파일 크기 : ${file[0].size} <br>`
                // +  `마지막 수정일자 : ${file[0].lastModifiedDate.toLocaleString()}`;
            }     
        }
        else if(type == "text") {
            //FileReader객체의 readAsText()
            reader.readAsText(file[0]);
            reader.onload = function() {
                rst_div.innerText = reader.result; //text정보 

            }
            info_div.innerHTML = f_info(file[0]);
                //    "파일 명 : " + file[0].name + "<br>"
                // +  `확장자 :  ${file[0].type} <br>`
                // +  `파일 크기 : ${file[0].size} <br>`
                // +  `마지막 수정일자 : ${file[0].lastModifiedDate.toLocaleString()}`;
        }else {
            //다른 타입의 정보는 처리 안함 
            rst_div.innerText = "지원하지 않는 확장자 입니다...";
            info_div.innerHTML = f_info(file[0]);
        }
    
});

let f_info = function (p_file){
 return   "파일 명 : " + p_file.name + "<br>"
        +  `확장자 :  ${p_file.type} <br>`
        +  `파일 크기 : ${p_file.size} <br>`
        +  `마지막 수정일자 : ${p_file.lastModifiedDate.toLocaleString()}`;
}