# Laravel Query Builder

[![NPM version](https://img.shields.io/npm/v/laravel-query-builder.svg?style=flat-square)](https://www.npmjs.com/package/laravel-query-builder)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/limitless-kode/laravel-query-builder/publish.yml)
![GitHub issues](https://img.shields.io/github/issues/limitless-kode/laravel-query-builder)
![GitHub top language](https://img.shields.io/github/languages/top/limitless-kode/laravel-query-builder)
![npm](https://img.shields.io/npm/dw/laravel-query-builder)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![LICENSE](https://img.shields.io/github/license/limitless-kode/laravel-query-builder.svg)](LICENSE)

The `spatie` function is a URL builder that allows you to easily add query parameters to a URL using a fluent interface. 
The function returns an object with three methods: `filter`, `include`, and `sort`.

## Usage
To use the `spatie` function, simply call it with a URL string as its argument. The returned object has three 
methods: `filter`, `include`, and `sort`, which can be chained together to build the desired URL.

### Example
```javascript
const url = 'https://example.com';

const result = spatie(url)
  .filter('status', 'published')
  .include('author', 'categories')
  .sort('title', '-date')
  .build();

console.log(result); 
// Outputs: https://example.com?filter[status]=published&include=author,categories&sort=title,-date
```

## Methods

### `filter(key: string, value: string)`

Adds a filter query parameter to the URL. The `key` argument is the name of the filter, and the `value` argument is the value of the filter.
If the URL already has query parameters, the filter is added with an ampersand (`&`) separator. Otherwise, the filter is added with a question mark (`?`) separator.

>Example:

```javascript
const url = 'https://example.com/posts';

const result = spatie(url)
  .filter('status', 'published')
  .build();

console.log(result); 
// Outputs: https://example.com/posts?filter[status]=published
```

<br/>
<br/>

### `include(...value: any)`
Adds an include query parameter to the URL. The `value` argument can be a string or an array of strings.

If the URL already has an include parameter, the new values are appended to the existing ones. Otherwise, a new include parameter is added.

>Example:

```javascript
const url = 'https://example.com/posts';

const result = spatie(url)
  .include('author', 'categories')
  .build();

console.log(result); 
// Outputs: https://example.com/posts?include=author,categories
```

<br/>
<br/>

### `sort(...field: string[])`
Adds a sort query parameter to the URL. The `field` argument can be a string or an array of strings.
If the URL already has a sort parameter, the new values are appended to the existing ones. Otherwise, a new sort parameter is added.

> Example:

```javascript
const url = 'https://example.com/posts';

const result = spatie(url)
  .sort('title', '-date')
  .build();

console.log(result); 
// Outputs: https://example.com/posts?sort=title,-date
```

<br/>
<br/>

### `when(condition: boolean, callback: (param: any)=> any)`
Adds a query parameter to the URL. The `condition` argument must be a boolean.
And the `callback` should would return an interface for further chaining or building.

> Example

```javascript
const url = 'https://example.com/posts';

const result = spatie(url).include('author')
    .when('claver'.length > 5, q => q.sort('-title'))
    .sort('name')
    .filter("status","Published").build()

console.log(result);
// Outputs: https://example.com/posts?include=author&sort=-title,name&filter[status]=Published
```


<br/>
<br/>

### `build()`
Returns the built URL string.

> Example

```javascript
const url = 'https://example.com/posts';

const result = spatie(url)
  .filter('status', 'published')
  .include('author', 'categories')
  .sort('title', '-date')
  .build();

console.log(result); 
// Outputs: https://example.com/posts?filter[status]=published&include=author,categories&sort=title,-date
```

