<%@ page pageEncoding='euc-kr' %> 
<%@ include file = "dbconnect/Tdbconnect.jsp" %>
<%                                     
   Statement       stmt    = null;

   try{
      String sql = "";

      sql  = " select BIRTH, NAME, SABUN from TEST.TEST_INSA";

      stmt   = conn.createStatement();
      rs     = stmt.executeQuery(sql);

             outDs.addColumn("BIRTH",         ColumnInfo.CY_COLINFO_STRING, (short)256);
             outDs.addColumn("NAME",         ColumnInfo.CY_COLINFO_STRING, (short)256);
             outDs.addColumn("SABUN",         ColumnInfo.CY_COLINFO_STRING, (short)256);

      while (rs.next()){
             int row = outDs.appendRow();
             outDs.setColumn(row, "BIRTH",          (String)rs.getString ("BIRTH"));
             outDs.setColumn(row, "NAME",           (String)rs.getString ("NAME"));
             outDs.setColumn(row, "SABUN",          (String)rs.getString ("SABUN"));
      }

      if(outDs!=null ){
         outDl.addDataset("Ds", outDs);   
      }

           outVl.addStr("ErrorCode"  , "0");
           outVl.addStr("ErrorMsg"       , "SUCC");
           outVl.addStr("returnStr"  , "SUCC");

  } catch (SQLException se)   {
           // error handling
           outVl.addStr("ErrorCode"  , "-1");
           outVl.addStr("ErrorMsg"   , se.getMessage());
           outVl.addStr("returnStr"  , "FAILD");
  } finally {
           if (rs != null)     try { rs.close();       } catch (SQLException se) {}
           if (stmt != null)   try { stmt.close();     } catch (SQLException se) {}
           if (conn != null)   try { conn.close();     } catch (SQLException se) {}
  }
  
   new PlatformResponse(response, PlatformRequest.XML, char_set).sendData(outVl, outDl);


%>