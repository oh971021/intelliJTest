<%@ page language="java" contentType="text/html; charset=euc-kr" %>
<%@ include file="../dbconnect/dbconnect.jsp" %>
<%
	Statement stmt = null;
	ResultSet rs   = null;

	try {
		stmt = con.createStatement();	
		
		/** ���� ����  **/
	  	StringBuffer sql = new StringBuffer();												
	  	sql.append("select sabun, name, birth from test.test_insa" ); 
	  	rs = stmt.executeQuery(sql.toString());	
		
	  	pdata.addDataSet(makeDataSet(rs,"Ds"));	
	
		/** ErrorCode, ErrorMsg ó���ϱ� **/
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");
	} catch (Exception e) {
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg", e.getMessage());
		e.printStackTrace();
	} finally {
		/** Database Close**/
		if(rs   != null){try{rs.close();  }catch(Exception e){SQLException se;}}
		if(stmt != null){try{stmt.close();}catch(Exception e){SQLException se;}}
		if(con  != null){try{con.close(); }catch(Exception e){SQLException se;}}
	}

	/** XML output ��ü(PlatformResponse) ����� **/
	HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
	res.setData(pdata);
	res.sendData();
%>