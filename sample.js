
import * as lib from "./index";
console.log(lib.m1.get42());
/*
This tree shakes properly, however:

import * as m1 from "./module1";
console.log(m1.get42());
*/
