module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/styled.ts',
        templateFile: 'templates/styled.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{lowerCase name}}/{{lowerCase name}}.spec.tsx',
        templateFile: 'templates/test.spec.tsx.hbs'
      }
    ]
  })
}
