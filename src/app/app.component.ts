import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "muffeez-portfolio";

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle(
      "Ahmed El-gendy | Software Engineer | Full Stack .NET Web Developer"
    );
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          "Frontend, .NET Stack Developer, Software Engineer, Software Developer",
      },
      {
        name: "description",
        content:
          "As a Software Engineer with expertise in both Front-end and Back-end stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in C#, JavaScript allows me to effectively work with front-end technologies such as Angular, as well as back-end technologies such as .NET, Web API, MVC.",
      },
    ]);

    AOS.init();
  }
}
