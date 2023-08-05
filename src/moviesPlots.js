// useEffect(() => {
//     async function getMoviesPlotText(){
//         try{
//             const resSearch = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=drive`)
//             const dataSearch = await resSearch.json()

//             const imdbID = dataSearch.Search[0].imdbID

//             const res1 = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`)
//             const data1 = await res1.json()
//             console.log(data1.Plot)
//         }catch(e){
//             console.log(e)
//         }
//     }
//     getMoviesPlotText()
// }, [])
export const moviesPlots = [
    {plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", title: 'Interstellar'},
    {plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", title: 'Inception'},
    {plot: "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.", title: 'Batman begins'},
    {plot: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.", title: 'Tenet'},
    {plot: "When an otherworldly substance with amazing cloning properties falls into the hands of the evil criminal mastermind, Captain Maximum, only the extreme powers of the Italian Spiderman can save the world.", title: 'Italian Spiderman'},
    {plot: "Rosie and Alex have been best friends since they were 5, so they couldn't possibly be right for one another...or could they? When it comes to love, life and making the right choices, these two are their own worst enemies.", title: 'Love, Rosie'},
    {plot: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.", title: 'Before sunrise'},
    {plot: "Two guys by the name of Silas and Jamal decided to one day smoke something magical, which eventually helps them to ace their college entrance exam.", title: 'How high'},
    {plot: "The story of Violet and Theodore, who meet and change each other's lives forever. As they struggle with the emotional and physical scars of their past, they discover that even the smallest places and moments can mean something.", title: 'All the bright places'},
    {plot: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.", title: 'Avatar The Last Airbender'}
]