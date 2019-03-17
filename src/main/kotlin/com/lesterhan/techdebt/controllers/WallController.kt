package com.lesterhan.techdebt.controllers

import com.lesterhan.techdebt.entities.*
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class WallController {

    var theWall =
            Wall(
            UUID.randomUUID(), "",
            arrayListOf(
                    Brick("Refactor wall controller",
                            "Wall controller is outta control",
                            Classification.REFACTORING,
                            32,
                            72),
                    Brick("Use Kotlin instead of Java 6",
                            "Srsly just rewrite the whole thing",
                            Classification.TOOLING,
                            88,
                            23)
            ))


    @GetMapping("/wall/{wallId}")
    fun getWall(@PathVariable wallId: String): Wall {
        theWall.projectName = """NoiceGenerator $wallId """
        return theWall
    }
}