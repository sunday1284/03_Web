<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	/* 자바코드 작성 공간 */ 
/* 	request.getParameter("키 정보")
 */	String name = request.getParameter("erum");
	String alas = request.getParameter("alias");
	String hdn = request.getParameter("hddn");
%>

<%-- <%=변수명  %> --%>

이름은 >> <%=name %> , 별명은 >> <%=alas %>(숨겨진 값 >><%=hdn %>)