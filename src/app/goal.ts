export class Goal {
  public showstatus:boolean;

  constructor(public id:number, public name:string,  public status: string, public completeDate:Date){
  this.showstatus=false

}
}
