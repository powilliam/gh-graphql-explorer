interface WithCount {
  totalCount: number;
}

export class User {
  id!: string;
  name!: string;
  bio!: string;
  avatarUrl!: string;
  followers!: WithCount;
  following!: WithCount;
  repositories!: WithCount;
}
