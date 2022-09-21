package com.example.sample.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.stereotype.Controller
public class Controller {

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String getHome() { return "index"; }

    @RequestMapping(value = "/nexacro", method = RequestMethod.GET)
    public String getNexacro() { System.out.println("여긴?"); return "hr/jsptest"; }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String setNexacro() { return "name"; }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String getMiplatform() { return "name"; }
}