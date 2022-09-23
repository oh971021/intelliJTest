package com.example.sample.testPackage.Service;

import com.example.sample.testPackage.Mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TestServiceImpl implements TestService {

    @Autowired
    TestMapper testMapper;

    @Override
    public List<Map<String, Object>> getData() throws Exception {
        return testMapper.getData();
    }
}

