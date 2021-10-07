export const PrivilegesDetect = (data: any): string[] => {
     let Results: string[] = [];
     
    if(data?.create) {
      Results.push("create")
    }
    if(data?.read) {
        Results.push("read")
    }
      if(data?.update) {
        Results.push("update")
    }
    if(data?.delete) {
        Results.push("delete")
    }

    return Results;
}