package com.portfolio.model;

import java.util.List;

public record Project(
    String id,
    String title,
    String description,
    List<String> tags,
    String githubUrl,
    String demoUrl
) {}
