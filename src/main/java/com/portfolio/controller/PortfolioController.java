package com.portfolio.controller;

import com.portfolio.model.Project;
import com.portfolio.model.Skill;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/about")
    public Map<String, String> getAbout() {
        return Map.of(
            "name", "Seu Nome",
            "title", "Estudante de Engenharia da Computação",
            "bio", "Apaixonado por tecnologia e resolução de problemas. " +
                   "Atualmente no curso de Engenharia da Computação, " +
                   "focado em desenvolvimento de software, algoritmos e sistemas.",
            "university", "Universidade",
            "location", "Brasil",
            "github", "https://github.com/seuusuario",
            "linkedin", "https://linkedin.com/in/seuperfil",
            "email", "seuemail@email.com"
        );
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return List.of(
            new Project(
                "1",
                "Projeto 1",
                "Descrição do projeto. Adicione aqui o que esse projeto faz e quais tecnologias foram usadas.",
                List.of("Java", "Spring Boot", "MySQL"),
                "https://github.com/seuusuario/projeto1",
                ""
            ),
            new Project(
                "2",
                "Projeto 2",
                "Descrição do projeto. Adicione aqui o que esse projeto faz e quais problemas ele resolve.",
                List.of("Python", "Flask", "PostgreSQL"),
                "https://github.com/seuusuario/projeto2",
                "https://demo.projeto2.com"
            ),
            new Project(
                "3",
                "Projeto 3",
                "Descrição do projeto. Conte sobre os desafios enfrentados e as soluções encontradas.",
                List.of("C", "Algoritmos", "Estruturas de Dados"),
                "https://github.com/seuusuario/projeto3",
                ""
            )
        );
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return List.of(
            new Skill("Linguagens", List.of("Java", "Python", "C", "JavaScript", "SQL")),
            new Skill("Frameworks & Libs", List.of("Spring Boot", "Flask", "React")),
            new Skill("Ferramentas", List.of("Git", "GitHub", "Linux", "Docker", "Maven")),
            new Skill("Banco de Dados", List.of("MySQL", "PostgreSQL", "SQLite"))
        );
    }
}
