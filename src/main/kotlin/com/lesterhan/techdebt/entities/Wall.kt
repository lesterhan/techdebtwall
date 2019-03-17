package com.lesterhan.techdebt.entities

import java.util.*

data class Wall (
        val wallId: UUID,
        var projectName: String,
        var bricks: List<Brick>
)

// TODO: support for Preferences, Project link