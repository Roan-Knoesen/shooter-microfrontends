export class Helpers {
  public static clone(object: NonNullable<unknown>) {
    if (!object) return null;
    return JSON.parse(JSON.stringify(object));
  }
}
