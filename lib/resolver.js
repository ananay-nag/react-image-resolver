export class Resolver {
  constructor(ctx) {
    this.ctx = ctx;
  }
  getCTX() {
    return this.ctx;
  }
  getBasePath() {
    return this.ctx.basePath.path;
  }
  imageName(name) {
    return this.getBasePath() + this.getValues(this.getCTX(), name);
  }
  getValues(obj, key) {
    var objects = "";
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == "object") {
        objects = objects.concat(this.getValues(obj[i], key));
      } else if (i == key) {
        objects = obj[i];
      }
    }
    return objects;
  }
}
