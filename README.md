# Color Matrix Filter for fabric.js
Implementation of a Color Matrix transformation as a fabric.js filter for your fabric.js project.

# Deprecation Note
Happy to announce that this now an official part of the fabric.js libary and will be included in the
next release (and already is included in the current master). See: https://github.com/kangax/fabric.js/pull/3139.
Therefore this repository will be deprecated and all functionality will be provided by the core of fabric.js itself.
Functionality hasn't changed so your code will still work as expected.

# Install
```
bower install fabric-color-matrix-filter --save
```

# Live Demo Page
http://pixolith.github.io/fabricjs-color-matrix-filter/example/index.html

## What is this?
This is a filter extension to enable you to use a Color Matrix (might be known from Adobes Flash platform and AS3) as a filter in fabric.js.
It uses the standard way filters are implemented in fabric.js and should work hassle free. If it doesn't, feel free to report
any issues here.
You can find a basic article describing the Color Matrix Filter and how it works here:
http://www.webwasp.co.uk/tutorials/219/Color_Matrix_Filter.php

## Why would you want this?
Well, i have been struggling to build any real filters with fabric.js as you would want a nice filter for your image and what not.
Changing only Brightness and other basics really did not too much for me since i didn't know how to combine them for a proper
effect. With this filter you will be able to modify the images colors directly by using a matrix as described in the section above.
I find this quite handy since there is not much combining involved but instead changing colors directly.

## How to use
Add colorMatrixFilter.js (or its minified version) to your fabric.js project and reference in your html:
```
<script defer src="../path-to/fabric.min.js"></script>
<script defer src="../path-to/colorMatrixFilter.js"></script>
```

Add a new Color Matrix filter to the filter array of your fabric.js image
```
img.filters.push(new fabric.Image.filters.ColorMatrix({
    matrix: []
}));
```

Pass the matrix as an argument like this:
```
img.filters.push(new fabric.Image.filters.ColorMatrix({
    matrix: [
    0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123,
    0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591,
    0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296,
    0, 0, 0, 1, 0
    ]
}));
```

You can easily just replace one filter by splicing the filter array of your image like this:
```
img.filters.splice(0, 1, new fabric.Image.filters.ColorMatrix({
    matrix: [
    1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502,
    -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203,
    -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946,
    0, 0, 0, 1, 0
    ]
}));
```

Or clear your filters efficiently by setting the filter array length to 0:
```
img.filters.length = 0;
```

And don't forgot to call the apply function and render after manipulating the filters:
```
img.applyFilters(canvas.renderAll.bind(canvas));
```

You should be good to go! If not maybe the example implementation below can help you.

## Example Implementation
There is an example implementation in the example folder, just open the index file and check out how the filters look like
when applied to the test image. The source for that is also provided in the example.js.

## Filter Examples have been taken from:
http://phoboslab.org/log/2013/11/fast-image-filters-with-webgl

## Usage
Licensed under the MIT license.
