<%@page import="com.nexacro17.xapi.data.DataSet"%>
<%@ page contentType="text/html; charset=euc-kr" %>
<%@ page language="java"%>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="java.sql.*"%>
<%! 
public DataSet makeDataSet(ResultSet rs,String strDataSet)  throws ServletException, Exception
{
	DataSet ds = new DataSet(strDataSet, strDataSet);

	/**select 한 정보**/
	ResultSetMetaData rsmd = rs.getMetaData();
	
	/** select한 컬럼 수**/
	int numberOfColumns = rsmd.getColumnCount();
	
	int    ColSize;
	
	for ( int j = 1 ; j <= numberOfColumns ; j++ )
	{
		String Colnm = rsmd.getColumnName(j);
		int    ColType = rsmd.getColumnType(j);  
		ColSize = rsmd.getColumnDisplaySize(j);
		
		/** select한 컬럼의 type에 맞게 데이타셋 컬럼을 생성 **/
		if ( ColType == Types.NUMERIC || ColType == Types.DOUBLE )
		{
			ds.addColumn(Colnm, DataTypes.DECIMAL,ColSize);
		}
		else if ( ColType == Types.VARCHAR )
		{
			ds.addColumn(Colnm, DataTypes.STRING,ColSize);
		}
		else if ( ColType == Types.DATE )
		{
			ds.addColumn(Colnm, DataTypes.DATE,ColSize);
		}
		else if ( ColType == Types.INTEGER )
		{
			ds.addColumn(Colnm, DataTypes.INT,ColSize);
		}
		else
		{
			ds.addColumn(Colnm, DataTypes.STRING,ColSize);
		}
	}

	int Row = 0;
	int i;

	while(rs.next())
	{
		/** 데이타셋 row 추가 **/
		Row = ds.newRow();
		
		for ( i = 0 ; i < numberOfColumns ; i++ )
		{
			if ( ds.getColumn(i).getDataType() == DataTypes.DATE )
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getDate(ds.getColumn(i).getName()));  // 데이타저장
			}        
			else
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getString(ds.getColumn(i).getName()));  // 데이타저장
			}        
		}	 
	}
	return ds;
}
%>

<%
/** Nexacro 기본객체(PlatformData) 생성하기 **/
PlatformData pdata = new PlatformData();

/*********************************************************
 * request로 들어온 내용을 parsing하여
 * input variable list, input dataset list에 저장한다.
 * (Nexacro 에서 보내온 데이터를 parsing한다.)
 *********************************************************/
PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, "UTF-8");
platformRequest.receiveData();
PlatformData inPD = platformRequest.getData();

VariableList    inVariableList  = inPD.getVariableList();
DataSetList     inDataSetList   = inPD.getDataSetList();

/** ErrorCode, ErrorMsg 선언부분 **/
int nErrorCode = 0;
String strErrorMsg = "START";

/** Database 연결 **/
	Connection con = null;
	Statement stmt = null;
	ResultSet rs   = null;

	try {
	// Database 연결
	Class.forName("com.tmax.tibero.jdbc.data.DataTypeConverter");
	String url="jdbc:tibero:thin:@localhost:8629:tbtest";
	con = DriverManager.getConnection(url,"sys","1234");
	} catch (Exception e) {
		System.out.println("연결실패");
		System.out.println(e.getMessage());
	}
%>