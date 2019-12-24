/**
 * @fileoverview Enforce a defaultProps definition for every prop that is not a required prop.
 * @author Vitor Balocco
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/require-default-props');

// const parsers = require('../../helpers/parsers');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

const ruleTester = new RuleTester({parserOptions});

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

ruleTester.run('require-default-props', rule, {

  valid: [
  //   //
  //   // stateless components
  //   {
  //     code: [
  //       'function MyStatelessComponent({ foo, bar }) {',
  //       '  return <div>{foo}{bar}</div>;',
  //       '}',
  //       'MyStatelessComponent.propTypes = {',
  //       '  foo: PropTypes.string.isRequired,',
  //       '  bar: PropTypes.string.isRequired',
  //       '};'
  //     ].join('\n')
  //   }
    // {
    //   code: [
    //     'function MyStatelessComponent({ foo = "test", bar }) {',
    //     '  return <div>{foo}{bar}</div>;',
    //     '}',
    //     'MyStatelessComponent.propTypes = {',
    //     '  foo: PropTypes.string,',
    //     '  bar: PropTypes.string.isRequired',
    //     '};'
    //   ].join('\n'),
    // }
    // {
    //   code: [
    //     'function MyStatelessComponent({ foo, bar }) {',
    //     '  return <div>{foo}{bar}</div>;',
    //     '}',
    //     'MyStatelessComponent.propTypes = {',
    //     '  foo: PropTypes.string,',
    //     '  bar: PropTypes.string.isRequired',
    //     '};',
    //     'MyStatelessComponent.defaultProps = {',
    //     '  foo: "foo"',
    //     '};'
    //   ].join('\n')
    // }
  ],

  invalid: [
    //
    // stateless components
    {
      code: [
        'function MyStatelessComponent({ foo = "test", bar }) {',
        '  return <div>{foo}{bar}</div>;',
        '}',
        'MyStatelessComponent.propTypes = {',
        '  foo: PropTypes.string,',
        '  bar: PropTypes.string.isRequired',
        '};'
      ].join('\n'),
      errors: [{
        message: 'propType "foo" is not required, but has no corresponding defaultProps declaration.',
        line: 5,
        column: 3
      }]
    }
  ]
});
