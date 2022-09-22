(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MainFrame");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_main","0","0",null,null,"0","0","1250",null,null,null,this);
            obj.set_taborder("0");
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

        };
        
        // User Script
        this.registerScript("MainFrame.xfdl", function() {

        this.Popup_Login = function()
        {
        	var objNew = new ChildFrame();
        		objNew.init("Login",0,0,237,440,null,null,"Main::Login.xfdl");
        		this.addChild("Login",objNew);
        		//objNew.init("Login","absolute",null,null,null,null,null,null,"Main::Login.xfdl",this);
        		objNew.set_openalign("center middle");
        		//objNew.style.set_overlaycolor("#f3f4f5ff");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("Login",this.getOwnerFrame(),{},this,this.fn_Callback);
        }

        this.MainFrame_onload = function(obj,e)
        {
        	this.Popup_Login();
        };

        this.fn_Callback = function(strID, vArgu)
        {
        	this.removeChild("Login");
        	if (vArgu == -1)
        	{
        		nexacro.getApplication().exit();
        	}
        	else
        	{
        		this.div_main.set_url("Main::WorkMain.xfdl");
        	}

        	this.removeChild("Login");


        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MainFrame_onload,this);
        };
        this.loadIncludeScript("MainFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
