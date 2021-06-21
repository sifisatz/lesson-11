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

## (Optional): Hash Tables vs Arrays

In the previous lesson we learned about Objects (Hash Table data structure) being better for searching for items than Array. This is a common computing optimization when talking about data structures. If you want to learn more about why this is, this is a great resource for you to use: https://www.kirupa.com/html5/hashtables_vs_arrays.htm

 
 ## Linking Github to Heroku

If you would like to not manually deploy the the app like we have seen in the previous video every time, and you want the app to redeploy anytime you update MASTER in your github repository, then you can set that up through Heroku by following these steps: https://devcenter.heroku.com/articles/github-integration

However, since we will be working on the project in the next sections, we recommend that you do not do this so that as you code along, even if your website breaks, your current version of the website is still live on Heroku until you decide to redeploy next. 


## (Optional): Git + Heroku commands

**If you are curious how the below command works, read on...
**
    $ git push heroku master

There are always few other steps to execute: Installing Git and Heroku, creating a local Git repo, signing-up to heroku, log-in heroku via command-line, creating heroku handle to hosting point (explained in PART 2)

1. **A local Git repository:**

        $ git add .
        $ git commit -m "my first commit"
        Created initial commit 5df2d09: my first commit
         44 files changed, 8393 insertions(+), 0 deletions(-)
         create mode 100644 README
         create mode 100644 Procfile
         create mode 100644 app/controllers/source_file
        ...

2. **Have sign-up(ed) for Heroku and logged-in via command-line:**

    $ heroku login // or you can do this online
    Enter your Heroku credentials.
    Email: user@example.com
    Password:
    Could not find an existing public key.
    Would you like to generate one? [Yn]
    Generating new SSH public key.
    Uploading ssh public key /Users/adam/.ssh/id_rsa.pub


**PART 2: but what does heroku and master indicate?**

It is more of a Git question than Heroku - Heroku is a hosting platform, which depends on Git (Distributed Version Control System) for deployment.

The basic concept of 'push' is pushing some thing (file, app, ..) we have locally (in our working machine) to somewhere else, in this case to a remote repository (remote machine).

In Git before using 'push' we create a remote (handle) which acts as a reference to a remote repository (Complete URL), we do so using the following command:

    $ git remote add <remote-name-of-our-choice> <URL-where-you-be-pushing-yourapp>

The basic structure of 'push' command is:

    $ git push <remote-name> <branch>

So $ git push heroku master is actually pushing your code/app/file (from some local Git repo) to a remote repo 'heroku' .

wondering when this 'heroku' remote got created, it was added when you executed $ heroku create

    $ heroku create
    Creating stark-fog-398... done, stack is cedar
    http://stark-fog-398.herokuapp.com/ | git@heroku.com:stark-fog-398.git
    Git remote heroku added

Do notice the last line "Git remote heroku added".

to make it more clear, here's a Git command to check/output all the remotes: $ git remote -v will display something similar to the following

    $ git remote -v
    heroku     git@heroku.com:somerepo.git (fetch)
    heroku     git@heroku.com:somerepo.git (push)

So we can assume that the following command was executed (implicitly) somewhere, when you did $ heroku create , hence creating the heroku remote to some heroku repo (url)*

    $ git remote add heroku git@heroku.com:somerepo.git


- Thank you to Nabeel Ahmed for this great explanation!

## Redux Thunk

Thunk **middleware** for Redux.
https://www.npmjs.com/package/redux-thunk


## function*

The **function*** declaration (**function** keyword followed by an asterisk) defines a generator function, which returns a **Generator** object.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

```function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
```

## Redux Saga

**redux-saga** is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

https://redux-saga.js.org/ 

take, takeLatest, takeEvery, delay, put, take

**PUT :** puts things back into our regular Redux flow 


**Redux-Thunk vs. Redux-Saga**
https://medium.com/@shoshanarosenfield/redux-thunk-vs-redux-saga-93fe82878b2d

**Rules of Hooks**

```
useEffect(()=> {
    const fetchFunc = async ()=>{
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json()
        setUser(resJson[0]);
    }
    fetchFunc();
},[searchQuery]);
```

Conditionally fire the effect
```
useEffect(()=> {
    if(searchQuery.length > 0){
            const fetchFunc = async ()=>{
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json()
        setUser(resJson[0]);
    }
    fetchFunc();
    }

},[searchQuery]);
```
https://reactjs.org/docs/hooks-rules.html

Only Call Hooks at the Top Level

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below https://reactjs.org/docs/hooks-rules.html#explanation.)


**useEffect Cheat Sheet**

useEffect Cheat Sheet

ComponentDidMount
```
    //Class
    componentDidMount() {
        console.log('I just mounted!');
    }
     
    //Hooks
    useEffect(() => {
        console.log('I just mounted!');
    }, [])
```

ComponentWillUnmount
```
    //Class
    componentWillUnmount() {
        console.log('I am unmounting');
    }
     
    //Hooks
    useEffect(() => {
        return () => console.log('I am unmounting');
    }, [])
```
ComponentWillReceiveProps 
```
    //Class
    componentWillReceiveProps(nextProps) {
        if (nextProps.count !== this.props.count) {
            console.log('count changed', nextProps.count);
        }
    }
     
    //Hooks
    useEffect(() => {
        console.log('count changed', props.count);
    }, [props.count])
```


**useContext + useMemo + useCallback**

There are a few other Hooks we still need to talk about such as **useContext** or **useMemo** or **useCallback** However, we are covering topics like these in later sections in the course when we learn a little bit more about things like **ContextAPI** and **Performance**.
