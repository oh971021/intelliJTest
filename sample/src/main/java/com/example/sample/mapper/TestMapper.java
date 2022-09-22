package com.example.sample.mapper;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/** Mybatis랑 연결 */
@Repository
public interface TestMapper {
    public List<Map<String, Object>> sysdate() throws Exception;
}
