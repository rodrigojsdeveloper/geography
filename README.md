<div align="center">
<h1>
   Geography
</h1>

<p>Geography, where users can explore and have fun with countries around the world.</p>
</div>

## Cloning the Repository

You can clone this repository using the following command:

```
https://github.com/rodrigojsdeveloper/geography.git
```

## Package Manager

This project uses Yarn as a package manager. Make sure you have it installed before proceeding. If you don't already have it, you can download it <a href="https://classic.yarnpkg.com/lang/en/docs/install">here</a>.

### Warning:

Although Yarn is the recommended package manager, you can also use NPM by running the following commands:

- To install dependencies: npm install
- To start Geography: npm run dev

## Installation of Dependencies

To install project dependencies, open the terminal at the root and run the following command:

```
yarn
```

## Starting Geoghapy

To start the project, run the following command in the terminal:

```
yarn dev
```

## Starting the Project in Docker

At the root of the project, run the following commands:

```
# Build the Docker image for the current folder and with `dockerized-react`

docker build . -t dockerized-react


# Check if the image was created

docker images | grep dockerized-react


# Run the image in detached mode and map port 5173 inside the container with 5173 on the current host

docker run -p 5173:5173 -d dockerized-react

```

The -d flag runs the project in the background, freeing up the terminal for other uses.

### Accessing Geography on Vercel

You can access the Geography application at the following link:

```
https://geography-beta.vercel.app/
```

<br/>
<p align="center">Developed by <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/">Rodrigo Silva</a>
</p>
