//@ts-check

export const makePoint = (x, y) => (f) => f(x, y); 
export const getX = (point) => point(x => x); 
export const getY = (point) => point((x, y) => y); 


