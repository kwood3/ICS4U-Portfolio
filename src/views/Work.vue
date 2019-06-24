<template>
    <div class="Work">
        <h1  class="subheading grey--text mx-5">My Work</h1>

        <v-container class="my-5">
            <v-expansion-panel>
                <v-expansion-panel-content v-for="project in Subject" :key="project.id">
                    <div slot="header" class="py-1 font-weight-bold">{{ project.name }}</div>
                    <v-card>
                        <v-card-text class="px-4 grey--text">
                            <div class="font-weight-bold green--text">{{ project.website }}</div>
                            <div class="font-weight-bold"> {{ project.desc }}</div>
                            <img :src="project.image" />
                            <img :src="project.image2" />
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-container>

    </div>
</template>

<script>
export default {
 data() {
    return {
        Subject: [
            { id: "1", name: 'Algorithms', website: "Khan Academy", desc: "In this Khan Academy course, I learned a whole bunch of advanced topics in algorithms, including; binary search, asymptotic analysis, selection sort, insertion sort, recursive algorithms, and merge sort. I will make use of this knowledge because algorithms can be used to improve the speed at which a program executes a problem. A single algorithm has the potential of reducing the time that a program takes to solve a problem, which could be a critical component of the efficiency of my future programs. ", image: "https://i.ibb.co/Xbt9jr6/algorithms1.png", image2: "https://i.ibb.co/2dhnnTj/algorithms2.png" },
            { id: "2", name: 'Natural Simulations', website: "Khan Academy", desc: "In the Natural Simulations course, I combined my knowledge of both physics and programming. I used multiple concepts such as noise, vectors, particle systems, forces, and randomness in my programs. In the end, I was tasked to combine my knowledge of what Ive learned in the whole course. I took inspiration from other developers to create my creature colonies program, where a bunch of bees are attracted to a flower and also interact with rain.", image: "https://i.ibb.co/KwX8FGX/natsim2.png", image2: "https://media.giphy.com/media/giiJ4OCk1hHLZxZqTu/giphy.gif" },
            { id: "3", name: 'Front-end Libraries', website: "Free-Code-Camp", desc: "In this free-code-camp course, I learned about front-end libraries such as React, Bootstrap and jQuery. With this knowledge, I moved on to other front end libraries such as node.js and vue.js and created my own project of a dashboard, which can be seen below. Overall, I think web-development is very fun and hope to continue in the future.", image: "https://i.ibb.co/S3T2q7v/frontend1.png", image2: "" }, 
            { id: "4", name: 'jQuery', website: "Khan Academy", desc: "In this course, I made websites interactive using html, css and jquery. I was able to make minimalistic websites with basic interaction. Below, you can see a slideshow I was able to make. Javascript has helped me simplify javascript, and has given me insight on how I can make my development process a lot easier by using things like jQuery to help simplify things.", image: "https://media.giphy.com/media/VhJyMYgTgbT5yQh9e6/giphy.gif ", image2: "" },
            { id: "5", name: 'SQL', website: "Khan Academy", desc: "In this Khan Academy course, I learned how to create schemas of data using SQL. I found this information important, because if I ever wanted to do full-stack-development it would be nice knowing how to create and administer a database, either using a relational database like sql, or a non-relational database such as MongoDB, which I also learned in my free-time. ", image: "https://media.giphy.com/media/kI2kvmkihGX1zf2Mei/giphy.gif ", image2: "" },
            { id: "6", name: 'HTML & CSS', website: "Khan Academy", desc: "This course taught me the fundamentals of web-development using basic programming concepts in HTML and CSS. I was able to design very minimalistic websites in just one index.html file. With this knowledge, I was able to move onto more advanced topics like how to utilise web-development frameworks.  ", image: "https://media.giphy.com/media/j5KdFMzQFS6bYKVIBx/giphy.gif", image2: "" },
            { id: "7", name: 'Javascript', website: "Khan Academy", desc: "In this course, I learned the fundamentals of javascript. I was taught basic concepts such as variables, arrays, and some basic object-oriented-programming. This course helped me advance into more advanced courses like natural-simulations. ", image: "https://media.giphy.com/media/Lo65ll0iqW9hBMhpu6/giphy.gif ", image2: "https://media.giphy.com/media/XZOHENRyS9gZCqtUtC/giphy.gif " },
            { id: "8", name: 'Data Structures', website: "Free-Code-Camp", desc: "In this course, I was taught how to store and access data in javascript. I was also taught how to manipulate arrays. This was a very good course for me to take, because I always had trouble understanding how to manipulate and utilise arrays to the best of their ability. In one of the projects, I used the Ceaser Cipher to decode messages. This has improved me as a student, building on skills where I lacked. ", image: "https://i.ibb.co/Bjx0QJZ/data-Structures.png", image2: "" },
            { id: "9", name: 'Object-Oriented Programming', website: "Free-Code-Camp", desc: "In this course, I learned how to utilise objects in programs using javascript. This added on to my knowledge from khan-academy, giving me a variety of different challenges. I think object-oriented programming is important because it breaks down my programs into individual components, rather than all in one, making it more efficient.", image: "https://media.giphy.com/media/h5uRYReKT6K71fNh6n/giphy.gif ", image2: "" },
            { id: "10", name: 'Functional Programming', website: "Free-Code-Camp", desc: "In this free-code-camp course, I learned the functional-programming approach to software development, and its principles. This enables me to combine basic functions and build more complex programs. This improved my programming skills by widening my knowledge on different ways to tackle an idea, and approach it in different methods.", image: "", image2: "" },
            { id: "11", name: 'Algorithm Scripting', website: "Free-Code-Camp", desc: "In this free-code-camp course, I learned some basic scripting. I was tasked with a bunch of problems that I would have to figure out an algorithmic approach to. This course is very useful to me because I get to build my problem solving skills, as well as prepare me for more advanced algorithm challenges I might get in future interviews!", image: "https://i.ibb.co/d7vcmyb/algscript.png", image2: "" }
        ]
      }
    }
  }
</script>
