<%@ page contentType="text/html;charset=euc-kr"  %>
<%@ page import="java.io.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.*" %>
<%@ page import="com.tobesoft.platform.*" %>
<%@ page import="com.tobesoft.platform.data.*" %>
<%@ page import="com.tmax.tibero.TbTypes" %>
<%@ page import="com.tmax.tibero.jdbc.TbDriver" %>

<%
	String char_set 	= "euc-kr";
	
	PlatformRequest 	pReq 		= new PlatformRequest(request, char_set);
	pReq.receiveData();

	VariableList 	inVl 		= pReq.getVariableList();
	DatasetList  	inDl 		= pReq.getDatasetList();

	PlatformResponse 	pRes 	= new PlatformResponse(response, PlatformRequest.XML, char_set);

	VariableList 	outVl 	= new VariableList();
	DatasetList  	outDl 	= new DatasetList();
	Dataset		    outDs   = new Dataset(char_set);

	String url="jdbc:tibero:thin:@localhost:8629:tbtest";

	Connection conn	= null;
	ResultSet rs = null;

	// conn = connection.getConnection("dseruncjtb");
	conn = DriverManager.getConnection(url, "sys", "1234");

%>
