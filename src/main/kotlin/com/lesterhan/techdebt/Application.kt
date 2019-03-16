package com.lesterhan.techdebt

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TechdebtApplication

fun main(args: Array<String>) {
	runApplication<TechdebtApplication>(*args)
}
