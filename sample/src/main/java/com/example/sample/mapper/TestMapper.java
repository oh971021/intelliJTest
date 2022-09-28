package com.example.sample.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/** Mybatis랑 연결 */
@Repository
public interface TestMapper {
    List<Map<String, Object>> sysdate() throws Exception;
}
