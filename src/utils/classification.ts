export const gradeClassification = (finalMark: number, programme: string): string => {
 

    if(programme === "MA" || programme === 'PGDip' || programme === 'PhD') {
        if(finalMark >= 70 && finalMark<= 100) {
            return "Distinction";
        } else if(finalMark >= 60 && finalMark<= 69) {
            return "Merit";
        } else if(finalMark >= 50 && finalMark<= 59) {
            return "General Pass";
        } else if(finalMark >= 40 && finalMark<= 49) {
            return "Condoned Fail";
        } else if(finalMark >= 0 && finalMark <= 39) {
            return "Fail";
        }
        
        
    } else if(programme === "BA") {

        if(finalMark >= 70 && finalMark<= 100) {
            return "First Class";
        } else if(finalMark >= 60 && finalMark<= 69) {
            return "Upper Second Class";
        } else if(finalMark >= 50 && finalMark<= 59) {
            return "Lower Second Class";
        } else if(finalMark >= 40 && finalMark<= 49) {
            return "Pass";
        } else if(finalMark >= 0 && finalMark <= 39) {
            return "Fail";
        }
    }
}