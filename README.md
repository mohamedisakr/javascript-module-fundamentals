# Main Topics

1. Popular modeule patterns
2. The AMD and CommonJS module formats
3. Client-side module loaders
4. ES2015 modules
5. Module bundlers

## Module

A group of code & data related to a particular piece of functionality. It encapsulates
implementation details, exposes a public API, and is combined with other modules to
build a larger application

## The Goals of Modularity

1. Create higher-level abstractions
2. Encapsulation
3. Resuability
4. Simplify dependency management

## Couse Modules

1. Module Patterns in ES5
2. Module Formats and Loaders ( AMD & CommonJS )
3. Modules in ES2015
4. Module Bundlers

## Module Patterns in ES5 ( 2 popular pattern )

1. Immediately-Invoked Function Expressions
2. Revealing Module Pattern
   A. Singleton
   B. Constructor functions

## What is IIFE? (Reducing Global Scope Pollution)

1. Anonymous function
2. Invoked when declared
3. Provides encapsulation
4. Reduces globlal scope pollution
5. No dependency management

## Revealing Module Pattern

Function scoping provides encapsulation
Adds one value to global scope per module
Clear delineation between private implementation and public API
No dependency management (between modules)
Pure JS that works in modern browsers
Comes in 2 popular flavors ( singleton & constructor function )

## Module Formats and Loaders

1. Relationship between module formats and module loaders
2. Module formats
   A. Native vs. Non-native
   B. Asynchronous Module Definition (AMD)
   C. CommonJS
3. Module loaders
   A. RequireJS
   B. SystemJS

## Formats vs. Loaders

Module Format => Syntax
Module Loader => Exection

## Module Formats

1. Non-native format
   A. Asynchronous Module Definition (AMD)
   B. CommonJS
   C. Universal Module Definition (UMD)
   D. System.register (SystemJS)
2. Native format
   A. ES2015

## Module Loaders

1. RequireJS (AMD)
2. SystemJS (AMD, CommonJS, UMD, System.register)

## Modules in ES2015

1. What are ES2015 modules?
2. Similarities & differences in relation to other module formats
3. Syntax for defining & using modules
4. Transpiling to earlier versions of JavaScript

## What are ES2015 modules?

1. Native modules
2. Support for modules built in to JavaScript
3. Similar to other module formats
   A. Support for dependency management
   B. Encapsulate implementation details
   C. Explicitly expose public API
4. Different from other module formats
   A. No libraries required to create modules
   B. Syntax

## Importing & Exporting

1. Importing from a module
   A. Imported items are dependency
   B. May import an entire module or just part of it
   C. May create an alias for imported items
2. Exporting from a module
   A. Exposes the API of the module
   B. May export items at declaration or all at once as a list
   C. May specify a default export

## Module Bundlers

1. Role of module bundlers
2. Bundler workflow
3. Browserify
4. Webpack

## Role of module bundlers

1. Alternative to module loaders
2. Follow module dependencies
3. Correctly order dependencies
4. Combine modules into fewer files
5. May decrease application startup time

## Related Courses

1. Structuring JavaScript Code
2. Practical Design Patterns in JavaScript
3. RequireJS: JavaScript Dependency Injection and Module Loading
4. Modern, Modular JavaScript with SystemJS and jspm
5. Webpack Fundamentals
6. Working with JavaScript Modules
