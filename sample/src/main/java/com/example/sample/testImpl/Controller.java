package com.example.sample.testImpl;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.stereotype.Controller
public class Controller {

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String getHome() { return "index"; }

    @RequestMapping(value = "/nexacro", method = RequestMethod.GET)
    public String getNexacro() { return "hr/jsptest"; }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String getMiplatform() { return "name"; }

}