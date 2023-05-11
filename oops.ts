interface ex{
    m1:number
    m2:number
    m3:number
    dis():void
}
let obj=<ex>
{
    m1:98,
    m2:99,
    m3:100,
    dis():void{
         var sum=this.m1+this.m2+this.m3;
         var res=sum/3;

         console.log(res);
    }
}
obj.dis();