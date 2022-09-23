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
            obj = new Button("Button00","40","34","250","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","46","123","532","306",null,null,null,null,null,null,this);
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
        	getJsonToDataset(this.transaction("select", "svc::test", "", "Ds=test", "", "fn_callbakc", true, 3, false), Ds, 3);
        }

        this.fn_callback = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0) this.alert(eMsg);
        	else this.alert("성공");

        	this.alert("뭐냐");
        }


        this.Button01_onclick = function(obj,e)
        {
        	var strJson;
        	this.objJSON.data = this.getDatasetToJson(this.Dataset00, this.rdoType.value);

        	strJson = JSON.stringify(this.objJSON, null, "\t");
        	this.TextArea00.set_value(strJson);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.objJSON = JSON.parse(this.TextArea00.value);

        	this.getJsonToDataset(this.objJSON.data, this.Dataset00, this.rdoType.value);

        	this.Grid00.createFormat();
        };

        this.getDatasetToJson = function(ds, type)
        {
        	var i, j;
        	var colcount;
        	var rowcount;

        	var temp = [];
        	colcount = ds.colcount;
        	rowcount = ds.rowcount;

        	if(type == 0)
        	{
        		for(i=0; i<rowcount; i++) {
        			temp[i] = [];
        			for(j=0; j<colcount; j++) {
        				temp[i][j] = ds.getColumn(i, j);
        			}
        		}
        	}
        	else if(type == 1)
        	{
        		temp[0] = [];
        		for(j=0; j<colcount; j++) {
        			temp[0][j] = ds.getColID(j);
        		}

        		for(i=0; i<rowcount; i++) {
        			temp[i+1] = [];
        			for(j=0; j<colcount; j++) {
        				temp[i+1][j] = ds.getColumn(i, j);
        			}
        		}
        	}
        	else if(type == 2)
        	{
        		temp = [];
        		for(i=0; i<rowcount; i++) {
        			temp[i] = {};
        			for(j=0; j<colcount; j++) {
        				temp[i][ds.getColID(j)] = ds.getColumn(i, j);
        			}
        		}
        	}

        	return temp;
        };

        this.getJsonToDataset = function(json, ds, type)
        {
        	var i, j;
        	var row, col;
        	var rowcount;
        	var colcount;

        	ds.clear();
        	ds.set_enableevent(false);
        	if(type == 0){
        		i=0;
        		for(col in json){
        			ds.addColumn("col" + i, "string");
        			i++;
        		}

        		for(row in json){
        			i = 0;
        			nRow = ds.addRow();
        			for(col in json[row]){
        				ds.setColumn(nRow, i, json[row][col]);
        				i++;
        			}
        		}
        	}
        	else if(type == 1){
        		rowcount = json.length;
        		colcount = json[0].length;

        		for(i=0; i<colcount; i++) {
        			ds.addColumn(json[0][i], "string");
        		}

        		for(i=1; i<rowcount; i++) {
        			nRow = ds.addRow();
        			trace(json[i][0])
        			for(j=0; j<colcount; j++) {
        				ds.setColumn(nRow, json[0][j], json[i][j]);
        			}
        		}
        	}
        	else if(type == 2){
        		for(col in json[0]){
        			ds.addColumn(col, "string");
        		}

        		for(row in json){
        			i = 0;
        			nRow = ds.addRow();
        			for(col in json[row]){
        				ds.setColumn(nRow, i, json[row][col]);
        				i++;
        			}
        		}
        	}
        	ds.set_enableevent(true);
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
