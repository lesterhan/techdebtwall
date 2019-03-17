package com.lesterhan.techdebt.entities

enum class Classification(val type: String) {
    REFACTORING("Refactoring"),
    TOOLING("Tooling"),
    DEFECT("Defect"),
    OTHER("Other")
}
