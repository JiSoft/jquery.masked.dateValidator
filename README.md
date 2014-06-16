jquery.masked.dateValidator
===========================

This plugin adds date validation for usage [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput) .
It can also be used separately for others form's fields.

Usage
-----
1. Require jquery and jquery.maskedinput
```
<script type="text/javascript" src="//code.jquery.com/jquery-2.1.0.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.maskedinput/1.3.1/jquery.maskedinput.min.js"></script>
```

2. Add date field to your form
```
<input type="text" id="date">
<div id="error-msg"></div>
```

3. Add masks to maskedinput
```
$.mask.definitions['y'] = '[12]';
$.mask.definitions['m'] = '[01]';
$.mask.definitions['d'] = '[0-3]';
$("#date").mask("d9.m9.y999"/*, { placeholder: " " }*/);
```

4. Configure date validation
```
// date as d.m.Y
$.fn.dateValidator({
 dateSelector:'#date',
 msgSelector:'#error-msg',
 dateSeparator:'.',
 dateFormat:'dmy'
});
```

```
// date as m/d/y
$.fn.dateValidator({
 dateSelector:'#date',
 msgSelector:'#error-msg',
 dateSeparator:'/',
 dateFormat:'mdy'
});
```

[View demo](http://jsfiddle.net/jisoft/755K8/2/)
