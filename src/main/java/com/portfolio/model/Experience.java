package com.portfolio.model;

import java.util.List;

public record Experience(
    String role,
    String company,
    String period,
    List<String> highlights
) {}
