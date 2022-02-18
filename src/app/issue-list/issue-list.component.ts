import {Component, OnInit} from '@angular/core';
import {Octokit} from "@octokit/core";

export interface Issue {
  url: string
  author: string
  title: string
  date: string
  login: string
  number: number
}

@Component({
  selector: 'app-apigit',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})

export class IssueListComponent {

  public issuesArray: Issue[] = []

  async ngOnInit(): Promise<void> {
    const octokit = new Octokit;
    const gitResp = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'angular',
      repo: 'angular'
    })

console.log(typeof gitResp.data);

    let issues: Issue[] = [];
    console.log (gitResp);
    gitResp.data.forEach(function (value, key) {
      let login = '';
      if (value.user != null && value.user.login != null){
        login = value.user.login
      }
      const issueObject = {
        url: value.url,
        author: value.author_association,
        title: value.title,
        date: value.created_at,
        login: login,
        number: value.number
      }
      
      issues.push(issueObject)
    });

    this.issuesArray = issues
  }

}
