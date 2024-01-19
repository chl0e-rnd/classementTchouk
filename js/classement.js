/**
 * Classement
 * @author  Chloé Renaud
 * @version 1.0
 * @since   13.06.2023
 */

async function logMovies() {
    const response = await fetch("https://swiss-tchoukball.netlify.app/.netlify/functions/simple-standings?competition=league-a");
    const data = await response.json();
    console.log(data);
}


