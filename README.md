## Lesson-11

Finally we update our sign-in component with our email/password sign in.

# How to fork and clone

One quick note about cloning this project. If you wish to make commits and push the code up after cloning this repo, you should fork the project first. In order to own your own copy of this repository, you have to fork it so you get your own copy on your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

![alt text](https://i.ibb.co/1YN7SJ6/Screen-Shot-2019-07-01-at-2-02-40-AM.png "image to fork button")

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!


# After you fork and clone:

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

## Set your firebase config

Remember to replace the `config` variable in your `firebase.utils.js` with your own config object from the firebase dashboard! Navigate to the project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

![alt text](https://i.ibb.co/6ywMkBf/Screen-Shot-2019-07-01-at-11-35-02-AM.png "image to firebase config")


## Utility functions

Utility functions allow us to keep our files clena and organize functions that we may need in multiple files in one location

## Memoizing selectCollection and collectionUrlParam

One quick addition, our `selectCollection` function we just wrote is not memoized due to `collectionUrlParam` being passed in from our collection component's `mapStateToProps` running whenever our state changes and and calling a new instance of our `selectCollection` function. In this case collectionUrlParam is a dynamic argument meaning it can change, so to memoize selectCollection we actually have to memoize the whole function using a `memoize` helper function. We can leverage the lodash library, specifically their memoize helper function by adding it our packages like so:

If using yarn:

    yarn add lodash.memoize


If using npm:

    npm install lodash.memoize


And to use it, we import our newly installed memoize helper function at the top of `shop.selectors.jsx` like so:

    import memoize from 'lodash.memoize';

And just wrap our `selectCollection` function with `memoize` like so:

    export const selectCollection = memoize((collectionUrlParam) =>
      createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParam]
      )
    );

`Memoize` does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector:

    (collectionUrlParam) =>
      createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParam]
     )

By wrapping this function is memoize, we're saying that whenever this function gets called and receives `collectionUrlParam`, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same `collectionUrlParam`, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.

## (Optional): Currying

In the previous video, we saw the concept of currying being applied with our selector. If you want to learn more about currying and how it works with JavaScript, simply go to **Appendix 1: Key Developer Concepts** at the bottom of the course video player, and watch the video titled Currying from my **Advanced JavaScript Concepts** course which I have included for you. 