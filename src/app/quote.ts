export class Quote {
    public showAuthor:boolean;public showDownVote:boolean;public showUpVote:boolean;
    constructor(public id:number,public name:string, public author:string, public upvote:number, public downvote:number){
        this.showAuthor=false;this.showDownVote=true;this.showUpVote=true
    }
}
