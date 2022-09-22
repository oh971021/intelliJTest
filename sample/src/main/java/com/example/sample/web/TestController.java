package com.example.sample.web;

import com.example.sample.service.TestService;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.google.gson.Gson;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/** REST API 통신을 위한 컨트롤러 */
@RestController
public class TestController {

    @Autowired
    private TestService testService;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public NexacroResult root() throws Exception {
        List<Map<String, Object>> test = testService.sysdate();

        String json = new Gson().toJson(test);
        System.out.println(json);

        for (Object t: test) {
            System.out.println(t);
        }

        NexacroResult result = new NexacroResult();
        result.addDataSet("test", test);

        System.out.println(result.getDataSets());

        return result;
    }
}
