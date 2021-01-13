class User {
  constructor(private name: string) {
  }

  hello() {
    console.log(`Hello, ${this.name!}`);
  }
}

namespace User {
  export function createUser(name: string): User {
    return new User(name);
  }
}

const user = User.createUser('typescript');
user.hello();


