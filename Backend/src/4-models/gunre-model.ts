class GunreModel{
public gunreId:number
public gunreName:string

constructor(gunre:GunreModel){
    this.gunreId=gunre.gunreId
    this.gunreName=gunre.gunreName
}
}
export default GunreModel