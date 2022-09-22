package com.example.sample.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.stereotype.Controller
public class Controller {

    /** 페이지 이동 컨트롤러_구JSP 방식의 잔재를 해결하기 위해.. */
    @RequestMapping(value = "/nexacro", method = RequestMethod.GET)
    public String getNexacro() { System.out.println("여긴?"); return "hr/jsptest"; }

    /** 마이플랫폼 JSP .. */
    @RequestMapping(value = "/name", method = RequestMethod.GET)
    public String getMiplatform() { return "name"; }
}