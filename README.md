### package-publishing-using-lerna-yarn-jest-typescript

Package development and Publishing using lerna with yarn workspaces


#####Features List:

- [x] Lerna version manager
- [x] Yarn Workspaces
- [x] Typescript
- [x] Eslint(airbnb/browser)
- [x] Prettier
- [x] Jest unit test
- [x] Auto ChangeLog
- [x] Husky (Husky can prevent bad git commit, git push and more 🐶 woof!)

#####Todo List:

- [ ] tsconfig.build.json
- [ ] jest.config.js
- [ ] scss(use-follow instead of @import) 
- [ ] config .npmrc for Verdaccio



#How to use this:

- Step1: `git clone https://github.com/SeyyedKhandon/yarn_lerna_jest_typescript.git my_packages`
  - consider that you should change all `yarn_lerna_jest_typescript` occurrences to what-ever scope you like, e.g `my_packages`
- Step2: `cd my_packages`
- Step3: `yarn install`
- Step4: now you can remove package1/2 and create new packages based on these two samples.
- Step4: finally you have to create a github repo
  - remove `.git` folder
  - use `git init` to create a new git history for you new `my_packages`
  - use `git add .`
  - use `git commit -m "first commit"`
  - use `git remote add origin https://github.com/SeyyedKhandon/my_packages.git`
  - use `git push --set-upstream origin master`
- Step5: create a npm account
  - create org by the name of `my_packages`, because you have used `my_packages` for scope
- Step6: `lerna publish`
