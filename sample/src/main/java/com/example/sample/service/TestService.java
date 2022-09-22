package com.example.sample.service;

import com.example.sample.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TestService {

    @Autowired
    TestMapper testMapper;

    // 원래 여기서 인터페이스로 해주고 구현체 하나 더 만들어야 함
    public List<Map<String, Object>> sysdate() throws Exception {
        return testMapper.sysdate();
    }
}
