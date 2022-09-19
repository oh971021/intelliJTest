package com.example.sample.web;

import com.example.sample.model.Member;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;


@RequestMapping("/member")
@RestController
public class MemberController {
    @GetMapping("/test")
    public Member memberTest(){
        return new Member(0L, "Wickies", 20, "제주", new Date());
    }

    @GetMapping("/test2")
    public ArrayList<Member> memberTest2(){
        return new ArrayList(Arrays.asList(
                new Member(1L, "Wickies", 20, "제주", new Date()),
                new Member(2L, "마동석", 40, "전주", new Date()),
                new Member(3L, "조승우", 22, "무주", new Date()),
                new Member(4L, "박보영", 32, "진주", new Date()),
                new Member(5L, "엄복동", 17, "상주", new Date())
        ));
    }
}
