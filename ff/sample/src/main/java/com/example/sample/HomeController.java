package com.example.sample;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String GoHome() {
        return "index";
    }

    @GetMapping("/nexacro")
    public String GoNexacro() {
        System.out.println("넥사가자"); return "hr/jsptest";
    }

}
