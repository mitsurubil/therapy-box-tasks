# therapy-box-tasks
This repository was made to answer Therapy box's questions :)

1. Provide the code to make an asynchronous http request
Using https://cat-fact.herokuapp.com/facts/random , create a web page that display a random cat fact. Add a button to get a new random fact when's pressed.

2. Create an html form
Create an html form for a blog post that will allow to submit:

Title of the blog post
The blog post's (long) message
A file that could be selected from the local filesystem of the user.
All the inputs are required to be filled. The blog post message is required to have at least 30 characters in it. The only allowed file type are images.

Once the form is done, you can choose to spend time styling the form to make it look nice and accessible, enough to support screen readers usage or other assistive technology. No backend code is required for this task, but it would be appreciated to see a description of how the receiving part of this form could handle the data. You are free to make assumptions on the database and storage choosed. A list of steps is enough, but pseudo code is also be acceptable.

3. Can you find what's wrong with this code?
The following code is for a React component that will show an incremental counter, starting from 0, counting to infinity. Can you find what's wrong with this code? How would you fix it?
```
import React from 'react'

function SequentialCounterComponent() {
    const [counter, setCounter] = React.useState(0)

    setInterval(() => {
        setCounter(counter + 1)
    }, 1000)

    return <div>Count: {counter}</div>
}
```
Please keep in mind that using the React.Component class will not be considered a valid answer!

4. Make a sql query
Given those two tables:
```
people
Id	Name	City
1	Alex	London
2	Stuart	Manchester
3	Nikolay	Paris
4	Rob	Madrid
```
```
employees
Id	PeopleId	Occupation
1	2	Project manager
2	1	Developer
3	3	Designer
4	4	Developer
5	3	Developer
6	2	Designer
```
Can you write an sql query to retrieve all the people's name that are Developer and Designer?

5. Write a function
Write a function called add, that add two numbers together:

Usage:

add(3, 7) // 10
add(2, 4) // 6
The same function must also support this usage:

add(3)(7) // 10
add(2)(4) // 6
How would you write this add function, to support both uses, at the same time?
