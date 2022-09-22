(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkMain");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","120",null,null,"0","0","1250",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_work");
            obj.set_url("Main::WorkBody.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu","175","0","1250","120",null,null,"1250",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("Main::WorkMain_top.xfdl");
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
            this._addPreloadList("fdl","Main::WorkBody.xfdl");
            this._addPreloadList("fdl","Main::WorkMain_top.xfdl");
        };
        
        // User Script
        this.registerScript("WorkMain.xfdl", function() {

        this.WorkMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.WorkMain_ontimer = function(obj,e)
        {
        	var l;
        	if (obj.getOffsetWidth()  < 1250)
        	{
        		l = 0;
        		this.div_work.move(0,120,1250,null,null,0);
        	}
        	else
        	{
        		l =  (obj.getOffsetWidth() - 1250) / 2;
        		this.div_work.move(0,120,null,null,0,0);
        	}
        	this.div_menu.move(l,0,1250,120,null,null);
        	this.killTimer(0);
        };

        this.WorkMain_onload = function(obj,e)
        {
        	var ap = nexacro.getApplication();
        	ap.gv_WorkFrame = this;
        	this.setTimer(0,1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.WorkMain_onsize,this);
            this.addEventHandler("ontimer",this.WorkMain_ontimer,this);
            this.addEventHandler("onload",this.WorkMain_onload,this);
        };
        this.loadIncludeScript("WorkMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
