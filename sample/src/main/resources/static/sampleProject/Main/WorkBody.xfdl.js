(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkBody");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stt_bg_middle01","0","0",null,"230","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#f3f4f5");
            this.addChild(obj.name, obj);

            obj = new Static("stt_bg_middle02","0","230",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("stc_copyright","0",null,null,"60","0","0","1250",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4,0px none,0px none");
            obj.set_color("#46463d");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_first","175","0","1250",null,null,"60","1250",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("Main::WorkBody01.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,680,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Main::WorkBody01.xfdl");
        };
        
        // User Script
        this.registerScript("WorkBody.xfdl", function() {

        this.WorkBody_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	var dt = new Date();
        	var yy = Eco.date.getMaskFormatString(dt, "yyyy");

        	this.stc_copyright.set_text("COPYRIGHT 1981-"+yy+" CHUNJAE EDUCATION INC. ALL RIGHTS RESERVED.");

        };

        this.WorkBody_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.WorkBody_ontimer = function(obj,e)
        {
        	var l;
        	if (obj.getOffsetWidth()  < 1250)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 1250) / 2;
        	}

        	this.div_first.move(l,0,1250,null,null,60);
        	this.killTimer(0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WorkBody_onload,this);
            this.addEventHandler("onsize",this.WorkBody_onsize,this);
            this.addEventHandler("ontimer",this.WorkBody_ontimer,this);
        };
        this.loadIncludeScript("WorkBody.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
