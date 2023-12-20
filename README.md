<div align="center">
  <h1>CRUD</h1>
</div>
<div align="center">
  <strong>for RESTful APIs built with NestJs</strong>
</div>

<br />

<div align="center">
  <sub>Built with :purple_heart: by
  <a href="https://twitter.com/MichaelYali">@MichaelYali</a> and
  <a href="https://github.com/dataui/crud/graphs/contributors">
    Contributors
  </a>
  <div align="center">
    :star2: :eyes: :zap: :boom:
  </div>
</div>

<br />

We believe that everyone who's working with NestJs and building some RESTful services and especially some CRUD functionality will find `@lab3dvlp/crud` microframework very useful.

## Features

<img align="right" src="img/crud-usage2.png" alt="CRUD usage" />

- :electric_plug: Super easy to install and start using the full-featured controllers and services :point_right:

- :octopus: DB and service agnostic extendable CRUD controllers

- :mag_right: Reach query parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.

- :telescope: Framework agnostic package with query builder for a frontend usage

- :space_invader: Query, path params and DTOs validation included

- :clapper: Overriding controller methods with ease

- :wrench: Tiny config (including globally)

- :gift: Additional helper decorators

- :pencil2: Swagger documentation

## Typeorm 0.3.X support

Still in alpha you can install via :

  yarn add @lab3dvlp/crud-typeorm@5.2.0-alpha.0

## Packages

- [**@lab3dvlp/crud**](https://www.npmjs.com/package/@lab3dvlp/crud) - core package which provides `@Crud()` decorator for endpoints generation, global configuration, validation, helper decorators ([docs](https://github.com/nestjsx/crud/wiki/Controllers#description))
- [**@lab3dvlp/crud-request**](https://www.npmjs.com/package/@lab3dvlp/crud-request) - request builder/parser package which provides `RequestQueryBuilder` class for a frontend usage and `RequestQueryParser` that is being used internally for handling and validating query/path params on a backend side ([docs](https://github.com/nestjsx/crud/wiki/Requests#frontend-usage))
- [**@lab3dvlp/crud-typeorm**](https://www.npmjs.com/package/@lab3dvlp/crud-typeorm) - TypeORM package which provides base `TypeOrmCrudRepository` with methods for CRUD database operations ([docs](https://github.com/nestjsx/crud/wiki/ServiceTypeorm))

## Documentation

- :dart: [General Information](https://github.com/nestjsx/crud/wiki#why)
- :video_game: [CRUD Controllers](https://github.com/nestjsx/crud/wiki/Controllers#description)
- :horse_racing: [CRUD ORM Services](https://github.com/nestjsx/crud/wiki/Services#description)
- :trumpet: [Handling Requests](https://github.com/nestjsx/crud/wiki/Requests#description)

## Build library and run tests

```
yarn bootstrap
yarn clean
yarn build
docker compose up -d
yarn test:coverage
```

## Make a release

- Merge a PR on master.
- Pull and checkout master
- Update Changelog and commit
- Run tests `yarn clean && yarn build && docker-compose up -d && yarn test:coverage`
- Run `yarn pub` - this will publish on the npm repo (need to be logged under dataui `yarn login`)

## Support

Any support is welcome. At least you can give us a star :star:

## Contributors

### Code Contributors

This project exists thanks to all the people who contributed. [[Contribute](CODE_OF_CONDUCT.md)].
<a href="https://github.com/dataui/crud/graphs/contributors"><img src="https://opencollective.com/nestjsx/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/nestjsx#backer)]

#### Individuals

<a href="https://opencollective.com/nestjsx#backers" target="_blank"><img src="https://opencollective.com/nestjsx/backers.svg?width=890&button=false"></a>

## License

[MIT](LICENSE)
