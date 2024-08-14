export class Helpers {
  public static clone(object: NonNullable<unknown>) {  //Creates a deep-copy of the object(shooterform which is a formgroup) passed into it and checks for null/0/'' values 
    if (!object) return null;
    return JSON.parse(JSON.stringify(object)); //Sends back the shooter object by parsing it
  }
}
