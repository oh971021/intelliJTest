package com.example.sample.testPackage.Mapper;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/** Mybatis랑 연결 */
@Resource
public interface TestMapper {
    public List<Map<String, Object>> getData() throws Exception;
}
