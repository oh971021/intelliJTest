package com.example.sample.testPackage.Controller;

import com.example.sample.testPackage.Service.TestService;
import com.google.gson.Gson;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.*;

/** REST API 통신을 위한 컨트롤러 */
@RestController
public class TestController {

    @Autowired
    private TestService testService;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public NexacroResult getDataTest() throws Exception {
        List<Map<String, Object>> test = testService.getData();

//        String json = new Gson().toJson(test);
//
//        for (Object t: test) {
//            System.out.println(t);
//        }

        NexacroResult result = new NexacroResult();
        result.addDataSet("test", test);

        return result;
    }
}

