package com.example.sample.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    // view Resolver 경로 설정
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.jsp("/webapp/WEB-INF/views/", ".jsp");
    }

    // 루트 "/" 접속 시 index 페이지로 포워딩
    @Override
    @Order(Ordered.HIGHEST_PRECEDENCE + 1)
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
    }

    // Web Resource 경로 설정
    @Override
    @Order(Ordered.HIGHEST_PRECEDENCE + 2)
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/_resource_/**").addResourceLocations("classpath:/testProject/_resource_/");
        registry.addResourceHandler("/FrameBase/**").addResourceLocations("classpath:/testProject/FrameBase/");
        registry.addResourceHandler("/nexacrolib/**").addResourceLocations("classpath:/testProject/nexacrolib/");
        registry.addResourceHandler("/*.json").addResourceLocations("classpath:/testProject/");
        registry.addResourceHandler("/*.html").addResourceLocations("classpath:/testProject/");
        registry.addResourceHandler("/*.js").addResourceLocations("classpath:/testProject/");
        registry.addResourceHandler("/*.jsp").addResourceLocations("classpath:/WEB-INF/views/");
    }
}
