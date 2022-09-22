(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkMain_top");
            this.set_titletext("New Form");
            this.set_font("normal 11pt/normal \"Arial\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","1250","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu","0","40","1250",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#3cbcb8");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","0","15","150","50",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("0");
            obj.set_image("url(\'Img::logo.png\')");
            obj.set_stretch("none");
            obj.set_background("#3cbcb8");
            obj.set_border("0px none");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_hr","240","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("1");
            obj.set_text("인사관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_ac","370","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("2");
            obj.set_text("회계관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_sd","500","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("3");
            obj.set_text("영업관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_mk","630","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("4");
            obj.set_text("제작관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_ed","760","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("5");
            obj.set_text("편집관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_bi","890","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("6");
            obj.set_text("경영정보관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_et","1020","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("7");
            obj.set_text("기타업무관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_gw","1150","25","100","30",null,null,null,null,null,null,this.div_menu.form);
            obj.set_taborder("8");
            obj.set_text("전자결재");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            this.div_menu.addChild(obj.name, obj);

            obj = new Button("btn_bookmark","8","0","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("즐겨찾기 설정");
            obj.set_background("#10aea9");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_email","1118","10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'Img::ico_auth.png\')");
            obj.set_stretch("none");
            obj.set_background("#10aea9");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_personal","1168","10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'Img::ico_myinfo.png\')");
            obj.set_stretch("none");
            obj.set_background("#10aea9");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logout","1218","10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'Img::ico_logout.png\')");
            obj.set_stretch("none");
            obj.set_background("#10aea9");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,120,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("WorkMain_top.xfdl","Lib::Lib_main.xjs");
        this.registerScript("WorkMain_top.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_main.xjs"); /*include "Lib::Lib_main.xjs"*/;

        this.div_menu_btn_hr_onclick = function(obj,e)
        {
        	var btn_nm;

        	btn_nm = obj.id;

        	if (btn_nm != "btn_ac") {this.div_menu.form.btn_ac.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_bi") {this.div_menu.form.btn_bi.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_ed") {this.div_menu.form.btn_ed.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_et") {this.div_menu.form.btn_et.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_gw") {this.div_menu.form.btn_gw.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_hr") {this.div_menu.form.btn_hr.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_pd") {this.div_menu.form.btn_mk.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_sd") {this.div_menu.form.btn_sd.set_cssclass("btn_normal");}

        	obj.set_cssclass("btn_line");

        	btn_nm = btn_nm.replace("btn_","");
        	if ( nexacro.getApplication().gv_selectMenu != btn_nm)
        	{
        		if (system.navigatorname != 'nexacro')
        		{
        			MyHistory.setLocationHash(btn_nm, btn_nm); // 해쉬값에 메뉴 설정
        		}
        		this.lfn_OpenMenu(btn_nm);
        	}

        };

        this.div_menu_img_logo_onclick = function(obj,e)
        {
        	nexacro.getApplication().gv_selectMenu = "";
        	this.lfn_WorkMain_open();
        };

        this.img_logout_onclick = function(obj,e)
        {
        	this.lfn_reLogin();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_menu.form.img_logo.addEventHandler("onclick",this.div_menu_img_logo_onclick,this);
            this.div_menu.form.btn_hr.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.div_menu.form.btn_ac.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.div_menu.form.btn_sd.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.div_menu.form.btn_mk.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.div_menu.form.btn_ed.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.div_menu.form.btn_bi.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.div_menu.form.btn_et.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.div_menu.form.btn_gw.addEventHandler("onclick",this.div_menu_btn_hr_onclick,this);
            this.img_logout.addEventHandler("onclick",this.img_logout_onclick,this);
        };
        this.loadIncludeScript("WorkMain_top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
