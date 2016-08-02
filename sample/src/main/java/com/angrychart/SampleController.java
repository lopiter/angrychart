package com.angrychart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SampleController {
    @RequestMapping("/sample")
    public String sample(){
        return "sample";
    }
}
