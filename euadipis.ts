type FetchUsersReturnType = ReturnType<typeof fetchUsers> extends Promise<infer T> ? T : never;
