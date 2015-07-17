## Color Matrix Filter for fabric.js
- use a custom Color Matrix as a fabric.js filter

## What is this?
This is a filter extension to enable you to use a Color Matrix (might be known from Adobe's Flash platform and AS3) as a filter in fabric.js.
It uses the standard way filters are implemented in fabric.js and should work hassle free. If it doesn't feel free to report
any issues.
You can find a basic article describing the Color Matrix Filter and how it works here:
http://www.webwasp.co.uk/tutorials/219/Color_Matrix_Filter.php

## Filter Example taken from:
- http://phoboslab.org/log/2013/11/fast-image-filters-with-webgl

## How to use
- add colorMatrixFilter.js to your fabric.js project and reference it in your html
- add a new Color Matrix filter to the filter array of your fabric.js image
```
img.filters.push(new fabric.Image.filters.ColorMatrix({
    matrix: []
}));
```
- pass the matrix as an argument
```
img.filters.push(new fabric.Image.filters.ColorMatrix({
    matrix: [
    0.6279345635605994,0.3202183420819367,-0.03965408211312453,0,9.651285835294123,
    0.02578397704808868,0.6441188644374771,0.03259127616149294,0,7.462829176470591,
    0.0466055556782719,-0.0851232987247891,0.5241648018700465,0,5.159190588235296,
    0,0,0,1,0
    ]
}));
```
## Example
- feel free to check the example implementation in this repository

