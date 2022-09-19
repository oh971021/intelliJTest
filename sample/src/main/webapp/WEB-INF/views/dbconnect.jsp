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

	/**select �� ����**/
	ResultSetMetaData rsmd = rs.getMetaData();
	
	/** select�� �÷� ��**/
	int numberOfColumns = rsmd.getColumnCount();
	
	int    ColSize;
	
	for ( int j = 1 ; j <= numberOfColumns ; j++ )
	{
		String Colnm = rsmd.getColumnName(j);
		int    ColType = rsmd.getColumnType(j);  
		ColSize = rsmd.getColumnDisplaySize(j);
		
		/** select�� �÷��� type�� �°� ����Ÿ�� �÷��� ���� **/
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
		/** ����Ÿ�� row �߰� **/
		Row = ds.newRow();
		
		for ( i = 0 ; i < numberOfColumns ; i++ )
		{
			if ( ds.getColumn(i).getDataType() == DataTypes.DATE )
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getDate(ds.getColumn(i).getName()));  // ����Ÿ����
			}        
			else
			{
				ds.set(Row,ds.getColumn(i).getName(),rs.getString(ds.getColumn(i).getName()));  // ����Ÿ����
			}        
		}	 
	}
	return ds;
}
%>

<%
/** Nexacro �⺻��ü(PlatformData) �����ϱ� **/
PlatformData pdata = new PlatformData();

/*********************************************************
 * request�� ���� ������ parsing�Ͽ�
 * input variable list, input dataset list�� �����Ѵ�.
 * (Nexacro ���� ������ �����͸� parsing�Ѵ�.)
 *********************************************************/
PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, "UTF-8");
platformRequest.receiveData();
PlatformData inPD = platformRequest.getData();

VariableList    inVariableList  = inPD.getVariableList();
DataSetList     inDataSetList   = inPD.getDataSetList();

/** ErrorCode, ErrorMsg ����κ� **/
int nErrorCode = 0;
String strErrorMsg = "START";

/** Database ���� **/
	Connection con = null;
	Statement stmt = null;
	ResultSet rs   = null;

	try {
	// Database ����
	Class.forName("com.tmax.tibero.jdbc.data.DataTypeConverter");
	String url="jdbc:tibero:thin:@localhost:8629:tbtest";
	con = DriverManager.getConnection(url,"sys","1234");
	} catch (Exception e) {
		System.out.println("�������");
		System.out.println(e.getMessage());
	}
%>