package com.portfolio.controller;

import com.portfolio.model.Experience;
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
            "name", "Ruan Machado",
            "title", "Estudante de Engenharia da Computação",
            "bio", "Estudante de Engenharia da Computação com experiência sólida em " +
                   "desenvolvimento de software e infraestrutura de TI. Atuo com APIs REST " +
                   "utilizando Java, Spring Boot, C# e .NET, aplicando boas práticas de " +
                   "arquitetura, testes unitários e versionamento. Na infraestrutura, possuo " +
                   "experiência prática em administração de redes, Service Desk e Active Directory.",
            "university", "Universidade Veiga de Almeida (UVA)",
            "location", "Rio de Janeiro, Brasil",
            "github", "https://github.com/RuanMachadoSenra",
            "linkedin", "https://www.linkedin.com/in/ruan-machado-senra/",
            "email", "ruanmsenra@outlook.com"
        );
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return List.of(
            new Experience(
                "Estagiário de Automation",
                "TIM Brasil",
                "02/2026 — Atualmente",
                List.of(
                    "Desenvolvimento e manutenção de API com Java e Spring Boot",
                    "Implementação de regras de negócio, tratamento de exceções e arquitetura em camadas (controller, service, repository)",
                    "Testes unitários com JUnit e Mockito",
                    "Validação de endpoints com Postman",
                    "Versionamento com Git seguindo boas práticas de desenvolvimento",
                    "Suporte ao Portal de Automação da TIM e inserção de serviços no NSO"
                )
            ),
            new Experience(
                "Estagiário de Suporte e Infraestrutura",
                "CREMERJ",
                "07/2025 — 02/2026",
                List.of(
                    "Operação de Service Desk com registro e resolução de chamados técnicos",
                    "Suporte direto aos usuários (presencial e remoto)",
                    "Configuração de VPNs e suporte ao acesso remoto seguro",
                    "Instalação de cabos de rede e configuração de endereçamento IPv4 (DHCP e estático)",
                    "Manutenção preventiva e corretiva em hardware e software"
                )
            ),
            new Experience(
                "Estagiário de Redes e Infraestrutura",
                "Instituto Dara",
                "09/2024 — 06/2025",
                List.of(
                    "Diagnóstico e correção de falhas de rede e conectividade",
                    "Gerenciamento de contas de usuários e e-mail no Active Directory e Google Admin",
                    "Cotação e análise técnica de equipamentos de informática",
                    "Manutenção de hardware e software em notebooks e desktops",
                    "Documentação de procedimentos e melhoria de processos internos"
                )
            )
        );
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return List.of(
            new Project(
                "1",
                "Portfólio Pessoal",
                "Site de portfólio desenvolvido com Java e Spring Boot no back-end, servindo uma interface moderna com HTML, CSS e JavaScript puro. Design dark mode responsivo com animações e consumo de API REST.",
                List.of("Java", "Spring Boot", "HTML", "CSS", "JavaScript"),
                "https://github.com/RuanMachadoSenra/Portfolio",
                ""
            ),
            new Project(
                "2",
                "API REST com Spring Boot",
                "Desenvolvimento de API REST seguindo boas práticas de arquitetura em camadas (controller, service, repository), com tratamento de exceções, testes unitários com JUnit e Mockito e validação via Postman.",
                List.of("Java", "Spring Boot", "JUnit", "Mockito", "Postman"),
                "https://github.com/RuanMachadoSenra",
                ""
            ),
            new Project(
                "3",
                "Projeto em C# / .NET",
                "Aplicação desenvolvida com C# e .NET utilizando Entity Framework para acesso a dados e ASP.NET para exposição de endpoints, aplicando os princípios de clean architecture.",
                List.of("C#", ".NET", "ASP.NET", "Entity Framework", "SQL Server"),
                "https://github.com/RuanMachadoSenra",
                ""
            )
        );
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return List.of(
            new Skill("Linguagens", List.of("Java", "C#", "C", "SQL")),
            new Skill("Frameworks", List.of("Spring Boot", ".NET", "ASP.NET", "Entity Framework")),
            new Skill("Banco de Dados", List.of("MySQL", "SQL Server")),
            new Skill("Ferramentas", List.of("Git", "GitHub", "Postman", "Power Apps", "Linux")),
            new Skill("Redes & Infra", List.of("TCP/IP", "DHCP", "DNS", "Active Directory", "VPN", "NSO", "Winbox")),
            new Skill("Virtualização", List.of("VirtualBox", "Hyper-V", "Windows Server")),
            new Skill("Metodologias", List.of("Scrum", "Kanban", "JUnit", "Mockito")),
            new Skill("Idiomas", List.of("Português (Nativo)", "Inglês Avançado (TOEIC B1)"))
        );
    }
}
