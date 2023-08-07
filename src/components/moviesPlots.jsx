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
    {plot: "The story of Violet and Theodore, who meet and change each other's lives forever. As they struggle with the emotional and physical scars of their past, they discover that even the smallest places and moments can mean something.", title: 'All the bright places'},
    {plot: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.", title: 'Avatar The Last Airbender'}
]

export const moviesPlotsPT = [
    {plot: "Quando a Terra se torna inabitável no futuro, um fazendeiro e ex-piloto da NASA, Joseph Cooper, é encarregado de pilotar uma espaçonave, junto com uma equipe de pesquisadores, para encontrar um novo planeta para os humanos.", title: 'Interstellar'},
    {plot: "Um ladrão que rouba segredos corporativos por meio do uso da tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO, mas seu passado trágico pode condenar o projeto e sua equipe ao desastre.", title: 'Inception'},
    {plot: "Depois de testemunhar a morte de seus pais, Bruce aprende a arte de lutar para enfrentar a injustiça. Quando ele retorna a Gotham como Batman, ele deve parar uma sociedade secreta que pretende destruir a cidade.", title: 'Batman begins'},
    {plot: "Armado com apenas uma palavra, Tenet, lutando pela sobrevivência de todo o mundo, um protagonista viaja por um mundo crepuscular de espionagem internacional em uma missão que se desenrolará em algo além do tempo real.", title: 'Tenet'},
    {plot: "Quando uma substância de outro mundo com incríveis propriedades de clonagem cai nas mãos do malvado mentor do crime, Capitão Maximum, apenas os poderes extremos do Homem-Aranha italiano podem salvar o mundo.", title: 'Italian Spiderman'},
    {plot: "Rosie e Alex são melhores amigos desde os 5 anos, então eles não poderiam ser certos um para o outro... ou poderiam? Quando se trata de amor, vida e escolhas certas, esses dois são seus piores inimigos.", title: 'Love, Rosie'},
    {plot: "Um jovem e uma jovem se conhecem em um trem na Europa e acabam passando uma noite juntos em Viena. Infelizmente, ambos sabem que esta provavelmente será sua única noite juntos.", title: 'Before sunrise'},
    {plot: "Dois caras chamados Silas e Jamal decidiram um dia fumar algo mágico, o que eventualmente os ajudou a fechar o teste de admissão em Haward.", title: 'How high'},
    {plot: "A história de Violet e Theodore, que se conhecem e mudam a vida um do outro para sempre. Enquanto lutam com as cicatrizes emocionais e físicas de seu passado, eles descobrem que mesmo os menores lugares e momentos podem significar algo.", title: 'All the bright places'},
    {plot: "Em um mundo de magia elementar devastado pela guerra, um jovem desperta para empreender uma perigosa missão mística para cumprir seu destino como o Avatar e trazer paz ao mundo.", title: 'Avatar The Last Airbender'}
]