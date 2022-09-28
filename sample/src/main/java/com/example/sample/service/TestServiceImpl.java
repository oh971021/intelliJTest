package com.example.sample.service;

import com.example.sample.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("TestService")
public class TestServiceImpl implements TestService {

    private final TestMapper testMapper;

    @Autowired
    public TestServiceImpl(TestMapper testMapper) {
        this.testMapper = testMapper;
    };

    @Override
    public List<Map<String, Object>> sysdate() throws Exception {
        return testMapper.sysdate();
    }
}
