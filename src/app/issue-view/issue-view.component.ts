import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/core';
import { ActivatedRoute } from '@angular/router';

export interface View {
  url: string
  author: string
  title: string
  date: string
  login: string
  number: number
}

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.css']
})
export class IssueViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public viewArray: View[] = [];

  public issueNum: string = '';
  async ngOnInit(): Promise<void> {
    this.route.queryParams
      .subscribe(async params => {
        this.issueNum = params['num']
        console.log(this.issueNum);

      }

      );
    const octokit = new Octokit;
    const gitView = await octokit.request('GET /repos/{owner}/{repo}/issues/{number}', {
      owner: 'angular',
      repo: 'angular',
      number: this.issueNum,
    })
    console.log(gitView);
    let getView: View[] = [];
    console.log (gitView);
    // gitView.data.forEach(function (value, key) {
    //   let login = '';
    //   if (value.user != null && value.user.login != null){
    //     login = value.user.login
    //   }
    //   const ViewObject = {
    //     url: value.url,
    //     author: value.author_association,
    //     title: value.title,
    //     date: value.created_at,
    //     login: login,
    //     number: value.number
    //   }
      
    //   getView.push(ViewObject)
    // });

    this.viewArray = getView;
  }
}
