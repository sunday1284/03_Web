<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	/* 자바코드 작성 공간 */ 
/* 	request.getParameter("키 정보")
 */	String name = request.getParameter("erum");
	String alas = request.getParameter("alias");
	String hdn = request.getParameter("hddn");
	String gender = request.getParameter("gd");
	String[] hbs = request.getParameterValues("hobby");
	String hobbys = ""; //취미정보를 담을 변수 선언
	
	for(int i=0; i<hbs.length; i++){
		hobbys += hbs[i];
	}
	
%>

<%-- <%=변수명  %> --%>

이름은 >> <%=name %> , 별명은 >> <%=alas %> <br>
(숨겨진 값 >><%=hdn %>) <br>
성별은 >> <%= gender%> <br>
취미는 >> <%= hobbys%>