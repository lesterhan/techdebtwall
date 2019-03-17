package com.lesterhan.techdebt.entities

data class Brick (
        var title: String,
        var description: String,
        var classification: Classification,
        var value: Int,
        var difficulty: Int
)