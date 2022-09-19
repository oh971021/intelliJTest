(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Ds", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","22","36","174","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","26","91","413","338",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SABUN\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTH\"/></Band><Band id=\"body\"><Cell text=\"bind:SABUN\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:BIRTH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.transaction("select", "svc::nexacro", "", "Ds=Ds", "", "callback");
        };

        this.callback = function(svcId, eCode, eMsg) {
        	if(eCode != 0) {
        		this.alert(eMsg);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
