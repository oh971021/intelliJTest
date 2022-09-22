(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_selectMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"selectButton_Div_id\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"left\" type=\"STRING\" size=\"256\"/><Column id=\"top\" type=\"STRING\" size=\"256\"/><Column id=\"rigth\" type=\"STRING\" size=\"256\"/><Column id=\"height\" type=\"STRING\" size=\"256\"/><Column id=\"floor\" type=\"STRING\" size=\"256\"/><Column id=\"selectMenu_Div_id\" type=\"STRING\" size=\"256\"/><Column id=\"MN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"lastseq\" type=\"INT\" size=\"256\"/><Column id=\"BOOKMARK_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","10","10","270",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_LeftMenu");
            obj.set_url("Main::LeftMenu.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_client","290","80",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("원하시는 메뉴를 선택해 주시기 바랍니다.");
            obj.set_background("white");
            obj.set_borderRadius("50px 50px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("div_selectMenu","290","10",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Main::LeftMenu.xfdl");
        };
        
        // User Script
        this.addIncludeScript("WorkDetail.xfdl","Lib::Lib_main.xjs");
        this.addIncludeScript("WorkDetail.xfdl","Lib::Lib_service.xjs");
        this.registerScript("WorkDetail.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_main.xjs"); /*include "Lib::Lib_main.xjs"*/;
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var current_menu = "";

        this.WorkDetail_onload = function(obj,e)
        {
        	nexacro.getApplication().gv_Client = this;

        	/* 히스토리 처리 */
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		//if(system.navigatorname)
        		// History 기능 사용을 위해 초기화 (application 실행 시 한번만 호출)
        		// 첫번째 인자는 뒤로가기, 앞으로가기가 실행됬을때 호출될 함수
        		// 두번째 인자는 함수내에서 this 로 사용할 scope
        		if (system.navigatorname != 'nexacro')
        		{
        			MyHistory.init(this.onChangeHistory, this);
        		}

        	}
        };

        this.selectMenu = function(sRow)
        {
        	var seq, divMenu_id, lastseq;
        	var bLeft, bTop, bWidth, bHeight, bFloor, divWidth;
        	var cRow, i;

        	trace("sRow : " + sRow);
        	cRow = this.ds_selectMenu.findRow("MN_ID",nexacro.getApplication().gds_menu.getColumn(sRow, "MN_ID"));
        	nexacro.getApplication().gv_selectMenu = nexacro.getApplication().gds_menu.getColumn(sRow, "MN_ID");
        	if (cRow >= 0) // 현재 페이지가 열려 있을때
        	{
        		trace("기존에 페이지 열려있음");
        		divMenu_id = this.ds_selectMenu.getColumn(cRow,"selectMenu_Div_id");
        		lastseq = nexacro.toNumber( this.ds_selectMenu.getMax("lastseq") ) + 1;
        		this.ds_selectMenu.setColumn(cRow,"lastseq",lastseq);
        		this.all[divMenu_id].bringToFront();
        		this.setButton_css();
        		return false;
        	}

        	if (this.ds_selectMenu.rowcount == 0)
        	{
        		seq = Eco.number.getMaskFormatString(1,"000");
        		bLeft = 0;
        		bTop = 0;
        		bWidth = 200;
        		bHeight = 35;
        		bFloor = 0;
        		lastseq = 1;
        	}
        	else
        	{
        		seq = Eco.number.getMaskFormatString( nexacro.toNumber( this.ds_selectMenu.getMax("seq") ) + 1,"000");
        		lastseq = nexacro.toNumber( this.ds_selectMenu.getMax("lastseq") ) + 1;
        		bFloor = nexacro.toNumber( this.ds_selectMenu.getColumn(this.ds_selectMenu.rowcount - 1,"floor") );
        		divWidth = this.div_selectMenu.getOffsetWidth();
        		if (nexacro.toNumber( this.ds_selectMenu.getColumn(this.ds_selectMenu.rowcount - 1,"left") ) + 400 > divWidth)
        		{
        			bFloor = bFloor + 1;
        			bLeft = 0;
        			bTop = 35 * bFloor;
        			bWidth = 200;
        			bHeight = 35;
        		}
        		else
        		{
        			bLeft = nexacro.toNumber( this.ds_selectMenu.getColumn(this.ds_selectMenu.rowcount - 1,"left") ) + 200;
        			bTop = 35 * bFloor;
        			bWidth = 200;
        			bHeight = 35;
        		}
        	}

        	var nRow = this.ds_selectMenu.addRow();
        	this.ds_selectMenu.setColumn(nRow,"selectButton_Div_id","selectButton_Div_id_"+seq);
        	this.ds_selectMenu.setColumn(nRow,"selectMenu_Div_id","selectMenu_Div_id_"+seq);
        	this.ds_selectMenu.setColumn(nRow,"seq",seq);
        	this.ds_selectMenu.setColumn(nRow,"left",bLeft);
        	this.ds_selectMenu.setColumn(nRow,"top",bTop);
        	this.ds_selectMenu.setColumn(nRow,"width",bWidth);
        	this.ds_selectMenu.setColumn(nRow,"height",bHeight);
        	this.ds_selectMenu.setColumn(nRow,"floor",bFloor);
        	this.ds_selectMenu.setColumn(nRow,"MN_ID",nexacro.getApplication().gds_menu.getColumn(sRow, "MN_ID"));
        	this.ds_selectMenu.setColumn(nRow,"lastseq",lastseq);
        	this.ds_selectMenu.setColumn(nRow,"BOOKMARK_GB",nexacro.getApplication().gds_menu.getColumn(sRow, "BOOKMARK_GB"));

        	var objDIV = new Div();
        	objDIV.init("selectButton_Div_id_"+seq,bLeft,bTop,bWidth,bHeight,null,null);
        	objDIV.set_borderRadius("5px 5px 0px 0px");
        	this.div_selectMenu.addChild("selectButton_Div_id_"+seq, objDIV);
        	objDIV.show();

        	var objButton = new Button();
        	objButton.init("selectMenu_button",0,0,null,null,40,0);
        	objButton.set_textAlign("left");
        	objButton.set_text(nexacro.getApplication().gds_menu.getColumn(sRow, "MN_NAME"));
        	objButton.set_padding("0px 0px 0px 10px");
        	objButton.set_font("normal bold 10pt/normal");
        	objButton.addEventHandler("onclick",this.selectMenuButton_onclick, this)
        	objButton.set_border("1px #0d9590 solid, 0px #0d9590 solid, 1px #0d9590 solid, 1px #0d9590 solid");
        	objDIV.addChild("menuButton", objButton);
        	objButton.show();

        	var objBMark = new Button();
        	objBMark.init("selectMenu_button_mark",null,0,20,null,20,0);
        	objBMark.set_text("");
        	if (this.ds_selectMenu.getColumn(nRow,"BOOKMARK_GB") == "1" )
        	{
        		objBMark.set_icon("Img::star_yellow.png");
        	}
        	else
        	{
        		objBMark.set_icon("Img::star_none.png");
        	}
        	objBMark.set_border("1px #0d9590 solid, 0px #0d9590 solid, 1px #0d9590 solid, 0px #0d9590 solid");
        	objBMark.addEventHandler("onclick",this.bMark_onclick, this);
        	objDIV.addChild("MarkButton", objBMark);
        	objBMark.show();

        	var objBClose = new Button();
        	objBClose.init("selectMenu_button_close",null,0,20,null,0,0);
        	objBClose.set_text("X");
        	objBClose.set_border("1px #0d9590 solid, 1px #0d9590 solid, 1px #0d9590 solid, 0px #0d9590 solid");
        	objBClose.addEventHandler("onclick",this.bClose_onclick, this);
        	objDIV.addChild("CloseButton", objBClose);
        	objBClose.show();

        	// 히스토리 처리 ( 뒤로가기, 앞으로가기 처리를 위해서 )
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		// hash를 변경하여 History 에 등록 (현재 hash 와 같을 경우 History 가 생기지 않는다.)
        		//var temp = nexacro.getApplication().gds_menu.getColumn(e.row, "MN_URL").split("::"); // hash 의 id는 URL 값
        		var hash = this.ds_selectMenu.getColumn(nRow,"selectMenu_Div_id");
        		var data = lastseq; // 탭 seq값
        		if (system.navigatorname != 'nexacro')
        		{
        			MyHistory.setLocationHash(hash, data);
        			trace("해쉬저장 : "+hash + " 데이터저장 : "+data);
        		}

        	}

        	var objMenuDiv = new Div();
        	objMenuDiv.init("selectMenu_Div_id_"+seq,290,35 * (bFloor + 1) + 10,null,null,10,10);
        	this.addChild("selectMenu_Div_id_"+seq,objMenuDiv);
        	objMenuDiv.set_url(nexacro.getApplication().gds_menu.getColumn(sRow, "MN_URL"));
        	objMenuDiv.set_background("white");
        	objMenuDiv.show();

        	this.div_selectMenu.set_height((bFloor + 2) * 20);
        	this.setButton_css();
        };

        this.setButton_css = function()
        {
        	var lastseq = this.ds_selectMenu.getMax("lastseq");
        	var nRow = this.ds_selectMenu.findRow("lastseq",lastseq);

        	for (i = 0; i <= this.ds_selectMenu.rowcount - 1; i++)
        	{
        		if (i != nRow)
        		{
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["menuButton"].set_cssclass("btn_noSelect");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["CloseButton"].set_cssclass("btn_noSelect");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["MarkButton"].set_cssclass("btn_noSelect");
        		}
        		else
        		{
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["menuButton"].set_cssclass("");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["CloseButton"].set_cssclass("");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["MarkButton"].set_cssclass("");
        		}

        	}
        }

        this.setHistory_css = function(hash)
        {
        	var nRow = this.ds_selectMenu.findRow("selectMenu_Div_id",hash);

        	for (i = 0; i <= this.ds_selectMenu.rowcount - 1; i++)
        	{
        		if (i != nRow)
        		{
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["menuButton"].set_cssclass("btn_noSelect");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["CloseButton"].set_cssclass("btn_noSelect");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["MarkButton"].set_cssclass("btn_noSelect");
        		}
        		else
        		{
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["menuButton"].set_cssclass("");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["CloseButton"].set_cssclass("");
        			this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(i, "selectButton_Div_id")].form.all["MarkButton"].set_cssclass("");
        		}
        	}
        }


        this.selectMenu_reSize = function()
        {
        	var i;
        	var bLeft, bTop, bWidth, bHeight, bFloor, divWidth;
        	for (i = 0; i <= this.div_selectMenu.form.components.length - 1; i++)
        	{
        		if (i == 0)
        		{
        			bLeft = 0;
        			bTop = 0;
        			bWidth = 200;
        			bHeight = 35;
        			bFloor = 0;
        		}
        		else
        		{
        			divWidth = this.div_selectMenu.getOffsetWidth();
        			if (nexacro.toNumber( this.ds_selectMenu.getColumn(i - 1,"left") ) + 400 > divWidth)
        			{
        				bFloor = bFloor + 1;
        				bLeft = 0;
        				bTop = 35 * bFloor;
        				bWidth = 200;
        				bHeight = 35;
        			}
        			else
        			{
        				bLeft = nexacro.toNumber( this.ds_selectMenu.getColumn(i - 1,"left") ) + 200;
        				bTop = 35 * bFloor;
        				bWidth = 200;
        				bHeight = 35;
        			}
        		}

        		this.div_selectMenu.form.components[i].set_left(bLeft);
        		this.div_selectMenu.form.components[i].set_top(bTop);
        		this.div_selectMenu.form.components[i].set_width(bWidth);
        		this.div_selectMenu.form.components[i].set_height(bHeight);

        		this.ds_selectMenu.setColumn(i,"left",bLeft);
        		this.ds_selectMenu.setColumn(i,"top",bTop);
        		this.ds_selectMenu.setColumn(i,"width",bWidth);
        		this.ds_selectMenu.setColumn(i,"height",bHeight);
        		this.ds_selectMenu.setColumn(i,"floor",bFloor);
        	}

        	this.div_selectMenu.set_height((bFloor + 1) * 35);

        	for (i = 0; i <= this.ds_selectMenu.rowcount - 1; i++)
        	{
        		this.all[this.ds_selectMenu.getColumn(i,"selectMenu_Div_id")].set_top((bFloor + 1) * 35 + 10);
        	}
        };

        this.bMark_onclick = function(obj,e)
        {
        	var bMark_id, mn_id;

        	bMark_id = obj.parent.parent.id;
        	var nRow = this.ds_selectMenu.findRow("selectButton_Div_id",bMark_id);

        	mn_id = this.ds_selectMenu.getColumn(nRow,"MN_ID");

        	if (this.ds_selectMenu.getColumn(nRow,"BOOKMARK_GB") == "0")
        	{
        		var str_url = "JSP/main/setData_bookmark.jsp";
        		var in_ds = "";
        		var out_ds = "";
        		var str_arg = "sabun='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") + "' mn_id='" + mn_id +"'";
        		this.gfn_TransactionP(mn_id, str_url, in_ds, out_ds, str_arg, "Callback_bookmark", true, "P", false, this);
        	}
        	else
        	{
        		var str_url = "JSP/main/setData_bookmark_del.jsp";
        		var in_ds = "";
        		var out_ds = "";
        		var str_arg = "sabun='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") + "' mn_id='" + mn_id +"'";
        		this.gfn_TransactionP(mn_id, str_url, in_ds, out_ds, str_arg, "Callback_bookmark_del", true, "P", false, this);
        		//this.gfn_TransactionP(mn_id, str_url, in_ds, out_ds, str_arg, "Callback_bookmark", true, "P", false, this);
        	}
        }

        this.Callback_bookmark = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode  != -99)
        		{
        			this.alert(ErrorMsg);
        			return false;
        		}
        	}

        	var nRow = this.ds_selectMenu.findRow("MN_ID",Trid);
        	this.ds_selectMenu.setColumn(nRow,"BOOKMARK_GB","1");
        	var sRow = nexacro.getApplication().gds_menu.findRow("MN_ID",Trid);
        	nexacro.getApplication().gds_menu.setColumn(sRow,"BOOKMARK_GB","1");

        	this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(nRow, "selectButton_Div_id")].form.all["MarkButton"].set_icon("Img::star_yellow.png");
        	this.setButton_css();
        }

        this.Callback_bookmark_del = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode  != -99)
        		{
        			this.alert(ErrorMsg);
        			return false;
        		}
        	}

        	var nRow = this.ds_selectMenu.findRow("MN_ID",Trid);
        	this.ds_selectMenu.setColumn(nRow,"BOOKMARK_GB","0");
        	var sRow = nexacro.getApplication().gds_menu.findRow("MN_ID",Trid);
        	nexacro.getApplication().gds_menu.setColumn(sRow,"BOOKMARK_GB","0");

        	this.div_selectMenu.form.all[this.ds_selectMenu.getColumn(nRow, "selectButton_Div_id")].form.all["MarkButton"].set_icon("Img::star_none.png");
        	this.setButton_css();
        }

        this.bClose_onclick = function(obj,e)
        {
        	var bClose_id;

        	bClose_id = obj.parent.parent.id;

        	var nRow = this.ds_selectMenu.findRow("selectButton_Div_id",bClose_id);
        	trace(this.ds_selectMenu.getColumn(nRow,"selectMenu_Div_id"));
        	this.removeChild(this.ds_selectMenu.getColumn(nRow,"selectMenu_Div_id"));
        	this.div_selectMenu.removeChild(bClose_id);
        	this.ds_selectMenu.deleteRow(nRow);
        	this.selectMenu_reSize();

        	if (this.ds_selectMenu.rowcount > 0)
        	{
        		var lastseq = this.ds_selectMenu.getMax("lastseq");
        		var sRow = this.ds_selectMenu.findRow("lastseq",lastseq);
        		this.all[this.ds_selectMenu.getColumn(sRow,"selectMenu_Div_id")].bringToFront();
        		nexacro.getApplication().gv_selectMenu = this.ds_selectMenu.getColumn(sRow,"MN_ID");
        	}

        	this.setButton_css();
        };

        this.selectMenuButton_onclick = function(obj,e)
        {
        	var selectButton_Div_id;
        	selectButton_Div_id = obj.parent.parent.id;
        	var nRow = this.ds_selectMenu.findRow("selectButton_Div_id",selectButton_Div_id);
        	var lastseq = nexacro.toNumber( this.ds_selectMenu.getMax("lastseq") ) + 1;
        	this.ds_selectMenu.setColumn(nRow,"lastseq",lastseq);
        	nexacro.getApplication().gv_selectMenu = this.ds_selectMenu.getColumn(nRow,"MN_ID");
        	this.all[ this.ds_selectMenu.getColumn(nRow,"selectMenu_Div_id") ].bringToFront();
        	this.setButton_css();

        	// 히스토리 처리 ( 뒤로가기, 앞으로가기 처리를 위해서 )
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		var hash = this.ds_selectMenu.getColumn(nRow,"selectMenu_Div_id");
        		var data = lastseq; // 탭 seq값
        		if (system.navigatorname != 'nexacro')
        		{
        			MyHistory.setLocationHash(hash, data);
        			trace("해쉬저장 : "+hash + " 데이터저장 : "+data);
        		}

        	}
        }

        this.div_selectMenu_onsize = function(obj,e)
        {
        	this.selectMenu_reSize();
        };


        // 브라우저의 뒤로가기, 앞으로가기 실행시 호출됨
        this.onChangeHistory = function(hash, data)
        {
        	if ( hash == "" || hash == current_menu )
        	{
        		// 초기화면
        		nexacro.getApplication().gv_Client.div_client.set_url("");
        	}
        	else if ( hash == "login")
        	{
        		nexacro.getApplication().gv_selectMenu = "";
        		this.lfn_reLogin();
        	}
        	else
        	{
        		trace("브라우저이벤트 해쉬저장 : "+hash + "브라우저이벤트 데이터저장 : "+data);
        		// hash id 를 확인하여 필요한 처리를 진행한다.
        		/*
        		var temp = hash.split(":");
        		var type = temp[0];
        		var menuId = temp[1];
        		*/
        		this.goMenu(hash, data);
        	}
        }
        this.goMenu = function(hash, data)
        {
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		// hash를 변경하여 History 에 등록 (현재 hash 와 같을 경우 History 가 생기지 않는다.)
        		if (system.navigatorname != 'nexacro')
        		{
        			MyHistory.setLocationHash(hash, data);
        		}
        	}

        	var nRow = this.ds_selectMenu.findRow("selectButton_Div_id",hash);
        	lastseq = nexacro.toNumber( this.ds_selectMenu.getMax("lastseq") ) + 1;
        	this.ds_selectMenu.setColumn(nRow,"lastseq",lastseq);
        	this.all[hash].bringToFront();
        	this.setHistory_css(hash);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WorkDetail_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_selectMenu.addEventHandler("onsize",this.div_selectMenu_onsize,this);
        };
        this.loadIncludeScript("WorkDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
