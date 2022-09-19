package com.example.sample.web;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class Controller {

    @GetMapping("/")
    public String getHome() { return "index"; }

    @GetMapping("/nexacro")
    public String getNexacro() { return "jsptest"; }
}
