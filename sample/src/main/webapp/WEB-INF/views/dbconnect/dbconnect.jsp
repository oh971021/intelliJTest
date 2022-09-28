<%@ page contentType="text/html; charset=euc-kr" %>
<%@ page import="java.sql.*"%>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.data.DataSet"%>
<%
	/** Nexacro �⺻��ü(PlatformData) �����ϱ� **/
	PlatformData pdata = new PlatformData();

	String char_set = "UTF-8";
	/*********************************************************
	 * 1. In, Out Service API �ʱ�ȭ
	 *********************************************************/
	PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, char_set);
	platformRequest.receiveData();
	PlatformData  inPD  = platformRequest.getData();

	VariableList  inVl  = inPD.getVariableList();
	DataSetList   inDl  = inPD.getDataSetList();

	VariableList  outVl = new VariableList();
	DataSetList   outDl = new DataSetList();
	DataSet		  outDs = new DataSet(char_set);

	PlatformData  outPD = platformRequest.getData();

	PlatformData resData    = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	/*********************************************************
	 * 1. ���� Database Server ����
	 *********************************************************/
	Connection con = null;

	String url="jdbc:tibero:thin:@localhost:8629:tbtest";
	Class.forName("com.tmax.tibero.jdbc.TbDriver");
	con = DriverManager.getConnection(url,"sys","1234");
%>

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