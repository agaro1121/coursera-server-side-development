#README

###week1/rectangle-1.js
```bash
> var rect = require('./rectangle')
undefined
> rect
{ perimeter: [Function], area: [Function] }
> rect.perimeter(4,5)
18
> rect.area(4,5)
20
```

###week1/rectangle-2.js
```bash
> var rect0 = require('./rectangle1')
> rect0()
{ perimeter: [Function], area: [Function] }
> rect0().perimeter(4,5)
18
> rect0().area(4,5)
20
```

###week1/simplerec.js
```bash
> node Simplerec
Solving for rectangle with length 2 and width = 4
The area of the rectangle is 8
The perimeter of the rectangle is 12
Solving for rectangle with length 3 and width = 5
The area of the rectangle is 15
The perimeter of the rectangle is 16
Solving for rectangle with length -3 and width = 5
Rectangle dimensions should be greater than zero
```