package com.example.sample.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

@Configuration
public class WebAppConfig implements WebMvcConfigurer {

    // view Resolver 경로 설정
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.jsp("/WEB-INF/views", ".jsp");
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
        registry.addResourceHandler("/_resource_/**").addResourceLocations("classpath:/static/sampleProject/_resource_/");
        registry.addResourceHandler("/FrameBase/**").addResourceLocations("classpath:/static/sampleProject/FrameBase/");
        registry.addResourceHandler("/nexacro17lib/**").addResourceLocations("classpath:/static/sampleProject/nexacro17lib/");
        registry.addResourceHandler("/*.json").addResourceLocations("classpath:/static/sampleProject/");
        registry.addResourceHandler("/*.html").addResourceLocations("classpath:/static/sampleProject/");
        registry.addResourceHandler("/*.js").addResourceLocations("classpath:/static/sampleProject/");
        registry.addResourceHandler("/*.jsp").addResourceLocations("classpath:/../wepapp/WEB-INF/views/");
    }

    // 메세지 소스 생성
    @Bean
    public ReloadableResourceBundleMessageSource messageSource() {
        ReloadableResourceBundleMessageSource source = new ReloadableResourceBundleMessageSource();

        //메세지 프로퍼티 팔일의 위치와 이름을 지정
        source.setBasename("classpath:/messages/message");
        //기본 인코딩을 지정한다.
        source.setDefaultEncoding("UTF-8");
        //프로퍼티 파일의 변경을 감지할 시간 간격을 지정한다.
        source.setCacheSeconds(60);
        //없는 메세지일 경우 예외를 발생시키는 대신 코드를 기본 메세지로 한다.
        source.setUseCodeAsDefaultMessage(true);
        return source;
    }

    // 변경된 언어 정보를 기억할 로케일 리졸버 생성
    // 여기서는 세션에 저장하는 방식 사용
    @Bean
    public SessionLocaleResolver localeResolver() {
        return new SessionLocaleResolver();
    }
    //
//    // 언어 변경을 위한 인터셉터를 생성
    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor() {
        LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();
        interceptor.setParamName("lang");
        return interceptor;
    }

    // 인터셉터 등록
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(localeChangeInterceptor());
    }

}