package com.lesterhan.techdebt

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TechDebtWallApplication

fun main(args: Array<String>) {
	runApplication<TechDebtWallApplication>(*args)
}
