package com.example.sample.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;

@Configuration
@MapperScan(basePackages = "com.example.sample.testPackage.Mapper")
public class DataAccessConfig {
    //SqlSessionFactory 설정
    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        Resource configLocation = new PathMatchingResourcePatternResolver().getResource("classpath:mybatis-config.xml");
        sessionFactory.setConfigLocation(configLocation);
        return sessionFactory.getObject();
    }
}
