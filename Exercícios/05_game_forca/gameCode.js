function GuessLetter(ChosenLetter)
{
    if(ableToPlay)
    {
    let CorrectGuesses = 0;

        for(i = 0; i < letter.lenght; i++)
        {
            if(ChosenLetter == letter[i])
            {
                CorrectGuesses += 1;

                CorrectGuess(ChosenLetter, i);
            }
        }

        if (CorrectGuesses == 6)
        {
            Victory();
        }
    }
}
function Wrong()
{
    let HangmanImage = document.getElementById("enforcado");
    HangmanImage.src = picture;

    WrongGuesses += 1;

    switch (WrongGuesses){
        case 1: picture = 'CabeçaForca.png';
        break;
        case 2: picture = 'TorsoForca.png';
        break;
        case 3: picture = 'BraçoDireitoForca.png';
        break;
        case 4: picture = 'BraçoEsquerdoForca.png';
        break;
        case 5: picture = 'PernaDireitaForca.png';
        break;
        case 6: picture = 'PernaEsquerdaForca.png';
        break;
    }

    if(WrongGuesses == 6)
    {
        GameOver();
    }
}

function GameOver()
{
    ableToPlay = false

    alert("Game Over")
}

function Victory()
{
    ableToPlay = false

    alert("Victory!")
}