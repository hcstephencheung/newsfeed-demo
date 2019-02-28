## Instructions to run:
1. Please checkout `master` branch (merges have been squashed for cleaner history)
- Please note that you will need Node version 8+ to run the app (Parcel requirement)
2. Please install packages via `npm i`
3. In the root directory, please edit the `.env` file with your API key to Newsfeed API.
4. To run the app, please run `npm run dev`

## Completion Chart (oof...)
- [x] Should-have requirements
- [x] Sorting
- [ ] Pagination
- [ ] Redux

## Tech stack rationale
Since this is quite a small project, I chose to use [Parcel](https://github.com/parcel-bundler/parcel) as my code bundler for its ease of use (auto installs packages!) and speed.

I also used [Semantic UI React](https://react.semantic-ui.com/) as my components library for all the pretty styles. I started the project with [Evergreen-UI](https://evergreen.segment.com/) but eventually the nice to have requirements outgrew the component library in Evergreen.

## Git History
Each feature is done in a separate branch, and I kept them alive for the commit history. Merges have been done with `git merge --squash` for cleaner git history

## Impediments
- Sick days
- Birthday weekend
- Another Interview Project

Much apologies for delayed reply.

## Sources:
Frontend Masters course, Intro to React v4 - keeps me up to date with new tools such as Parcel

### Packages installed:
- prettier for formatting
- eslint for code formating
- parcel as my code bundler
- postcss for CSS modules for page styling
- semantic-ui-react for component library
