# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Router is coming

<img src="https://media.giphy.com/media/3ohzdIk6GgMh1T6ldC/giphy.gif" alt="winter is coming"/>

## Getting started

-    Fork and clone this repository
-    Install dependencies with `npm i`
-    Spin up your application with `npm start`

## Introduction

Using all you've learned about React Router, you should create an application that allows users
-    to view data about their favorite Game of Thrones houses and characters
-    to navigate between pages, rendering only the data pertinent to their current page

## Preparation

Before we begin, it's important for us to look at the data we have been given to complete the task.

`gameOfThrones.js` is a large array containing data pertaining to Westeros Houses and a select number of their family members.

Each item, has a unique identifier in `id`, meaning we can access specific data relatively easily using the tools at our disposal.

## Step One: Build out Components

We need to create components for our application, starting with `Houses.js`, `House.js` and `Member.js`. These will be the components we will use to display our data.

- `Houses.js` should provide users with a list of all houses in gameOfThrones.js, as well as a link to each
- `House.js` should provide users with a list of all house members, as well as a link to each
- `Member.js` should provide users with individual house member data

We don't have the data flowing yet, so include a temporary tag indicating what data will be in each component in the future, as well as a bold header indicating which component it is. 

We'll come back to these shortly.

```jsx
// in Houses.js
return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <ul className="list">
            A list of houses
        </ul>
    </div>
)
```

```jsx 
// in House.js
return (
    <div className="page">
        <div className="header">
            <h2>Members of a GoT House</h2>
        </div>
        <ul className="list">
            A list of members
        </ul>
    </div>
)
```

```jsx
// in Member.js
return (
    <div className="page">
        <div className="header">
            <h2>Specific Member Name</h2>
        </div>
        <div className="desc">
            A description
        </div>
    </div>
)
```

## Step Two: Implement Router

At the top of your `App.js`, be sure to import `BrowserRouter` and `Route` from `react-router-dom`.

You now need to set up your routes, specifically:

| **URL Route** | **Component**  | **Content Description**                                                   |
| :------------ | :------------- | :------------------------------------------------------------------------ |
| /houses             | `<Houses />`     | List all family houses                                             |
| /houses/:id     | `<House />` | Show a specific house, including members                        |
| /houses/:houseId/members/:memberId      | `<Member />`  | Show a specific member from a house                          |


Once you have completed these, make sure to test them out and check if you're hitting the right component.

## Step Three: Render Content

If you haven't already, import your data using `import gameOfThrones from gameOfThrones` and log the data inside your render method to ensure you can access it.

Once your data is available to you, begin rendering by displaying all houses as links in your `Houses.js` component.

**Remember to import and use `Link` when routing in React.**

Once you have completed this, move onto `House.js` and `Member.js`. Each of these requires params matching, so make sure you take this into account passing props into your components.

## Hints 

* use the array `.find()` method to when rendering compound routes you can use the `useParams()` hook to match data ids with route parameters. 

<details>

  <summary> Stuck on how to render your /houses/:id?</summary>

  <p>

  ```jsx
    // in App
    <Route 
        exact path="/houses/:id" 
        element={<House />} 
    />
    // in House 
    ...
    const { id } = useParams()
    const house = houses.find(house => house.id.toString() === id)
    ...
  ```

  </p>
</details>

* Since `/houses/:houseId/members/:memberId` has two route parameters, you will have access to get them both from `useParams()`

<details>

  <summary> Stuck on how to render your `/houses/:houseId/members/:memberId` ?</summary>

  <p>

  ```jsx
        // in App
        <Route 
          path="/houses/:houseId/member/:memberId" 
          element={<Member />}
        />
        // in Member
        ...
          const { houseId, memberId } = useParams()
          const house = houses.find(house => house.id.toString() === houseId)
          const member = house.people.find(person => person.id.toString() === memberId)
        ...
  ```

  </p>
</details>

## Bonuses

- Using the `wikiSuffix` value of the data object, create a link using `https://awoiaf.westeros.org/index.php/:suffix`.
-  Style it out, have some fun and add a bit of your own flair.
- Add the ability for users to favorite characters and houses and render these favorites alongisde the primary list

## Licensing

1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
