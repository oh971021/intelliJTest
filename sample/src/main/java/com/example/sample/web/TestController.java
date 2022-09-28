package com.example.sample.web;

import com.example.sample.service.TestServiceImpl;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

/** REST API 통신을 위한 컨트롤러 */
@Controller
public class TestController {

//    @Autowired
//    SqlSession sqlSession;

    private final TestServiceImpl testService;

    @Autowired
    public TestController(TestServiceImpl testService) {
        this.testService = testService;
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public NexacroResult root(HttpServletRequest req, HttpServletResponse rep) throws Exception {

        List<Map<String,Object>> test = testService.sysdate();

        NexacroResult result = new NexacroResult();
        result.addDataSet("output", test);

        return result;
    }

//    @RequestMapping(value = "/junbal", method = RequestMethod.GET)
//    public NexacroResult juntest(HttpServletRequest req, HttpServletResponse rep) throws Exception {
//
//        List<Map<String,Object>> test = sqlSession.getMapper(TestMapper.class).sysdate();
//
//        NexacroResult result = new NexacroResult();
//        result.addDataSet("output", test);
//
//        return result;
//    }
}
