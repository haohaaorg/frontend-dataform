export const creditDefaultValue = (select: string): number => {
   
    
    
     if(select === "Coursework Essay") {
         return 60;
     } else if(select === "Presentation") {
         return 20;
     } else if(select === "Regular Essay") {
         return 10;
     } else if(select === "Class Homework") {
         return 10;
     }
    
}
 