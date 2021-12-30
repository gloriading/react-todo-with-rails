# Rails X React

## Project structure

- rails-todo (root)
  - rails-todo-api (backend)
  - todo-app (frontend)
  - Procfile.windows

## Procfile

- For Heroku deployment

```
    api: cd rails-todo-api && bundle exec rails server -p 3000
    web: yarn --cwd todo-app start
```

- To run both apps locally, on the root directory: `heroku local -f Procfile.windows`
