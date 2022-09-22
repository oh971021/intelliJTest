(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkBody01");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","1250","230",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#f3f4f5");
            this.addChild(obj.name, obj);

            obj = new Div("div_q01","0","30","290","170",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","32","17","78","81",null,null,null,null,null,null,this.div_q01.form);
            obj.set_taborder("0");
            obj.set_image("url(\'Img::img_01.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","189","133","70","13",null,null,null,null,null,null,this.div_q01.form);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::btn_more.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q01.addChild(obj.name, obj);

            obj = new Static("Static00","31","97",null,"29","167",null,null,null,null,null,this.div_q01.form);
            obj.set_taborder("2");
            obj.set_text("미결문서");
            obj.set_color("#444444");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.div_q01.addChild(obj.name, obj);

            obj = new Static("stt_count","31","125",null,"29","167",null,null,null,null,null,this.div_q01.form);
            obj.set_taborder("3");
            obj.set_text("문서 3건");
            obj.set_color("#444444");
            obj.set_font("normal 11pt/normal \"Arial\"");
            this.div_q01.addChild(obj.name, obj);

            obj = new Div("div_q02","320","30","290","170",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("white");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","32","17","78","81",null,null,null,null,null,null,this.div_q02.form);
            obj.set_taborder("0");
            obj.set_image("url(\'Img::img_02.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","189","133","70","13",null,null,null,null,null,null,this.div_q02.form);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::btn_more.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q02.addChild(obj.name, obj);

            obj = new Static("Static00","31","97",null,"29","167",null,null,null,null,null,this.div_q02.form);
            obj.set_taborder("2");
            obj.set_text("진행문서");
            obj.set_color("#444444");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.div_q02.addChild(obj.name, obj);

            obj = new Static("stt_count","31","125",null,"29","167",null,null,null,null,null,this.div_q02.form);
            obj.set_taborder("3");
            obj.set_text("문서 3건");
            obj.set_color("#444444");
            obj.set_font("normal 11pt/normal \"Arial\"");
            this.div_q02.addChild(obj.name, obj);

            obj = new Div("div_q03","640","30","290","170",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","32","17","78","81",null,null,null,null,null,null,this.div_q03.form);
            obj.set_taborder("0");
            obj.set_image("url(\'Img::img_07.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","189","133","70","13",null,null,null,null,null,null,this.div_q03.form);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::btn_more.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q03.addChild(obj.name, obj);

            obj = new Static("Static00","31","97",null,"29","167",null,null,null,null,null,this.div_q03.form);
            obj.set_taborder("2");
            obj.set_text("공유문서");
            obj.set_color("#444444");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.div_q03.addChild(obj.name, obj);

            obj = new Static("stt_count","31","125",null,"29","167",null,null,null,null,null,this.div_q03.form);
            obj.set_taborder("3");
            obj.set_text("문서 3건");
            obj.set_color("#444444");
            obj.set_font("normal 11pt/normal \"Arial\"");
            this.div_q03.addChild(obj.name, obj);

            obj = new Div("div_q04","960","30","290","170",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","32","17","78","81",null,null,null,null,null,null,this.div_q04.form);
            obj.set_taborder("0");
            obj.set_image("url(\'Img::img_06.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q04.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","189","133","70","13",null,null,null,null,null,null,this.div_q04.form);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::btn_more.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            this.div_q04.addChild(obj.name, obj);

            obj = new Static("Static00","31","97",null,"29","167",null,null,null,null,null,this.div_q04.form);
            obj.set_taborder("2");
            obj.set_text("완결문서");
            obj.set_color("#444444");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.div_q04.addChild(obj.name, obj);

            obj = new Static("stt_count","31","125",null,"29","167",null,null,null,null,null,this.div_q04.form);
            obj.set_taborder("3");
            obj.set_text("문서 3건");
            obj.set_color("#444444");
            obj.set_font("normal 11pt/normal \"Arial\"");
            this.div_q04.addChild(obj.name, obj);

            obj = new Static("Static01","0","230",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","260","400",null,null,"100",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none,0px none,1px solid #bdc6ca");
            obj.set_background("");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"367\"/><Column size=\"30\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell autosizecol=\"none\" text=\"즐겨찾기 메뉴\" font=\"normal 900 15px/normal &quot;Gulim&quot;\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" cssclass=\"Grid_head\" border=\"1px none #cacaca,1px none #cacaca,2px solid #f3f4f5\" background=\"white\" color=\"#10aea9\"/><Cell col=\"1\" text=\"+\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" font=\"normal 900 15px/normal &quot;Gulim&quot;\" border=\"1px none #cacaca,1px none #cacaca,2px solid #f3f4f5\" color=\"#10aea9\" background=\"white\"/></Band><Band id=\"body\"><Cell colspan=\"2\" border=\"0px solid #dbdee2\" font=\"normal 15px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","425","260","400",null,null,"100",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none,0px none,1px solid #bdc6ca");
            obj.set_background("");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"367\"/><Column size=\"30\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell border=\"1px none #cacaca,1px none #cacaca,2px solid #f3f4f5\" autosizecol=\"none\" text=\"미결문서\" font=\"normal 900 15px/normal &quot;Gulim&quot;\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" color=\"#10aea9\" background=\"white\"/><Cell col=\"1\" border=\"1px none #cacaca,1px none #cacaca,2px solid #f3f4f5\" text=\"+\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" font=\"normal 900 15px/normal &quot;Gulim&quot;\" color=\"#10aea9\" background=\"white\"/></Band><Band id=\"body\"><Cell colspan=\"2\" border=\"0px solid #dbdee2\" font=\"normal 15px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","850","259","400",null,null,"30",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("monthonly");
            obj.set_padding("0px");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","5",null,"60","65",null,"30",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("0px none");
            obj.set_image("url(\'Img::ba_01.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","275",null,"60","65",null,"30",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("0px none");
            obj.set_image("url(\'Img::ba_02.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00","545",null,"60","65",null,"30",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("0px none");
            obj.set_image("url(\'Img::ba_03.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","79",null,"150","29",null,"62",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("직원 도서몰 >");
            obj.set_font("normal 900 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","349",null,"150","29",null,"62",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("직원 검색 >");
            obj.set_font("normal 900 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","619",null,"150","29",null,"62",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사진 자료실 >");
            obj.set_font("normal 900 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","79",null,"180","25",null,"40",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사내 직원용 도서주문");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","349",null,"180","25",null,"40",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("천재교육 직원 검색");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","619",null,"180","25",null,"40",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사진, 영상 자료 모음");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,620,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("WorkBody01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
