<%@ page language="java" contentType="text/html; charset=euc-kr" %>
<%@ include file="dbconnect.jsp" %>
<%
	try {	
		stmt = con.createStatement();
		
		/** 쿼리 실행  **/
	  	StringBuffer sql = new StringBuffer();												
	  	sql.append("select sabun, name, birth from test.test_insa" ); 
	  	rs = stmt.executeQuery(sql.toString());	
		
	  	pdata.addDataSet(makeDataSet(rs,"Ds"));	
	
		/** ErrorCode, ErrorMsg 처리하기 **/
		VariableList varList = pdata.getVariableList();
		varList.add("ErrorCode", 0);
		varList.add("ErrorMsg", "SUCC");
	} catch (Exception e) {
		/** ErrorCode, ErrorMsg 처리하기 **/
		VariableList varList = pdata.getVariableList();
		varList.add("ErrorCode", -1);
		varList.add("ErrorMsg", e.getMessage());
	} finally {
		/** Database Close**/
		if(rs   != null){	try{rs.close();}  catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(stmt != null){	try{stmt.close();}catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
		if(con  != null){	try{con.close();} catch(Exception e){nErrorCode = -1; strErrorMsg = e.getMessage();}}
	}

	out.clear();

	/** XML output 객체(PlatformResponse) 만들기 **/
	HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	res.setData(pdata);
	res.sendData();
%>