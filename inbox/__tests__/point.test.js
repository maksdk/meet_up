//@ts-check
import { makePoint, getX, getY } from "../point";

test("point1", () => {
   const point = makePoint(0, 0);
   const x = getX(point);
   const y = getY(point);

   expect(x).toEqual(0);
   expect(y).toEqual(0);
});

test("point2", () => {
   const point = makePoint(5, -5);
   const x = getX(point);
   const y = getY(point);

   expect(x).toEqual(5);
   expect(y).toEqual(-5);
});