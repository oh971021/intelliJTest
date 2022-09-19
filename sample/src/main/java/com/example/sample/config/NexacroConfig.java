package com.example.sample.config;

import com.nexacro.uiadapter17.spring.core.context.ApplicationContextProvider;
import com.nexacro.uiadapter17.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;
import com.nexacro.uiadapter17.spring.core.resolve.NexacroMethodArgumentResolver;
import com.nexacro.uiadapter17.spring.core.resolve.NexacroRequestMappingHandlerAdapter;
import com.nexacro.uiadapter17.spring.core.view.NexacroFileView;
import com.nexacro.uiadapter17.spring.core.view.NexacroView;
import com.nexacro17.xapi.tx.PlatformType;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcRegistrations;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import java.util.List;

@Configuration
public class NexacroConfig extends WebMvcConfig implements WebMvcRegistrations {

    @Bean
    @Lazy(false)
    public ApplicationContextProvider applicationContextProvider() {
        return new ApplicationContextProvider();
    }

    @Override
    public RequestMappingHandlerAdapter getRequestMappingHandlerAdapter() {
        return new NexacroRequestMappingHandlerAdapter();
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        NexacroMethodArgumentResolver nexacroResolver = new NexacroMethodArgumentResolver();
        resolvers.add(nexacroResolver);
        super.addArgumentResolvers(resolvers);
    }

    @Override
    public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {

        NexacroHandlerMethodReturnValueHandler returnValueHandler = new NexacroHandlerMethodReturnValueHandler();

        NexacroFileView nexacroFileView = new NexacroFileView();
        NexacroView nexacroView = new NexacroView();
        nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
        nexacroView.setDefaultCharset("UTF-8");

        returnValueHandler.setView(nexacroView);
        returnValueHandler.setFileView(nexacroFileView);

        handlers.add(returnValueHandler);

        super.addReturnValueHandlers(handlers);
    }
}