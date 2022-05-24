"use strict";
let moneytip = 0;
let setls = 0;
let setlssong = [];

let readsbase=[
    ", how nice of you to save the oceans by injecting the plastic into yourself! And using the rest of the trash for your drag.",
    ", look at how short is this skirt! It is supposed to be the same size as your talent ?",
    ", these other girls are gonna say you have terrible makeup skills, you have no fashion sense, and you’re dumb as a rock. But they’re wrong! You don’t have terrible makeup skills.",
    ", if you are America’s sweetheart then America needs a heart transplant.",
    ", next time you death drop reverse that and drop dead.",
    ", honey just go jump in the ocean. You won’t drown, silicone floats.",
    ", how nice of you to show up in this! We all needed that friend to make us look more beautiful.",
    ", you are such a talented makeup artist. I have never met anybody who is able to shove their head so far up their own ass without smudging their makeup.",
    ", I've always wanted to know what the female Gremlin would look like in twenty five years.",
    ", my darling dear. I can't stand it when you're near.",
    ", i could say you're stupid, ugly or untalented, but i'm not gonna say thoses. I'mma just think about it really hard.",
    ", it's good to see a filler bitch this season, and I'm not talking about that ass.",
    ", girl, with that mouth, you could put Black & Decker out of business, because you've got a mouth full of tools honey.",
    ", sister I know you love to perform Hard Rock music. And that's good, because that face is also a hard rock.",
    ", bitch, you call yourself the lifesize Barbie. But actually, you look like a disgruntled Ken that ate Barbie and put on her wig and costume.",
    ", have you ever tried eating your makeup? So you'll be pretty on the inside, too.",
    ", they say you have mug for days, but with shoulders like that you need to be thug for days.",
    ", welcome! That's really great because we needed a janitor around here.",
    ", at least you have the pretty package! Actually not even that.",
    ", you're kind of like Azealia banks, everyone knows you, but few people actually likes you.",
    ", like Rihanna said : Shut up and drive! But please only do the first part, we don't want any accident."
];

let entrancelinesreg = [
    "Y'all better fear, because I am here.",
    "Just to let y'all known, the winner has arrived.",
    "Well hello there!",
    "Now this is what dreams are made off!",
    "They talked about an entrance line, but i don't see any mark on the floor. Oh well!",
    "I am here, now y'all close your mouth from all that gagging!",
    "Finally, i can stop auditionning now!",
    "Oh this y'all, it's just the entrance look.",
    "Where am i ?",
    "Time to fight for that crown!",
    "I came here to fight!",
    "I didn't come to play, i came to slay.",
    "Watch out girls, I arrived.",
    "The doll is finally out of her box!",
    "It's time, to go home girls.",
    "I'm here.",
    "Finally, a place where i can say : I love it here!",
    "Did somebody order a hooker ?",
    "Mom, said i could win this, so i'm here.",
    "Don't worry, it's just me!",
    "I was a model before the accident.",
    "Now, i auditionned for pit crew. But this is gonna be way more fun!",
    "A wise person once said : \"I'm about to crash.\"",
    "I fought thoses monsters for years in hollywood, and now I will fight them here.",
    "OMG! #Imhere.",
    "This is about to y'all girls last dance.",
    "Wooh, my God! Look at this! Wow, crazy, crazy, crazy!",
    "Welcome to my party! I brought cookies!",
    "Hey girls hey! What’s going on pussycats?",
    "Oh boys, the diva has arrived!",
    "Well well well, I hope you bitches are ready.",
    "Is this America’s Next Top Model? Oh, sorry… just kidding!",
    "What’s up nerds?",
    "Alright ladies, let’s turn up the juice and see what shakes loose!",
    "So this is what it looks like.",
    "The world wants me, and the feeling is mutual.",
    "Don’t let the smooth taste fool ya, baby!"
];
let entrancelinesas = [
    "I'm back.",
    "Y'all really thought, this was an all-star without me!",
    "Ow! Like that!",
    "Yesss mami! La perra’s in the house!",
    "Hello, hello, what’s up?",
    "The jig is up bitches!",
    "Happy Hunger Games bitches!",
    "Wake up, wake up, wake up, this ain’t no dream. I’m back!",
    "Ayo sis! I have some unfinished business!",
    "Round 2 bitches!",
    "Fan favourite is here!",
    "Yesss, the body is back!",
    "So y’all thought I’d never get here? Sorry, I was stuck in traffic.",
    "I didn’t come to crash the party, I came to end it!",
    "You know they done fucked up, right?",
    "Well looks like it wasn't my last dance after all!",
    "The same, this time with more cash.",
    "Ya saucy home girl is back... and she's sweeter than before!"
];

let entrancelineres = [
    "OMG!",
    "Well there's room for everybody!",
    "Ok...",
    "WERK!",
    "Facecrack of the century...",
    "Oh wow.",
    "Oh.",
    "Girl... She look a fuck ass mess."
];

class Event{
    constructor(Queen1, Queen2, TypeOfChallenge, Event, Episode)
    {
        this.firstqueen = Queen1;
        this.secondqueen = Queen2;
        this.challenge = TypeOfChallenge;
        this.event = Event;
        this.episodeon = Episode;
    }

    getEvent()
    {
        let arrayEvent = [];
        arrayEvent.push(this.firstqueen);
        arrayEvent.push(this.secondqueen);
        arrayEvent.push(this.challenge);
        arrayEvent.push(this.event);
        arrayEvent.push(this.episodeon);
        return(arrayEvent);
    }
}
//mini-challenge stuff:
class MiniChallenge {
    generateDescription(screen) {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["wigs with "] = 0] = "wigs with ";
            desc1[desc1["a quiz about "] = 1] = "a quiz about ";
            desc1[desc1["nails with "] = 2] = "nails with ";
            desc1[desc1["a competition about "] = 3] = "a competition about ";
            desc1[desc1["a song about "] = 4] = "a song about ";
            desc1[desc1["make-up tutorials with "] = 5] = "make-up tutorials with ";
            desc1[desc1["make a quick look about "] = 6] = "make a quick look about ";
            desc1[desc1["a photoshoot about "] = 7] = "a photoshoot about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["the pitcrew."] = 0] = "the pitcrew.";
            desc2[desc2["a partner."] = 1] = "a partner.";
            desc2[desc2["noodles."] = 2] = "noodles.";
            desc2[desc2["hip pads."] = 3] = "hip pads.";
            desc2[desc2["balls."] = 4] = "balls.";
            desc2[desc2["past Drag Race contestants"] = 5] = "past Drag Race contestants";
            desc2[desc2["a celebrity."] = 6] = "a celebrity.";
        })(desc2 || (desc2 = {}));
        //reading and puppet challenges:
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars || currentCast.length == totalCastSize && (all_stars || lipsync_assassin)) {
            description.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
            let reads = readsbase;
            let queenreaded = 0;
            ;
            for(let i = 0; i<currentCast.length; i++)
            {
                screen.createImage(currentCast[i].image, "#69c984");
                let same = true;
                let read = randomNumber(0,reads.length-1);
                
                while(same==true)
                {
                    queenreaded = randomNumber(0,currentCast.length-1);
                    if(currentCast[queenreaded].getName()==currentCast[i].getName())
                    {
                        same=true;
                    }
                    else
                    {
                        same =false;
                    }
                }
                screen.createImage(currentCast[queenreaded].image);
                screen.createBold(currentCast[i].getName()+", it is your turn.");
                screen.createBold("\""+currentCast[queenreaded].getName()+reads[read]+"\"");
                reads.splice(read, 1);
            }
            screen.createHorizontalLine();
            reads = readsbase;
        }
        else if (totalCastSize != 5 && currentCast.length == 5) {
            description.innerHTML = "Bring in the puppets! The queens will parody eachother using puppets!";
        }
        else {
            description.innerHTML = "In today's mini-challenge, the queens will do " + desc1[randomNumber(0, 7)] + desc2[randomNumber(0, 6)];
        }
    }
    rankPerformances() {
        let screen = new Scene();
        if (randomNumber(0, 100) <= 90) {
            let winner = currentCast[randomNumber(0, currentCast.length - 1)];
            screen.createImage(winner.image, "royalblue");
            screen.createBold(`${winner.getName()} won the mini-challenge!`);
        }else {
            let winner = randomNumber(0, currentCast.length - 1);
            let second;
            do{
                second = randomNumber(0, currentCast.length - 1);
            }while (second == winner);
            screen.createImage(currentCast[winner].image, "royalblue");
            screen.createImage(currentCast[second].image, "royalblue");
            screen.createBold(`${currentCast[winner].getName()} and ${currentCast[second].getName()} won the mini-challenge!`);
        }
    }

    generateRandomEvent(screen) {
        let Generator = randomNumber(0,1);
        let who = randomNumber(0,currentCast.length-1);
        if(all_stars)
        {
            let theothertop = [];
            for(let searchtops = 0; searchtops<currentCast.length; searchtops++)
            {
                if(currentCast[searchtops].trackRecord!=undefined && currentCast[searchtops].trackRecord[currentCast[searchtops].trackRecord.length-1] == "WIN ")
                {
                    theothertop.push(currentCast[searchtops]);
                }
            }

            if(theothertop.length!=0)
            {
                let oldtopqueen = theothertop[0];
                screen.createImage(oldtopqueen.image);
                if(currentCast.indexOf(oldtopqueen.lipstick)==-1)
                {
                    screen.createImageBW(oldtopqueen.lipstick.image);
                    screen.createBold(oldtopqueen.getName()+" reveals that they also choose "+oldtopqueen.lipstick.getName()+" to go home.");
                }
                else
                {
                    screen.createImage(oldtopqueen.lipstick.image);
                    screen.createBold(oldtopqueen.getName()+" reveals that they choose "+oldtopqueen.lipstick.getName()+" to go home.");
                    screen.createBold(oldtopqueen.lipstick.getName()+" will now consider "+oldtopqueen.getName()+" as someone to watch.");

                    let whotowatch = currentCast.indexOf(oldtopqueen.lipstick);

                    currentCast[whotowatch].ChangeRelation(currentCast[currentCast.indexOf(oldtopqueen)],-3);
                    currentCast[currentCast.indexOf(oldtopqueen)].ChangeRelation(currentCast[whotowatch],-3);
                }
            }
        }

        if(lipsync_assassin)
        {

                let theothertop = [];
                for(let searchtops = 0; searchtops<currentCast.length; searchtops++)
                {
                    if(currentCast[searchtops].trackRecord!=undefined && currentCast[searchtops].trackRecord[currentCast[searchtops].trackRecord.length-1] == "WIN ")
                    {
                        theothertop.push(currentCast[searchtops]);
                    }
                }
    
                if(theothertop.length!=0)
                {
                    let oldtopqueen = theothertop[0];
                    screen.createImage(oldtopqueen.image);
                    if(currentCast.indexOf(oldtopqueen.lipstick)==-1)
                    {
                        screen.createImageBW(oldtopqueen.lipstick.image);
                        screen.createBold(oldtopqueen.getName()+" reveals that they also choose "+oldtopqueen.lipstick.getName()+" to go home.");
                    }
                    else
                    {
                        screen.createImage(oldtopqueen.lipstick.image);
                        screen.createBold(oldtopqueen.getName()+" reveals that they choose "+oldtopqueen.lipstick.getName()+" to go home.");
                        screen.createBold(oldtopqueen.lipstick.getName()+" will now consider "+oldtopqueen.getName()+" as someone to watch.");
    
                        let whotowatch = currentCast.indexOf(oldtopqueen.lipstick);
    
                        currentCast[whotowatch].ChangeRelation(currentCast[currentCast.indexOf(oldtopqueen)],-3);
                        currentCast[currentCast.indexOf(oldtopqueen)].ChangeRelation(currentCast[whotowatch],-3);
                    }
                }
                else
                {
                    screen.createBold("Will make it next follow up update <3");
                }

        }
        switch(Generator){
            case 0:
                if(eliminatedCast.length==0 && episodeCount<=2)
                {
                    let secwho;
                    let issame = true;
                    while(issame==true)
                    {
                        secwho = randomNumber(0,currentCast.length-1);
                        if(currentCast[secwho].getName() == currentCast[who].getName())
                        {
                            issame=true;
                        }
                        else
                        {
                            issame=false;
                        }
                    }
                    screen.createImage(currentCast[who].image);
                    screen.createImage(currentCast[secwho].image);
                    screen.createBold(currentCast[who].getName()+" and "+currentCast[secwho].getName()+" knew each others before coming here!");
                    currentCast[who].ChangeRelation(currentCast[secwho],2);
                    currentCast[secwho].ChangeRelation(currentCast[who],2);
                }
                else
                {
                    if(eliminatedCast.length!=0 && episodeCount>2)
                    {
                        screen.createBold("The others queens discuss about the results of last episode.");
                    }
                    let talking = randomNumber(1,2);

                    switch(talking){
                        case 1:
                            if(((currentCast[who].ppe / (currentCast[who].episodesOn)).toFixed(2))<3 && currentCast[who].trackRecord[currentCast[who].trackRecord.length-1] == "SAFE")
                            {
                                screen.createImage(currentCast[who].image);
                                screen.createBold(currentCast[who].getName()+" feels like they didn't do the best right now in the competition, and they need to step it up."); 
                            }
                            else 
                            {
                                let allsafes = [];
                                for(let findingsafe = 0; findingsafe<currentCast.length; findingsafe++)
                                {
                                    if(currentCast[findingsafe].trackRecord!=undefined && currentCast[findingsafe].trackRecord[currentCast[findingsafe].trackRecord.length-1] == "SAFE")
                                    {
                                        allsafes.push(currentCast[findingsafe]);
                                    }
                                }
                                let choosingsafe = randomNumber(0,allsafes.length-1);
                                if(allsafes.length==0){
                                screen.createImage(currentCast[who].image);
                                screen.createBold(currentCast[who].getName()+" is excited about today's challenge.");
                                }
                                else
                                {
                                screen.createImage(allsafes[choosingsafe].image);
                                screen.createBold(allsafes[choosingsafe].getName()+" felt like they should have been in the top.");
                                }
                                allsafes = [];
                            }   break;
                        case 2:
                            if(eliminatedCast.length!=0)
                            {
                                let allbottoms = [];
                                for(let findingbottom = 0; findingbottom<currentCast.length; findingbottom++)
                                    {
                                        if(currentCast[findingbottom].trackRecord[currentCast[findingbottom].trackRecord.length-1]== "BTM2" || currentCast[findingbottom].trackRecord[currentCast[findingbottom].trackRecord.length-1]== "BTM3" || currentCast[findingbottom].trackRecord[currentCast[findingbottom].trackRecord.length-1]== "BTM4" || currentCast[findingbottom].trackRecord[currentCast[findingbottom].trackRecord.length-1]== "BTM5" || currentCast[findingbottom].trackRecord[currentCast[findingbottom].trackRecord.length-1]== "BTM6")
                                        {
                                            allbottoms.push(currentCast[findingbottom]);
                                        }
                                }

                                let choosingbtm = randomNumber(0,allbottoms.length-1);
                                if(allbottoms.length!=0){
                                screen.createImage(allbottoms[choosingbtm].image);
                                screen.createBold(allbottoms[choosingbtm].getName()+" feel like they need to step it up after being in the bottom last week.");
                                }
                                else
                                {
                                    if(eliminatedCast.length==0 && episodeCount<=2)
                                    {
                                        screen.createImage(currentCast[who].image);
                                        screen.createBold(currentCast[who].getName()+" is excited about today's challenge.");
                                    }
                                    else
                                    {
                                        if(currentCast[who].trackRecord[currentCast[who].trackRecord.length-1]== "SAFE" || currentCast[who].trackRecord[currentCast[who].trackRecord.length-1]== "LOW")
                                        {
                                            screen.createImage(currentCast[who].image);
                                            screen.createBold(currentCast[who].getName()+" felt like they were going to be in the bottom.");
                                        }
                                        else
                                        {
                                            screen.createImage(currentCast[who].image);
                                            screen.createBold(currentCast[who].getName()+" is excited about today's challenge.");
                                        }
                                    }
                                }
                                allbottoms = [];
                            }
                            else 
                            {
                                screen.createImage(currentCast[who].image);
                                screen.createBold(currentCast[who].getName()+" is excited about today's challenge.");
                            }
                            break;
                    }

                }
                break;

            case 1:
                if(eliminatedCast.length!=0 && (currentCast[who].GetRelation(eliminatedCast[0])>1) && eliminatedCast[0].episodesOn==episodeCount-1)
                {
                    screen.createImage(currentCast[who].image);
                    screen.createImage(eliminatedCast[0].image);
                    screen.createBold(currentCast[who].getName()+" feels really sad that's their friend "+eliminatedCast[0].getName()+" just got eliminated.");
                }
                else if (eliminatedCast.length!=0 && ((eliminatedCast[0].ppe / (eliminatedCast[0].episodesOn)).toFixed(2))>3 && eliminatedCast[0].episodesOn==episodeCount-1)
                {
                    screen.createImage(currentCast[who].image);
                    screen.createImage(eliminatedCast[0].image);
                    screen.createBold(currentCast[who].getName()+" felt like this wasn't "+eliminatedCast[0].getName()+" time to go." );
                } 
                else if (eliminatedCast.length!=0 && ((eliminatedCast[0].ppe / (eliminatedCast[0].episodesOn)).toFixed(2))<3 && eliminatedCast[0].episodesOn==episodeCount-1)
                {
                    screen.createImage(currentCast[who].image);
                    screen.createImage(eliminatedCast[0].image);
                    screen.createBold(currentCast[who].getName()+" felt like this was "+eliminatedCast[0].getName()+" time to go.");
                }
                else
                {
                    screen.createImage(currentCast[who].image);
                    screen.createBold(currentCast[who].getName()+" is excited about today's challenge.");
                }
                break;
        }
    }
}

class Judge{
    constructor(name, image = "noimage", songs = []){
        this.name = name;
        if (image == "noimage")
            this.image = "image/queens/noimage.jpg";
        else
            this.image = "image/judges/" + image + ".webp";
        this.songs = songs;
    }

    getName()
    {
        return(this.name);
    }

    getSongs()
    {
        return(this.songs);
    }
}

let Ru = new Judge("Rupaul","Rupaul");
let Michelle = new Judge("Michelle Visage","Michelle");
let Carson = new Judge("Carson Kressley", "Carson");
let Ross = new Judge("Ross Mathews", "Ross");
let QueenB = new Judge("Béyoncé","QueenB", ["Dangerously in Love by Béyoncé","Naughty Girl by Béyoncé","Freakum Dress by Béyoncé"]);
let Latoya = new Judge("La Toya Jackson","Latoya", ["If you feel the funk by La Toya Jackson","Shake Your Body by La Toya Jackson","Ain't Nobody Loves You by La Toya Jackson"]);
let NickiM = new Judge("Nicki Minaj","NickiM", ["The Night Is Still Young by Nicki Minaj","Super Bass by Nicki Minaj","Fly by Nicki Minaj (ft. Rihanna)"]);
let KylieM = new Judge("Kylie Minogue","Kylie", ["The Loco-Motion by Kylie Minogue","Can't Get You Out Of My Head by Kylie Minogue","Magic by Kylie Minogue"]);
let Jlo = new Judge("Jennifer Lopez","JLo", ["Jenny From The Block by Jennifer Lopez","Ain't Your Mama by Jennifer Lopez","Love of My Life by Jennifer Lopez"]);
let Madonna = new Judge("Madonna","Madonna", ["Hung Up by Madonna","Material Girl by Madonna","Take A Bow by Madonna"]);
let Merle = new Judge("Merle Ginsberg","Merle");
let Lizzo = new Judge("Lizzo","Lizzo",["Cuz I Love You by Lizzo","It's About Damn Time by Lizzo","Rumors by Lizzo (ft. Cardi B)"]);
let Megan = new Judge("Megan Thee Stallion","Megan",["Body by Megan Thee Staillion","Big Ole Freak by MEgan Thee Stallion","Savage by Megan Thee Stallion"]);
let AndrewG = new Judge("Andrew Garfield","Andrew");
let Zendaya = new Judge("Zendaya","Zendaya");
let Timothee = new Judge("Timothée Chalamet","Timothee");
let LadyB = new Judge("Lady Bunny","LadyB");
let KimK = new Judge("Kim Kardashian","KimK");
let KylieJ = new Judge("Kylie Jenner","Kylie Jenner");
let KendallJ = new Judge("Kendall Jenner","KendallJ");
let LadyG = new Judge("Lady Gaga","LadyG",["Gypsy by Lady Gaga","G.U.Y by Lady Gaga","Donatella by Lady Gaga"]);
let LonyL = new Judge("Lony Love","LonyL");
let Rhys = new Judge("Rhys Nicholson","Rhys");
let JeremyS = new Judge("Jeremy Scott","JeremyS");
let DonatellaV = new Judge("Donatella Versace","DonatellaV");

let MariahC = new Judge("Mariah Carey","Mariah",["Without You by Mariah Carey","Hero by Mariah Carey","Heartbreaker by Mariah Carey (ft. Jay-Z)"]);
let Cher = new Judge("Cher","Cher",["Heart Of Stone by Cher","(This Is) A Song For The Lonely by Cher","One By One by Cher"]);
let Miley = new Judge("Miley Cyrus","Miley",["Malibu by Miley Cyrus","Adore You by Miley Cyrus","When I Look At You by Miley Cyrus"]);
let JessieJ = new Judge("Jessie J","Jessie",["Who Are You by Jessie J","Nobody's Perfect by Jessie J","Price Tag by Jessie J (ft B.O.B.)"]);
let Howie = new Judge("Howie Mandel","Howie");
let Demi = new Judge("Demi Lovato","Demi",["Heart Attack by Demi Lovato","Stone Cold by Demi Lovato","Confident by Demi Lovato"]);
let Saweetie = new Judge("Saweetie","Saweetie",["Closer by Saweetie (ft H.E.R.)","Best Friends by Saweetie (ft. Doja Cat)","My Type by SAweetie"]);
let KimP = new Judge("Kim Petras","KimP",["Future Starts Now by Kim Petras","Coconuts by Kim Petras","Hillside Boys by Kim Petras"]);
let AvaM = new Judge("Ava Max","Ava",["Naked by Ava Max","Kings & Queens by Ava Max","Torn by Ava Max"]);
let Rihanna = new Judge("Rihanna","Rihanna",["Diamonds by Rihanna","Stay by Rihanna (ft. Mikky Ekko)","Umbrella by Rihanna"]);
let Liza = new Judge("Liza Minelli","Liza");
let Dolly = new Judge("Dolly Parton","Dolly",["Jolene by Dolly Parton","Heartbreaker by Dolly Parton","Yellow Roses by Dolly Parton"]);
let Fran = new Judge("Fran Drescher","Fran");
let Elton = new Judge("Elton John","Elton",["Tiny Dancer by Elton John","Sacrifice by Elton John","Candle In The Wind by Elton John"]);
let Barbara = new Judge("Barbara Streisand","BarbabaS");
let Celine = new Judge("Céline Dion","Celine",["I Drove All Night by Céline Dion","All By Myself by Céline Dion","I'm Alive by Céline Dion"]);
let Janet = new Judge("Janet Jackson","Janet",["Rhythm Nation by Janet Jackson","All For You by Janet Jackson","Together Again by Janet Jackson"]);
let Charli = new Judge("Charli XCX","Charli",["Vroom Vroom by Charli XCX","1999 by Charli XCX","Lightning by Charli XCX"]);
let Katy = new Judge("Katy Perry","Katy",["Unconditionally by Katy Perry","Teenage Dream by Katy Perry","Never Really Over by Katy Perry"]);
let VictoriaB = new Judge("Victoria Beckham","Victoria",["Two Become One by The Spice Girls","Wannabe by The Spice Girls","Stop by The Spice Girls"]);
let Melanie = new Judge("Melanie Chrisholm","MelanieC",["Two Become One by The Spice Girls","Wannabe by The Spice Girls","Stop by The Spice Girls"]);
let MelB = new Judge("Melanie Brown","MelB",["Two Become One by The Spice Girls","Wannabe by The Spice Girls","Stop by The Spice Girls"]);
let Geri = new Judge("Geri Halliwell","Gerri",["Two Become One by The Spice Girls","Wannabe by The Spice Girls","Stop by The Spice Girls"]);
let Emma = new Judge("Emma Bunton","Emma",["Two Become One by The Spice Girls","Wannabe by The Spice Girls","Stop by The Spice Girls"]);
let EmmaS = new Judge("Emma Stone","EmmaS");
let KristenB = new Judge("Kristen Bell","KristenB");
let Brad = new Judge("Brad Pitt","BradP");
let Leonardo = new Judge("Leonardo Di Caprio","LeonardoD");
let RyanG = new Judge("Ryan Gosling","RyanG");
let Rina = new Judge("Rina Sawayama", "Rina",["Lucid by Rina Sawayama","Comme Des Garçons by Rina Sawayama","Tokyo Love Hotel by Rina Sawayama"]);


let guestsjudges = [
    QueenB,Latoya,NickiM,KylieM,Jlo,Madonna,Merle,Lizzo,Megan,AndrewG,Zendaya,Timothee,LadyB,KimK,KylieJ,KendallJ,LadyG,LonyL,Rhys,JeremyS,DonatellaV,
    MariahC,Cher,Miley,JessieJ,Howie,Demi,Saweetie,KimP,AvaM,Rihanna,Liza,Dolly,Fran,Elton,Barbara,Celine,Janet,Charli,Katy,VictoriaB,Melanie,MelB,Geri,Emma,EmmaS,KristenB,Brad,Leonardo,RyanG,Rina
    ];

//challenge modifiers:
let actingChallengeCounter = 0;
let comedyChallengeCounter = 0;
let marketingChallengeCounter = 0;
let danceChallengeCounter = 0;
let designChallengeCounter = 0;
let improvChallengeCounter = 0;
var isDesignChallenge = false;
let rusicalCounter = false;
let ballCounter = false;
let talentShowCounter = false;
let girlGroupCounter = false;
let makeoverCounter = false;
let snatchCounter = false;
let rumixCounter = false;
let lastChallenge = '';
function miniChallenge() {
    let miniChallengeScreen = new Scene();
    miniChallengeScreen.clean();
    miniChallengeScreen.createHeader("Before the challenge...");
    document.body.style.backgroundImage = "url('image/werkroom.webp')";
    let challenge = new MiniChallenge();
    miniChallengeScreen.createBigText("The queens talk a little bit...");
    challenge.generateRandomEvent(miniChallengeScreen);
    miniChallengeScreen.createHorizontalLine();
    miniChallengeScreen.createBigText("Now it's time for the mini-challenge!");
    miniChallengeScreen.createHorizontalLine();
    miniChallengeScreen.createParagraph("", "Description");
    challenge.generateDescription(miniChallengeScreen);
    challenge.rankPerformances();
    //deal with maxi chalenges:
    let challenges = ["actingChallenge()", "comedyChallenge()", "danceChallenge()", "designChallenge()", "improvChallenge()", "marketingChallenge()"];
    //remove from possible challenges list:
    if (actingChallengeCounter == 3)
        challenges.splice(challenges.indexOf("actingChallenge()"), 1);
    if (comedyChallengeCounter == 3)
        challenges.splice(challenges.indexOf("comedyChallenge()"), 1);
    if (marketingChallengeCounter == 3)
        challenges.splice(challenges.indexOf("marketingChallenge()"), 1);
    if (danceChallengeCounter == 2)
        challenges.splice(challenges.indexOf("danceChallenge()"), 1);
    if (designChallengeCounter == 3)
        challenges.splice(challenges.indexOf("designChallenge()"), 1);
    if (improvChallengeCounter == 3)
        challenges.splice(challenges.indexOf("improvChallenge()"), 1);
    createChallenge(challenges, miniChallengeScreen);
}
//GENERAL CHALLENGES:
let team1 = [];
let team2 = [];
let team3 = [];
let isTeamChallenge = false;
class ActingChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["theather piece about "] = 0] = "theather piece about ";
            desc1[desc1["parody film about "] = 1] = "parody film about ";
            desc1[desc1["commercial about "] = 2] = "commercial about ";
            desc1[desc1["60's inspired film about "] = 3] = "60's inspired film about ";
            desc1[desc1["80's inspired film about "] = 4] = "80's inspired film about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["crime."] = 0] = "crime.";
            desc2[desc2["phone apps."] = 1] = "phone apps.";
            desc2[desc2["social media."] = 2] = "social media.";
            desc2[desc2["cancel culture."] = 3] = "cancel culture.";
            desc2[desc2["gayness."] = 4] = "gayness.";
            desc2[desc2["celebrities."] = 5] = "celebrities.";
            desc2[desc2["the future."] = 6] = "the future.";
            desc2[desc2["the rainbow."] = 7] = "the rainbow.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will act in a " + desc1[randomNumber(0, 4)] + desc2[randomNumber(0, 6)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].getActing();
        }
        sortPerformances(currentCast);
    }
}
function actingChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ActingChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 50 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    queensPerformances();
    actingChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Acting");
}
class ComedyChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        let whatChallengeIs = randomNumber(0, 1);
        (function (desc1) {
            desc1[desc1["a comedy routine about "] = 0] = "a comedy routine about ";
            desc1[desc1["a roast about "] = 1] = "a roast about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["love."] = 0] = "love.";
            desc2[desc2["sex."] = 1] = "sex.";
            desc2[desc2["crime."] = 2] = "crime.";
            desc2[desc2["school."] = 3] = "school.";
            desc2[desc2["a popular TV series."] = 4] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 5] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 6] = "Past Drag Race Contestants.";
            desc2[desc2["comedy."] = 7] = "comedy.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[whatChallengeIs] + desc2[randomNumber(0, 7)];
        if (whatChallengeIs == 0) {
            episodeChallenges.push("Stand Up");
        } else {
            episodeChallenges.push("Roast");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getComedy();
        sortPerformances(currentCast);
    }
}
function comedyChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ComedyChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    comedyChallengeCounter++;
    isDesignChallenge = false;
}
class MarketingChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        let whatChallengeIs = randomNumber(0, 1);
        (function (desc1) {
            desc1[desc1["a parody commercial about "] = 0] = "a parody commercial about ";
            desc1[desc1["a parody trailer about "] = 1] = "a parody trailer about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["love."] = 0] = "love.";
            desc2[desc2["sex."] = 1] = "sex.";
            desc2[desc2["crime."] = 2] = "crime.";
            desc2[desc2["school."] = 3] = "school.";
            desc2[desc2["a popular TV series."] = 4] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 5] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 6] = "Past Drag Race Contestants.";
            desc2[desc2["comedy."] = 7] = "comedy.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[whatChallengeIs] + desc2[randomNumber(0, 7)];
        if (whatChallengeIs == 0) {
            episodeChallenges.push("Commercial");
        } else {
            episodeChallenges.push("Marketing");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getMarketing();
        sortPerformances(currentCast);
    }
}
function marketingChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new MarketingChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 60 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    queensPerformances();
    marketingChallengeCounter++;
    isDesignChallenge = false;
}
class DanceChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["the history of disco."] = 0] = "the history of disco.";
            desc1[desc1["RuPaul's biography."] = 1] = "RuPaul's biography.";
            desc1[desc1["rival dance clubs."] = 2] = "rival dance clubs.";
            desc1[desc1["Drag Race."] = 3] = "Drag Race.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will participate in a dance number about " + desc1[randomNumber(0, 3)];
        if (randomNumber(0, 100) >= 50) {
            episodeChallenges.push("Dance");
        } else {
            episodeChallenges.push("Choreo");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDance();
        sortPerformances(currentCast);
    }
}
function danceChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new DanceChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 70 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    queensPerformances();
    danceChallengeCounter++;
    isDesignChallenge = false;
}
class DesignChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["trash."] = 0] = "trash.";
            desc1[desc1["random items."] = 1] = "random items.";
            desc1[desc1["dollar store items."] = 2] = "dollar store items.";
            desc1[desc1["a specific color scheme."] = 3] = "a specific color scheme.";
            desc1[desc1["items inspired by past Drag Race contestants."] = 4] = "items inspired by past Drag Race contestants.";
            desc1[desc1["bags."] = 5] = "bags.";
            desc1[desc1["wigs."] = 6] = "wigs.";
            desc1[desc1["winter items."] = 7] = "winter items.";
            desc1[desc1["summer items."] = 8] = "summer items.";
        })(desc1 || (desc1 = {}));
        if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast && !uk3Premiere && !s9Premiere && !conjoinedQueens) {
            description.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!";
        }
        else if (currentCast.length == totalCastSize && (uk3Premiere || s9Premiere) && !s9PremiereCheck && !uk3PremiereCheck) {
            description.innerHTML = "The queens will bring it to the runway and serve not one but two looks!";
        }
        else
            description.innerHTML = "The queens will do outfits with " + desc1[randomNumber(0, 8)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDesign();
        sortPerformances(currentCast);
    }
}

function designChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new DesignChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    designChallengeCounter++;
    if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast && !uk3Premiere && !s9Premiere && !conjoinedQueens) {
        episodeChallenges.push("Makeover");
        makeoverCounter = true;
    }
    else if (currentCast.length == totalCastSize && (uk3Premiere || s9Premiere) && !s9PremiereCheck && !uk3PremiereCheck){
        episodeChallenges.push("Runway");
    }
    else if (currentCast.length == totalCastSize - 1 && s9Premiere && !s9PremiereCheck)
        episodeChallenges.push("Runway");
    else
        episodeChallenges.push("Design");
}

class ImprovChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        let whatChallengeIs = randomNumber(0, 12);
        (function (desc1) {
            desc1[desc1["political debate."] = 0] = "political debate.";
            desc1[desc1["celebrity interview."] = 1] = "celebrity interview.";
            desc1[desc1["modern morning TV show."] = 2] = "modern morning TV show.";
            desc1[desc1["late-night TV show."] = 3] = "late-night TV show.";
            desc1[desc1["new Bossy Rossy episode."] = 4] = "new Bossy Rossy episode.";
            desc1[desc1["suggestive kids TV show."] = 5] = "suggestive kids TV show.";
            desc1[desc1["Bitchelor show."] = 6] = "Bitchelor show.";
            desc1[desc1["Jersey Justice show."] = 7] = "Jersey Justice show.";
            desc1[desc1["diva worship talk show."] = 8] = "diva worship talk show.";
            desc1[desc1["talent show for people with little talent."] = 9] = "talent show for people with little talent.";
            desc1[desc1["drag queen spoof of the celebrity gossip and drama television show."] = 10] = "drag queen spoof of the celebrity gossip and drama television show.";
            desc1[desc1["pageant, the Miss Loose Jaw Pageant."] = 11] = "pageant, the Miss Loose Jaw Pageant.";
            desc1[desc1["intimate chat show called Pink Table Talk."] = 12] = "intimate chat show called Pink Table Talk.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will improvise in a " + desc1[whatChallengeIs];
        if (whatChallengeIs == 0) {
            episodeChallenges.push("Political Debate");
        } else if (whatChallengeIs == 4) {
            episodeChallenges.push("The Bossy Rossy Show");
        } else if (whatChallengeIs == 6) {
            episodeChallenges.push("The Bitchelor");
        } else {
            episodeChallenges.push("Improv");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();
        sortPerformances(currentCast);
    }
}
function improvChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ImprovChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 50 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    queensPerformances();
    improvChallengeCounter++;
    isDesignChallenge = false;
}
//SPECIAL CHALLENGES:
class SnatchGame {
    generateDescription() {
        let description = document.querySelector("p#Description");
        description.innerHTML = "Today's challenge is... SNATCH GAME!! The queens will do funny celebrity impersonations!";
        if (randomNumber(0, 100) >= 95) {
            episodeChallenges.push("Snatch Game of Love");
        } else {
            episodeChallenges.push("Snatch Game");
        }
    }

    GenerateCharacters(screenToAdd)
    {
        let characters =
        [
            "Beyoncé",
            "Carol Channing",
            "Lady Gaga",
            "Joan Crawford",
            "Jennifer Lopez",
            "Mo'Nique",
            "Cher",
            "Diana Ross",
            "Marilyn Monroe",
            "Taylor Swift",
            "Fran Drescher",
            "Lucille Ball",
            "Maggie Smith",
            "Raven-Symoné",
            "Eartha Kitt",
            "Uzo Aduba",
            "Mae West",
            "Naomi Campbell",
            "Marlene Dietrich",
            "Gigi Gorgeous",
            "NeNe Leakes",
            "Liza Minnelli",
            "Ariadna Gutiérrez",
            "Sofía Vergara",
            "Grace Jones",
            "Paul Lynde",
            "Jenifer Lewis",
            "Metinee \"Lukkade\" Kingpayom",
            "Blue Ivy Carter",
            "Barbra Streisand",
            "Della Reese",
            "Tiffany Haddish",
            "Sophia La",
            "Harvey Fierstein",
            "Jo Anne Worley",
            "Whoopi Goldburg",
            "Rue McClanahan",
            "Leslie Jones",
            "Bernadette Peters",
            "Katherine Hepbur",
            "Lisa Rinna",
            "Patricia Quinn",
            "Edith Piaf",
            "Mariah Carey",
            "Rebecca More",
            "Raven van Dorst",
            "Walter Mercado",
            "Matt Lucas",
            "Miriam Margolyes",
            "Jane Turner",
            "Dolly Parton",
            "Bindi Irwin",
            "Lizzo",
            "Jennifer Coolidge",
            "Catherine O'Hara",
            "Magda Szubanski",
            "Encarnita Rojas",
            "Phyllis Diller",
            "Divine",
            "Kim Catrall",
            "La Toya Jackson",
            "Sophie Anderson",
            "Nikkie Plessen",
            "Kim Holland",
            "Selina Mosinski",
            "Macaulay Culkin",
            "Jocelyn Jee Esien",
            "Jim Carrey",
            "La Veneno",
            "Valeria Marini",
            "Francesca Cipriani",
            "Alice Kessler",
            "Ellen Kessler",
            "Belén Rodríguez",
            "Mike Myers",
            "Kathy Bates",
            "Billy Porter",
            "Ilana Glazer",
            "Drew Barrymore",
            "Gwyneth Paltrow",
            "Verónica Forqué",
            "Miguel Bosé",
            "Paquita Sala"
        ];
        let played = [];
        let playedby = [];
        for (let i = 0; i < currentCast.length; i++)
        {
            let who = randomNumber(0,characters.length-1);
            if(played.indexOf(characters[who])!=-1)
            {
                let number = played.indexOf(characters[who]);
                let changed = 0
                screenToAdd.createImage(currentCast[i].image);
                screenToAdd.createImage(playedby[number].image);
                let unplayed = false;
                while(unplayed==false)
                {
                    changed = randomNumber(0,characters.length-1);
                    if(played.indexOf(characters[changed])!=-1)
                    {
                        unplayed = false;
                    }
                    else
                    {
                        unplayed = true;
                    }
                }

                screenToAdd.createBold(currentCast[i].getName()+" wanted to play "+played[number]+" originally but due to "+playedby[number].getName()+" already playing them, they choose to play "+characters[changed]+".");

                played.push(characters[changed]);
                playedby.push(currentCast[i]);
            }
            else
            {
                screenToAdd.createImage(currentCast[i].image);

                screenToAdd.createBold(currentCast[i].getName()+" will play "+characters[who]+".");

                played.push(characters[who]);
                playedby.push(currentCast[i]);
            } 
        }
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getSnatch();
        sortPerformances(currentCast);
    }
}
function snatchGame() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new SnatchGame();
    challenge.generateDescription();
    challenge.GenerateCharacters(challengeScreen);
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    snatchCounter = true;
}
class Rusical {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc;
        (function (desc) {
            desc[desc["Social Media: The Unverified Rusical."] = 0] = "Social Media: The Unverified Rusical.";
            desc[desc["Halftime Headliners."] = 1] = "Halftime Headliners.";
            desc[desc["CindeRulla: The Rusical."] = 2] = "CindeRulla: The Rusical.";
            desc[desc["Under the Big Top."] = 3] = "Under the Big Top.";
            desc[desc["West End Wendys - The Rusical."] = 4] = "West End Wendys - The Rusical.";
            desc[desc["RuPaul's music carreer."] = 5] = "RuPaul's music carreer.";
            desc[desc["Shade: The Rusical."] = 6] = "Shade: The Rusical.";
            desc[desc["Glamazonian Airways."] = 7] = "Glamazonian Airways.";
            desc[desc["Bitch Perfect."] = 8] = "Bitch Perfect.";
            desc[desc["HERstory of the World'."] = 9] = "HERstory of the World'.";
            desc[desc["Kardashians: The Rusical."] = 10] = "Kardashians: The Rusical.";
            desc[desc["VH1 Divas Live."] = 11] = "VH1 Divas Live.";
            desc[desc["PharmaRusical."] = 12] = "PharmaRusical.";
            desc[desc["Cher: The Unauthorized Rusical."] = 13] = "Cher: The Unauthorized Rusical.";
            desc[desc["Trump: The Rusical."] = 14] = "Trump: The Rusical.";
            desc[desc["Madonna: The Unauthorized Rusical."] = 15] = "Madonna: The Unauthorized Rusical.";
            desc[desc["Máxima - The Rusical."] = 16] = "Máxima - The Rusical.";
            desc[desc["Rats: The Rusical."] = 17] = "Rats: The Rusical.";
            desc[desc["Moulin Ru: The Rusical."] = 18 = "Moulin Ru: The Rusical.";
        })(desc || (desc = {}));
        description.innerHTML = "Today's challenge is... THE RUSICAL!! The queens were tasked to take part in " + desc[randomNumber(0, 18)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRusical();
        sortPerformances(currentCast);
    }
}
function rusical() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Rusical();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    rusicalCounter = true;
    episodeChallenges.push("Rusical");
}
class Ball {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Executive realness, "] = 0] = "Executive realness, ";
            desc1[desc1["Party night, "] = 1] = "Party night, ";
            desc1[desc1["Summer, "] = 2] = "Summer, ";
            desc1[desc1["Elegant, "] = 3] = "Elegant, ";
            desc1[desc1["Sweet 16, "] = 4] = "Sweet 16, ";
            desc1[desc1["Black and white, "] = 5] = "Black and white, ";
            desc1[desc1["Winter, "] = 6] = "Winter, ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["Antique, "] = 0] = "Antique, ";
            desc2[desc2["Rainbow, "] = 1] = "Rainbow, ";
            desc2[desc2["Rich, "] = 2] = "Rich, ";
            desc2[desc2["Space, "] = 3] = "Space, ";
            desc2[desc2["Wild, "] = 4] = "Wild, ";
            desc2[desc2["Water, "] = 5] = "Water, ";
            desc2[desc2["Swimsuit, "] = 6] = "Swimsuit, ";
        })(desc2 || (desc2 = {}));
        let desc3;
        (function (desc3) {
            desc3[desc3["Ice queen."] = 0] = "Ice queen.";
            desc3[desc3["Futuristic."] = 1] = "Futuristic.";
            desc3[desc3["Fire."] = 2] = "Fire.";
            desc3[desc3["Princess."] = 3] = "Princess.";
            desc3[desc3["Jewels."] = 4] = "Jewels.";
            desc3[desc3["Flowers."] = 5] = "Flowers.";
            desc3[desc3["Evening Gown Extravaganza."] = 6] = "Evening Gown Extravaganza.";
        })(desc3 || (desc3 = {}));
        description.innerHTML = "Today's challenge is... THE BALL! The queens will bring three looks to the runway! The themes are: " + desc1[randomNumber(0, 6)] + desc2[randomNumber(0, 6)] + desc3[randomNumber(0, 6)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getBall();
        sortPerformances(currentCast);
    }
}
function ball() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Ball();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    ballCounter = true;
    episodeChallenges.push("Ball");
}
class Rumix {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Read U Wrote U."] = 0] = "Read U Wrote U.";
            desc1[desc1["Category Is."] = 1] = "Category Is.";
            desc1[desc1["Kitty Girl."] = 2] = "Kitty Girl.";
            desc1[desc1["American."] = 3] = "American.";
            desc1[desc1["Super Queen."] = 4] = "Super Queen.";
            desc1[desc1["Queens Everywhere."] = 5] = "Queens Everywhere.";
            desc1[desc1["Rock It (To The Moon)."] = 6] = "Rock It (To The Moon).";
            desc1[desc1[" I Made It / Mirror Song / Losing is the New Winning."] = 7] = " I Made It / Mirror Song / Losing is the New Winning.";
            desc1[desc1["Clap Back."] = 8] = "Clap Back.";
            desc1[desc1["U Wear It Well."] = 9] = "U Wear It Well.";
            desc1[desc1["A Little Bit of Love."] = 10] = "A Little Bit of Love.";
            desc1[desc1["Lucky."] = 11] = "Lucky.";
            desc1[desc1["I'm a Winner, Baby."] = 12] = "I'm a Winner, Baby.";
            desc1[desc1["This Is Our Country."] = 13] = "This Is Our Country.";
            desc1[desc1["Hey Sis, It's Christmas."] = 14] = "Hey Sis, It's Christmas.";
            desc1[desc1["Queen of the North."] = 15] = "Queen of the North.";
            desc1[desc1["Catwalk."] = 16 = "Catwalk.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "Today's challenge is... the rumix! The queens will make a verse and a choreography for " + desc1[randomNumber(0, 16)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
        sortPerformances(currentCast);
    }
}
function rumix() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Rumix();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rumix");
    rumixCounter = true;
}
class GirlGroup {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Break Up (Bye Bye)"] = 0] = "Break Up (Bye Bye)";
            desc1[desc1["Drag Up Your Life"] = 1] = "Drag Up Your Life";
            desc1[desc1["Sitting on a Secret"] = 2] = "Sitting on a Secret";
            desc1[desc1["Don't Funk it Up"] = 3] = "Don't Funk it Up";
            desc1[desc1["Everybody Say Love"] = 4] = "Everybody Say Love";
            desc1[desc1["You Don't Know Me"] = 5] = "You Don't Know Me";
            desc1[desc1["I'm That Bitch"] = 6] = "I'm That Bitch";
            desc1[desc1["I'm in Love!"] = 7] = "I'm in Love!";
            desc1[desc1["Not Sorry Aboot It"] = 8] = "Not Sorry Aboot It";
            desc1[desc1["Condragulations "] = 9] = "Condragulations";
            desc1[desc1["Phenomenon"] = 10] = "Phenomenon";
            desc1[desc1["UK Hun?"] = 11] = "UK Hun?";
            desc1[desc1["Queens Down Under"] = 12] = "Queens Down Under";
            desc1[desc1["Divas"] = 13] = "Divas";
            desc1[desc1["Show Up Queen"] = 14] = "Show Up Queen";
            desc1[desc1["B.D.E (Big Drag Energy)"] = 15] = "B.D.E (Big Drag Energy)";
            desc1[desc1["Bye Flop"] = 16] = "Bye Flop";
            desc1[desc1["Superstar"] = 17] = "Superstar";
            desc1[desc1["So Much Better Than You"] = 18] = "So Much Better Than You";
            desc1[desc1["Can I Get An Amen?"] = 19] = "Can I Get An Amen?";
            desc1[desc1["Oh No She Betta Don't!"] = 20] = "Oh No She Betta Don't!";
            desc1[desc1["He's My Baby"] = 21] = "He's My Baby";
            desc1[desc1["Bad Boy Baby!"] = 22] = "Bad Boy Baby!";
            desc1[desc1["My Baby Is Love"] = 23] = "My Baby Is Love";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The remaining queens will record vocals and perform in a Girl Group number for the original song " + desc1[randomNumber(0, 23)] + ".";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
        sortPerformances(currentCast);
    }
}
function girlgroup() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new GirlGroup();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 50 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4) && episodeCount > 3) {
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Girl Group");
    if (((s12Premiere || porkchopPremiere) && episodeCount <= 2)) {
        girlGroupCounter = false;
    } else {
        girlGroupCounter = true;
    }
}
class TalentShow {
    generateDescription() {
        let description = document.querySelector("p#Description");
        description.innerHTML = "In this first challenge, the queens will prove themselves in a talent show, where they bring all they've got!";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getTalentShow();
        sortPerformances(currentCast);
    }
}
function talentshow() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new TalentShow();
    challenge.generateDescription();
    queenTalents();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    episodeChallenges.push("Talent Show");
    if (s14Premiere && episodeCount == 2 || (lipsync_assassin || all_stars)) {
        talentShowCounter = true;
    }
}
//performance:
function queensPerformances() {
    let performanceScreen = new Scene(); 
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = currentCast.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    if (isDesignChallenge == true || episodeChallenges[episodeChallenges.length - 1] == "Design")
        performanceScreen.createButton("Proceed", "judging()");
    else
        performanceScreen.createButton("Proceed", "runway()", "button2");
}
function teamMaking() {
    let screen = new Scene();
    team1 = [];
    team2 = [];
    team3 = [];
    let t1 ="";
    let t2 ="";
    let t3 ="";
    let twoOrThree = false;
    let castTeams = currentCast.slice(); 
    shuffle(castTeams);
    if (castTeams.length <= 8) {
        team1 = castTeams.splice(0, Math.floor(castTeams.length / 2));
        team2 = [...castTeams];
    }
    else if (castTeams.length >= 9) {
        team1 = castTeams.splice(0, Math.floor(castTeams.length / 3));
        team2 = castTeams.splice(0, Math.floor(castTeams.length / 2));
        team3 = [...castTeams];
        twoOrThree = true;
    }
    screen.createBigText("Team 1");
    for (let i = 0; i < team1.length; i++) {
        screen.createImage(team1[i].image, "blue");
        if(i != team1.length-1)
        {
            t1 += team1[i].getName();
            if(i != team1.length-2)
            {
                t1 += ", ";
            }
        }
        else
        {
            t1 += " and "+team1[i].getName()+" are on Team 1.";
        }
        
    }
    screen.createBold(t1);
    screen.createBigText("Team 2");
    for (let i = 0; i < team2.length; i++) {
        screen.createImage(team2[i].image, "pink");
        if(i != team2.length-1)
        {
            t2 += team2[i].getName();
            if(i != team2.length-2)
            {
                t2 += ", ";
            }
        }
        else
        {
            t2 += " and "+team2[i].getName()+" are on Team 2.";
        }
    }
    screen.createBold(t2);
    if (twoOrThree) {
        screen.createBigText("Team 3");
        for (let i = 0; i < team3.length; i++) {
            screen.createImage(team3[i].image, "green");
            if(i != team3.length-1)
            {
                t3 += team3[i].getName();
                if(i != team3.length-2)
                {
                    t3 += ", ";
                }
            }
            else
            {
                t3 += " and "+team3[i].getName()+" are on Team 3.";
            }
        }
        screen.createBold(t3);
    }
}
//runway:
function runway() {
    let runwayScreen = new Scene();
    runwayScreen.createHorizontalLine();
    let button2 = document.querySelector("button#button2");
    button2.remove();
    runwayScreen.createBigText("Runway!");
    let desc;
    (function (desc) {
        desc[desc["feathers."] = 0] = "feathers.";
        desc[desc["fascinator."] = 1] = "fascinator.";
        desc[desc["pink."] = 2] = "pink.";
        desc[desc["purple."] = 3] = "purple.";
        desc[desc["caftan."] = 4] = "caftan.";
        desc[desc["trains."] = 5] = "trains.";
        desc[desc["yellow."] = 6] = "yellow.";
        desc[desc["white."] = 7] = "white.";
        desc[desc["black."] = 8] = "black.";
        desc[desc["ugly dress."] = 9] = "ugly dress.";
        desc[desc["naughty."] = 10] = "naughty.";
        desc[desc["crazy sexy cool."] = 11] = "crazy sexy cool.";
        desc[desc["country."] = 12] = "country.";
        desc[desc["phoenix."] = 13] = "phoenix.";
        desc[desc["silver."] = 14] = "silver.";
        desc[desc["2 in 1."] = 15] = "2 in 1.";
        desc[desc["surprise!"] = 16] = "surprise!";
        desc[desc["gold."] = 17] = "gold.";
        desc[desc["blue."] = 18] = "blue.";
        desc[desc["fish"] = 19] = "fish";
        desc[desc["butch."] = 20] = "butch.";
        desc[desc["amazon"] = 21] = "amazon";
    })(desc || (desc = {}));
    runwayScreen.createParagraph("The queens will bring it to the runway!");
    if (currentCast.length > 4)
        runwayScreen.createParagraph("The theme is: " + desc[randomNumber(0, 21)]);
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && (all_stars || lipsync_assassin) || currentCast.length == 2 && team)
        runwayScreen.createParagraph("The theme is... best drag!");
    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].getRunway();
    let slay = currentCast.filter(function (queen) { return queen.runwayScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.runwayScore >= 6 && queen.runwayScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.runwayScore >= 16 && queen.runwayScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.runwayScore >= 26; });
    createRunwayDesc(slay, great, good, bad);
    if (currentCast.length > 4)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && porkchopPremiere && premiereCounter < 3)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && (top3 || team))
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && team)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && (top3))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 2 && (top3))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 4 && (allstarUs3Finale))
        runwayScreen.createButton("Proceed", "finaleJuryAS()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        runwayScreen.createButton("Proceed", "finaleASJudging()");
    else if (currentCast.length == 2 && team)
        runwayScreen.createButton("Proceed", "finaleTeamJudging()");
}
//helper functions
////create next challenge
function createChallenge(challenges, miniChallengeScreen) {
    for (let i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    //first design challenge for normal seasons
    if (currentCast.length == totalCastSize && top3 && episodeCount == 1 && s6Premiere == false || currentCast.length == totalCastSize && top4 && episodeCount == 1 && s6Premiere == false || currentCast.length == totalCastSize && team || sweatshop || currentCast == firstCast && s6Premiere || currentCast == secondCast && s6Premiere)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //girl group challenge for Us12 or porkchop premiere
    else if (premiereCounter <= 2 && (s12Premiere || porkchopPremiere))
        miniChallengeScreen.createButton("Proceed", "girlgroup()");
    //uk3 premiere
    else if (currentCast.length == totalCastSize && uk3Premiere && !uk3PremiereCheck)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    else if (currentCast.length == totalCastSize - 1 && s9Premiere && !s9PremiereCheck)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //talent show for all stars and Us14 premiere
    else if (currentCast.length == totalCastSize && !talentShowCounter && (all_stars || lipsync_assassin) || currentCast == firstCast && s14Premiere || currentCast == secondCast && s14Premiere)
        miniChallengeScreen.createButton("Proceed", "talentshow()");
    //snatch game for +10 cast
    else if (totalCastSize >= 10 && currentCast.length == 9 && !team && snatchCounter == false || totalCastSize >= 6 && currentCast.length == 5 && team)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //snatch game for -10 cast
    else if (totalCastSize < 10 && currentCast.length == (totalCastSize - 1) && !team && snatchCounter == false)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //the ball for the third competitive episode for lsftc seasons
    else if (currentCast.length == totalCastSize - 3 && top4 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //same but if above condition doesn't apply (example: snatch game needs to happen before the ball)
    else if (currentCast.length == totalCastSize - 4 && (top4 || (all_stars || lipsync_assassin) && randomNumber(0, 100) < 30) && !ballCounter || currentCast.length == 3 && team)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //Girl Group
    else if (currentCast.length == 8 && !girlGroupCounter && (top3 || top4 || lipsync_assassin))
        miniChallengeScreen.createButton("Proceed", "girlgroup()");
    //rusical
    else if (currentCast.length > 6 && randomNumber(0, 20) >= 19 && !rusicalCounter || currentCast.length > 5 && randomNumber(0, 20) >= 19 && team && !rusicalCounter)
        miniChallengeScreen.createButton("Proceed", "rusical()");
    //makeover
    else if (currentCast.length == 6 && (top3 || top4) && makeoverCounter == false || currentCast.length == 6 && randomNumber(0, 15) == 15 && (all_stars || lipsync_assassin) && makeoverCounter == false)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //rumix
    else if (currentCast.length == 5 && !rumixCounter && top4 && (!smackdown || returningQueen == true || chocolateBarTwistCheck))
        miniChallengeScreen.createButton("Proceed", "rumix()");
    //ball for top3 seasons
    else if (currentCast.length == 4 && top3 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //if no conditions apply, create random challenge
    else {
        let currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
        if (currentChallenge == lastChallenge && currentCast.length != totalCastSize) {
            while (currentChallenge == lastChallenge) {
                currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
            }
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
        else {
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
    }
}
////create performance descriptions CREATE NEW DESCRIPTIONS FOR THIS
function createPerformanceDesc(slay, great, good, bad, flop) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++)
            screen.createImage(slay[i].image, "darkblue");
        screen.createBold("", "slay");
        let slayText = document.getElementById("slay");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the challenge!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++)
            screen.createImage(great[i].image, "royalblue");
        screen.createBold("", "great");
        let greatText = document.getElementById("great");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great performance!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++)
            screen.createImage(good[i].image);
        screen.createBold("", "good");
        let goodText = document.getElementById("good");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good performance.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++)
            screen.createImage(bad[i].image, "pink");
        screen.createBold("", "bad");
        let badText = document.getElementById("bad");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad performance...";
    }
    if (flop.length !== 0) {
        for (let i = 0; i < flop.length; i++)
            screen.createImage(flop[i].image, "tomato");
        screen.createBold("", "flop");
        let flopText = document.getElementById("flop");
        for (let i = 0; i < flop.length; i++)
            flopText.innerHTML += `${flop[i].getName()}, `;
        flopText.innerHTML += "flopped the challenge...";
    }
    CheckForSpecialEvents(slay, great, good, bad, flop);
}
let floppers = false;
let floppersCheck = false;
let slayers = false;
let slayersCheck = false;
let bottom6WayLipsync = false;
let bottom6WayLipsyncCheck = false;
let s14LaLaPaRUZa = false;
let s14LaLaPaRUZaCheck = false;

function CheckForSpecialEvents(slay, great, good, bad, flop) {
    if (slay.length === 0 && great.length === 0 && currentCast.length >= 8 && !floppersCheck && randomNumber(0, 100) >= 80 && !conjoinedCheck)
        floppers = true;
    if (slay.length == currentCast.length && !slayersCheck && !conjoinedCheck)
        slayers = true;
    else if (slay.length + great.length == currentCast.length && !slayersCheck && randomNumber(0, 100) >= 70 && !conjoinedCheck)
        slayers = true;
    if (flop.length + bad.length >= 5 && flop.length + bad.length < 7 && currentCast.length >= 9 && !bottom6WayLipsyncCheck && randomNumber(0, 100) >= 70 && !conjoinedCheck)
        bottom6WayLipsync = true;
    if (flop.length + bad.length >= 7 && great.length + slay.length + good.length > 0 && currentCast.length > 7 && currentCast.length < 10 &&!s14LaLaPaRUZaCheck && randomNumber(0, 100) >= 70 && !conjoinedCheck)
        s14LaLaPaRUZa = true;
}
function createRunwayDesc(slay, great, good, bad) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++) {
            screen.createImage(slay[i].image, "darkblue");
            slay[i].runwayScore = 10;
        }
        screen.createBold("", "slayR");
        let slayText = document.getElementById("slayR");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the runway!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++) {
            screen.createImage(great[i].image, "royalblue");
            great[i].runwayScore = 5;
        }
        screen.createBold("", "greatR");
        let greatText = document.getElementById("greatR");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great runway!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++) {
            screen.createImage(good[i].image);
            good[i].runwayScore = 0;
        }
        screen.createBold("", "goodR");
        let goodText = document.getElementById("goodR");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good runway.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++) {
            screen.createImage(bad[i].image, "pink");
            bad[i].runwayScore = -3;
        }
        screen.createBold("", "badR");
        let badText = document.getElementById("badR");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad runway...";
    }
}
function addQueen() {
    let name = document.getElementById("queenName").value.trim();
    let acting = document.getElementById("actingStat").valueAsNumber;
    let comedy = document.getElementById("comedyStat").valueAsNumber;
    let dance = document.getElementById("danceStat").valueAsNumber;
    let design = document.getElementById("designStat").valueAsNumber;
    let improv = document.getElementById("improvStat").valueAsNumber;
    let runway = document.getElementById("runwayStat").valueAsNumber;
    let lipsync = document.getElementById("lipsyncStat").valueAsNumber;
    let image = document.getElementById("url").value.trim();
    if ((acting || comedy || dance || design || improv || runway || lipsync) < 0 || (acting || comedy || dance || design || improv || runway || lipsync) > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }
    let extension = image.substring(image.lastIndexOf(".") + 1).toLowerCase();
    let noimagemaybe = false;
    if (extension == "png" || extension == "jpg" || extension == ""){
        console.log("Good file");
        if (image == ""){
            image = "noimage";
            noimagemaybe = false;
        }else {
            noimagemaybe = true;
        }
    } else {
        window.alert("Invalid image extension! Use jpg or png instead!");
        document.getElementById("url").value = "";
        return;
    }
    let customQueen = new Queen(name, acting, comedy, dance, design, improv, runway, lipsync, image, noimagemaybe);
    let sameName = false;
    for (let i = 0; i < allCustomQueens.length; i++)
        if (allCustomQueens[i].getName() == customQueen.getName()) {
            window.alert(`There's already a queen with the name ${customQueen.getName()}! Please use another name.`);
            sameName = true;
            break;
        }
    if (sameName == false) {
        allCustomQueens.push(customQueen);
        customQueen.customqueen = true;
        let announce = document.getElementById("announce-new");
        announce.innerHTML = `${customQueen.getName()} added to the queen list!`;
        localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
        setTimeout(() => {
            document.location.reload();
        }, 1500);
    }
}
function customQueenSelectList() {
    let select = document.getElementById("custom-remove");
    for (let i = 0; i < allCustomQueens.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = allCustomQueens[i].getName();
        option.value = i.toString();
        select.appendChild(option);
    }
}
function removeCustomQueen() {
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    let announce = document.getElementById("announce-remove");
    announce.innerHTML = `${allCustomQueens[index].getName()} removed from the queen list!`;
    allCustomQueens.splice(index, 1);
    localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}
function editCustomQueen(){
    let editButton = document.getElementById("edit");
    let addButton = document.getElementById("add");
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    addButton.setAttribute("hidden", "hidden");
    editButton.removeAttribute("hidden");
    document.getElementById("queenName").value = allCustomQueens[index].getName();
    document.getElementById("actingStat").value = allCustomQueens[index]._actingStat;
    document.getElementById("comedyStat").value = allCustomQueens[index]._comedyStat;
    document.getElementById("danceStat").value = allCustomQueens[index]._danceStat;
    document.getElementById("designStat").value = allCustomQueens[index]._designStat;
    document.getElementById("improvStat").value = allCustomQueens[index]._improvStat;
    document.getElementById("runwayStat").value = allCustomQueens[index]._runwayStat;
    document.getElementById("lipsyncStat").value = allCustomQueens[index]._lipsyncStat;
    document.getElementById("url").value = allCustomQueens[index].image;
}
function updateCustomQueen(){
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    let name = document.getElementById("queenName").value.trim();
    let acting = document.getElementById("actingStat").valueAsNumber;
    let comedy = document.getElementById("comedyStat").valueAsNumber;
    let dance = document.getElementById("danceStat").valueAsNumber;
    let design = document.getElementById("designStat").valueAsNumber;
    let improv = document.getElementById("improvStat").valueAsNumber;
    let runway = document.getElementById("runwayStat").valueAsNumber;
    let lipsync = document.getElementById("lipsyncStat").valueAsNumber;
    let image = document.getElementById("url").value.trim();
    if ((acting || comedy || dance || design || improv || runway || lipsync) < 0 || (acting || comedy || dance || design || improv || runway || lipsync) > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }
    let extension = image.substring(image.lastIndexOf(".") + 1).toLowerCase();
    let noimagemaybe = false;
    if (extension == "png" || extension == "jpg" || extension == ""){
        console.log("Good file");
        if (image == ""){
            image = "noimage";
            noimagemaybe = false;
        }else {
            noimagemaybe = true;
        }
    } else {
        window.alert("Invalid image extension! Use jpg or png instead!");
        document.getElementById("url").value = "";
        return;
    }
    let customQueen = new Queen(name, acting, comedy, dance, design, improv, runway, lipsync, image, noimagemaybe);
    allCustomQueens.splice(index, 1);
    allCustomQueens.push(customQueen);
    customQueen.customqueen = true;
    customQueen.custom = true;
    let announce = document.getElementById("announce-new");
    announce.innerHTML = `${customQueen.getName()} updated!`;
    localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}
function randomizeStats() {
    let stats = document.getElementsByClassName("stats");
    for (let i = 0; i < stats.length; i++) {
        stats[i].value = randomNumber(0, 15).toString();
    }
}
let premiereCounter = 0;
let firstCast = [];
let secondCast = [];
function doublePremiere() {
    if (premiereCounter == 0)
        if (s6Premiere || s12Premiere || s14Premiere) {
            shuffle(currentCast);
            firstCast = currentCast.splice(0, Math.floor(currentCast.length / 2));
            secondCast = [...currentCast];
            slayersCheck = true;
        }
    if (premiereCounter == 0) {
        currentCast = firstCast;
        for (let i = 0; i < secondCast.length; i++)
            secondCast[i].addToTrackRecord("");
        premiereCounter++;
        slayersCheck = true;
        newEpisode();
    }
    else if (premiereCounter == 1) {
        currentCast = secondCast;
        for (let i = 0; i < firstCast.length; i++)
            firstCast[i].addToTrackRecord("");
        premiereCounter++;
        slayersCheck = true;
        newEpisode();
    }
    else if (premiereCounter == 2 && s14Premiere) {
        currentCast = [...firstCast, ...secondCast];
        for (let i = 0; i < eliminatedCast.length; i++){
            let queen = eliminatedCast[i];
            if (disqOrDept) {
                if (queen.QueenDisqOrDept){
                    console.log(queen);
                }else{
                    queen.trackRecord.splice(queen.trackRecord.indexOf("ELIM"), 1, " ELIM");
                    currentCast.push(queen);
                    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
                    i--;
                }
            }
            else{
                queen.trackRecord.splice(queen.trackRecord.indexOf("ELIM"), 1, " ELIM");
                currentCast.push(queen);
                eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
                i--;
            }
        }
        premiereCounter++;
        chocolateBarTwistCheck = false;
        slayersCheck = false;
        newEpisode();
    }
    else if (premiereCounter == 2) {
        currentCast = [...firstCast, ...secondCast];
        premiereCounter++;
        slayersCheck = false;
        newEpisode();
    }
}
function porkchopLipsyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createParagraph("After the queens enter the workroom, it's time for them to lip-sync... for their lives!");
    for (let i = 0; i < Math.floor(totalCastSize / 2); i++) {
        screen.createHorizontalLine();
        let queen1 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen1), 1);
        let queen2 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen2), 1);
        if (currentCast.length == 1) {
            let queen3 = currentCast[randomNumber(0, currentCast.length - 1)];
            currentCast.splice(currentCast.indexOf(queen3), 1);
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createImage(queen3.image, "royalblue");
            screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2, queen3];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            queen3 = lipSync[2];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createImage(queen3.image, "orange");
            screen.createBold(`${queen2.getName()} and ${queen3.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            queen3.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2, queen3);
        }
        else {
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createBold(`${queen1.getName()} and ${queen2.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createBold(`${queen2.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2);
        }
    }
    screen.createHorizontalLine();
    screen.createBigText("The porkchop queens will vote out one of their group...");
    screen.createBold("The queens vote...");
    for (let i = 0; i < secondCast.length; i++) {
        secondCast[i].lipstick = secondCast[randomNumber(0, secondCast.length - 1)];
        while (secondCast[i].lipstick.getName() == secondCast[i].getName()) {
            secondCast[i].lipstick = secondCast[randomNumber(0, secondCast.length - 1)];
        }
        secondCast[i].lipstick.votes++;
        screen.createParagraph(`${secondCast[i].getName()} voted for ${secondCast[i].lipstick.getName()}!`);
    }
    screen.createHorizontalLine();
    screen.createBold("The results are in..!");
    for (let i = 0; i < secondCast.length; i++) {
        screen.createBold(`${secondCast[i].getName()}: ${secondCast[i].votes.toString()} votes`);
    }
    screen.createHorizontalLine();
    let queen = secondCast.sort((a, b) => b.votes - a.votes)[0];

    if (secondCast[0].votes == secondCast[1].votes) {
        screen.createBold("It is a tie, the queens must revote between " + secondCast[0].getName() + " and " + secondCast[1].getName() + "!!");
        secondCast[0].votes = 0;
        secondCast[1].votes = 0;
        for (let i = 0; i < secondCast.length; i++) {
            secondCast[i].lipstick = secondCast[randomNumber(0, 1)];
            while (secondCast[i].lipstick.getName() == secondCast[i].getName()) {
                secondCast[i].lipstick = secondCast[randomNumber(0, 1)];
            }
            secondCast[i].lipstick.votes++;
            screen.createParagraph(`${secondCast[i].getName()} voted for ${secondCast[i].lipstick.getName()}!`);
        }
        screen.createHorizontalLine();
        screen.createBold("The results are in..!");
        screen.createBold(`${secondCast[0].getName()}: ${secondCast[0].votes.toString()} votes`);
        screen.createBold(`${secondCast[1].getName()}: ${secondCast[1].votes.toString()} votes`);
        let tiebreaker = secondCast.sort((a, b) => b.votes - a.votes)[0];
        queen = tiebreaker;
        screen.createHorizontalLine();
    }
    screen.createBold(`The queen that's getting the porkchop is... ${queen.getName()}!`);
    firstCast.push(queen);
    secondCast.splice(secondCast.indexOf(queen), 1);
    queen.trackRecord.pop();
    queen.addToTrackRecord("LOSS ")
    episodeChallenges.push("Porkchop Lipsyncs");
    for (let i = 0; i < secondCast.length; i++) {
        secondCast[i].votes = 0;
    }
    screen.createButton("Proceed", "doublePremiere()");
}
function doublePremiereJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createImage(topQueens[0].image, "cyan");
    screen.createImage(topQueens[1].image, "cyan");
    screen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, condragulations, you're the Top 2 of the week!`);
    screen.createParagraph("Nobody is going home tonight!");
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < topQueens.length; i++) {
        topQueens[i].getASLipsync();
    }
    topQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(`${topQueens[0].getName()}, you're a winner baby!`);
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].ppe += 2;
    topQueens[1].addToTrackRecord("TOP2");
    topQueens[1].favoritism += 2;
    topQueens[1].ppe += 1.5;
    screen.createButton("Proceed", "doublePremiere()");
}
function uk3PremiereJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createImage(topQueens[2].image, "lightblue");
    topQueens[2].addToTrackRecord("HIGH");
    topQueens[2].favoritism += 1;
    topQueens[2].ppe += 4;
    screen.createParagraph("", "highs");
    let highs = document.getElementById("highs");
    highs.innerHTML += `${topQueens[2].getName()}, `;
    highs.innerHTML += "good job this week, you're safe.";
    topQueens.splice(2, 1);
    screen.createImage(topQueens[0].image, "cyan");
    screen.createImage(topQueens[1].image, "cyan");
    screen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, condragulations, you're the Top 2 of the week!`);
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < topQueens.length; i++) {
        topQueens[i].getASLipsync();
    }
    topQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(`${topQueens[0].getName()}, you're a winner baby!`);
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].ppe += 5;
    topQueens[1].addToTrackRecord("TOP2");
    topQueens[1].favoritism += 2;
    topQueens[1].ppe += 4.5;
    topQueens.splice(0, 2);
    screen.createHorizontalLine();
    screen.createBold("Now...");
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    //do the same, but for the bottom queens:
    if (bottomQueens.length == 3) {
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipSync()");
}
let currentCast = [];
let eliminatedCast = [];
let fullCast = [];
let safeQueens = [];
let topQueens = [];
let bottomQueens = [];
let top2 = [];
let events = [];
let doubleShantay = false;
let doubleSashay = false;
let episodeChallenges = [];
let episodeCount = 0;
let returningQueen = false;
let noDouble = false;
let chocolateBarTwist = false;
let chocolateBarTwistCheck = false;
let chocolateBarTwistChoosable = false;
let HideLS = false;
let s6Premiere = false;
let s12Premiere = false;
let s14Premiere = false;
let porkchopPremiere = false;
let firstPremiere = false;
let secondPremiere = false;
let uk3Premiere = false;
let s9Premiere = false;
let judgetext = "Rupaul Charles, Michelle Visage, ";

let carsonorross = randomNumber(1,3);

let judgingpanel = [];

let firstjudge = randomNumber(0,guestsjudges.length-1);
let secondjudge;
let thirdjudge;
let issame;
//challenge seasons
let sweatshop = false;
let chaos = false;
function newEpisode() {
        judgingpanel = [];
        judgetext = "";
        judgingpanel.push(Ru);
        judgingpanel.push(Michelle);
        carsonorross = randomNumber(1,3);
        firstjudge = randomNumber(0,guestsjudges.length-1);
        judgetext = "Rupaul Charles, Michelle Visage, ";

        switch(carsonorross){
            case 1:
                secondjudge;
                issame = true;
                while(issame == true)
                {
                    secondjudge = randomNumber(0,guestsjudges.length-1);
                    if(guestsjudges[secondjudge].getName()==guestsjudges[firstjudge].getName())
                    {
                        issame = true;
                    }
                    else
                    {
                        issame = false;
                    }
                }
                judgingpanel.push(Ross);
                judgingpanel.push(guestsjudges[firstjudge]);
                judgingpanel.push(guestsjudges[secondjudge]);
                judgetext += "Ross Matthews, "+guestsjudges[firstjudge].getName()+" and "+guestsjudges[secondjudge].getName()+" !";
                break;
            case 2:
                issame = true;
                while(issame == true)
                {
                    secondjudge = randomNumber(0,guestsjudges.length-1);
                    if(guestsjudges[secondjudge].getName()==guestsjudges[firstjudge].getName())
                    {
                        issame = true;
                    }
                    else
                    {
                        issame = false;
                    }
                }
                judgingpanel.push(Carson);
                judgingpanel.push(guestsjudges[firstjudge]);
                judgingpanel.push(guestsjudges[secondjudge]);
                judgetext += "Carson Kressley, "+guestsjudges[firstjudge].getName()+" and "+guestsjudges[secondjudge].getName()+" !";            
                break;
            case 3:
                judgingpanel.push(Ross);
                judgingpanel.push(Carson);
                judgingpanel.push(guestsjudges[firstjudge]);
                judgetext += "Ross Matthews, Carson Kressley and "+guestsjudges[firstjudge].getName();;
                break;
        }


    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    events = [];
    episodeCount++;
    let queensRemainingScreen = new Scene();
    if (s9Premiere && episodeCount == 1) {
        lateQueen = currentCast[randomNumber(0, currentCast.length - 1)];
        console.log(lateQueen);
        currentCast.splice(currentCast.indexOf(lateQueen), 1);
        lateQueen.addToTrackRecord('');
    }
    if (episodeCount == 1 || premiereCounter <= 2 && (s12Premiere || porkchopPremiere || s6Premiere || s14Premiere ) || episodeCount == 1 && (uk3Premiere || s9Premiere)) {
        queensRemainingScreen.clean();
        queensRemainingScreen.createHeader("Full cast");
        for (let i = 0; i < currentCast.length; i++) {
            fullCast.push(currentCast[i]);
            for (let j = 0; j < currentCast.length; j++) {

                currentCast[i].AddRelation(currentCast[j]);
                if(currentCast[i].getFirstSeason() == currentCast[j].getFirstSeason() && (all_stars || lipsync_assassin))
                {
                    if(currentCast[i].GetRelation(currentCast[j])==0)
                        currentCast[i].ChangeRelation(currentCast[j],1);
                    if(currentCast[j].GetRelation(currentCast[i])==0)
                        currentCast[j].ChangeRelation(currentCast[i],1);
                }
            }
        }
        for (let i = 0; i < currentCast.length; i++) {
            queensRemainingScreen.createImage(currentCast[i].image);

            if(all_stars || lipsync_assassin)
            {
                queensRemainingScreen.createBold("Coming back into the werk-room, it is : "+currentCast[i].getName()+".");
                if(currentCast[i].getName()=="Eve 6000")
                {
                    queensRemainingScreen.createBold("\"Looks like I did have another trick up my sleeve, after all!\"");
                }
                else
                {
                    queensRemainingScreen.createBold("\""+entrancelinesas[randomNumber(0,entrancelinesas.length-1)]+"\"");
                }
                if(randomNumber(0,10)>=8)
                {
                    if(i!=0)
                    {
                        queensRemainingScreen.createBold(currentCast[randomNumber(0,i-1)].getName()+" : \""+entrancelineres[randomNumber(0,entrancelineres.length-1)]+"\"");
                    }
                }

                let countsisters = 0;
                let originalseason = "";
                let originalqueens = [];
                

                console.log(currentCast[i].getFirstSeason());
                switch(currentCast[i].getFirstSeason())
                {
                        case"S1":
                            originalseason = "US Season 1";
                            break;
                        case"US2":
                            originalseason = "US Season 2";
                            break;
                        case"US3":
                            originalseason = "US Season 3";
                            break;
                        case"US4":
                            originalseason = "US Season 4";
                            break;
                        case"US5":
                            originalseason = "US Season 5";
                            break;
                        case"US6":
                            originalseason = "US Season 6";
                            break;
                        case"US7":
                            originalseason = "US Season 7";
                            break;
                        case"US8":
                            originalseason = "US Season 8";
                            break;
                        case"US9":
                            originalseason = "US Season 9";
                            break;
                        case"US10":
                            originalseason = "US Season 10";
                            break;
                        case"US11":
                            originalseason = "US Season 11";
                            break;
                        case"US12":
                            originalseason = "US Season 12";
                            break;
                        case"US13":
                            originalseason = "US Season 13";
                            break;
                        case"US14":
                            originalseason = "US Season 14";
                            break;
                        case"US15":
                            originalseason = "US Season 15";
                            break;
                        case"UK1":
                            originalseason = "UK Season 1";
                            break;
                        case"UK2":
                            originalseason = "UK Season 2";
                            break;
                        case"UK3":
                            originalseason = "UK Season 3";
                            break;
                        case"HO1":
                            originalseason = "Holland Season 1";
                            break;
                        case"HO2":
                            originalseason = "Holland Season 2";
                            break;
                        case"CA1":
                            originalseason = "Canada Season 1";
                            break;
                        case"CA2":
                            originalseason = "Canada Season 2";
                            break;
                        case"ES1":
                            originalseason = "España Season 1";
                            break;
                        case"EUS2":
                            originalseason = "España Season 2";
                            break;
                        case"DU1":
                            originalseason = "Down Under Season 1";
                            break;
                        case"TH1":
                            originalseason = "Thailand Season 1";
                            break;
                        case"TH2":
                            originalseason = "Thailand Season 2";
                            break;
                        case"IT1":
                            originalseason = "Italia Season 1";
                            break;
                        default:
                            originalseason = "NOSEASON";
                            break;
                }
                for (let j = 0; j < i; j++) {
                    if(currentCast[i].getFirstSeason()!="NOSEASON" && currentCast[j].getFirstSeason() == currentCast[i].getFirstSeason() && j != i)
                    {
                        originalqueens.push(currentCast[j]);
                    }
                }
                let queenstext = "";
                for(let q = 0; q<originalqueens.length;q++)
                {
                    if(q!=originalqueens.length-1)
                    {
                        queenstext += originalqueens[q].getName();
                        if(q!=originalqueens.length-1)
                            queenstext += ", ";
                    }
                    else
                    {
                        if(originalqueens.length!=1)
                        {
                            queenstext += " and "+originalqueens[q].getName()+".";
                        }
                        else
                        {
                            queenstext += originalqueens[q].getName()+".";

                        }
                        
                    }
                }
                if(originalqueens.length!=0)
                {
                    if(originalqueens.length==1)
                    {
                        queensRemainingScreen.createBold(currentCast[i].getName()+" is happy to find their Drag Race "+originalseason+" sister : "+queenstext);
                    }
                    else
                    {
                    queensRemainingScreen.createBold(currentCast[i].getName()+" is happy to find their Drag Race "+originalseason+" sisters : "+queenstext);
                    }
                } 

            }
            else
            {
                queensRemainingScreen.createBold("Entering the werk-room, it is : "+currentCast[i].getName()+".");
                queensRemainingScreen.createBold("\""+entrancelinesreg[randomNumber(0,entrancelinesreg.length-1)]+"\"");
                if(randomNumber(0,10)>=7)
                {
                    if(i!=0)
                    {
                        queensRemainingScreen.createBold(currentCast[randomNumber(0,i-1)].getName()+" : \""+entrancelineres[randomNumber(0,entrancelineres.length-1)]+"\"");
                    }
                }
            }
                
        }
    }
    else {
        contestantProgress();
    }
    if (currentCast.length == totalCastSize && team == true)
        queensRemainingScreen.createButton("Proceed", "teamsScreen()");
    else if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && porkchopPremiere && premiereCounter < 3)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && canFinale)
        queensRemainingScreen.createButton("Proceed", "canadaUS2Finale()");
    else if (currentCast.length == 4 && (top3 || team))
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4 || ukvstwFinale)
        queensRemainingScreen.createButton("Proceed", "finaleLS()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        queensRemainingScreen.createButton("Proceed", "finaleAS()");
    else if (currentCast.length == 3 && team)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 2 && team)
        queensRemainingScreen.createButton("Proceed", "finaleTeam()");
    else
        queensRemainingScreen.createButton("Proceed", "finale()");
    //add an empty placement on eliminated queen's track records
    if( (currentCast.length == 4 && (top4 || ukvstwFinale)) || (currentCast.length == 3 && top3) || (currentCast.length == 4 && (all_stars || lipsync_assassin)))
    {
        if(all_stars || lipsync_assassin)
        {
            let missrobbed = eliminatedCast[eliminatedCast.length-1];
            for (let i = 0; i < eliminatedCast.length-1; i++)
            {
                if((missrobbed.ppe / (missrobbed.episodesOn)).toFixed(2) <= (eliminatedCast[i].ppe / (eliminatedCast[i].episodesOn)).toFixed(2))
                {
                    missrobbed = eliminatedCast[i];
                }
            }

            for (let q = 0; q < eliminatedCast.length; q++)
            {
                if(missrobbed.getName() == eliminatedCast[q].getName())
                {
                    eliminatedCast[q].addToTrackRecord('MISS ROBBED');
                }
                else
                {
                    eliminatedCast[q].addToTrackRecord('GUEST');
                }
            }
        }
        else
        {
            let missc = randomNumber(0,eliminatedCast.length-1);
            for (let i = 0; i < eliminatedCast.length; i++)
            {
                if(missc == i)
                {
                    eliminatedCast[i].addToTrackRecord('MISS CONGENIALITY');
                }
                else
                {
                    eliminatedCast[i].addToTrackRecord('GUEST');
                }
            }
        }

    }
    else
    {
        for (let i = 0; i < eliminatedCast.length; i++)
        {
        eliminatedCast[i].addToTrackRecord('');
        }
    }
}
    
function reSimulate() {
    //add eliminated queens again to cast and clean it
    for (let i = 0; i < eliminatedCast.length; i++) {
        currentCast.push(eliminatedCast[i]);
    }
    if (top4) {
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }else if (canFinale){
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }else if(ukvstwFinale){
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }
    currentCast.sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
    eliminatedCast = [];
    firstCast = [];
    secondCast = [];
    fullCast = [];
    premiereCounter = 0;
    episodeCount = 0;
    onFinale = false;
    onTop4Finale = false;
    totalCastSize = currentCast.length;
    disqOrDept = false;
    //clean track records
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].trackRecord = [];
        currentCast[i].favoritism = 0;
        currentCast[i].unfavoritism = 0;
        currentCast[i].finaleScore = 0;
        currentCast[i].votes = 0;
        currentCast[i].ppe = 0;
        currentCast[i].episodesOn = 0;
        currentCast[i].QueenDisqOrDept = false;
        currentCast[i].chocolate = false;
        currentCast[i].relationships = [];
    }
    //clean challenges
    episodeChallenges = [];
    actingChallengeCounter = 0;
    comedyChallengeCounter = 0;
    marketingChallengeCounter = 0;
    danceChallengeCounter = 0;
    designChallengeCounter = 0;
    improvChallengeCounter = 0;
    rusicalCounter = false;
    ballCounter = false;
    talentShowCounter = false;
    girlGroupCounter = false;
    rumixCounter = false;
    makeoverCounter = false;
    snatchCounter = false;
    doubleShantay = false;
    doubleSashay = false;
    returningQueen = false;
    floppers = false;
    floppersCheck = false;
    slayers = false;
    slayersCheck = false;
    bottom6WayLipsync = false;
    bottom6WayLipsyncCheck = false;
    s14LaLaPaRUZa = false;
    s14LaLaPaRUZaCheck = false;
    assasintable = [];
    assasinlipstick = [];
    twinsMakeover = [];
    conjoinedCheck = false;
    s9PremiereCheck = false;
    uk3PremiereCheck = false;
    chocolateBarTwistCheck = false;
    lateQueen = '';
    //refill lip-sync songs and lsa
    lsSongs = allLsSongs;
    allQueens = allQueensCopy;
    if (chocolateBarTwist) {
        if (chocolateBarTwistChoosable){
            chooseGoldenBar();
        }else {
            giveChocolate();
        }
    }
    else if (s6Premiere || s12Premiere || s14Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
let firstLS = [];
let secondLS = [];
let finalLS = [];
let onFinale = false;
let onTop4Finale = false;

function finaleLS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grand finale!");
    screen.createImage(currentCast[0].image, "royalblue");
    screen.createImage(currentCast[1].image, "royalblue");
    screen.createImage(currentCast[2].image, "royalblue");
    screen.createImage(currentCast[3].image, "royalblue");
    screen.createParagraph("Our Top 4 will participate in a lip-sync smackdown for the crown! The preliminaries will now be decided...");
    screen.createHorizontalLine();
    for (let i = 0; i < 2; i++) {
        let q1 = currentCast[randomNumber(0, currentCast.length - 1)];
        firstLS.push(q1);
        currentCast.splice(currentCast.indexOf(q1), 1);
        let q2 = currentCast[randomNumber(0, currentCast.length - 1)];
        secondLS.push(q2);
        currentCast.splice(currentCast.indexOf(q2), 1);
    }
    screen.createBigText("The preliminaries will be: ");
    screen.createImage(firstLS[0].image, "darkblue");
    screen.createImage(firstLS[1].image, "darkblue");
    screen.createBold(firstLS[0].getName() + " vs. " + firstLS[1].getName());
    screen.createParagraph("and");
    screen.createImage(secondLS[0].image, "darkred");
    screen.createImage(secondLS[1].image, "darkred");
    screen.createBold(secondLS[0].getName() + " vs. " + secondLS[1].getName());
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "finaleLipSyncs()");
}
let finaleof4gurl = false;
function finaleLipSyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The Lip-Syncs...");
    screen.createParagraph(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < firstLS.length; i++) {
        firstLS[i].getLipsync();
    }
    firstLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    if (firstLS[0].lipsyncScore == firstLS[1].lipsyncScore && firstLS[0].lipsyncScore > 6 && firstLS[1].lipsyncScore > 6) {
        screen.createImage(firstLS[0].image, "silver");
        screen.createImage(firstLS[1].image, "silver");
        screen.createBold(firstLS[0].getName() + ", " + firstLS[1].getName() + ", shantay you both stay.");
        finalLS.push(firstLS[0]);
        finalLS.push(firstLS[1]);
        isThisA3Way = true;
    } else if (chocolateBarTwist  && !chocolateBarTwistCheck) {
        screen.createImage(firstLS[0].image, "silver");
        screen.createBold(firstLS[0].getName() + ", shantay you stay.");
        screen.createBold(firstLS[1].getName() + ", now your fate rests in the hands of the drag gods.");
        screen.createBold("If you have the golden chocolate bar, you will be safe.");
        finalLS.push(firstLS[0]);
        if (chocolateBarCheck(firstLS[1]) == true) {
            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
            screen.createImage(firstLS[1].image, "gold");
            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
            screen.createBold(firstLS[1].getName() + "!! Condragtulations, you are safe to slay another day and you move on into the final lipsync!!");
            firstLS[1].unfavoritism += 3;
            finalLS.push(firstLS[1]);
            chocolateBarTwistCheck = true;
            isThisA3Way = true;
        } else {
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            firstLS[1].addToTrackRecord("LOST 1ST ROUND");
            eliminatedCast.unshift(firstLS[1]);
            screen.createImage(firstLS[1].image, "sienna");
            screen.createBold(firstLS[1].getName() + ", sashay away...");
        }
    } 
    else {
        finalLS.push(firstLS[0]);
        firstLS[1].addToTrackRecord("LOST 1ST ROUND");
        eliminatedCast.unshift(firstLS[1]);
        screen.createImage(firstLS[0].image, "silver");
        screen.createBold(firstLS[0].getName() + ", shantay you stay.");
        screen.createImage(firstLS[1].image, "sienna");
        screen.createBold(firstLS[1].getName() + ", sashay away...");
    }
    screen.createHorizontalLine();
    screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < secondLS.length; i++) {
        secondLS[i].getASLipsync();
    }
    secondLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    if (secondLS[0].lipsyncScore == secondLS[1].lipsyncScore && secondLS[0].lipsyncScore > 6 && secondLS[1].lipsyncScore > 6) {
        screen.createImage(secondLS[0].image, "silver");
        screen.createImage(secondLS[1].image, "silver");
        screen.createBold(secondLS[0].getName() + ", " + secondLS[1].getName() + ", shantay you both stay.");
        finalLS.push(secondLS[0]);
        finalLS.push(secondLS[1]);
        if (!isThisA3Way) {
            isThisA3Way = true;
        } else {
            finaleof4gurl = true;
        }
    } else if (chocolateBarTwist  && !chocolateBarTwistCheck) {
        screen.createImage(secondLS[0].image, "silver");
        screen.createBold(secondLS[0].getName() + ", shantay you stay.");
        screen.createBold(secondLS[1].getName() + ", now your fate rests in the hands of the drag gods.");
        screen.createBold("If you have the golden chocolate bar, you will be safe.");
        finalLS.push(secondLS[0]);
        if (chocolateBarCheck(secondLS[1]) == true) {
            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
            screen.createImage(secondLS[1].image, "gold");
            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
            screen.createBold(secondLS[1].getName() + "!! Condragtulations, you are safe to slay another day and you move on into the final lipsync!!");
            secondLS[1].unfavoritism += 3;
            chocolateBarTwistCheck = true;
            finalLS.push(secondLS[1]);
            if (!isThisA3Way) {
                isThisA3Way = true;
            } else {
                finaleof4gurl = true;
            }
        } else {
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            secondLS[1].addToTrackRecord("LOST 2ND ROUND");
            eliminatedCast.unshift(secondLS[1]);
            screen.createImage(secondLS[1].image, "sienna");
            screen.createBold(secondLS[1].getName() + ", sashay away...");
        }
    }  
    else {
        finalLS.push(secondLS[0]);
        secondLS[1].addToTrackRecord("LOST 2ND ROUND");
        eliminatedCast.unshift(secondLS[1]);
        screen.createImage(secondLS[0].image, "silver");
        screen.createBold(secondLS[0].getName() + ", shantay you stay.");
        screen.createImage(secondLS[1].image, "sienna");
        screen.createBold(secondLS[1].getName() + ", sashay away...");
    }
    screen.createButton("Proceed", "finalLipSync()");
}
function finalLipSync() {
    onTop4Finale = true;
    onFinale = true;
    chocolateBarTwistCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end...");
    if (finaleof4gurl) {
        screen.createBold(finalLS[0].getName() + ", " + finalLS[1].getName() + ", " + finalLS[2].getName() + " and " + finalLS[3].getName() + " will lip-sync for the crown...!");
        screen.createImage(finalLS[0].image);
        screen.createImage(finalLS[1].image);
        screen.createImage(finalLS[2].image);
        screen.createImage(finalLS[3].image);
        lsSong();
        screen.createHorizontalLine();
        screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
        for (let i = 0; i < finalLS.length; i++)
            finalLS[i].getFinale();
        finalLS.sort((a, b) => b.finaleScore - a.finaleScore);
        let winner = 0;
        if (randomNumber(0, 100) >= 95) {
            winner = randomNumber(1, 3);
        }
        screen.createImage(finalLS[winner].image, "yellow");
        screen.createBigText(finalLS[winner].getName() + "!!");
        screen.createBold("Now prance, my queen!");
        finalLS[winner].addToTrackRecord("WINNER");
        for (let i = 0; i < finalLS.length; i++) {
            if (!(finalLS.indexOf(finalLS[i]) == winner)) {
                finalLS[i].addToTrackRecord("LOST 3RD ROUND");
                eliminatedCast.unshift(finalLS[i]);
            }
        }
        if (winner == 0) {
            finalLS.splice(1, 3);
        } else if (winner == 1) {
            finalLS.splice(2, 2);
            finalLS.splice(0, 1);
        } else if (winner == 2) {
            finalLS.splice(0, 2);
            finalLS.splice(1, 1);
        } else if (winner == 3) {
            finalLS.splice(0, 3);
        }
    } else if (isThisA3Way) {
        screen.createBold(finalLS[0].getName() + ", " + finalLS[1].getName() + " and " + finalLS[2].getName() + " will lip-sync for the crown...!");
        screen.createImage(finalLS[0].image);
        screen.createImage(finalLS[1].image);
        screen.createImage(finalLS[2].image);
        lsSong();
        screen.createHorizontalLine();
        screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
        for (let i = 0; i < finalLS.length; i++)
            finalLS[i].getFinale();
        finalLS.sort((a, b) => b.finaleScore - a.finaleScore);
        let winner = 0;
        if (randomNumber(0, 100) >= 95) {
            winner = randomNumber(1, 2);
        }
        screen.createImage(finalLS[winner].image, "yellow");
        screen.createBigText(finalLS[winner].getName() + "!!");
        screen.createBold("Now prance, my queen!");
        finalLS[winner].addToTrackRecord("WINNER");
        for (let i = 0; i < finalLS.length; i++) {
            if (!(finalLS.indexOf(finalLS[i]) == winner)) {
                finalLS[i].addToTrackRecord("LOST 3RD ROUND");
                eliminatedCast.unshift(finalLS[i]);
            }
        }
        if (winner == 0) {
            finalLS.splice(1, 2);
        } else if (winner == 1) {
            finalLS.splice(2, 1);
            finalLS.splice(0, 1);
        } else if (winner == 2) {
            finalLS.splice(0, 2);
        }
    } else {
        screen.createBold(finalLS[0].getName() + " and " + finalLS[1].getName() + " will lip-sync for the crown...!");
        screen.createImage(finalLS[0].image);
        screen.createImage(finalLS[1].image);
        lsSong();
        screen.createHorizontalLine();
        screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
        for (let i = 0; i < finalLS.length; i++)
            finalLS[i].getFinale();
        finalLS.sort((a, b) => b.finaleScore - a.finaleScore);
        if (finalLS[0].finaleScore == finalLS[1].finaleScore && randomNumber(0, 100) >= 50) {
            screen.createBold("For the FIRST TIME in Drag Race herstory, you are both winners, baby");
            screen.createImage(finalLS[0].image, "yellow");
            screen.createImage(finalLS[1].image, "yellow");
            screen.createBigText(finalLS[0].getName() + " and " + finalLS[1].getName() + "!!");
            screen.createBold("Now prance, my queens!");
            finalLS[0].addToTrackRecord("WINNER");
            finalLS[1].addToTrackRecord("WINNER");
            eliminatedCast.unshift(finalLS[1]);
            finalLS.splice(1, 1);
        }else{
            let winner = 0;
            if (randomNumber(0, 100) >= 95) {
                winner = 1;
            }
            screen.createImage(finalLS[winner].image, "yellow");
            screen.createBigText(finalLS[winner].getName() + "!!");
            screen.createBold("Now prance, my queen!");
            finalLS[winner].addToTrackRecord("WINNER");
            for (let i = 0; i < finalLS.length; i++) {
                if (!(finalLS.indexOf(finalLS[i]) == winner)) {
                    finalLS[i].addToTrackRecord("LOST 3RD ROUND");
                    eliminatedCast.unshift(finalLS[i]);
                    finalLS.splice(i, 1);
                }
            }
        }
    }
    isThisA3Way = false;
    finaleof4gurl = false;
    currentCast.push(finalLS[0]);
    screen.createButton("Proceed", "contestantProgress()");
}
function finale() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    screen.createParagraph("Our Top 3 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleTeam() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createParagraph("Our Top 4 will participate in a music video for RuPaul's newest single!");
    screen.createImage(currentCast[0].QueenB.image, "black");
    screen.createImage(currentCast[1].QueenB.image, "black");
    screen.createImage(currentCast[0].QueenA.image, "black");
    screen.createImage(currentCast[1].QueenA.image, "black");
    screen.createButton("Proceed", "runway()", "button2");
}
let isThisA3Way = false;
function finaleJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    if (randomNumber(0, 100) <= 90){
        screen.createImage(currentCast[2].image, "sienna");
        screen.createBold(currentCast[2].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
        currentCast[2].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[2]);
        currentCast.splice(2, 1);
        screen.createHorizontalLine();
        screen.createImage(currentCast[0].image, "silver");
        screen.createImage(currentCast[1].image, "silver");
        screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
        lsSong();
    } else {
        screen.createBold("For the first time in Drag Race herstory, we are breaking all the rules!");
        screen.createHorizontalLine();
        screen.createImage(currentCast[0].image, "silver");
        screen.createImage(currentCast[1].image, "silver");
        screen.createImage(currentCast[2].image, "silver");
        screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + " and " + currentCast[2].getName() + ", the three of you will lipsync for your lives!!");
        lsSong();
        isThisA3Way = true;
    }
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleTeamJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createBold(currentCast[1].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");
    screen.createHorizontalLine();
    currentCast[1].QueenA.addToTrackRecord("ELIMINATED");
    currentCast[1].QueenB.addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[1].QueenA);
    eliminatedCast.unshift(currentCast[1].QueenB);
    currentCast.splice(1, 1);
    if (randomNumber(0, 100) <= 50) {
        currentCast.push(currentCast[0].QueenA);
        currentCast.push(currentCast[0].QueenB);
    }
    else {
        currentCast.push(currentCast[0].QueenB);
        currentCast.push(currentCast[0].QueenA);
    }
    if (randomNumber(0, 100) <= 80) {
        currentCast[0].QueenB.finaleScore += 1;
    }
    currentCast.splice(0, 1);
    screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleFinale() {
    onFinale = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end.");
    screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
    chocolateBarTwistCheck = true;
    if (currentCast[0].finaleScore == currentCast[1].finaleScore && randomNumber(0, 100) >= 90) {
        screen.createBold("For the FIRST TIME in Drag Race herstory, you are both winners, baby");
        screen.createImage(currentCast[0].image, "yellow");
        screen.createImage(currentCast[1].image, "yellow");
        screen.createBigText(currentCast[0].getName() + " and " + currentCast[1].getName() + "!!");
        screen.createBold("Now prance, my queens!");
        if (!allstarUs3Finale && !ukvstwFinale && !top2finaleAS && (all_stars || lipsync_assassin) || isThisA3Way) {
            currentCast[2].addToTrackRecord("RUNNER UP");
            eliminatedCast.unshift(currentCast[2]);
            currentCast.splice(2, 1);
        }
        currentCast[0].addToTrackRecord("WINNER");
        currentCast[1].addToTrackRecord("WINNER");
        eliminatedCast.unshift(currentCast[1]);
        currentCast.splice(1, 1);
    }else{
        screen.createImage(currentCast[0].image, "yellow");
        screen.createBigText(currentCast[0].getName() + "!!");
        screen.createBold("Now prance, my queen!");
        currentCast[0].addToTrackRecord("WINNER");
        currentCast[1].addToTrackRecord("RUNNER UP");
        eliminatedCast.unshift(currentCast[1]);
        currentCast.splice(1, 1);
        if (!allstarUs3Finale && !ukvstwFinale && !top2finaleAS && (all_stars || lipsync_assassin) || isThisA3Way) {
            currentCast[1].addToTrackRecord("RUNNER UP");
            eliminatedCast.unshift(currentCast[1]);
            currentCast.splice(1, 1);
        }
    }
    isThisA3Way = false;
    top2finaleAS = false;
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "contestantProgress()");
}
function finaleAS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grand finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    screen.createParagraph("Our Top 4 will create verses and choreography for a new original song!");
    screen.createButton("Proceed", "runway()", "button2");
}
let top2finaleAS = false;
function finaleASJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    if (randomNumber(0, 100) <= 90) {
        screen.createImage(currentCast[3].image, "sienna");
        screen.createBold(currentCast[3].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
        currentCast[3].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[3]);
        currentCast.splice(3, 1);
        screen.createHorizontalLine();
        for (let i = 0; i < currentCast.length; i++)
            screen.createImage(currentCast[i].image, "silver");
        screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", " + currentCast[2].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
        lsSong();
    } else {
        screen.createImage(currentCast[2].image, "sienna");
        screen.createImage(currentCast[3].image, "sienna");
        screen.createBold(currentCast[2].getName() + ", " + currentCast[3].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");
        currentCast[2].addToTrackRecord("ELIMINATED");
        currentCast[3].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[3]);
        eliminatedCast.unshift(currentCast[2]);
        currentCast.splice(2, 2);
        for (let i = 0; i < currentCast.length; i++)
            screen.createImage(currentCast[i].image, "silver");
        screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
        lsSong();
        top2finaleAS = true;
    }
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleJuryAS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The jury!");
    screen.createParagraph("The eliminated queens are coming back, back, back again!");
    screen.createHorizontalLine();
    let voting = [];
    for (let i = 0; i < currentCast.length; i++){
        screen.createImage(currentCast[i].image);
        currentCast[i].votes = 0;
    }
    screen.createBold("After the Top 4 All Stars had their meetings with the eliminated queens... The eliminated queens vote!!");
    for (let i = 0; i < eliminatedCast.length; i++) {
        voting = [...currentCast];
        eliminatedCast[i].lipstick = voting[randomNumber(0, voting.length - 1)];
        eliminatedCast[i].lipstick.votes += 2;
        voting.splice(voting.indexOf(eliminatedCast[i].lipstick), 1);
        screen.createImage(eliminatedCast[i].image , "black");
        screen.createImage(eliminatedCast[i].lipstick.image , "yellow");
        screen.createParagraph(`${eliminatedCast[i].getName()} voted for ${eliminatedCast[i].lipstick.getName()}! As their first option.`);
        eliminatedCast[i].lipstick = voting[randomNumber(0, voting.length - 1)];
        eliminatedCast[i].lipstick.votes += 1;
        screen.createImage(eliminatedCast[i].image , "black");
        screen.createImage(eliminatedCast[i].lipstick.image , "silver");
        screen.createParagraph(`${eliminatedCast[i].getName()} voted for ${eliminatedCast[i].lipstick.getName()}! As their second option.`);
    }
    screen.createHorizontalLine();
    screen.createBold("The results are in..!!");
    for (let i = 0; i < currentCast.length; i++) {
        screen.createBold(`${currentCast[i].getName()}: ${currentCast[i].votes.toString()} points`);
    }
    screen.createHorizontalLine();
    let queen = currentCast.sort((a, b) => b.votes - a.votes)[0];
    let queen1 = currentCast.sort((a, b) => b.votes - a.votes)[1];
    if (currentCast[1].votes == currentCast[2].votes) {
        screen.createBold("It is a tie, the queens must revote between " + currentCast[1].getName() + " and " + currentCast[2].getName() + "!!");
        let ogvote = currentCast[1].votes;
        currentCast[1].votes = 0;
        currentCast[2].votes = 0;
        for (let i = 0; i < eliminatedCast.length; i++) {
            voting = [currentCast[1], currentCast[2]];
            eliminatedCast[i].lipstick = voting[randomNumber(0, voting.length - 1)];
            eliminatedCast[i].lipstick.votes += 1;
            screen.createImage(eliminatedCast[i].image , "black");
            screen.createImage(eliminatedCast[i].lipstick.image , "yellow");
            screen.createParagraph(`${eliminatedCast[i].getName()} voted for ${eliminatedCast[i].lipstick.getName()}! to be in the finale!`);
        }
        screen.createHorizontalLine();
        screen.createBold("The results are in..!");
        for (let i = 0; i < voting.length; i++) {
            screen.createBold(`${voting[i].getName()}: ${voting[i].votes.toString()} points`);
        }
        let tiebreaker = voting.sort((a, b) => b.votes - a.votes)[0];
        screen.createBold(`${tiebreaker.getName()} moves into the finale!!`);
        tiebreaker.votes = ogvote;
        voting[1] = ogvote;
        queen1 = tiebreaker;
    }
    screen.createBold(`${queen.getName()} and ${queen1.getName()} are the Top 2 of the season!!`);
    if (queen1 == currentCast[1]) {
        currentCast[2].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[2]);
        currentCast[3].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[3]);
        currentCast.splice(2, 2);
    } else {
        currentCast[1].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[1]);
        currentCast[3].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[3]);
        currentCast.splice(1, 3);
        currentCast.push(queen1);
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    screen.createButton("Proceed", "finaleFinale()");
}
function canadaUS2Finale() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Our Top 4 is about to become a Top 3...");
    screen.createImage(currentCast[0].image, "royalblue");
    screen.createImage(currentCast[1].image, "royalblue");
    screen.createImage(currentCast[2].image, "royalblue");
    screen.createImage(currentCast[3].image, "royalblue");
    screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", " + currentCast[2].getName() + ", " + currentCast[3].getName() + ", you will all be competing in a lipsync batte royale!!");
    screen.createHorizontalLine();
    for (let i = 0; i < 2; i++) {
        let q1 = currentCast[randomNumber(0, currentCast.length - 1)];
        firstLS.push(q1);
        currentCast.splice(currentCast.indexOf(q1), 1);
        let q2 = currentCast[randomNumber(0, currentCast.length - 1)];
        secondLS.push(q2);
        currentCast.splice(currentCast.indexOf(q2), 1);
    }
    screen.createBigText("The lipsyncs will be: ");
    screen.createImage(firstLS[0].image, "darkblue");
    screen.createImage(firstLS[1].image, "darkblue");
    screen.createBold(firstLS[0].getName() + " vs. " + firstLS[1].getName());
    screen.createParagraph("and");
    screen.createImage(secondLS[0].image, "darkred");
    screen.createImage(secondLS[1].image, "darkred");
    screen.createBold(secondLS[0].getName() + " vs. " + secondLS[1].getName());
    episodeChallenges.push("Lipsync For The Finale");
    screen.createButton("Proceed", "canadaUS2LipSyncs()");

   
}
function canadaUS2LipSyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Let the battle begin!!");
    screen.createBold(firstLS[0].getName() + " and " + firstLS[1].getName() + " will lip-sync for the finale...!");
    lsSong();
    for (let i = 0; i < firstLS.length; i++) {
        firstLS[i].getLipsync();
    }
    firstLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(firstLS[1]);
    firstLS[0].addToTrackRecord("TOP 3<br><small>Win round 1</small>");
    screen.createImage(firstLS[0].image, "silver");
    screen.createBold(firstLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
    currentCast.unshift(firstLS[0]);
    screen.createImage(firstLS[1].image, "sienna");
    screen.createBold(firstLS[1].getName() + ", you will have one more chance to redeem yourself...");
    screen.createHorizontalLine();
    screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < secondLS.length; i++) {
        secondLS[i].getASLipsync();
    }
    secondLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(secondLS[1]);
    secondLS[0].addToTrackRecord("TOP 3<br><small>Win round 2</small>");
    screen.createImage(secondLS[0].image, "silver");
    screen.createBold(secondLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
    currentCast.unshift(secondLS[0]);
    screen.createImage(secondLS[1].image, "sienna");
    screen.createBold(secondLS[1].getName() + ", you will have one more chance to redeem yourself...");
    screen.createHorizontalLine();
    screen.createParagraph(finalLS[0].getName() + " and " + finalLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < finalLS.length; i++) {
        finalLS[i].getASLipsync();
    }
    finalLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    if (finalLS[1].chocolate) {
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            finalLS[1].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
            screen.createImage(finalLS[1].image, "silver");
            screen.createBold(finalLS[1].getName() + ", shantay you stay. We will see you at the finale!!");
            currentCast.unshift(finalLS[1]);
            screen.createBold(finalLS[0].getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            screen.createBold(finalLS[0].getName() + ", sashay away...");
            finalLS[0].addToTrackRecord("ELIM");
            finalLS[0].unfavoritism += 5;
            eliminatedCast.unshift(finalLS[0]);
        } else {
            finalLS[1].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
            screen.createImage(finalLS[1].image, "silver");
            screen.createBold(finalLS[1].getName() + ", shantay you stay. We will see you at the finale!!");
            currentCast.unshift(finalLS[1]);
            eliminatedCast.unshift(finalLS[0]);
            screen.createImage(finalLS[0].image, "sienna");
            screen.createBold(finalLS[0].getName() + ", sashay away...");
            finalLS[0].addToTrackRecord("ELIM");
        }
    } else {
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            finalLS[0].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
            screen.createImage(finalLS[0].image, "silver");
            screen.createBold(finalLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
            currentCast.unshift(finalLS[0]);
            screen.createBold(finalLS[1].getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            eliminatedCast.unshift(finalLS[1]);
            screen.createImage(finalLS[1].image, "sienna");
            screen.createBold(finalLS[1].getName() + ", sashay away...");
            finalLS[1].addToTrackRecord("ELIM");
        } else {
        finalLS[0].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
        screen.createImage(finalLS[0].image, "silver");
        screen.createBold(finalLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
        currentCast.unshift(finalLS[0]);
        eliminatedCast.unshift(finalLS[1]);
        screen.createImage(finalLS[1].image, "sienna");
        screen.createBold(finalLS[1].getName() + ", sashay away...");
        finalLS[1].addToTrackRecord("ELIM");
        }
    }
    episodeCount++;

        let missc = randomNumber(0,eliminatedCast.length-1);
        for (let i = 0; i < eliminatedCast.length; i++)
        {
            if(missc == i)
            {
                eliminatedCast[i].addToTrackRecord('MISS CONGENIALITY');
            }
            else
            {
                eliminatedCast[i].addToTrackRecord('GUEST');
            }
        }
    screen.createButton("Proceed", "finale()");
}
function contestantProgress() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Contestant Progress");
    document.body.style.backgroundImage = "url('image/bg.png')";
    let main = document.querySelector("div#MainBlock");
    let centering = document.createElement("center");
    let trackRecords = document.createElement("table");
    trackRecords.setAttribute("id", "trackRecord");
    if (totalCastSize >= 12 && totalCastSize < 15)
        trackRecords.setAttribute("style", "font-size: 85%;");
    if (totalCastSize >= 15)
        trackRecords.setAttribute("style", "font-size: 75%");
    let header = document.createElement("tr");
    trackRecords.appendChild(header);
    let th = document.createElement("th");
    th.innerHTML = "Queen";
    th.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
    header.appendChild(th);
    let th_i = document.createElement("th");
    th_i.innerHTML = "Photo";
    th_i.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 60px;");
    header.appendChild(th_i);
    if(!team)
    {
    let th_c = document.createElement("th");
    th_c.innerHTML = "Country";
    th_c.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 60px;");
    header.appendChild(th_c);
    }
    for (let i = 0; i < episodeChallenges.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = episodeChallenges[i];
        th.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 75px;");
        header.appendChild(th);
    }
    let th_2 = document.createElement("th");
    th_2.innerHTML = "PPE";
    th_2.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 35px;");
    header.appendChild(th_2);
    let winner = document.createElement("tr");
    let name = document.createElement("td");
    name.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px;");
    if (onFinale) {
        let winnerQueen;
        if (!top4) {
            if (ukvstwFinale){
                winnerQueen = finalLS[0];
            }else{
                winnerQueen = currentCast[0];
            }
        }
        else if (onTop4Finale)
            winnerQueen = finalLS[0];
        else
            winnerQueen = currentCast[0];
        name.innerHTML = winnerQueen.getName();
        winner.appendChild(name);
        let photo = document.createElement("td");
        photo.setAttribute("style", "background: url("+ winnerQueen.image +"); background-size: 106px 106px; background-position: center;");
        winner.appendChild(photo);
        if(!team)
        {
        let country = document.createElement("td");
        country.setAttribute("style", "background: url("+ winnerQueen.country +"); background-size: 106px 106px; background-position: center;");
        winner.appendChild(country);
        }
        for (let i = 0; i < winnerQueen.trackRecord.length + 1; i++) {
            let placement = document.createElement("td");
            placement.innerHTML = winnerQueen.trackRecord[i];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 1</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffd100; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 2</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffae00; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 3</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ff7c00; color: #000;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "HIGH TEAM") {
                placement.setAttribute("style", "background-color: aquamarine;");
            }
            else if (placement.innerHTML == "BTM2 ") {
                placement.setAttribute("style", "background-color: #FA8072;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5" || placement.innerHTML == "BTM6" || placement.innerHTML == "BTM") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == " BTM2") {
                placement.setAttribute("style", "background-color: hotpink;");
            }
            else if (placement.innerHTML == "CHOC") {
                placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FC4545;");
            }
            else if (placement.innerHTML == " ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: deeppink;");
            }
            else if (placement.innerHTML == " ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkred; color:white");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
                if (allstarUs3Finale)
                    placement.innerHTML += " <br><small> (" + winnerQueen.votes + " points) </small>";
            }
            else if (placement.innerHTML == "RUNNER UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
            }
            else if (placement.innerHTML == "LOST 1ST ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FF7C00;");
            }
            else if (placement.innerHTML == "LOST 2ND ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFAE00;");
            }
            else if (placement.innerHTML == "LOST 3RD ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFD100;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "  WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: #2238B4; color: white;");
            }
            else if (placement.innerHTML == "WIN+RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: forestgreen; color: white;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == "SAFE ") {
                    placement.setAttribute("style", "background-color: palegreen; color:#000;");
            }
            else if (placement.innerHTML == " SAFE ") {
                    placement.setAttribute("style", "background-color: #7D1935; color:#000;");
            }
            else if (placement.innerHTML == " SAFE") {
                placement.setAttribute("style", "background-color: magenta; color:white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 1</small>") {
                placement.setAttribute("style", "background-color: lightcoral; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 2</small>") {
                placement.setAttribute("style", "background-color: indianred; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 3</small>") {
                placement.setAttribute("style", "background-color: crimson; color: white;");
            }
            else if (placement.innerHTML == "RUN") {
                    placement.setAttribute("style", "background-color: magenta; color:white;");
            }
            else if (placement.innerHTML == "RUN ") {
                    placement.setAttribute("style", "background-color: #D3FFB5; color:#000; font-weight: bold;");
            }
            else if (placement.innerHTML == "OUT") {
                placement.setAttribute("style", "background-color: forestgreen; color:white;");
            }
            else if (placement.innerHTML == "OUT ") {
                    placement.setAttribute("style", "background-color: purple; color:white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "DEPT") {
                placement.setAttribute("style", "font-weight: bold; background-color: plum;");
            }
            else if (placement.innerHTML == "QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
            }
            else if (placement.innerHTML == "WIN+QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color:#5920d4;");
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: magenta;");
            }
            else if (placement.innerHTML == "RTRN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: lightskyblue;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: #ff9e9e;");
            }
            else if (placement.innerHTML == "LOSS ") {
                placement.setAttribute("style", "background-color: orange;");
            }
            else if (placement.innerHTML == "GUEST") {
                placement.setAttribute("style", "background-color: grey;");
            }
            else if (placement.innerHTML == "MISS CONGENIALITY") {
                placement.setAttribute("style", "background-color: #40f5f5;");
            }
            else if (placement.innerHTML == "MISS ROBBED") {
                placement.setAttribute("style", "background-color: #ff6600;");
            }
            else if (placement.innerHTML == "undefined") {
                placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                placement.innerHTML = (winnerQueen.ppe / (winnerQueen.episodesOn)).toFixed(2);
            }
            winner.appendChild(placement);
        }
        trackRecords.appendChild(winner);
    }
    if (!onFinale) {
        for (let i = 0; i < currentCast.length; i++) {
            let contestant = document.createElement("tr");
            let name = document.createElement("td");
            name.setAttribute("style", "font-weight: bold;");
            name.innerHTML = currentCast[i].getName();
            name.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px;");
            contestant.appendChild(name);
            let photo = document.createElement("td");
            photo.setAttribute("style", "background: url("+ currentCast[i].image +"); background-size: 106px 106px; background-position: center;");
            contestant.appendChild(photo);
            if(!team)
            {
            let country = document.createElement("td");
            country.setAttribute("style", "background: url("+ currentCast[i].country +"); background-size: 106px 106px; background-position: center;");
            contestant.appendChild(country);
            }
            for (let k = 0; k < currentCast[i].trackRecord.length + 1; k++) {
                let placement = document.createElement("td");
                placement.innerHTML = currentCast[i].trackRecord[k];
                if (placement.innerHTML == "WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
                }
                else if (placement.innerHTML == "TOP2") {
                    placement.setAttribute("style", "background-color: deepskyblue;");
                }
                else if (placement.innerHTML == "TOP 3<br><small>Win round 1</small>") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #ffd100; color: #000;");
                }
                else if (placement.innerHTML == "TOP 3<br><small>Win round 2</small>") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #ffae00; color: #000;");
                }
                else if (placement.innerHTML == "TOP 3<br><small>Win round 3</small>") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #ff7c00; color: #000;");
                }
                else if (placement.innerHTML == "LOW") {
                    placement.setAttribute("style", "background-color: pink;");
                }
                else if (placement.innerHTML == "HIGH") {
                    placement.setAttribute("style", "background-color: lightblue;");
                }
                else if (placement.innerHTML == "HIGH TEAM") {
                    placement.setAttribute("style", "background-color: aquamarine;");
                }
                else if (placement.innerHTML == "BTM2 ") {
                    placement.setAttribute("style", "background-color: #FA8072;");
                }
                else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5" || placement.innerHTML == "BTM6" || placement.innerHTML == "BTM") {
                    placement.setAttribute("style", "background-color: tomato;");
                }
                else if (placement.innerHTML == " BTM2") {
                    placement.setAttribute("style", "background-color: hotpink;");
                }
                else if (placement.innerHTML == "CHOC") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
                }
                else if (placement.innerHTML == "ELIM") {
                    placement.setAttribute("style", "font-weight: bold; background-color: red;");
                }
                else if (placement.innerHTML == "ELIM ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FC4545;");
                }
                else if (placement.innerHTML == " ELIM") {
                    placement.setAttribute("style", "font-weight: bold; background-color: deeppink;");
                }
                else if (placement.innerHTML == " ELIM ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: darkred; color:white");
                }
                else if (placement.innerHTML == "WINNER") {
                    placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
                }
                else if (placement.innerHTML == "RUNNER UP") {
                    placement.setAttribute("style", "font-weight: bold; background-color: silver;");
                }
                else if (placement.innerHTML == "ELIMINATED") {
                    placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
                }
                else if (placement.innerHTML == "LOST 1ST ROUND") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FF7C00;");
                }
                else if (placement.innerHTML == "LOST 2ND ROUND") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FFAE00;");
                }
                else if (placement.innerHTML == "LOST 3RD ROUND") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FFD100;");
                }
                else if (placement.innerHTML == "") {
                    placement.setAttribute("style", "background-color: gray");
                }
                else if (placement.innerHTML == "WIN ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: deepskyblue;");
                }
                else if (placement.innerHTML == "  WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #2238B4; color: white;");
                }
                else if (placement.innerHTML == "WIN+RTRN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: forestgreen; color:white;");
                }
                else if (placement.innerHTML == "SAFE") {
                    placement.setAttribute("style", "background-color: white;");
                }
                else if (placement.innerHTML == "SAFE ") {
                        placement.setAttribute("style", "background-color: palegreen; color:#000;");
                }
                else if (placement.innerHTML == " SAFE ") {
                        placement.setAttribute("style", "background-color: #7D1935; color:#000;");
                }
                else if (placement.innerHTML == " SAFE") {
                    placement.setAttribute("style", "background-color: magenta; color:white;");
                }
                else if (placement.innerHTML == "SAFE<br><small>Round 1</small>") {
                    placement.setAttribute("style", "background-color: lightcoral; color: white;");
                }
                else if (placement.innerHTML == "SAFE<br><small>Round 2</small>") {
                    placement.setAttribute("style", "background-color: indianred; color: white;");
                }
                else if (placement.innerHTML == "SAFE<br><small>Round 3</small>") {
                    placement.setAttribute("style", "background-color: crimson; color: white;");
                }
                else if (placement.innerHTML == "RUN") {
                        placement.setAttribute("style", "background-color: magenta; color:white;");
                }
                else if (placement.innerHTML == "RUN ") {
                        placement.setAttribute("style", "background-color: #D3FFB5; color:#000; font-weight: bold;");
                }
                else if (placement.innerHTML == "OUT") {
                    placement.setAttribute("style", "background-color: forestgreen; color:white;");
                }
                else if (placement.innerHTML == "OUT ") {
                        placement.setAttribute("style", "background-color: purple; color:white;");
                }
                else if (placement.innerHTML == " WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
                }
                else if (placement.innerHTML == "DISQ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
                }
                else if (placement.innerHTML == "DEPT") {
                    placement.setAttribute("style", "font-weight: bold; background-color: plum;");
                }
                else if (placement.innerHTML == "QUIT") {
                    placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
                }
                else if (placement.innerHTML == "WIN+QUIT") {
                    placement.setAttribute("style", "font-weight: bold; background-color:#5920d4;");
                }
                else if (placement.innerHTML == "RTRN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: magenta;");
                }
                else if (placement.innerHTML == "RTRN ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: orange;");
                }
                else if (placement.innerHTML == " WIN ") {
                    placement.setAttribute("style", "background-color: lightskyblue;");
                }
                else if (placement.innerHTML == "LOSS") {
                    placement.setAttribute("style", "background-color: #ff9e9e;");
                }
                else if (placement.innerHTML == "LOSS ") {
                    placement.setAttribute("style", "background-color: orange;");
                }else if (placement.innerHTML == "GUEST") {
                    placement.setAttribute("style", "background-color: grey;");
                }
                else if (placement.innerHTML == "MISS CONGENIALITY") {
                    placement.setAttribute("style", "background-color: #40f5f5;");
                }
                else if (placement.innerHTML == "MISS ROBBED") {
                    placement.setAttribute("style", "background-color: #ff6600;");
                }
                else if (placement.innerHTML == "undefined") {
                    placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                    placement.innerHTML = (currentCast[i].ppe / (currentCast[i].episodesOn)).toFixed(2);
                }
                contestant.appendChild(placement);
            }
            trackRecords.appendChild(contestant);
        }
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        let contestant = document.createElement("tr");
        let name = document.createElement("td");
        name.setAttribute("style", "font-weight: bold;");
        name.innerHTML = eliminatedCast[i].getName();
        name.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px;");
        contestant.appendChild(name);
        let photo = document.createElement("td");
        photo.setAttribute("style", "background: url("+ eliminatedCast[i].image +"); background-size: 106px 106px; background-position: center;");
        contestant.appendChild(photo);
        if(!team)
        {
        let country = document.createElement("td");
        country.setAttribute("style", "background: url("+ eliminatedCast[i].country +"); background-size: 106px 106px; background-position: center;");
        contestant.appendChild(country);
        }
        for (let k = 0; k < eliminatedCast[i].trackRecord.length + 1; k++) {
            let placement = document.createElement("td");
            placement.innerHTML = eliminatedCast[i].trackRecord[k];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 1</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffd100; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 2</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffae00; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 3</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ff7c00; color: #000;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "HIGH TEAM") {
                placement.setAttribute("style", "background-color: aquamarine;");
            }
            else if (placement.innerHTML == "BTM2 ") {
                placement.setAttribute("style", "background-color: #FA8072;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5" || placement.innerHTML == "BTM6" || placement.innerHTML == "BTM") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == " BTM2") {
                placement.setAttribute("style", "background-color: hotpink;");
            }
            else if (placement.innerHTML == "CHOC") {
                placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FC4545;");
            }
            else if (placement.innerHTML == " ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: deeppink;");
            }
            else if (placement.innerHTML == " ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkred; color:white");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
            }
            else if (placement.innerHTML == "RUNNER UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
                if (allstarUs3Finale)
                    placement.innerHTML += " <br><small> (" + eliminatedCast[i].votes + " points) </small>";
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
                if (allstarUs3Finale)
                    placement.innerHTML += " <br><small> (" + eliminatedCast[i].votes + " points) </small>";
            }
            else if (placement.innerHTML == "LOST 1ST ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FF7C00;");
            }
            else if (placement.innerHTML == "LOST 2ND ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFAE00;");
            }
            else if (placement.innerHTML == "LOST 3RD ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFD100;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "  WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: #2238B4; color: white;");
            }
            else if (placement.innerHTML == "WIN+RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: forestgreen; color:white;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == "SAFE ") {
                    placement.setAttribute("style", "background-color: palegreen; color:#000;");
            }
            else if (placement.innerHTML == " SAFE ") {
                    placement.setAttribute("style", "background-color: #7D1935; color:#000;");
            }
            else if (placement.innerHTML == " SAFE") {
                placement.setAttribute("style", "background-color: magenta; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 1</small>") {
                placement.setAttribute("style", "background-color: lightcoral; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 2</small>") {
                placement.setAttribute("style", "background-color: indianred; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 3</small>") {
                placement.setAttribute("style", "background-color: crimson; color: white;");
            }
            else if (placement.innerHTML == "RUN") {
                    placement.setAttribute("style", "background-color: magenta; color:white;");
            }
            else if (placement.innerHTML == "RUN ") {
                    placement.setAttribute("style", "background-color: #D3FFB5; color:#000; font-weight: bold;");
            }
            else if (placement.innerHTML == "OUT") {
                placement.setAttribute("style", "background-color: forestgreen; color:white;");
            }
            else if (placement.innerHTML == "OUT ") {
                    placement.setAttribute("style", "background-color: purple; color:white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "DEPT") {
                placement.setAttribute("style", "font-weight: bold; background-color: plum;");
            }
            else if (placement.innerHTML == "QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
            }
            else if (placement.innerHTML == "WIN+QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color:#5920d4;");
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: magenta;");
            }
            else if (placement.innerHTML == "RTRN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: lightskyblue;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: #ff9e9e;");
            }
            else if (placement.innerHTML == "LOSS ") {
                placement.setAttribute("style", "background-color: orange;");
            }
            else if (placement.innerHTML == "GUEST") {
                placement.setAttribute("style", "background-color: lightgray;");
            }
            else if (placement.innerHTML == "MISS CONGENIALITY") {
                placement.setAttribute("style", "background-color: #40f5f5;");
            }
            else if (placement.innerHTML == "MISS ROBBED") {
                placement.setAttribute("style", "background-color: #ff6600;");
            }
            else if (placement.innerHTML == "undefined") {
                placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                placement.innerHTML = (eliminatedCast[i].ppe / (eliminatedCast[i].episodesOn)).toFixed(2);
            }
            contestant.appendChild(placement);
        }
        trackRecords.appendChild(contestant);
    }
    centering.appendChild(trackRecords);
    let br = document.createElement("br");
    centering.appendChild(br);

    if (chocolateBarTwist) {
        let titlec = document.createElement("big");
        titlec.innerHTML = "Chocolate Bar Twist";
        let chocolateTable = document.createElement("table");
        if (totalCastSize >= 12 && totalCastSize < 15)
            chocolateTable.setAttribute("style", "font-size: 85%;");
        if (totalCastSize >= 15)
            chocolateTable.setAttribute("style", "font-size: 75%");
        let headerc = document.createElement("tr");
        chocolateTable.appendChild(headerc);
        let number = Math.round((fullCast.length / 2));
        for (let i = 0; i < number ; i++) {
            let thc = document.createElement("th");
            thc.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img = document.createElement("img");
            img.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            img.src = fullCast[i].image;
            thc.appendChild(img);
            headerc.appendChild(thc);
        }
        let row1 = document.createElement("tr");
        chocolateTable.appendChild(row1);
        for (let i = 0; i < number ; i++) {
            let tdc = document.createElement("td");
            tdc.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img = document.createElement("img");
            for (let o = 0; o < eliminatedCast.length; o++) {
                if (fullCast[i].getName() == eliminatedCast[o].getName()) {
                    if (fullCast[i].chocolate == true) {
                        img.src = "image/ChocolateBarWithTicket.webp";
                    } else {
                        img.src = "image/ChocolateBarWithNoTicket.webp";
                    }
                }
            }
            for (let o = 0; o < currentCast.length; o++) {
                if (fullCast[i].getName() == currentCast[o].getName()) {
                    if (chocolateBarTwistCheck){
                        if (fullCast[i].chocolate == true) {
                            img.src = "image/ChocolateBarWithTicket.webp";
                        } else {
                            img.src = "image/ChocolateBarWithNoTicket.webp";
                        }
                    } else {
                        img.src = "image/ChocolateBarTBA.webp";
                    }
                }
            }
            img.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            tdc.appendChild(img);
            row1.appendChild(tdc);
        }
        let row2 = document.createElement("tr");
        chocolateTable.appendChild(row2);
        for (let i = number ; i < fullCast.length ; i++) {
            let tdc = document.createElement("td");
            tdc.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img = document.createElement("img");
            img.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            img.src = fullCast[i].image;
            tdc.appendChild(img);
            row2.appendChild(tdc);
        }
        let row3 = document.createElement("tr");
        chocolateTable.appendChild(row3);
        for (let i = number ; i < fullCast.length ; i++) {
            let tdc1 = document.createElement("td");
            tdc1.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img1 = document.createElement("img");
            for (let o = 0; o < eliminatedCast.length; o++) {
                if (fullCast[i].getName() == eliminatedCast[o].getName()) {
                    if (fullCast[i].chocolate == true) {
                        img1.src = "image/ChocolateBarWithTicket.webp";
                    } else {
                        img1.src = "image/ChocolateBarWithNoTicket.webp";
                    }
                }
            }
            for (let o = 0; o < currentCast.length; o++) {
                if (fullCast[i].getName() == currentCast[o].getName()) {
                    if (chocolateBarTwistCheck){
                        if (fullCast[i].chocolate == true) {
                            img1.src = "image/ChocolateBarWithTicket.webp";
                        } else {
                            img1.src = "image/ChocolateBarWithNoTicket.webp";
                        }
                    } else {
                        img1.src = "image/ChocolateBarTBA.webp";
                    }
                }
            }
            img1.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            tdc1.appendChild(img1);
            row3.appendChild(tdc1);
        }
        centering.appendChild(titlec);
        centering.appendChild(chocolateTable);
    }

    if (lipsync_assassin || all_stars) {
        var titlea = document.createElement("big");
        titlea.innerHTML = "Lipstick Choices";
        var lipassa = document.createElement("table");
        if (totalCastSize >= 12 && totalCastSize < 15)
            lipassa.setAttribute("style", "font-size: 85%;");
        if (totalCastSize >= 15)
            lipassa.setAttribute("style", "font-size: 75%");
        var headera = document.createElement("tr");
        lipassa.appendChild(headera);
        var tha = document.createElement("th");
        tha.innerHTML = "Winner";
        tha.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha);
        var tha1 = document.createElement("th");
        tha1.innerHTML = "Lipstick";
        tha1.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha1);
        var tha2 = document.createElement("th");
        tha2.innerHTML = "Loser";
        tha2.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha2);
        var tha3 = document.createElement("th");
        tha3.innerHTML = "Lipstick";
        tha3.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha3);
        for (var i = 0; i < assasintable.length; i++) {
            var contestanta = document.createElement("tr");
            var namea = document.createElement("td");
            var namea1 = document.createElement("td");
            var lipstickk = document.createElement("td");
            var lipstickkk = document.createElement("td");
            namea.setAttribute("style", "background-color: #f5ebf5; font-weight: bold;");
            namea1.setAttribute("style", "background-color: #f5ebf5;");
            lipstickk.setAttribute("style", "background-color: #f5ebf5; font-weight: bold;");
            lipstickkk.setAttribute("style", "background-color: #f5ebf5;");
            namea.innerHTML = assasintable[i];
            lipstickk.innerHTML = assasinlipstick[i];
            namea1.innerHTML = assasintable[i+1];
            if(HideLS)
            {
                if(i+1==assasintable.length)
                    lipstickkk.innerHTML = "???";
                else
                    lipstickkk.innerHTML = assasinlipstick[i+1];
            }
            else
                lipstickkk.innerHTML = assasinlipstick[i+1];
            i++;
            if (namea1.innerHTML == " "){
                namea1.setAttribute("style", "background-color: gray;");
                lipstickkk.setAttribute("style", "background-color: gray;");
            }
            contestanta.appendChild(namea);
            contestanta.appendChild(lipstickk);
            contestanta.appendChild(namea1);
            contestanta.appendChild(lipstickkk);
            lipassa.appendChild(contestanta);

        }
        centering.appendChild(titlea);
        centering.appendChild(lipassa);
        }
        if(!team && !onFinale)
        {
            var titler = document.createElement("big");
            titler.innerHTML = "Relations Progress";
            var relati = document.createElement("table");
            if (totalCastSize < 15)
                relati.setAttribute("style", "font-size: 80%;");
            if (totalCastSize >= 15)
                relati.setAttribute("style", "font-size: 75%");
            var headrela = document.createElement("tr");
            relati.appendChild(headrela);
            var headq = document.createElement("th");
            headq.innerHTML = "Queens";
            headq.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
            headrela.appendChild(headq);
            for (var i = 0; i < currentCast.length; i++) {
                var headquenn = document.createElement("th");
                headquenn.innerHTML = currentCast[i].getName();
                headquenn.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                headrela.appendChild(headquenn);
            }
            
                for (var k = 0; k<currentCast.length; k++)
                {
                    var linequeen = document.createElement("tr");
                    var namequeen = document.createElement("td");
                    namequeen.innerHTML = currentCast[k].getName();
                    namequeen.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                    linequeen.appendChild(namequeen);
                    for(var f = 0; f<currentCast.length; f++)
                    {
                        
                        var relaqueen = document.createElement("td");
                        if(currentCast[k].getName() == currentCast[f].getName())
                        {
                            relaqueen.innerHTML = "X";
                            relaqueen.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                        }
                        else
                        {
                            relaqueen.innerHTML = currentCast[k].GetStatus(currentCast[f].getName())+" ("+currentCast[k].GetRelation(currentCast[f])+")";
                            if(currentCast[k].GetStatus(currentCast[f].getName())=="Friendly")
                            {
                                relaqueen.setAttribute("style", "background-color: #70a368; font-weight: bold; width: 70px;");
                            }
                            else if(currentCast[k].GetStatus(currentCast[f].getName())=="Friend")
                            {
                                relaqueen.setAttribute("style", "background-color: #57ab49; font-weight: bold; width: 70px;");
                            }
                            else if(currentCast[k].GetStatus(currentCast[f].getName())=="Neutral")
                            {
                                relaqueen.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                            }
                            else if(currentCast[k].GetStatus(currentCast[f].getName())=="Hostile")
                            {
                                relaqueen.setAttribute("style", "background-color: #945057; font-weight: bold; width: 70px;");
                            }
                            else if(currentCast[k].GetStatus(currentCast[f].getName())=="Ennemy")
                            {
                                relaqueen.setAttribute("style", "background-color: #ab3844; font-weight: bold; width: 70px;");
                            }
                            
                        }
                        linequeen.appendChild(relaqueen);
                    }
                    relati.appendChild(linequeen);
                }

                centering.appendChild(titler);
                centering.appendChild(relati);
        }
        if(!team && onFinale)
        {
            var titler = document.createElement("big");
            titler.innerHTML = "Relations Progress";
            var relati = document.createElement("table");
            if (totalCastSize < 15)
                relati.setAttribute("style", "font-size: 80%;");
            if (totalCastSize >= 15)
                relati.setAttribute("style", "font-size: 75%");
            var headrela = document.createElement("tr");
            relati.appendChild(headrela);
            var headq = document.createElement("th");
            headq.innerHTML = "Queens";
            headq.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
            headrela.appendChild(headq);
            for (var i = 0; i < fullCast.length; i++) {
                var headquenn = document.createElement("th");
                headquenn.innerHTML = fullCast[i].getName();
                headquenn.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                headrela.appendChild(headquenn);
            }
            
                for (var k = 0; k<fullCast.length; k++)
                {
                    var linequeen = document.createElement("tr");
                    var namequeen = document.createElement("td");
                    namequeen.innerHTML = fullCast[k].getName();
                    namequeen.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                    linequeen.appendChild(namequeen);
                    for(var f = 0; f<fullCast.length; f++)
                    {
                        
                        var relaqueen = document.createElement("td");
                        if(fullCast[k].getName() == fullCast[f].getName())
                        {
                            relaqueen.innerHTML = "X";
                            relaqueen.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                        }
                        else
                        {
                            relaqueen.innerHTML = fullCast[k].GetStatus(fullCast[f].getName())+" ("+fullCast[k].GetRelation(fullCast[f])+")";
                            if(fullCast[k].GetStatus(fullCast[f].getName())=="Friendly")
                            {
                                relaqueen.setAttribute("style", "background-color: #70a368; font-weight: bold; width: 70px;");
                            }
                            else if(fullCast[k].GetStatus(fullCast[f].getName())=="Friend")
                            {
                                relaqueen.setAttribute("style", "background-color: #57ab49; font-weight: bold; width: 70px;");
                            }
                            else if(fullCast[k].GetStatus(fullCast[f].getName())=="Neutral")
                            {
                                relaqueen.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 70px;");
                            }
                            else if(fullCast[k].GetStatus(fullCast[f].getName())=="Hostile")
                            {
                                relaqueen.setAttribute("style", "background-color: #945057; font-weight: bold; width: 70px;");
                            }
                            else if(fullCast[k].GetStatus(fullCast[f].getName())=="Ennemy")
                            {
                                relaqueen.setAttribute("style", "background-color: #ab3844; font-weight: bold; width: 70px;");
                            }
                            
                        }
                        linequeen.appendChild(relaqueen);
                    }
                    relati.appendChild(linequeen);
                }

                centering.appendChild(titler);
                centering.appendChild(relati);
        }

    
    main.appendChild(centering);
    if (onFinale) {
        screen.createButton("Simulate again!", "reSimulate()");
        screen.createHorizontalLine();
        screen.createButton("Back to main page", "location.reload()");
        
    }
}
let totalCastSize;
function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function sortPerformances(cast) {
    cast.sort((a, b) => (a.performanceScore - b.performanceScore));
}
//generate spaces to insert cast:
function generateSpace() {
    let castSize = document.querySelector("input#castSize").valueAsNumber;
    totalCastSize = castSize;
    let castSelection = document.querySelector("p#castSelection");
    castSelection.innerHTML = '';
    if (totalCastSize < 3)
        window.alert("Please, use at least 3 queens on your cast!");
    else if (totalCastSize > 20)
        window.alert("Please, use less than 20 queens in your cast!");
    else
        for (let i = 0; i < castSize; i++) {
            let select = document.createElement("select");
            select.setAttribute("class", "queenList");
            select.setAttribute("id", i.toString());
            select.setAttribute("onchange", "setImage()");
            let img = document.createElement("img");
            img.setAttribute("class", "images");
            img.setAttribute("id", "image" + i.toString());
            img.setAttribute("style", "width: 105px; height: 105px;")
            let p = document.createElement("p");
            p.appendChild(img);
            if (document.getElementById("onlyCustomQueens").checked == true){
                let customy = allQueens.filter(function (queen) { return queen.customqueen == true; });
                for (let k = 0; k < customy.length; k++) {
                    let option = document.createElement("option");
                    option.innerHTML = customy[k].getName();
                    option.value = customy[k].image;
                    select.add(option);
                }
                select.selectedIndex = randomNumber(0, customy.length - 1);
            }
            else{
                for (let k = 0; k < allQueens.length; k++) {
                    let option = document.createElement("option");
                    option.innerHTML = allQueens[k].getName();
                    option.value = allQueens[k].image;
                    select.add(option);
                }
                select.selectedIndex = randomNumber(0, allQueens.length - 1);
            }
            let br = document.createElement("br");
            castSelection.appendChild(p);
            castSelection.appendChild(select);
            castSelection.appendChild(br);
        }
    setImage();
}
function setImage() {
    let images = document.getElementsByClassName("images");
    for (let i = 0; i < images.length; i++) {
        let img = document.getElementById("image" + i.toString());
        let select = document.getElementById(i.toString());
        img.src = select.options[select.selectedIndex].value;
    }
}
let top3 = false;
let top4 = false;
let canFinale = false;
let all_stars = false;
let allstarUs3Finale = false;
let ukvstwFinale = false;
let lipsync_assassin = false;
let team = false;
function predefCast(cast, format, premiere = '', returning = '', others = '') {
    currentCast = cast;
    totalCastSize = cast.length;
    if (format == "top3")
        top3 = true;
    else if (format == "top4")
        top4 = true;
    else if (format == "canUS2"){
        top3 = true;
        canFinale = true;
    }
    else if (format == "all-stars")
        all_stars = true;
    else if (format == "jury-allstars"){ 
        all_stars = true;
        allstarUs3Finale = true;
    }
    else if (format == "international-allstars"){ 
        all_stars = true;
        ukvstwFinale = true;
    }
    else if (format == "team")
        team = true;
    else if (format == "lipsync-assassin") {
        lipsync_assassin = true;
        allQueensCopy2 = [...allQueens];
        allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 9; });
        allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
        allQueensCopy = [...allQueens];
    }
    if(others == 'immunity')
        immunity = true;
    if (premiere == "s6-premiere")
        s6Premiere = true;
    else if (premiere == "s9-premiere")
        s9Premiere = true;
    else if (premiere == "s12-premiere")
        s12Premiere = true;
    else if (premiere == "s14-premiere")
        s14Premiere = true;
    else if (premiere == "porkchop")
        porkchopPremiere = true;
    else if (premiere == "uk3-premiere")
        uk3Premiere = true;
    if (returning == "return")
        randomReturn = true;
    else if (returning == "vote")
        voteReturn = true;
    else if (returning == "conjoined-queens")
        conjoinedQueens = true;
    else if (returning == "smackdown"){
        smackdown = true;
        slayersCheck = true;
    }
    else if (returning == "lalaparuza")
        lalaparuza = true;
    else if (returning == "queensofcomedy")
        queensOfComedy = true;
    else if (returning == "kittygirlgroup")
        kittyGirlGroup = true;
    if (document.getElementById("disableDouble").checked == true)
        noDouble = true;
    if (document.getElementById("HideLipstickesChoices").checked == true)
        HideLS = true;
    if (document.getElementById("chocolateBar").checked == true)
        chocolateBarTwist = true;
    else if (document.getElementById("chocolateBarChoosable").checked == true){
        chocolateBarTwist = true;
        chocolateBarTwistChoosable = true;
    }
    if (smackdown && chocolateBarTwist) {
        window.alert("The Lipsync Smackdown format isn't supported with the golden chocolate bar twist, sorry!");
        s14Premiere = false;
        s12Premiere = false;
        s9Premiere = false;
        s6Premiere = false;
        porkchopPremiere = false;
        uk3Premiere = false;
        top4 = false;
        top3 = false;
        canFinale = false;
        lipsync_assassin = false;
        smackdown = false;
        all_stars = false;
        allstarUs3Finale = false;
        ukvstwFinale = false;
        smackdown = false;
        voteReturn = false;
        conjoinedQueens = false;
        queensOfComedy = false;
        kittyGirlGroup = false;
        randomReturn = false;
        lalaparuza = false;
        allQueens = [...allQueensCopy2];
        chocolateBarTwist = false;
        chocolateBarTwistChoosable = false;
    }
    else if (smackdown && !noDouble) {
        window.alert("The Lipsync Smackdown format isn't supported with double shantays or sashays, sorry!");
        s14Premiere = false;
        s12Premiere = false;
        s9Premiere = false;
        s6Premiere = false;
        porkchopPremiere = false;
        uk3Premiere = false;
        top4 = false;
        top3 = false;
        canFinale = false;
        lipsync_assassin = false;
        smackdown = false;
        all_stars = false;
        allstarUs3Finale = false;
        ukvstwFinale = false;
        smackdown = false;
        voteReturn = false;
        conjoinedQueens = false;
        queensOfComedy = false;
        kittyGirlGroup = false;
        randomReturn = false;
        lalaparuza = false;
        allQueens = [...allQueensCopy2];
        chocolateBarTwist = false;
        chocolateBarTwistChoosable = false;
    }
    else if (team && chocolateBarTwist) {
        window.alert("The team format isn't supported with the chocolate bar twist, sorry!");
        team = false;
        smackdown = false;
        voteReturn = false;
        randomReturn = false;
        lalaparuza = false;
        queensOfComedy = false;
        conjoinedQueens = false;
        kittyGirlGroup = false;
        s6Premiere = false;
        s9Premiere = false;
        s12Premiere = false;
        s14Premiere = false;
        porkchopPremiere = false;
        uk3Premiere = false;
        chocolateBarTwist = false;
        chocolateBarTwistChoosable = false;
    }
    
    else if (chocolateBarTwist) {
        if (chocolateBarTwistChoosable){
            chooseGoldenBar();
        }else {
            giveChocolate();
        }
    }
    else if (s6Premiere || s12Premiere || s14Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
function startSimulation(challenge = "") {
    //get selected names and compare them to the all queens list:
    for (let i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        let select = document.getElementById(i.toString());
        let value = select.options[select.selectedIndex].text;
        for (let k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName()) {
                currentCast.push(allQueens[k]);
                break;
            }
        }
    }
    if (currentCast.length == 0)
        window.alert("Your cast is empty!");
    else if (duplicateQueens(currentCast))
        window.alert("Please, only use one of each queen on your cast!");
    else {
        let select = document.getElementById("format");
        let select2 = document.getElementById("premiere-format");
        let select3 = document.getElementById("returning");
        if (select.options[select.selectedIndex].value == "top3")
            top3 = true;
        else if (select.options[select.selectedIndex].value == "top4")
            top4 = true;
        else if (select.options[select.selectedIndex].value == "canUS2"){
            canFinale = true;
            top3 = true;
        }
        else if (select.options[select.selectedIndex].value == "all-stars")
            all_stars = true;
        else if (select.options[select.selectedIndex].value == "jury-allstars") {
            all_stars = true;
            allstarUs3Finale = true;
        }
        else if (select.options[select.selectedIndex].value == "international-allstars") {
            all_stars = true;
            ukvstwFinale = true;
        }
        else if (select.options[select.selectedIndex].value == "team")
            team = true;
        else if (select.options[select.selectedIndex].value == "lipsync-assassin") {
            lipsync_assassin = true;
            allQueensCopy2 = [...allQueens];
            allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 9; });
            allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
            allQueensCopy = [...allQueens];
        }
        if (select2.options[select2.selectedIndex].value == "s6-premiere")
            s6Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s9-premiere")
            s9Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s12-premiere")
            s12Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s14-premiere")
            s14Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "porkchop")
            porkchopPremiere = true;
        else if (select2.options[select2.selectedIndex].value == "uk3-premiere")
            uk3Premiere = true;
        if (select3.options[select3.selectedIndex].value == "random")
            randomReturn = true;
        else if (select3.options[select3.selectedIndex].value == "votes")
            voteReturn = true;
        else if (select3.options[select3.selectedIndex].value == "conjoined-queens")
            conjoinedQueens = true;
        else if (select3.options[select3.selectedIndex].value == "queensofcomedy")
            queensOfComedy = true;
        else if (select3.options[select3.selectedIndex].value == "kittygirlgroup")
            kittyGirlGroup = true;
        else if (select3.options[select3.selectedIndex].value == "lalaparuza")
            lalaparuza = true;
        else if (select3.options[select3.selectedIndex].value == "smackdown")
            smackdown = true;
            slayersCheck = true;
        if (document.getElementById("disableDouble").checked == true)
            noDouble = true;
        if (document.getElementById("HideLipstickesChoices").checked == true)
            HideLS = true;
        if (document.getElementById("chocolateBar").checked == true)
            chocolateBarTwist = true;
        else if (document.getElementById("chocolateBarChoosable").checked == true){
                chocolateBarTwist = true;
                chocolateBarTwistChoosable = true;
        }
        if (currentCast.length == 3 && top4 || currentCast.length == 3 && all_stars) {
            window.alert("Lip-Sync For The Crown and All Star formats needs at least 4 queens!");
            top4 = false;
            all_stars = false;
            allstarUs3Finale = false;
            ukvstwFinale = false;
            currentCast = [];
        }
        else if (team == true && currentCast.length % 2 !== 0) {
            window.alert("The team format needs an even amout of queens!");
            currentCast = [];
            team = false;
        }
        else if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) && currentCast.length < 10) {
            window.alert("Double Premiere formats needs at least 10 queens!");
            s6Premiere = false;
            s12Premiere = false;
            s14Premiere = false;
            porkchopPremiere = false;
            top4 = false;
            top3 = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            allstarUs3Finale = false;
            ukvstwFinale = false;
            currentCast = [];
        }
        else if (uk3Premiere && currentCast.length < 6) {
            window.alert("Uk3 Premiere needs at least 6 queens!");
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            allstarUs3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            currentCast = [];
        }
        else if (s9Premiere && currentCast.length < 6) {
            window.alert("Normal Premiere (No Elimination) needs at least 6 queens!");
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            allstarUs3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            currentCast = [];
        }
        else if ((queensOfComedy || conjoinedQueens || kittyGirlGroup) && currentCast.length < 10) {
            window.alert("Queens of comedy, Kitty Girl Group and Conjoined Queens return challenges need at least 10 queens!");
            uk3Premiere = false;
            s6Premiere = false;
            s9Premiere = false;
            s12Premiere = false;
            s14Premiere = false;
            porkchopPremiere = false;
            top4 = false;
            top3 = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            allstarUs3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            currentCast = [];
        }
        else if (team && (smackdown || voteReturn || randomReturn || chocolateBarTwist || s9Premiere || s6Premiere || lalaparuza || queensOfComedy || kittyGirlGroup || conjoinedQueens || s12Premiere || porkchopPremiere || s14Premiere || uk3Premiere)) {
            window.alert("The team format isn't supported with any special premiere or returning formats, sorry!");
            team = false;
            smackdown = false;
            voteReturn = false;
            randomReturn = false;
            lalaparuza = false;
            queensOfComedy = false;
            conjoinedQueens = false;
            kittyGirlGroup = false;
            s6Premiere = false;
            s9Premiere = false;
            s12Premiere = false;
            s14Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if (smackdown && chocolateBarTwist) {
            window.alert("The Lipsync Smackdown format isn't supported with the golden chocolate bar twist, sorry!");
            s14Premiere = false;
            s12Premiere = false;
            s9Premiere = false;
            s6Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            canFinale = false;
            lipsync_assassin = false;
            smackdown = false;
            all_stars = false;
            allstarUs3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            allQueens = [...allQueensCopy2];
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if (smackdown && !noDouble) {
            window.alert("The Lipsync Smackdown format isn't supported with double shantays or sashays, sorry!");
            s14Premiere = false;
            s12Premiere = false;
            s9Premiere = false;
            s6Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            canFinale = false;
            lipsync_assassin = false;
            smackdown = false;
            all_stars = false;
            allstarUs3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            allQueens = [...allQueensCopy2];
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if (chocolateBarTwist) {
            if (chocolateBarTwistChoosable){
                chooseGoldenBar();
            }else {
                giveChocolate();
            }
        }
        else if (s6Premiere || s12Premiere || s14Premiere) {
            doublePremiere();
        }
        else if (porkchopPremiere) {
            porkchopLipsyncs();
        }
        else {
            newEpisode();
        }
    }
}
//see if there is two of the same queens:
function duplicateQueens(cast) {
    let valuesAlreadySeen = [];
    for (let i = 0; i < cast.length; i++) {
        let value = cast[i];
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            currentCast = [];
            return true;
        }
        valuesAlreadySeen.push(value);
    }
    return false;
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
let s9PremiereCheck = false;
let uk3PremiereCheck = false;
function judging() {
    if ((s12Premiere || porkchopPremiere) && premiereCounter <= 2) {
        //add 2 queens to the top and the rest is safe
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast.length == 6) {
            currentCast[2].addToTrackRecord("HIGH");
            currentCast[3].addToTrackRecord("HIGH");
            currentCast[4].addToTrackRecord("LOW");
            currentCast[5].addToTrackRecord("LOW");
            currentCast[0].ppe += 3;
            currentCast[1].ppe += 3;
            currentCast[2].ppe += 4;
            currentCast[3].ppe += 4;
            currentCast[4].ppe += 2;
            currentCast[5].ppe += 2;
        } else if (currentCast.length > 6) {
            currentCast[2].addToTrackRecord("HIGH");
            currentCast[3].addToTrackRecord("HIGH");
            currentCast[currentCast.length - 2].addToTrackRecord("LOW");
            currentCast[currentCast.length - 1].addToTrackRecord("LOW");
            currentCast[0].ppe += 3;
            currentCast[1].ppe += 3;
            currentCast[2].ppe += 4;
            currentCast[3].ppe += 4;
            currentCast[currentCast.length - 2].ppe += 2;
            currentCast[currentCast.length - 1].ppe += 2;
            for (let i = 4; i < currentCast.length - 2; i++) {
                currentCast[i].addToTrackRecord("SAFE");
                currentCast[i].ppe += 3;
            }
        } else {
            for (let i = 0; i < currentCast.length; i++) {
                if (topQueens.indexOf(currentCast[i]) == -1)
                    currentCast[i].addToTrackRecord("SAFE");
                    currentCast[i].ppe += 3;
            }
        }
        doublePremiereJudging();
    }
    else if (currentCast.length == totalCastSize && uk3Premiere && !uk3PremiereCheck) {
        //add 3 queens to the top and 3 to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        uk3PremiereCheck = true;
        judgingScreen();
    }
    else if (currentCast.length == totalCastSize - 1 && s9Premiere && !s9PremiereCheck) {
        //add 3 queens to the top and 0 to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
        }
        s9PremiereCheck = true;
        s9judgingScreen();
    }
    else if (currentCast.length > 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        judgingScreen();
    }
    else if (currentCast.length == 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        judgingScreen();
    }
    else if (currentCast.length == 4 && team) {
        //add 2 teams to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        judgingScreen();
    }
    else if (currentCast.length == 3 && team) {
        //add 1 team to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        judgingScreen();
    }
    else if (currentCast.length >= 9 && isTeamChallenge) {
        //add winning team to the top and bottom team to the bottom
        let team1Team = new TeamsForChallenges(team1);
        let team2Team = new TeamsForChallenges(team2);
        let team3Team = new TeamsForChallenges(team3);
        let teamArray = [team1Team, team2Team, team3Team];
        for (let i = 0; i < team1.length; i++) {
            team1Team.performanceScore += team1[i].performanceScore;
        }
        team1Team.performanceScore = team1Team.performanceScore / team1Team.queens.length;
        for (let i = 0; i < team2.length; i++) {
            team2Team.performanceScore += team2[i].performanceScore;
        }
        team2Team.performanceScore = team2Team.performanceScore / team2Team.queens.length;
        for (let i = 0; i < team3.length; i++) {
            team3Team.performanceScore += team3[i].performanceScore;
        }
        team3Team.performanceScore = team3Team.performanceScore / team3Team.queens.length;
        teamArray.sort((a, b) => (a.performanceScore - b.performanceScore));
        let topTeam = teamArray[0];
        let bottomTeam = teamArray[2];
        for (let i = 0; i < topTeam.queens.length; i++) {
            topQueens.push(topTeam.queens[i]);
        }
        for (let i = 0; i < bottomTeam.queens.length; i++) {
            bottomQueens.push(bottomTeam.queens[i]);
        }
        currentCast = [...team1, ...team2, ...team3];
        sortPerformances(currentCast);
        judgingScreen();
    }
    else if (currentCast.length > 6 && isTeamChallenge) {
        //add winning team to the top and bottom team to the bottom
        let team1Team = new TeamsForChallenges(team1);
        let team2Team = new TeamsForChallenges(team2);
        let teamArray = [team1Team, team2Team];
        for (let i = 0; i < team1.length; i++) {
            team1Team.performanceScore += team1[i].performanceScore;
        }
        team1Team.performanceScore = team1Team.performanceScore / team1Team.queens.length;
        for (let i = 0; i < team2.length; i++) {
            team2Team.performanceScore += team2[i].performanceScore;
        }
        team2Team.performanceScore = team2Team.performanceScore / team2Team.queens.length;
        teamArray.sort((a, b) => (a.performanceScore - b.performanceScore));
        let topTeam = teamArray[0];
        let bottomTeam = teamArray[1];
        for (let i = 0; i < topTeam.queens.length; i++) {
            topQueens.push(topTeam.queens[i]);
        }
        for (let i = 0; i < bottomTeam.queens.length; i++) {
            bottomQueens.push(bottomTeam.queens[i]);
        }
        currentCast = [...team1, ...team2];
        sortPerformances(currentCast);
        judgingScreen();
    }
    else if (currentCast.length >= 10 && bottom6WayLipsync && (top3 || top4) && !bottom6WayLipsyncCheck) {
        //add 3 queens to the top and 6 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
        }
        for (let i = 0; i < 6; i++) {
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        bottom6WayLipsync = false;
        judging6WayScreen();
    }
    else if (currentCast.length >= 8 && floppers && (top3 || top4) && !floppersCheck) {
        //add 0 queens to the top and 3 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        floppers = false;
        judgingFloppersScreen();
    }
    else if (currentCast.length >= 6 && slayers && (top3 || top4) && !slayersCheck) {
        //add all the queens to the top and 0 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length ; i++) {
            topQueens.push(currentCast[i]);
        }
        slayers = false;
        judgingSlayersScreen();
    }
    else if (currentCast.length >= 8 && currentCast.length < 10 && s14LaLaPaRUZa && (top3 || top4) && !s14LaLaPaRUZaCheck && !smackdown) {
        //add all the queens to the top and 0 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        for (let i = 1; i < currentCast.length ; i++) {
            bottomQueens.push(currentCast[i]);
        }
        s14LaLaPaRUZa = false;
        judgingS14LaLaPaRUZaScreen();
    }
    else if (currentCast.length > 13) {
        //add 4 queens to the top and 4 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 4; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length > 6) {
        //add first 3 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length <= 5 && lipsync_assassin) {
        //add 1 queen to the top and the rest to the btm
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        for (let i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1) {
                bottomQueens.push(currentCast[i]);
            }
        }
        judgingScreen();
    }
    else if (currentCast.length == 6) {
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length == 5) {
        //add first 2 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast[2].performanceScore >= 6 && currentCast[2].performanceScore < 16 && !all_stars)
            topQueens.push(currentCast[2]);
        else
            bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        bottomQueens.push(currentCast[4]);
        judgingScreen();
    }
    else if (currentCast.length == 4) {
        //add first 2 queens to the top and last 2 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        judgingScreen();
    }
}
function judgingS14LaLaPaRUZaScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createHorizontalLine();
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].ppe += 5;
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
    screen.createHorizontalLine();
    if (bottomQueens.length >= 7) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "I really expected more from you...";
        screen.createBold("I'm sorry my dears, but you are all up for elimination. I need to see you all lipsync...");
    }
    screen.createButton("Proceed", "lipsyncs14()");
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].addToTrackRecord("BTM");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        eliminatedCast[i].addToTrackRecord("");
    }
}
function lipsyncs14() {
    s14LaLaPaRUZaCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Lipsync LaLaPaRUza Smackdown!!");
    screen.createBold("If you win your lipsync, you will be safe from elimination... If you lose, you'll continue to face off until two queens remain... In the end, one of them will sashay away.");
    document.body.style.backgroundImage = "url('image/lalaparuzasmackdown.webp')";
    screen.createImage(topQueens[0].image);
    screen.createBold(topQueens[0].getName() + ", you are the exception. You are safe from elimination tonight!!");
    topQueens[0].addToTrackRecord(" SAFE");
    let notpair = false;
    if (bottomQueens.length % 2 != 0) {
        notpair = true;
        console.log(notpair);
    }
    screen.createBold("Now, let the Lipsync LaLaPaRUza Smackdown BEGIN!!");
    let lipsyncorder = bottomQueens.slice();
    shuffle(lipsyncorder);
    screen.createHorizontalLine();
    //Round 1
    for (let i = 0; i < bottomQueens.length; i++) {
        let queen1 = lipsyncorder[i];
        let queen2 = lipsyncorder[i+1];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        if (notpair && lipsyncorder[i+3] == undefined) {
            let queen3 = lipsyncorder[lipsyncorder.length - 1];
            screen.createImage(queen3.image);
            screen.createBold(queen1.getName() + ", " + queen2.getName() + " and " + queen3.getName() + " will lipsync...");
            screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
            lsSong();
            screen.createBold("I've made my decision.");
            var lipSync = [queen1, queen2, queen3];
            for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
                lipSync[i_1].getASLipsync();
            }
            lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            screen.createBold(lipSync[1].getName() + ", " + lipSync[2].getName() + ", you are still up for eliminaton!!");
            lipSync[0].addToTrackRecord("SAFE<br><small>Round 1</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
            i = bottomQueens.length;
        } else {
            screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
            screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
            lsSong();
            screen.createBold("I've made my decision.");
            var lipSync = [queen1, queen2];
            for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
                lipSync[i_1].getASLipsync();
            }
            lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            screen.createBold(lipSync[1].getName() + ", you are still up for eliminaton!! ");
            lipSync[0].addToTrackRecord("SAFE<br><small>Round 1</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
            if (lipsyncorder[i+1] == undefined) {
                i = bottomQueens.length;
            }
        }
    }
    //Round 2
    shuffle(lipsyncorder);
    screen.createHorizontalLine();
    screen.createBold("Next round..!");
    for (let i = 0; i < bottomQueens.length; i++) {
        let queen1 = lipsyncorder[i];
        let queen2 = lipsyncorder[i+1];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
        screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
        lsSong();
        screen.createBold("I've made my decision.");
        var lipSync = [queen1, queen2];
        for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
            lipSync[i_1].getASLipsync();
        }
        lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
        screen.createImage(lipSync[0].image, "royalblue");
        screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
        screen.createBold(lipSync[1].getName() + ", you are still up for eliminaton!! ");
        lipSync[0].addToTrackRecord("SAFE<br><small>Round 2</small>");
        lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
        if (lipsyncorder[i+1] == undefined) {
            i = bottomQueens.length;
        }
    }
    //Round 3
    shuffle(lipsyncorder);
    screen.createHorizontalLine();
    screen.createBold("Final round..!");
    for (let i = 0; i < bottomQueens.length; i++) {
        let queen1 = lipsyncorder[i];
        let queen2 = lipsyncorder[i+1];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
        screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
        lsSong();
        screen.createBold("I've made my decision.");
        var lipSync = [queen1, queen2];
        for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
            lipSync[i_1].getASLipsync();
        }
        lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
        if (lipSync[0].lipsyncScore >= lipSync[1].lipsyncScore && lipSync[0].lipsyncScore > 7 && lipSync[1].lipsyncScore > 7) {
            screen.createImage(lipSync[0].image, "darkblue");
            screen.createImage(lipSync[1].image, "darkblue");
            screen.createBold("Shantay, you both stay baby!");
            queen1.addToTrackRecord("SAFE<br><small>Round 3</small>");
            queen2.addToTrackRecord("SAFE<br><small>Round 3</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(queen1), 1);
            lipsyncorder.splice(lipsyncorder.indexOf(queen2), 1);
        } else {
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            lipSync[0].addToTrackRecord("SAFE<br><small>Round 3</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(lipSync[1].getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(lipSync[1]) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(lipSync[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    lipSync[1].addToTrackRecord("CHOC");
                    chocolateBarTwistCheck = true;
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(lipSync[1].getName() + ", sashay away...");
                    lipSync[1].addToTrackRecord(" ELIM ");
                    lipSync[1].unfavoritism += 2;
                    eliminatedCast.unshift(lipSync[1]);
                    currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
                }
            } else {
                screen.createBold(lipSync[1].getName() + ", sashay away. ");
                lipSync[1].addToTrackRecord(" ELIM ");
                lipSync[1].unfavoritism += 2;
                eliminatedCast.unshift(lipSync[1]);
                currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
            }
        }
        if (lipsyncorder[i+1] == undefined) {
            i = bottomQueens.length;
        }
    }
    episodeChallenges.push("LaLaPaRUZa Smackdown");
    episodeCount++;
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
let lateQueen = '';
function s9judgingScreen() { 
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createParagraph("In this premiere, for the first time in Drag Race herstory.. nobody is going home tonight!");
    screen.createBold("Now, based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createHorizontalLine();
    
    for (let i = 0; i < topQueens.length; i++) {
        screen.createImage(topQueens[i].image, "cyan");
    }
    screen.createBold("", "judged");
    let judged = document.getElementById("judged");
    for (let i = 0; i < topQueens.length; i++) {
        judged.innerHTML += `${topQueens[i].getName()}, `;
    }
    judged.innerHTML += "you represent the tops of the week.";
    screen.createHorizontalLine();
    screen.createBold("", "safeQueens");
    let safeQueens = document.querySelector("b#safeQueens");
    for (let i = 2; i < currentCast.length; i++) {
        if (topQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            currentCast[i].addToTrackRecord("SAFE");
            currentCast[i].ppe += 3;
        }
    }
    safeQueens.innerHTML += "you are safe..";
    screen.createHorizontalLine();
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        topQueens[1].ppe += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
            topQueens[i].favoritism += 1;
            topQueens[i].ppe += 4;
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
        highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    screen.createBigText("Oh, wait a minute, wait a minute! I have one last announcement!");
    screen.createBold("The real competition is just about to begin. I'm introducing a new queen into the race!");
    screen.createBold('Please welcome to the race... ' + lateQueen.getName() + "!!");
    screen.createImage(lateQueen.image, "royalblue");
    currentCast.push(lateQueen);
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");

}
function judging6WayScreen() {
    bottom6WayLipsyncCheck = true;
    let judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    let o = 0;
    for (let i = 0; i < topQueens.length; i++) {
        judgingScreen.createImage(topQueens[i].image, "cyan");
        judgingScreen.createImage(bottomQueens[o].image, "cyan");
        judgingScreen.createImage(bottomQueens[o+1].image, "cyan");
        o = o + 2;
    }
    o = 0;
    judgingScreen.createBold("", "judged");
    let judged = document.getElementById("judged");
    for (let i = 0; i < topQueens.length; i++) {
        judged.innerHTML += `${topQueens[i].getName()}, `;
        judged.innerHTML += `${bottomQueens[o].getName()}, `;
        judged.innerHTML += `${bottomQueens[o+1].getName()}, `;
        o = o + 2;
    }
    judged.innerHTML += "you represent the tops and bottoms of the week.";
    judgingScreen.createHorizontalLine();
    judgingScreen.createParagraph("", "safeQueens");
    let safeQueens = document.querySelector("p#safeQueens");
    for (let i = 0; i < currentCast.length; i++) {
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            currentCast[i].addToTrackRecord("SAFE");
            currentCast[i].ppe += 3;
        }
    }
    safeQueens.innerHTML += "you are safe.";
    judgingScreen.createButton("Proceed", "winAndBtm6()");
}
function winAndBtm6() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (isTeamChallenge) {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    //double win:
    else if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        topQueens[1].ppe += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
            topQueens[i].favoritism += 1;
            topQueens[i].ppe += 4;
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
            highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "Y'all need to step your pussy up...";
    }
    screen.createBold("For the first time in Drag Race Herstory, all of you will be lipsyncing for your life.");
    screen.createButton("Proceed", "bottom6()");
}
function bottom6() {
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].getLipsync();
    }
    bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("I've made my decision.");
    let score1 = bottomQueens[4].lipsyncScore - bottomQueens[4].favoritism + bottomQueens[4].unfavoritism;
    let score2 = bottomQueens[5].lipsyncScore - bottomQueens[5].favoritism + bottomQueens[5].unfavoritism;
    for (let i = 0; i <bottomQueens.length - 2; i++){
        screen.createImage(bottomQueens[i].image, "tomato");
        screen.createBold(bottomQueens[i].getName() + ", shantay you stay.");
        bottomQueens[i].addToTrackRecord("BTM6");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
    if (score1 < 4 && score2 < 4 && randomNumber(0, 100) <= 10 && !doubleSashay && currentCast.length > 5 && noDouble == false) {
        screen.createImage(bottomQueens[4].image, "darkred");
        screen.createImage(bottomQueens[5].image, "darkred");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold("Neither one of you survived that lipsync..." + bottomQueens[4].getName() + ", " + bottomQueens[5].getName() + ", now your fates rests in the hands of the drag gods.");
            screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
            if (chocolateBarCheck(bottomQueens[4], bottomQueens[5]) == 1) {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[5].getName() + ", sashay away...");
                bottomQueens[5].addToTrackRecord("ELIM");
                bottomQueens[5].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[5]);
                currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(bottomQueens[4].getName() + "!! Condragtulations, you are safe to slay another day!");
                bottomQueens[4].addToTrackRecord("CHOC");
                bottomQueens[4].unfavoritism += 3;
                bottomQueens[4].ppe += 1;
                chocolateBarTwistCheck = true;
                
            } else if (chocolateBarCheck(bottomQueens[4], bottomQueens[5]) == 2) {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[4].getName() + ", sashay away...");
                bottomQueens[4].addToTrackRecord("ELIM");
                bottomQueens[4].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[4]);
                currentCast.splice(currentCast.indexOf(bottomQueens[4]), 1);
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(bottomQueens[5].getName() + "!! Condragtulations, you are safe to slay another day!");
                bottomQueens[5].addToTrackRecord("CHOC");
                bottomQueens[5].unfavoritism += 3;
                bottomQueens[5].ppe += 1;
                chocolateBarTwistCheck = true;
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[4].getName() + ", sashay away...");
                bottomQueens[4].addToTrackRecord("ELIM");
                bottomQueens[4].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[4]);
                currentCast.splice(currentCast.indexOf(bottomQueens[4]), 1);
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[5].getName() + ", sashay away...");
                bottomQueens[5].addToTrackRecord("ELIM");
                bottomQueens[5].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[5]);
                currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
                
            }
        } else {
            screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
            doubleSashay = true;
            bottomQueens[4].addToTrackRecord("ELIM");
            bottomQueens[4].unfavoritism += 5;
            eliminatedCast.unshift(bottomQueens[4]);
            currentCast.splice(currentCast.indexOf(bottomQueens[4]), 1);
            bottomQueens[5].addToTrackRecord("ELIM");
            bottomQueens[5].unfavoritism += 5;
            eliminatedCast.unshift(bottomQueens[5]);
            currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
        }
    }else{
        screen.createImage(bottomQueens[4].image, "tomato");
        screen.createBold(bottomQueens[4].getName() + ", shantay you stay.");
        bottomQueens[4].addToTrackRecord("BTM6");
        bottomQueens[4].unfavoritism += 3;
        bottomQueens[4].ppe += 1;
        screen.createImage(bottomQueens[5].image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(bottomQueens[5].getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(bottomQueens[5]) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(bottomQueens[5].getName() + "!! Condragtulations, you are safe to slay another day!");
                bottomQueens[5].addToTrackRecord("CHOC");
                bottomQueens[5].unfavoritism += 3;
                bottomQueens[5].ppe += 1;
                chocolateBarTwistCheck = true;
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[5].getName() + ", sashay away...");
                bottomQueens[5].addToTrackRecord("ELIM");
                bottomQueens[5].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[5]);
                currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
                
            }
        } else {
            screen.createBold(bottomQueens[5].getName() + ", sashay away...");
            bottomQueens[5].addToTrackRecord("ELIM");
            bottomQueens[5].unfavoritism += 5;
            eliminatedCast.unshift(bottomQueens[5]);
            currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
        }  
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function judgingSlayersScreen() {
    slayersCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    for (let i = 0; i < topQueens.length; i++) {
        screen.createImage(topQueens[i].image, "black");
    }
    screen.createHorizontalLine();
    if (currentCast.length > 8){
        screen.createBold("", "safeQueens");
        let safeQueens = document.querySelector("b#safeQueens");
        for (let i = 0; i < 3; i++) {
            safeQueens.innerHTML += topQueens[topQueens.length - (i + 1)].getName() + ", ";
            topQueens[topQueens.length - (i + 1)].addToTrackRecord("SAFE");
            topQueens[topQueens.length - (i + 1)].ppe += 3;
        }
        topQueens.splice(topQueens.length - 3, 3);
        safeQueens.innerHTML += "you are safe..";
        screen.createHorizontalLine();
    }
    for (let i = 0; i < topQueens.length; i++) {
        screen.createImage(topQueens[i].image, "cyan");
    }
    screen.createBold("", "judged");
    let judged = document.getElementById("judged");
    for (let i = 0; i < topQueens.length; i++) {
        judged.innerHTML += `${topQueens[i].getName()}, `;
    }
    judged.innerHTML += "you represent the tops of the week.";
    screen.createParagraph("Nobody is going home tonight!");
    screen.createHorizontalLine();

    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[1].image, "cyan");
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
            topQueens[i].favoritism += 1;
            topQueens[i].ppe += 4;
        }
    }
    screen.createParagraph("", "highs");
    let highs = document.getElementById("highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += `${topQueens[i].getName()}, `;
    }
    highs.innerHTML += "good job this week, you're all safe.";
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(top2[0].image, "royalblue");
    screen.createBold(`${top2[0].getName()}, you're a winner baby!`);
    top2[0].addToTrackRecord("WIN");
    top2[0].favoritism += 5;
    top2[0].ppe += 5;
    top2[1].addToTrackRecord("TOP2");
    top2[1].favoritism += 2;
    top2[1].ppe += 4.5;
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function judgingFloppersScreen() {
    floppersCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Brace yourselves, cause Drag Race is about to get real..");
    screen.createBold("Based on tonight's performances... This week there will be no winners.");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    for (let i = 0; i < currentCast.length; i++) {
        screen.createImage(currentCast[i].image, "black");
    }
    screen.createBold("I'm really, really disappointed. No one is safe and two of you will lipsync for your life..", "judged");
    screen.createHorizontalLine();
    screen.createBold("", "safeQueens");
    let safeQueens = document.querySelector("b#safeQueens");
    for (let i = 0; i < currentCast.length; i++) {
        if (bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            currentCast[i].addToTrackRecord("SAFE");
            currentCast[i].ppe += 3;
        }
    }
    safeQueens.innerHTML += "you are all safe. And as you step to the back of the stage, keep one thing on mind. STEP YOUR PUSSIES UP.";
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++)
        bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
    bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    bottomQueens[0].addToTrackRecord("LOW");
    screen.createImage(bottomQueens[0].image, "pink");
    screen.createBold(bottomQueens[0].getName() + "... you are safe.");
    bottomQueens[0].unfavoritism += 1;
    bottomQueens[0].ppe += 2;
    bottomQueens.splice(0, 1);
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipSync()");
}
function judgingScreen() {
    let judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    if (team == true) {
        if(currentCast>4)
        {
        judgingScreen.createImage(topQueens[0].QueenA.image, "cyan");
        judgingScreen.createImage(topQueens[1].QueenA.image, "cyan");
        judgingScreen.createImage(topQueens[0].QueenB.image, "cyan");
        judgingScreen.createImage(topQueens[1].QueenB.image, "cyan");
        }
        else
        {
        judgingScreen.createImage(topQueens[0].QueenA.image, "cyan");
        judgingScreen.createImage(topQueens[0].QueenB.image, "cyan");
        }
        if(currentCast.length>4)
        {
        judgingScreen.createImage(bottomQueens[0].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[1].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[2].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[0].QueenA.image, "cyan");
        judgingScreen.createImage(bottomQueens[1].QueenA.image, "cyan");
        judgingScreen.createImage(bottomQueens[2].QueenA.image, "cyan");
        }
        else
        {
        judgingScreen.createImage(bottomQueens[0].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[1].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[0].QueenA.image, "cyan");
        judgingScreen.createImage(bottomQueens[1].QueenA.image, "cyan");
        }
        if(currentCast.length>4)
            judgingScreen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, ${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you represent the tops and bottoms of the week.`);
        else
            judgingScreen.createBold(`${topQueens[0].getName()}, ${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, you represent the tops and bottoms of the week.`);

    }
    else {
        if (topQueens.length > bottomQueens.length) {
            for (let i = 0; i < bottomQueens.length; i++) {
                judgingScreen.createImage(topQueens[i].image, "cyan");
                judgingScreen.createImage(bottomQueens[i].image, "cyan");
            }
            if (bottomQueens.length < topQueens.length) {
                judgingScreen.createImage(topQueens[bottomQueens.length].image, "cyan");
            }
        } else { 
            for (let i = 0; i < topQueens.length; i++) {
                judgingScreen.createImage(topQueens[i].image, "cyan");
                judgingScreen.createImage(bottomQueens[i].image, "cyan");
            }
            if (bottomQueens.length > topQueens.length) {
                judgingScreen.createImage(bottomQueens[topQueens.length].image, "cyan");
            }
        }
        judgingScreen.createBold("", "judged");
        let judged = document.getElementById("judged");
        if (topQueens.length > bottomQueens.length) {
            for (let i = 0; i < bottomQueens.length; i++) {
                judged.innerHTML += `${topQueens[i].getName()}, `;
                judged.innerHTML += `${bottomQueens[i].getName()}, `;
            }
            if (bottomQueens.length < topQueens.length) {
                judged.innerHTML += `${topQueens[bottomQueens.length].getName()}, `;
            }
        } else {
            for (let i = 0; i < topQueens.length; i++) {
                judged.innerHTML += `${topQueens[i].getName()}, `;
                judged.innerHTML += `${bottomQueens[i].getName()}, `;
            }
            if (bottomQueens.length > topQueens.length) {
                judged.innerHTML += `${bottomQueens[topQueens.length].getName()}, `;
            }
        }
        judged.innerHTML += "you represent the tops and bottoms of the week.";
    }
    judgingScreen.createHorizontalLine();
    judgingScreen.createParagraph("", "safeQueens");
    let safeQueens = document.querySelector("p#safeQueens");
    let sq = 0;
    //check if the queen is in the top or in the bottom, and if not put her as safe:
    for (let i = 0; i < currentCast.length; i++)
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            sq++;
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            if (team == false)
                currentCast[i].addToTrackRecord("SAFE");
                currentCast[i].ppe += 3;
            if (team == true) {
                currentCast[i].addToTrackRecord("SAFE");
                currentCast[i].QueenA.addToTrackRecord("SAFE");
                currentCast[i].QueenA.ppe += 3;
                currentCast[i].QueenB.addToTrackRecord("SAFE");
                currentCast[i].QueenB.ppe += 3;
            }
        }
    if(sq!=0)
    {
        
        if (isTeamChallenge && currentCast.length <= 8) {
            safeQueens.innerHTML += "";
        } else {
            safeQueens.innerHTML += "you are safe.";
        }
    }
    if(sq==0)
    {
        judgingScreen.createButton("Proceed","Critiques()");
        sq = 0;
    }
    else
    {
        judgingScreen.createButton("Proceed","UntuckedSafeQueens()");
        sq = 0;
    }
}
let thirdqueen = false;
function winAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (isTeamChallenge) {
        if (episodeChallenges[episodeChallenges.length - 1] == "Girl Group" && randomNumber(0, 100) >= 70) {
            for (let i = 0; i < topQueens.length; i++) {
                topQueens[i].addToTrackRecord(" WIN");
                topQueens[i].favoritism += 5;
                topQueens[i].ppe += 5;
                screen.createImage(topQueens[i].image, "royalblue");
            }
            screen.createBold("Condragulations, you're the winning team of today's challenge!");
            topQueens.splice(0);
            isTeamChallenge = false;
        } else if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
            topQueens[0].addToTrackRecord(" WIN");
            topQueens[0].favoritism += 5;
            topQueens[0].ppe += 5;
            topQueens[1].addToTrackRecord(" WIN");
            topQueens[1].favoritism += 5;
            topQueens[1].ppe += 5;
            screen.createImage(topQueens[0].image, "darkblue");
            screen.createImage(topQueens[1].image, "darkblue");
            screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
            topQueens.splice(0, 2);
        }else {
            topQueens[0].addToTrackRecord("WIN");
            topQueens[0].favoritism += 5;
            topQueens[0].ppe += 5;
            screen.createImage(topQueens[0].image, "royalblue");
            screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
            topQueens.splice(0, 1);
        }
    }//double win:
    else if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        topQueens[1].ppe += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(topQueens[0], topQueens[1]);
            conjoinedCheck = false;
        }
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(topQueens[0]);
            conjoinedCheck = false;
        }
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        if (isTeamChallenge){
            isTeamChallenge = false;
            for (let i = 0; i < topQueens.length; i++) {
                screen.createImage(topQueens[i].image, "aquamarine");
                topQueens[i].addToTrackRecord("HIGH TEAM");
                topQueens[i].favoritism += 1;
                topQueens[i].ppe += 4;
            }
        }else{
            for (let i = 0; i < topQueens.length; i++) {
                screen.createImage(topQueens[i].image, "lightblue");
                topQueens[i].addToTrackRecord("HIGH");
                topQueens[i].favoritism += 1;
                topQueens[i].ppe += 4;
            }
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
            highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    //do the same, but for the bottom queens:
    for (let i = 0; i < bottomQueens.length; i++)
        bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
    bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (bottomQueens.length == 5) {
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[1].addToTrackRecord("LOW");
        bottomQueens[2].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createImage(bottomQueens[1].image, "pink");
        screen.createImage(bottomQueens[2].image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", " + bottomQueens[2].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens[1].ppe += 2;
        bottomQueens[2].unfavoritism += 1;
        bottomQueens[2].ppe += 2;
        bottomQueens.splice(0, 3);
    }
    else if (bottomQueens.length == 4) {
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[1].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createImage(bottomQueens[1].image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens[1].ppe += 2;
        bottomQueens.splice(0, 2);
    } else if (bottomQueens.length == 3 && bottomQueens[0].performanceScore >= 35 && currentCast.length > 5) {
        thirdqueen = true;
        screen.createBold("... no one is safe.");
    }
    else if (bottomQueens.length == 3) {
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipSync()");
}
function teamWinAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    topQueens[0].QueenA.addToTrackRecord("WIN");
    topQueens[0].QueenB.addToTrackRecord("WIN");
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].QueenA.favoritism += 5;
    topQueens[0].QueenB.favoritism += 5;
    topQueens[0].QueenA.ppe += 5;
    topQueens[0].QueenB.ppe += 5;
    topQueens[0].ppe += 5;
    screen.createImage(topQueens[0].QueenB.image, "royalblue");
    screen.createImage(topQueens[0].QueenA.image, "royalblue");
    screen.createBold(topQueens[0].getName() + ", condragulations you're the winners of this week's challenge!");
    if (topQueens.length > 1) {
        topQueens[1].QueenA.addToTrackRecord("HIGH");
        topQueens[1].QueenB.addToTrackRecord("HIGH");
        topQueens[1].addToTrackRecord("HIGH");
        topQueens[1].favoritism += 1;
        topQueens[1].ppe += 4;
        topQueens[1].QueenA.favoritism += 1;
        topQueens[1].QueenA.ppe += 4;
        topQueens[1].QueenB.favoritism += 1;
        topQueens[1].QueenB.ppe += 4;
        screen.createImage(topQueens[1].QueenB.image, "cyan");
        screen.createImage(topQueens[1].QueenA.image, "cyan");
        screen.createParagraph(topQueens[1].getName() + ", good work this week, you're safe.");
    }
    screen.createHorizontalLine();
    if (bottomQueens.length > 2) {
        screen.createParagraph(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you're the bottoms of the week...`);
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].QueenA.addToTrackRecord("LOW");
        bottomQueens[0].QueenB.addToTrackRecord("LOW");
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens[0].QueenA.unfavoritism += 1;
        bottomQueens[0].QueenA.ppe += 2;
        bottomQueens[0].QueenB.unfavoritism += 1;
        bottomQueens[0].QueenB.ppe += 2;
        screen.createImage(bottomQueens[0].QueenB.image, "pink");
        screen.createImage(bottomQueens[0].QueenA.image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", you are safe.");
        bottomQueens.splice(0, 1);
    }
    screen.createImage(bottomQueens[0].QueenB.image, "tomato");
    screen.createImage(bottomQueens[0].QueenA.image, "tomato");
    screen.createImage(bottomQueens[1].QueenB.image, "tomato");
    screen.createImage(bottomQueens[1].QueenA.image, "tomato");
    screen.createBold(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, I'm sorry my dears but you are up for elimination.`);
    screen.createButton("Proceed", "teamLipSync()");
}
function top2AndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[1].image, "cyan");
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
        topQueens[i].favoritism += 1;
        topQueens[i].ppe += 4;
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "bottoms");
    let bottoms = document.querySelector("b#bottoms");
    for (let i = 0; i < bottomQueens.length; i++) {
        bottoms.innerHTML += bottomQueens[i].getName() + ", ";
    }
    bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
    bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (ukvstwFinale) {
        if (bottomQueens.length >= 3 && currentCast.length > 6){
            bottomQueens[0].addToTrackRecord("LOW");
            screen.createImage(bottomQueens[0].image, "pink");
            screen.createParagraph(bottomQueens[0].getName() + "... you are safe.");
            bottomQueens[0].unfavoritism += 1;
            bottomQueens[0].ppe += 2;
            bottomQueens.splice(0, 1);
        }
    } else if (allstarUs3Finale) {
        if (bottomQueens.length >= 3 && currentCast.length > 5){
            bottomQueens[0].addToTrackRecord("LOW");
            screen.createImage(bottomQueens[0].image, "pink");
            screen.createParagraph(bottomQueens[0].getName() + "... you are safe.");
            bottomQueens[0].unfavoritism += 1;
            bottomQueens[0].ppe += 2;
            bottomQueens.splice(0, 1);
        }
    } else {
        for (let i = 0; i < bottomQueens.length; i++) {
            if (bottomQueens[i].performanceScore >= 0 && bottomQueens[i].performanceScore < 16) {
                screen.createImage(bottomQueens[i].image, "pink");
                screen.createParagraph(bottomQueens[i].getName() + ", you are safe.");
                bottomQueens[i].addToTrackRecord("LOW");
                bottomQueens[i].unfavoritism += 1;
                bottomQueens[i].ppe += 2;
                bottomQueens.splice(bottomQueens.indexOf(bottomQueens[i]), 1);
                break;
            }
        }
    }
   /* if (bottomQueens.length >= 3 && currentCast.length > 5){
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens.splice(0, 1);
    } */
    screen.createButton("Proceed", "ASUntucked()");
}
function topAndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    topQueens.splice(0, 1);
    screen.createImage(top2[0].image, "royalblue");
    screen.createBold(top2[0].getName() + ", condragulations, you're the Top All Star of the week!");
    if (conjoinedQueens && conjoinedCheck){
        conjoinedReturn(top2[0]);
        conjoinedCheck = false;
    }
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
        topQueens[i].favoritism += 1;
        topQueens[i].ppe += 4;
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    if (currentCast.length > 5) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createBold("", "bottoms");
        let bottoms = document.querySelector("b#bottoms");
        for (let i = 0; i < bottomQueens.length; i++) {
            bottoms.innerHTML += bottomQueens[i].getName() + ", ";
        }
        bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        if (bottomQueens.length >= 3 && currentCast.length > 4){
            bottomQueens[0].addToTrackRecord("LOW");
            screen.createImage(bottomQueens[0].image, "pink");
            screen.createBold(bottomQueens[0].getName() + "... you are safe.");
            bottomQueens[0].unfavoritism += 1;
            bottomQueens[0].ppe += 2;
            bottomQueens.splice(0, 1);
        }
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createParagraph("", "btms");
    let btms = document.getElementById("btms");
    for (let i = 0; i < bottomQueens.length; i++)
        btms.innerHTML += `${bottomQueens[i].getName()}, `;
    btms.innerHTML += ", you're up for elimination.";
   screen.createButton("Proceed","ASUntucked()")
}
let mismovoto = false;
function showvotes() {
    let button = document.querySelector("button#showvotes");
    let div = document.querySelector("div#votes");
    button.remove();
    if (lipsync_assassin){
        let winV = document.querySelector("p#winVP");
        if (currentCast.length <= 5){
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
            imageVoted.removeAttribute("hidden");
        }else{
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[2];
            imageVoted.removeAttribute("hidden");
        }
        winV.removeAttribute("hidden");
        div.removeAttribute("hidden");
        let resultVotes = document.querySelectorAll("p#totalP");
        for (let i = 0; i < resultVotes.length; i++){
            resultVotes[i].removeAttribute("hidden");
        }
    }else if (all_stars){
        let winV = document.querySelectorAll("p#winVP");
        for (let i = 0; i < winV.length; i++){
            winV[i].removeAttribute("hidden");
        }
        div.removeAttribute("hidden");
        if (mismovoto == true){
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
            imageVoted.removeAttribute("hidden");
            let imageVotedd = document.querySelectorAll("img[src='" + top2[1].lipstick.image +"']")[2];
            imageVotedd.removeAttribute("hidden");
        }else{
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
            imageVoted.removeAttribute("hidden");
            let imageVotedd = document.querySelectorAll("img[src='" + top2[1].lipstick.image +"']")[1];
            imageVotedd.removeAttribute("hidden");
        }
    }
    
}
function getLSConfessionals(FirstQ, SecondQ, screen)
{
    let firstpart = [
        "No shade to ",
        "I kind of don't want to lipsync against ",
        "I cannot let ",
        "I didn\'t want to be in this place, but ",
        "I came here to win. I cannot let ",
        "This is my chance to prove to the judges, I deserve to be here. Sorry "
    ];

    let secondpart = [
        ", but you need to go home. I'm staying here.",
        ", but I have to do it, to prove myself in this competition.",
        " get in my way. This is MY chance.",
        ", I have to lipsync, it's the game.",
        " get in my way. Sorry, but you're going home.",
        " but I cannot let you win this."
    ]

    let aslines = [
        'This is my chance to prove myself to Ru.',
        'I will do anything in my power to win this.',
        "Being in the top 2, feels really great! Would be even better with that lipsync win.",
        "This is my chance to prove myself. I'm not letting that slipping from my hands.",
        "I firmly believe in the lipstick that I've picked. And if I don't win something that I don't want to might happen.",
        "Come on give me this money!",
        "Time to do what I do best, and it's to outperform."
    ]

    if(!all_stars && !lipsync_assassin)
    {
        if(currentCast[currentCast.indexOf(FirstQ)].GetRelation(SecondQ)>2)
        {
            screen.createImage(FirstQ.image,"#fa57d9");
            screen.createBold("\"It really sucks to have to lipsync against "+SecondQ.getName()+", but if I want to stay here it's going to have to happen.\"");
            screen.createImage(SecondQ.image,"#fa57d9");
            screen.createBold("\"I really don't want to lipsync against "+FirstQ.getName()+", but I've got to do what I need to do.\"");
        }
        else if(currentCast[currentCast.indexOf(FirstQ)].trackRecord[currentCast[currentCast.indexOf(FirstQ)].trackRecord.length-1]=="BTM2" || currentCast[currentCast.indexOf(SecondQ)].trackRecord[currentCast[currentCast.indexOf(SecondQ)].trackRecord.length-1]=="BTM2")
        {
            if(currentCast[currentCast.indexOf(FirstQ)].trackRecord[currentCast[currentCast.indexOf(FirstQ)].trackRecord.length-1]=="BTM2")
            {
                screen.createImage(FirstQ.image,"#fa57d9");
                screen.createBold("\"I was already in the bottom last week. I have to make a miracle happen.\"");
            }
            else
            {
                let rdmconf2 = randomNumber(0,secondpart.length-1);
                screen.createImage(SecondQ.image,"#fa57d9");
                screen.createBold("\""+firstpart[rdmconf2]+FirstQ.getName()+secondpart[rdmconf2]+"\"");
            }

            if(currentCast[currentCast.indexOf(SecondQ)].trackRecord[currentCast[currentCast.indexOf(SecondQ)].trackRecord.length-1]=="BTM2")
            {
                screen.createImage(SecondQ.image,"#fa57d9");
                screen.createBold("\"I was already in the bottom last week. I have to make a miracle happen.\"");
            }
            else
            {
                let rdmconf1 = randomNumber(0,firstpart.length-1);
                screen.createImage(FirstQ.image,"#fa57d9");
                screen.createBold("\""+firstpart[rdmconf1]+SecondQ.getName()+secondpart[rdmconf1]+"\"");
            }
        }
        else
        {
        let rdmconf1 = randomNumber(0,firstpart.length-1);
        let rdmconf2 = randomNumber(0,secondpart.length-1);
        screen.createImage(FirstQ.image,"#fa57d9");
        screen.createBold("\""+firstpart[rdmconf1]+SecondQ.getName()+secondpart[rdmconf1]+"\"");
        screen.createImage(SecondQ.image,"#fa57d9");
        screen.createBold("\""+firstpart[rdmconf2]+FirstQ.getName()+secondpart[rdmconf2]+"\"");
        }
    }
    else if(all_stars)
    {
        let rdmconf1 = randomNumber(0,aslines.length-1);
        let rdmconf2 = randomNumber(0,aslines.length-1);
        screen.createImage(FirstQ.image,"#fa57d9");
        screen.createBold("\""+aslines[rdmconf1]+"\"");
        screen.createImage(SecondQ.image,"#fa57d9");
        screen.createBold("\""+aslines[rdmconf2]+"\"");
    }
    else if(lipsync_assassin)
    {
        let rdmconf1 = randomNumber(0,aslines.length-1);
        screen.createImage(FirstQ.image,"#fa57d9");
        screen.createBold("\""+aslines[rdmconf1]+"\"");
    }
}
let disqOrDept = false;

function LipsyncEvent(Queen)
{
    let rdmevent = randomNumber(0,100);
    if(rdmevent>=90)
    {
        switch(randomNumber(0,3)){
            case 0:
                return("LW");
                break;
            case 1:
                return("LS");
                break;
            case 2:
                return("EA");
                break;
            case 3:
                return("FA");
                break;
            case 3:
                return("NW");
                break;
        }
    }
    else
    {
        return("SM");
    }
}
function lipSync() {
    document.body.style.backgroundImage = "url('image/stage.webp')";
    let malus1 = 0;
    let maluUs2 = 0;
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].getLipsync();
    }
    bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("On the mainstage...");
    lsSong();
    screen.createBold("The time has come for you to lip-sync... for your lives! Good luck, and don't fuck it up.");
    
    screen.createHorizontalLine();
    screen.createBigText("In confessionals...");
    screen.createHorizontalLine();
    getLSConfessionals(bottomQueens[0],bottomQueens[1],screen);
    screen.createHorizontalLine();
    screen.createBigText("The music starts...");
    screen.createHorizontalLine();
    let evqueen1 = LipsyncEvent(bottomQueens[0]);
    let evqueen2 = LipsyncEvent(bottomQueens[1]);
    if(evqueen1 == "SM" && evqueen2 == "SM")
    {
        screen.createImage(bottomQueens[0].image);
        screen.createImage(bottomQueens[1].image);
        screen.createBold("The lipsync went with no fails from the queens.");
    }
    else
    {
        switch(evqueen1){
            case"LW":
                screen.createImage(bottomQueens[0].image);
                screen.createBold(bottomQueens[0].getName()+" lost their wig during the lipsync.");
                malus1 = 1;
                break;
            case"LS":
                screen.createImage(bottomQueens[0].image);
                screen.createBold(bottomQueens[0].getName()+" removed their shoes during the lipsync.");
                malus1 = 2;
                break;
            case"EA":
                screen.createImage(bottomQueens[0].image);
                screen.createBold(bottomQueens[0].getName()+"'s outfit fell apart on stage.");
                malus1 = 2;
                break;
            case"FA":
                screen.createImage(bottomQueens[0].image);
                screen.createBold(bottomQueens[0].getName()+" fell during the lipsync.");
                malus1 = 4;
                break;
            case"NW":
                screen.createImage(bottomQueens[0].image);
                screen.createBold(bottomQueens[0].getName()+" doesn't know the words.");
                malus1 = 5;
                break;
            case"SM":
                screen.createImage(bottomQueens[0].image);
                screen.createBold(bottomQueens[0].getName()+" didn't do any fails during their performance.");
                break;
        }

        switch(evqueen2){
            case"LW":
                screen.createImage(bottomQueens[1].image);
                screen.createBold(bottomQueens[1].getName()+" lost their wig during the lipsync.");
                maluUs2 = 2;
                break;
            case"LS":
                screen.createImage(bottomQueens[1].image);
                screen.createBold(bottomQueens[1].getName()+" removed their shoes during the lipsync.");
                maluUs2 = 3;
                break;
            case"EA":
                screen.createImage(bottomQueens[1].image);
                screen.createBold(bottomQueens[1].getName()+"'s outfit fell apart on stage.");
                maluUs2 = 4;
                break;
            case"FA":
                screen.createImage(bottomQueens[1].image);
                screen.createBold(bottomQueens[1].getName()+" fell during the lipsync.");
                maluUs2 = 5;
                break;
            case"NW":
                screen.createImage(bottomQueens[1].image);
                screen.createBold(bottomQueens[1].getName()+" doesn't know the words.");
                maluUs2 = 6;
                break;
            case"SM":
                screen.createImage(bottomQueens[1].image);
                screen.createBold(bottomQueens[1].getName()+" didn't do any fails during their performance.");
                break;
        }
    }
    screen.createButton("Proceed","lipSyncResult(+"+malus1+","+maluUs2+")");
}

function lipSyncResult(malus1,maluUs2)
{
    let screen = new Scene();
    screen.clean();
    screen.createBold("I've made my decision.");
    screen.createHorizontalLine();
    let score1 = (bottomQueens[0].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism) -malus1;
    let score2 = (bottomQueens[1].lipsyncScore - bottomQueens[1].favoritism + bottomQueens[1].unfavoritism) -maluUs2;
    if (thirdqueen && currentCast.length > 5) {
        thirdqueen = false;
        if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && noDouble == false && currentCast.length > 5) {
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
            screen.createImage(bottomQueens[1].image, "tomato");
            screen.createBold(bottomQueens[1].getName() + ", shantay you stay.");
            bottomQueens[0].addToTrackRecord("BTM3");
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            bottomQueens[1].addToTrackRecord("BTM3");
            bottomQueens[1].unfavoritism += 3;
            bottomQueens[1].ppe += 1;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(bottomQueens[2].getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(bottomQueens[2]) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[2].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[2].addToTrackRecord("CHOC");
                    bottomQueens[2].unfavoritism += 3;
                    bottomQueens[2].ppe += 1;
                    chocolateBarTwistCheck = true;
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                    bottomQueens[2].addToTrackRecord("ELIM");
                    bottomQueens[2].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[2]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
                }
            } else {
                screen.createImage(bottomQueens[2].image, "red");
                screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                bottomQueens[2].addToTrackRecord("ELIM");
                bottomQueens[2].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[2]);
                currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
            }
        } else {
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
            bottomQueens[0].addToTrackRecord("BTM3");
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold("Neither one of you survived that lipsync..." + bottomQueens[1].getName() + ", " + bottomQueens[2].getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(bottomQueens[1], bottomQueens[2]) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                    bottomQueens[2].addToTrackRecord("ELIM");
                    bottomQueens[2].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[2]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[1].addToTrackRecord("CHOC");
                    bottomQueens[1].unfavoritism += 3;
                    bottomQueens[1].ppe += 1;
                    chocolateBarTwistCheck = true;
                } else if (chocolateBarCheck(bottomQueens[1], bottomQueens[2]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[2].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[2].addToTrackRecord("CHOC");
                    bottomQueens[2].unfavoritism += 3;
                    bottomQueens[2].ppe += 1;
                    chocolateBarTwistCheck = true;
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                    bottomQueens[2].addToTrackRecord("ELIM");
                    bottomQueens[2].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[2]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
                    doubleSashay = true;
                }
            } else {
                screen.createImage(bottomQueens[1].image, "red");
                screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                screen.createImage(bottomQueens[2].image, "red");
                screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                bottomQueens[1].addToTrackRecord("ELIM");
                bottomQueens[1].unfavoritism += 5;
                bottomQueens[2].addToTrackRecord("ELIM");
                bottomQueens[2].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[1]);
                currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                eliminatedCast.unshift(bottomQueens[2]);
                currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
            }
        }
    } else {
        if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && !doubleShantay && noDouble == false && currentCast.length > 5) {
            if (randomNumber(0, 100) >= 95) {
                screen.createImage(bottomQueens[0].image, "tomato");
                screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
                screen.createImage(bottomQueens[1].image, "red");
                screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                screen.createImage(bottomQueens[1].image, "pink");
                screen.createBold("WAIT!!, wait, " + bottomQueens[1].getName() + ", I'm not ready for you to go home... shantay you stay.");
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[0].unfavoritism += 3;
                bottomQueens[0].ppe += 1;
                bottomQueens[1].addToTrackRecord(" BTM2");
                bottomQueens[1].unfavoritism += 3;
                bottomQueens[1].ppe += 1;
            } else {
                screen.createImage(bottomQueens[0].image, "magenta");
                screen.createImage(bottomQueens[1].image, "magenta");
                screen.createBold("Condragulations, shantay you both stay!!");
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[0].unfavoritism += 3;
                bottomQueens[0].ppe += 1;
                bottomQueens[1].addToTrackRecord(" BTM2");
                bottomQueens[1].unfavoritism += 3;
                bottomQueens[1].ppe += 1;
                doubleShantay = true;
            }
        }
        else if (score1 < 4 && score2 < 4 && randomNumber(0, 100) <= 10 && !doubleSashay && currentCast.length > 5 && noDouble == false) {
            screen.createImage(bottomQueens[0].image, "darkred");
            screen.createImage(bottomQueens[1].image, "darkred");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold("Neither one of you survived that lipsync..." + bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[0].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[0].addToTrackRecord("CHOC");
                    bottomQueens[0].unfavoritism += 3;
                    bottomQueens[0].ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[0].getName() + ", sashay away...");
                    bottomQueens[0].addToTrackRecord("ELIM");
                    bottomQueens[0].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[0]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[1].addToTrackRecord("CHOC");
                    bottomQueens[1].unfavoritism += 3;
                    bottomQueens[1].ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[0].getName() + ", sashay away...");
                    bottomQueens[0].addToTrackRecord("ELIM");
                    bottomQueens[0].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[0]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    doubleSashay = true;
                }
            } else {
                screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
                doubleSashay = true;
                bottomQueens[0].addToTrackRecord("ELIM");
                bottomQueens[0].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[0]);
                currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
                bottomQueens[1].addToTrackRecord("ELIM");
                bottomQueens[1].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[1]);
                currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
            }
        }
        else if (randomNumber(0, 1000) >= 998 && disqOrDept == false) {
            let quitterQueen = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
            screen.createImage(quitterQueen.image, "red");
            screen.createBold(quitterQueen.getName() + ", shockingly has left the runway, they decided that they won't lipsync.");
            if (quitterQueen.getName() == bottomQueens[0].getName()) {
                bottomQueens[0].addToTrackRecord("QUIT");
                bottomQueens[0].unfavoritism += 5;
                bottomQueens[0].QueenDisqOrDept = true;
                bottomQueens[1].addToTrackRecord("BTM2");
                bottomQueens[1].unfavoritism += 3;
                bottomQueens[1].ppe += 1;
            } else {
                bottomQueens[0].addToTrackRecord("BTM2");
                bottomQueens[0].unfavoritism += 3;
                bottomQueens[0].ppe += 1;
                bottomQueens[1].addToTrackRecord("QUIT");
                bottomQueens[1].unfavoritism += 5;
                bottomQueens[1].QueenDisqOrDept = true;
            }
            eliminatedCast.unshift(quitterQueen);
            currentCast.splice(currentCast.indexOf(quitterQueen), 1);
            disqOrDept = true;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                if (chocolateBarCheck(quitterQueen) == true) {
                    chocolateBarTwistCheck = true;
                }
            }
        }
        else if (randomNumber(0, 1000) >= 999 && disqOrDept == false) {
            let disqualifiedQueen = currentCast[randomNumber(0, currentCast.length - 1)];
            screen.createImage(disqualifiedQueen.image, "red");
            screen.createBold(disqualifiedQueen.getName() + ", it has come to my attention that you have broken the rules of this competition. I must ask you to sashay away.");
            if (disqualifiedQueen.getName() == bottomQueens[0].getName()) {
                bottomQueens[1].addToTrackRecord("BTM2");
            } else if (disqualifiedQueen.getName() == bottomQueens[1].getName()) {
                bottomQueens[0].addToTrackRecord("BTM2");
            }else {
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[1].addToTrackRecord(" BTM2");
                disqualifiedQueen.trackRecord.pop();
            }
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            bottomQueens[1].unfavoritism += 3;
            bottomQueens[1].ppe += 1;
            disqualifiedQueen.addToTrackRecord("DISQ");
            disqualifiedQueen.QueenDisqOrDept = true;
            eliminatedCast.unshift(disqualifiedQueen);
            currentCast.splice(currentCast.indexOf(disqualifiedQueen), 1);
            disqOrDept = true;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                if (chocolateBarCheck(disqualifiedQueen) == true) {
                    chocolateBarTwistCheck = true;
                }
            }
        }
        else if (randomNumber(0, 1000) >= 999 && disqOrDept == false) {
            let injuredQueen = currentCast[randomNumber(0, currentCast.length - 1)];
            screen.createImage(injuredQueen.image, "red");
            screen.createBold(injuredQueen.getName() + ", would you please step forward.");
            screen.createBold("We've been in touch with the doctor. You need time to heal. I cannot allow you to continue in the competition.");
            screen.createBold("I must ask you to sashay away.");
            if (injuredQueen.getName() == bottomQueens[0].getName()) {
                bottomQueens[1].addToTrackRecord("BTM2");
            } else if (injuredQueen.getName() == bottomQueens[1].getName()) {
                bottomQueens[0].addToTrackRecord("BTM2");
            }else {
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[1].addToTrackRecord(" BTM2");
                injuredQueen.trackRecord.pop();
            }
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            bottomQueens[1].unfavoritism += 3;
            bottomQueens[1].ppe += 1;
            injuredQueen.addToTrackRecord("DEPT");
            injuredQueen.QueenDisqOrDept = true;
            eliminatedCast.unshift(injuredQueen);
            currentCast.splice(currentCast.indexOf(injuredQueen), 1);
            disqOrDept = true;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                if (chocolateBarCheck(injuredQueen) == true) {
                    chocolateBarTwistCheck = true;
                }
            }
        } else {
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
            bottomQueens[0].addToTrackRecord("BTM2");
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            screen.createImage(bottomQueens[1].image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(bottomQueens[1].getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(bottomQueens[1]) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[1].addToTrackRecord("CHOC");
                    bottomQueens[1].unfavoritism += 3;
                    bottomQueens[1].ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    
                }
            } else {
                screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                bottomQueens[1].addToTrackRecord("ELIM");
                bottomQueens[1].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[1]);
                currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
            }
        }
    }

    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
    {
        if((s6Premiere || s14Premiere) == true && premiereCounter<3)
        screen.createButton("Proceed", "doublePremiere()");
    }
    else 
    {
        if(eliminatedCast.length != 0 && eliminatedCast[0].trackRecord[eliminatedCast[0].trackRecord.length-1]=="ELIM")
            screen.createButton("Proceed","Notes()");
        else
        {
            if (CheckForReturning() == true)
            screen.createButton("Proceed", "returningQueenScreen()");
            else
            screen.createButton("Proceed", "newEpisode()");
        }
    }
} 
function Notes()
{
    let notes =[
        ", my dear friend, I cannot wait for the world to fall in love with you, like you did with us. ",
        ", I cannot wait to meet up outside of here again! ",
        ", can't wait to be friends! xoxo ",
        ", you are amazing never forget that, ",
        ", I adore you, I love your energy. And everything that comes with it, ",
        ", I'm sorry you were sent home, but you have been a blessing to us. Love you, ",
        ", I am forever grateful that I met you, ",
        ", I love you from all of my heart. Have fun back home, ",
        ", You are so fierce, i loved you from the beginning! ",
        ", GIRL! You are the shit, never let someone else tell you different! ",
        ", I'm glad you went home! JK! (PS: I love you so much) "
    ];
    let randomleave =[
        "This isn't my last time here.",
        "Well time to go now...",
        "It was fun while it lasted.",
        "Oh this y'all ? It's just me leaving.",
        "Goodbye, everyone!",
        "I love y'all."
    ];
    let screen = new Scene();
    screen.clean();
    if(eliminatedCast.length != 1 && (eliminatedCast[0].episodesOn == eliminatedCast[1].episodesOn && (eliminatedCast[0].trackRecord[eliminatedCast[0].trackRecord.length-1] == "ELIM" && eliminatedCast[1].trackRecord[eliminatedCast[1].trackRecord.length-1] == "ELIM")))
    {
        screen.createHeader("Back in the workroom...");
            screen.createBigText(eliminatedCast[0].getName()+" & "+eliminatedCast[1].getName()+" comes back into the workroom.");
        for(let i = 0; i<=1; i++)
        {
            let howmanynotes = randomNumber(0,currentCast.length-2);
            console.log(howmanynotes);
            let queensnote = [];
            for(let q = 0;q<currentCast.length;q++)
                queensnote.push(currentCast[q]);
            if(howmanynotes!=0)
                screen.createBold("Some queens left some notes for "+eliminatedCast[i].getName()+".");
            for(let note = 0; note<howmanynotes; note++)
            {
                console.log(queensnote.length);
                let randnotes = randomNumber(0,notes.length-1);
                let whoqueen = randomNumber(0,queensnote.length-1);
                screen.createImage(eliminatedCast[i].image,'#ff4f2b');
                screen.createImage(queensnote[whoqueen].image);
                screen.createBold(eliminatedCast[i].getName()+notes[randnotes]+queensnote[whoqueen].getName()+".");
                queensnote.splice(whoqueen,1);
            }
            if(howmanynotes==0)
            {
                screen.createBold("No one left any notes for "+eliminatedCast[i].getName()+".");
            }
            screen.createHorizontalLine();
        }
        screen.createHorizontalLine();
        screen.createImageBW(eliminatedCast[0].image);
        screen.createBold(randomleave[randomNumber(0,randomleave.length-1)]);
        screen.createImageBW(eliminatedCast[1].image);
        screen.createBold(randomleave[randomNumber(0,randomleave.length-1)]);
        screen.createBigTextColored(currentCast.length+" queens remain...","black");

        if (CheckForReturning() == true)
            screen.createButton("Proceed", "returningQueenScreen()");
        else
            screen.createButton("Proceed", "newEpisode()");
    }
    else
    {
        screen.createHeader("Back in the workroom...");
        screen.createBigText(eliminatedCast[0].getName()+" comes back into the workroom.");
        let howmanynotes = randomNumber(0,currentCast.length-2);
        console.log(howmanynotes);
        let queensnote = [];
        for(let q = 0;q<currentCast.length;q++)
            queensnote.push(currentCast[q]);
        if(howmanynotes!=0)
            screen.createBold("Some queens left some notes for "+eliminatedCast[0].getName()+".");
        for(let note = 0; note<howmanynotes; note++)
        {
            console.log(queensnote.length);
            let randnotes = randomNumber(0,notes.length-1);
            let whoqueen = randomNumber(0,queensnote.length-1);
            screen.createImage(eliminatedCast[0].image,'#ff4f2b');
            screen.createImage(queensnote[whoqueen].image);
            screen.createBold(eliminatedCast[0].getName()+notes[randnotes]+queensnote[whoqueen].getName()+".");
            queensnote.splice(whoqueen,1);
        }
        if(howmanynotes==0)
        {
            screen.createBold("No one left any notes for "+eliminatedCast[0].getName()+".");
        }
        screen.createHorizontalLine();
        screen.createImageBW(eliminatedCast[0].image);
        screen.createBold(randomleave[randomNumber(0,randomleave.length-1)]);

        screen.createBigTextColored(currentCast.length+" queens remain...","black");
        if (CheckForReturning() == true)
            screen.createButton("Proceed", "returningQueenScreen()");
        else
            screen.createButton("Proceed", "newEpisode()");
    }
}
function teamLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck and don't fuck it up.");
    let wholipsyncs;
    let wholipsyncs1;
    if (randomNumber(0, 100) <= 50) {
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenA;
        wholipsyncs = true;
    }
    else {
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenB;
        wholipsyncs = false;
    }
    if (randomNumber(0, 100) <= 50) {
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenA;
        wholipsyncs1 = true;
    } else {
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenB;
        wholipsyncs1 = false;
    }
    screen.createImage(bottomQueens[0].lipsyncQueen.image);
    screen.createImage(bottomQueens[1].lipsyncQueen.image);
    screen.createBold(`${bottomQueens[0].lipsyncQueen.getName()} and ${bottomQueens[1].lipsyncQueen.getName()} will be lip-syncing`);
    lsSong();
    bottomQueens[0].lipsyncQueen.getLipsync();
    bottomQueens[1].lipsyncQueen.getLipsync();
    bottomQueens.sort((a, b) => (a.lipsyncQueen.lipsyncScore - a.lipsyncQueen.favoritism + a.lipsyncQueen.unfavoritism) - (b.lipsyncQueen.lipsyncScore - b.lipsyncQueen.favoritism + b.lipsyncQueen.unfavoritism));
    screen.createHorizontalLine();
    if (randomNumber(0, 100) >= 98 && wholipsyncs) {
        screen.createBold("OMG!! " + bottomQueens[0].QueenB.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    } else if (randomNumber(0, 100) >= 98 && !wholipsyncs) {
        screen.createBold("OMG!! " + bottomQueens[0].QueenA.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    } else if (randomNumber(0, 100) >= 98 && !wholipsyncs1) {
        screen.createBold("OMG!! " + bottomQueens[1].QueenA.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    } else if (randomNumber(0, 100) >= 98 && wholipsyncs1) {
        screen.createBold("OMG!! " + bottomQueens[1].QueenB.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    }
    screen.createImage(bottomQueens[0].lipsyncQueen.image, "pink");
    screen.createBold(bottomQueens[0].lipsyncQueen.getName() + ", shantay you stay.");
    screen.createImage(bottomQueens[1].lipsyncQueen.image, "red");
    screen.createBold(bottomQueens[1].lipsyncQueen.getName() + ", you will always be an All Star, now, sashay away...");
    if (bottomQueens[0].lipsyncQueen.getName() == bottomQueens[0].QueenA.getName()) {
        bottomQueens[0].QueenA.addToTrackRecord("BTM2 ");
        bottomQueens[0].QueenB.addToTrackRecord("BTM2");
    } else {
        bottomQueens[0].QueenA.addToTrackRecord("BTM2");
        bottomQueens[0].QueenB.addToTrackRecord("BTM2 ");
    }
    bottomQueens[0].addToTrackRecord("BTM2");
    bottomQueens[0].unfavoritism += 3;
    bottomQueens[0].ppe += 1;
    bottomQueens[0].QueenA.unfavoritism += 3;
    bottomQueens[0].QueenB.unfavoritism += 3;
    bottomQueens[0].QueenA.ppe += 1;
    bottomQueens[0].QueenB.ppe += 1;
    if (bottomQueens[1].lipsyncQueen.getName() == bottomQueens[1].QueenA.getName()) {
        bottomQueens[1].QueenA.addToTrackRecord("ELIM");
        bottomQueens[1].QueenB.addToTrackRecord("ELIM ");
    } else {
        bottomQueens[1].QueenA.addToTrackRecord("ELIM ");
        bottomQueens[1].QueenB.addToTrackRecord("ELIM");
    }
    bottomQueens[1].unfavoritism += 5;
    bottomQueens[1].QueenA.unfavoritism += 5;
    bottomQueens[1].QueenB.unfavoritism += 5;
    eliminatedCast.unshift(bottomQueens[1].QueenA);
    eliminatedCast.unshift(bottomQueens[1].QueenB);
    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function asLipSync() {
    document.body.style.backgroundImage = "url('image/stage.webp')";
    let screen = new Scene();
    screen.clean();
    screen.createHeader("On the main stage...");
    screen.createBold("It's time for you to lip-sync... for your legacy! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBigText("In the confessional...");
    screen.createHorizontalLine();
    getLSConfessionals(top2[0],top2[1],screen);
    screen.createHorizontalLine();
    screen.createBigText("The music starts...");
    screen.createHorizontalLine();
    let evqueen1 = LipsyncEvent(top2[0]);
    let evqueen2 = LipsyncEvent(top2[1]);
    let malus1 = 0;
    let maluUs2 = 0;
    if(evqueen1 == "SM" && evqueen2 == "SM")
    {
        screen.createImage(top2[0].image);
        screen.createImage(top2[1].image);
        screen.createBold("The lipsync went with no fails from the queens.");
    }
    else
    {
        switch(evqueen1){
            case"LW":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" lost their wig during the lipsync.");
                malus1 = 1;
                break;
            case"LS":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" removed their shoes during the lipsync.");
                malus1 = 2;
                break;
            case"EA":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+"'s outfit fell apart on stage.");
                malus1 = 2;
                break;
            case"FA":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" fell during the lipsync.");
                malus1 = 4;
                break;
            case"NW":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" doesn't know the words.");
                malus1 = 5;
                break;
            case"SM":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" didn't do any fails during their performance.");
                break;
        }

        switch(evqueen2){
            case"LW":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" lost their wig during the lipsync.");
                maluUs2 = 2;
                break;
            case"LS":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" removed their shoes during the lipsync.");
                maluUs2 = 3;
                break;
            case"EA":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+"'s outfit fell apart on stage.");
                maluUs2 = 4;
                break;
            case"FA":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" fell during the lipsync.");
                maluUs2 = 5;
                break;
            case"NW":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" doesn't know the words.");
                maluUs2 = 6;
                break;
            case"SM":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" didn't do any fails during their performance.");
                break;
        }
    }
    screen.createButton("Proceed","asLipSyncResult(+"+malus1+","+maluUs2+")");
}

function asLipSyncResult(malus1,maluUs2)
{
    let screen = new Scene();
    screen.clean();
    screen.createHeader("I have made my decision.");
    for (let i = 0; i < top2.length; i++) {
        if(i==1)
            (top2[i].getASLipsync())-malus1;
        else
            (top2[i].getASLipsync())-maluUs2;  
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createBold("Thanks you both, for your perfomance.");
    screen.createImage(top2[0].image);
    screen.createImage(top2[1].image);
    screen.createBold("Ladies, I have made my decision.");
    screen.createButton("Proceed","asLipSyncWhoWin()");
}

function asLipSyncWhoWin()
{
    let screen = new Scene();
    let winner = 0;
    screen.clean();
    screen.createHeader("I have made my decision.");
    screen.createBold("Thanks you both, for your perfomance.");
    screen.createImage(top2[0].image);
    screen.createImage(top2[1].image);
    screen.createBold("Ladies, I have made my decision.");
    screen.createHorizontalLine();
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6 && currentCast.length > 5) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        screen.createBold("You will both receive 10.000$!");
        top2[0].money += 10000;
        top2[0].money += 10000;

        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(top2[0], top2[1]);
            conjoinedCheck = false;
        }
        winner = 1;
    }
    else if (randomNumber(0, 1000) >= 995 && disqOrDept == false && currentCast.length > 5 && !smackdown) {
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(top2[0]);
            conjoinedCheck = false;
        }
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
        screen.createHorizontalLine();
        screen.createBold("Ru, I'm going home.");
        screen.createImage(top2[0].image, "#5920d4");
        screen.createBold(top2[0].getName() + ", you will always be an All Star, now, sashay away...");
        top2[0].addToTrackRecord("WIN+QUIT");
        top2[0].QueenDisqOrDept = true;
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].addToTrackRecord("WIN ");
        top2[1].favoritism += 4;
        top2[1].ppe += 5;
        eliminatedCast.unshift(top2[0]);
        currentCast.splice(currentCast.indexOf(top2[0]), 1);
        disqOrDept = true;
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            if (chocolateBarCheck(top2[0]) == true) {
                chocolateBarTwistCheck = true;
            }
        }
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
    }
    else {
        winner = 2;
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        screen.createBold(top2[0].getName() + ", you have received 10.000$!");
        top2[0].money += 10000;
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(top2[0]);
            conjoinedCheck = false;
        }
        top2[1].addToTrackRecord("WIN ");
        top2[1].favoritism += 4;
        top2[1].ppe += 5;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
    }
    screen.createButton("Proceed", "asReason("+winner+")");
}
let reasons = [
    "This queen is absolutely fantastic, but tonight I have chosen to send home...",
    "I adore them, but tonight they just didn't perform to the best of their ability. That's why I have chosen to send home...",
    "I'm sure everyone will love them, but the road for them ends here. I have chosen to send home...",
    "This queen proved that they are an all-stars just by walking in here, and tonight I have chosen to send..."
];
function asReason(winner)
{
    
    let whowon = winner;
    let screen = new Scene();
    let reason;
    screen.clean();
    screen.createHeader("On the mainstage...");
    screen.createBold("May the bottoms queens please step forward.");
    for(let i = 0;i<bottomQueens.length;i++)
    {
        screen.createImage(bottomQueens[i].image);
    }
    screen.createHorizontalLine();
    switch(winner)
    {
        case 1:
            screen.createImage(top2[0].image);
            screen.createImage(top2[1].image);
            screen.createBold(top2[0].getName()+" and "+top2[1].getName()+" with greats powers, comes greats responsibilities.");
            screen.createBold("Who have you both chosen to get the chop ?");
            screen.createBold(top2[0].getName()+" reveals that they have chosen...");
            screen.createBold(top2[1].getName()+" reveals that they have chosen...");
            break;
        case 2:
            reason = randomNumber(0,reasons.length-1);
            screen.createImage(top2[0].image);
            screen.createBold(top2[0].getName()+" with greats powers, comes greats responsibilities.");
            screen.createBold("Who have you chosen to get the chop ?");
            screen.createBold(reasons[reason]);
            break;
    }
    screen.createButton("Proceed", "asLipSyncSentHome("+whowon+","+reason+")");

}
function asLipSyncSentHome(winner,reason)
{
    let screen = new Scene();
    screen.clean();
    screen.createHeader("On the mainstage...");
    screen.createBold("May the bottoms queens please step forward.");
    for(let i = 0;i<bottomQueens.length;i++)
    {
        screen.createImage(bottomQueens[i].image);
    }
    screen.createHorizontalLine();
    switch(winner)
    {
        case 1:
            screen.createImage(top2[0].image);
            screen.createImage(top2[1].image);
            screen.createBold(top2[0].getName()+" and "+top2[0].getName()+" with greats powers, comes greats responsibilities.");
            screen.createBold("Who have you both chosen to get the chop ?");
            screen.createBold(top2[0].getName()+" reveals that they have chosen "+top2[0].lipstick.getName()+".");
            screen.createBold(top2[1].getName()+" reveals that they have chosen "+top2[1].lipstick.getName()+".");
            break;
        case 2:
            screen.createImage(top2[0].image);
            screen.createBold(top2[0].getName()+" with greats powers, comes greats responsibilities.");
            screen.createBold("Who have you chosen to get the chop ?");
            screen.createBold(reasons[reason]);
            break;
    }
    switch(winner)
    {
        case 1:
                if (top2[0].lipstick == top2[1].lipstick) {
                    assasinlipstick.push(top2[0].lipstick.getName());
                    assasinlipstick.push(" ");
                    screen.createImage(top2[0].lipstick.image, "red");
                    if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                        screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                        screen.createBold("If you have the golden chocolate bar, you will be safe.");
                        if (chocolateBarCheck(top2[0].lipstick) == true) {
                            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                            screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                            top2[0].lipstick.addToTrackRecord("CHOC");
                            top2[0].lipstick.unfavoritism += 3;
                            top2[0].lipstick.ppe += 1;
                            chocolateBarTwistCheck = true;
                            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                        } else {
                            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                            screen.createBold("It's chocolate.");
                            screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                            top2[0].lipstick.addToTrackRecord("ELIM");
                            top2[0].lipstick.unfavoritism += 5;
                            eliminatedCast.unshift(top2[0].lipstick);
                            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                            
                        }
                    } else {
                        screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                        top2[0].lipstick.addToTrackRecord("ELIM");
                        top2[0].lipstick.unfavoritism += 5;
                        eliminatedCast.unshift(top2[0].lipstick);
                        bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                        currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    }
                }
                else {
                    screen.createImage(top2[0].lipstick.image, "red");
                    screen.createImage(top2[1].lipstick.image, "red");
                    assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
                    assasinlipstick.push(" ");
                    if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                        screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                        screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                        if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                            screen.createBold("It's chocolate.");
                            top2[1].lipstick.addToTrackRecord("ELIM");
                            top2[1].lipstick.unfavoritism += 5;
                            eliminatedCast.unshift(top2[1].lipstick);
                            bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                            currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                            screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                            top2[0].lipstick.addToTrackRecord("CHOC");
                            top2[0].lipstick.unfavoritism += 3;
                            top2[0].lipstick.ppe += 1;
                            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                            chocolateBarTwistCheck = true;
                            
                        } else if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 2) {
                            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                            screen.createBold("It's chocolate.");
                            top2[0].lipstick.addToTrackRecord("ELIM");
                            top2[0].lipstick.unfavoritism += 5;
                            eliminatedCast.unshift(top2[0].lipstick);
                            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                            screen.createBold(top2[1].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                            top2[1].lipstick.addToTrackRecord("CHOC");
                            top2[1].lipstick.unfavoritism += 3;
                            top2[1].lipstick.ppe += 1;
                            bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                            chocolateBarTwistCheck = true;
                            
                        } else {
                            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                            screen.createBold("It's chocolate.");
                            top2[0].lipstick.addToTrackRecord("ELIM");
                            top2[0].lipstick.unfavoritism += 5;
                            eliminatedCast.unshift(top2[0].lipstick);
                            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                            screen.createBold("It's chocolate.");
                            top2[1].lipstick.addToTrackRecord("ELIM");
                            top2[1].lipstick.unfavoritism += 5;
                            eliminatedCast.unshift(top2[1].lipstick);
                            bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                            currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                            
                        }
                    } else {
                        screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                        top2[0].lipstick.addToTrackRecord("ELIM");
                        top2[0].lipstick.unfavoritism += 5;
                        eliminatedCast.unshift(top2[0].lipstick);
                        bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                        currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                        top2[1].lipstick.addToTrackRecord("ELIM");
                        top2[1].lipstick.unfavoritism += 5;
                        eliminatedCast.unshift(top2[1].lipstick);
                        bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                        currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    }
                }
                break;
            
        case 2:
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
            break;

    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 3 && !disqOrDept)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2 && !disqOrDept || bottomQueens.length == 2 && currentCast.length == 4)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
    screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}

let assasintable = [];
let assasinlipstick = [];
let assassin;
let backToWinner;

function lsaLipSync() {
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createHeader("It's time to ruveal...");
    backToWinner = false;
    assassin = allQueens[randomNumber(0, allQueens.length - 1)];
    bottomQueens.sort((a, b) => b.votes - a.votes);
    if (bottomQueens[0].votes == bottomQueens[1].votes) {
        backToWinner = true;
                assassin.lipstick = bottomQueens[0];
                assassin.secondlipstick = bottomQueens[1];
                assassin.reallipstick = top2[0].lipstick;

    } else {
        assassin.lipstick = bottomQueens[0];
    }
    top2.push(assassin);
    screen.createImage(assassin.image, "royalblue");
    screen.createBold("The lip-sync assassin is... " + assassin.getName() + "!");
    screen.createParagraph("Now, it's time for you to lip-sync... for your legacy!");
    lsSong();
    screen.createHorizontalLine();
    screen.createBigText("In the confessional...");
    screen.createHorizontalLine();
    getLSConfessionals(top2[0],top2[1],screen);
    screen.createHorizontalLine();
    screen.createBigText("The music starts...");
    screen.createHorizontalLine();
    let evqueen1 = LipsyncEvent(top2[0]);
    let evqueen2 = LipsyncEvent(top2[1]);
    let malus1 = 0;
    let maluUs2 = 0; 
    if(evqueen1 == "SM" && evqueen2 == "SM")
    {
        screen.createImage(top2[0].image);
        screen.createImage(top2[1].image);
        screen.createBold("The lipsync went with no fails from the queens.");
    }
    else
    {
        switch(evqueen1){
            case"LW":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" lost their wig during the lipsync.");
                malus1 = 1;
                break;
            case"LS":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" removed their shoes during the lipsync.");
                malus1 = 2;
                break;
            case"EA":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+"'s outfit fell apart on stage.");
                malus1 = 2;
                break;
            case"FA":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" fell during the lipsync.");
                malus1 = 5;
                break;
            case"NW":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" doesn't know the words.");
                malus1 = 6;
                break;
            case"SM":
                screen.createImage(top2[0].image);
                screen.createBold(top2[0].getName()+" didn't do any fails during their performance.");
                break;
        }

        switch(evqueen2){
            case"LW":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" lost their wig during the lipsync.");
                maluUs2 = 2;
                break;
            case"LS":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" removed their shoes during the lipsync.");
                maluUs2 = 3;
                break;
            case"EA":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+"'s outfit fell apart on stage.");
                maluUs2 = 4;
                break;
            case"FA":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" fell during the lipsync.");
                maluUs2 = 5;
                break;
            case"NW":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" doesn't know the words.");
                maluUs2 = 6;
                break;
            case"SM":
                screen.createImage(top2[1].image);
                screen.createBold(top2[1].getName()+" didn't do any fails during their performance.");
                break;
        }
    }
    screen.createButton("Proceed","lsaLipSyncResult("+malus1+","+maluUs2+")");
}

function lsaLipSyncResult(malus1,maluUs2)
{
    let screen = new Scene();
    screen.clean();
    screen.createHeader("I have made my decision.");
    for (let i = 0; i < top2.length; i++) {
        if(i==1)
            (top2[i].getASLipsync())-malus1;
        else
            (top2[i].getASLipsync())-maluUs2;  
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(top2[0].image);
    screen.createImage(top2[1].image);
    screen.createBold("Ladies, I've made my decision...");
    screen.createButton("Proceed","lsaLipSyncWhoWin()");
}

function lsaLipSyncWhoWin()
{
    let screen = new Scene();
    screen.clean();
    screen.createHeader("I have made my decision.");
    screen.createImage(top2[0].image);
    screen.createImage(top2[1].image);
    screen.createBold("Ladies, I've made my decision...");
    screen.createHorizontalLine();
    screen.createImage(top2[0].image, "darkblue");
    screen.createBold(top2[0].getName() + ", you're a winner baby!");
    if (top2[0].getName() == assassin.getName() ) {
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you're safe.");
        top2[1].addToTrackRecord("WIN ");
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        if(backToWinner==true)
        {
            assasintable.push(top2[0].getName());
            assasinlipstick.push(top2[0].lipstick.getName()+" & "+top2[0].secondlipstick.getName());
        }
        else
        {
            assasintable.push(top2[0].getName());
            assasinlipstick.push(top2[0].lipstick.getName());
        }
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
    }
    else {
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", thanks for participating.");
        top2[0].addToTrackRecord("WIN");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
    }
    allQueens.splice(allQueens.indexOf(assassin), 1);
    screen.createButton("Proceed","LsaResult()");
}

function LsaResult()
{
    let reason;
    let screen = new Scene();
    screen.clean();
    if (top2[1].getName()  == assassin.getName() ) {
        reason = randomNumber(0,reasons.length-1);
        screen.createImage(top2[0].image);
        screen.createBold(top2[0].getName()+" with greats powers, comes greats responsibilities.");
        screen.createBold(top2[0].getName()+" who have you chosen to get the chop ?");
        screen.createBold(reasons[reason]);
    }
    else
    {
        screen.createImage(assassin.image);
        screen.createBold(assassin.getName()+", who did the group voted to get the chop ?");
        screen.createBold("The group has spoken and they have chosen...");
    }
    screen.createButton("Proceed", "LsaElimination("+reason+")");
}

function LsaElimination(reason)
{
    let screen = new Scene();
    screen.clean();
    if (top2[1].getName()  == assassin.getName() ) {
        screen.createImage(top2[0].image);
        screen.createBold(top2[0].getName()+" with greats powers, comes greats responsibilities.");
        screen.createBold(top2[0].getName()+" who have you chosen to get the chop ?");
        screen.createBold(reasons[reason]);
    }
    else
    {
        screen.createImage(assassin.image);
        screen.createBold(assassin.getName()+", who did the group voted to get the chop ?");
        
        screen.createBold("The group has spoken and they have chosen "+assassin.lipstick.getName()+" to go home tonight.");
    }
    screen.createImage(top2[0].lipstick.image, "red");
    if(backToWinner == false && top2[0].getName()!=assassin.getName())
    {
        screen.createBold(top2[0].lipstick.getName() + ", my dear queen.");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                top2[0].lipstick.votes = 0;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                top2[0].lipstick.votes = 0;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            top2[0].lipstick.votes = 0;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1); 
        }
        for (let i = 0; i < bottomQueens.length; i++) {
            if (bottomQueens.length == 4)
                bottomQueens[i].addToTrackRecord("BTM5");
            else if (bottomQueens.length == 3)
                bottomQueens[i].addToTrackRecord("BTM4");
            else if (bottomQueens.length == 2)
                bottomQueens[i].addToTrackRecord("BTM3");
            else
                bottomQueens[i].addToTrackRecord("BTM2");
            bottomQueens[i].unfavoritism += 2;
            bottomQueens[i].ppe += 1;
            bottomQueens[i].votes = 0;
        }
        if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
            screen.createButton("Proceed", "doublePremiere()");
        else if (CheckForReturning() == true)
            screen.createButton("Proceed", "returningQueenScreen()");
        else
            screen.createButton("Proceed", "newEpisode()");
    }
    else if(backToWinner == true && top2[0].getName() == assassin.getName() )
    {
        screen.createBold(top2[0].lipstick.getName() + ", my dear queen.");
        screen.createButton("Proceed", "BackToWinner()");
        
    }
    else
    {
        screen.createBold(top2[0].lipstick.getName() + ", my dear queen.");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                top2[0].lipstick.votes = 0;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                top2[0].lipstick.votes = 0;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            top2[0].lipstick.votes = 0;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1); 
        }
        for (let i = 0; i < bottomQueens.length; i++) {
            if (bottomQueens.length == 4)
                bottomQueens[i].addToTrackRecord("BTM5");
            else if (bottomQueens.length == 3)
                bottomQueens[i].addToTrackRecord("BTM4");
            else if (bottomQueens.length == 2)
                bottomQueens[i].addToTrackRecord("BTM3");
            else
                bottomQueens[i].addToTrackRecord("BTM2");
            bottomQueens[i].unfavoritism += 2;
            bottomQueens[i].ppe += 1;
            bottomQueens[i].votes = 0;
        }
        if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
            screen.createButton("Proceed", "doublePremiere()");
        else if (CheckForReturning() == true)
            screen.createButton("Proceed", "returningQueenScreen()");
        else
            screen.createButton("Proceed", "newEpisode()");
    }
}

function BackToWinner()
{
    let screen = new Scene();
    screen.clean();
    if (top2[1].getName()  == assassin.getName() ) {
        let reason = randomNumber(0,reasons.length-1);
        screen.createImage(top2[0].image);
        screen.createBold(top2[0].getName()+" with greats powers, comes greats responsibilities.");
        screen.createBold(top2[0].getName()+" who have you chosen to get the chop ?");
        screen.createBold(reasons[reason]);
    }
    else
    {
        screen.createImage(assassin.image);
        screen.createBold(assassin.getName()+", who did the group voted to get the chop ?");
        screen.createBold("The group has spoken and they have chosen "+assassin.lipstick.getName()+" to go home tonight.");
    }

    screen.createImage(top2[0].lipstick.image, "red");
    screen.createBold(top2[0].lipstick.getName() + ", my dear queen.");
    screen.createHorizontalLine();
    screen.createImage(assassin.image);
    screen.createBold('But wait Ru! I have another lipstick.');
    screen.createBold("The group has also chosen "+top2[0].secondlipstick.getName()+" to get the chop tonight.");
    screen.createImage(Ru.image);
    screen.createBold('Well in that case, the power of elimination comes back to the top all-star.');
    screen.createBold(top2[1].getName()+', which queen have you chosen to get the chop ?');
    screen.createImage(top2[1].image);
    screen.createBold('I have chosen to send '+top2[1].lipstick.getName()+' to send home tonight.');
    assassin.lipstick = assassin.reallipstick;
    if (chocolateBarTwist  && !chocolateBarTwistCheck) {
        screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
        screen.createBold("If you have the golden chocolate bar, you will be safe.");
        if (chocolateBarCheck(top2[0].lipstick) == true) {
            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
            screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
            top2[0].lipstick.addToTrackRecord("CHOC");
            top2[0].lipstick.unfavoritism += 3;
            top2[0].lipstick.ppe += 1;
            top2[0].lipstick.votes = 0;
            chocolateBarTwistCheck = true;
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            
        } else {
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            top2[0].lipstick.votes = 0;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            
        }
    } else {
        screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
        top2[0].lipstick.addToTrackRecord("ELIM");
        top2[0].lipstick.unfavoritism += 5;
        top2[0].lipstick.votes = 0;
        eliminatedCast.unshift(top2[0].lipstick);
        bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
        currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1); 
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 2;
        bottomQueens[i].ppe += 1;
        bottomQueens[i].votes = 0;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}

class Relation {
    constructor(Queen)
    {
        this.queen = Queen;
        this.point = 0;
        this.status = "Neutral";
    }

    ChangePoints(points)
    {
        this.point = this.point + points;
            if(this.point<=-2)
            {
                this.status = "Hostile";
            }
            else if(this.point<=-5)
            {
                this.status = "Ennemy";
            }
            else if(this.point>=2)
            {
                this.status = "Friendly";
            }
            else if(this.point>=5)
            {
                this.status = "Friend";
            }
            else
            {
                this.status = "Neutral";
            }
    }

    GetPoints()
    {
        return(this.point);
    }

    GetQueen()
    {
        return(this.queen);
    }

    GetStatus()
    {
        return(this.status);
    }

}



class Queen {
    constructor(name, acting, comedy, dance, design, improv, runway, lipsync, image = "noimage", custom = false, original = "DEFAULT") {
        this.trackRecord = [];
        this.money = 0;
        this.relationships = [];
        this.alliances = [];
        this.country
        this.secondlipstick;
        this.reallipstick;
        this.runwayScore = 0;
        this.lipsyncScore = 0;
        this.performanceScore = 0;
        this.finaleScore = 0;
        this.winCount = 0;
        this.miniwinCount = 0;
        this.btmCount = 0;
        this.favoritism = 0;
        this.unfavoritism = 0;
        this.ppe = 0;
        this.episodesOn = 0;
        this.votes = 0;
        this.OriginalSeason = original;
        this.QueenDisqOrDept = false;
        this.customqueen = false;
        this.chocolate = false;
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
        if (image == "noimage")
            this.image = "image/queens/noimage.jpg";
        else if (custom == true)
            this.image = image;
        else
            this.image = "image/queens/" + image + ".webp";
        switch(this.OriginalSeason.substring(0,2))
        {
            case"US":
                this.country = "image/countries/US.webp";
                break;
            case"UK":
                this.country = "image/countries/UK.webp";
                break;
            case"IT":
                this.country = "image/countries/IT.webp";
                break;
            case"ES":
                this.country = "image/countries/ES.webp";
                break;
            case"DU":
                this.country = "image/countries/AU.webp";
                break;
            case"CA":
                this.country = "image/countries/CA.webp";
                break;
            case"HO":
                this.country = "image/countries/HO.webp";
                break;
            case"TH":
                this.country = "image/countries/TH.webp";
                break;
            default:
                this.country = "image/countries/CS.webp";
                break;
                
        }
    }
    _calculateScores(min, max, stat = 0) {
        let score = randomNumber(min, max);
        return score - stat;
    }
    getName() {
        return this._name;
    }

    AddRelation(Queen) {
        let newRel = new Relation(Queen)
        this.relationships.push(newRel);
    }

    ResetRelations()
    {
        this.relationships = [];
    }

    GetRelation(Queen)
    {
        for(let i = 0; i<this.relationships.length; i++)
        {
            if(this.relationships[i].GetQueen().getName()==Queen.getName())
            {
                return(this.relationships[i].GetPoints());
            }
        }
    }

    GetStatus(Queen)
    {
        for(let i = 0; i<this.relationships.length; i++)
        {
            if(this.relationships[i].GetQueen().getName()==Queen)
            {
                return(this.relationships[i].GetStatus());
            }
        }
    }

    ChangeRelation(Queen, points)
    {
        for(let i = 0; i<this.relationships.length; i++)
        {
            if(this.relationships[i].GetQueen().getName()==Queen.getName())
            {
                this.relationships[i].ChangePoints(points);
                return("Done!")
            }
        }
    }

    AddAlliance(Queen)
    {
        this.alliances.push(Queen);
    }

    IsAlliedTo(Queen)
    {
        let found = false;
        for(let a = 0; a<this.alliances.length; a++)
        {
            if(this.alliances[a].getName()==Queen.getName())
            {
                found = true;
            }
        }
        return(found);
    }

    RemoveAlliance(Queen)
    {
        this.alliances.slice(this.alliances.indexOf(Queen),1);
    }

    getFirstSeason() {
        return this.OriginalSeason;
    }

    getLipSyncStat() {
        return this._lipsyncStat;
    }
    getActing() {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    }
    getComedy() {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    }
    getMarketing() {
        this.performanceScore = this._calculateScores(25, 45, this._comedyStat + this._actingStat);
    }
    getDance() {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    }
    getDesign() {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    }
    getImprov() {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    }
    //special 'gets':
    getSnatch() {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    }
    getRusical() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    }
    getBall() {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    }
    getRumix() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    }
    getTalentShow() {
        this.performanceScore = this._calculateScores(40, 70, this._actingStat + this._comedyStat + this._danceStat + this._designStat + this._improvStat + this._lipsyncStat);
    }
    getFinale() {
        this.finaleScore = this.favoritism - this.unfavoritism;
    }
    getRunway() {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    }
    getLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    }
    getASLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    addToTrackRecord(placement) {
        this.trackRecord.push(placement);
    }
}


function GenerateSafeUntuckedEvent(SafeQueens, Untucked)
{
    if(SafeQueens.length!=1)
    {
        let randomqueen = randomNumber(0,SafeQueens.length-1);
        let same = true;
        let ssame = true;
        let secondqueen = randomNumber(0,SafeQueens.length-1);
        while(same==true)
        {
            secondqueen = randomNumber(0,SafeQueens.length-1);
            if(secondqueen == randomqueen)
            {
                same = true;
            }
            else
            {
                same = false;
            }
        }

        let threequeen = randomNumber(0,SafeQueens.length-1);
        if(SafeQueens.length>=3)
        {
            while(ssame==true)
            {
                threequeen = randomNumber(0,SafeQueens.length-1);
                    
                if(threequeen == randomqueen || threequeen == secondqueen)
                {
                    ssame = true;
                }
                else
                {
                    ssame = false;
                }
            }
        }
        switch(randomNumber(0,5)){
            case 0:
                Untucked.createImage(SafeQueens[randomqueen].image);
                Untucked.createImage(SafeQueens[secondqueen].image);
                if(SafeQueens[randomqueen].GetRelation(SafeQueens[secondqueen])<=-2)
                {
                    Untucked.createBold(SafeQueens[randomqueen].getName()+" is getting into a fight with "+SafeQueens[secondqueen].getName()+"!");
                    Untucked.createBold(SafeQueens[secondqueen].getName()+" say that "+SafeQueens[randomqueen].getName()+" should have been out the competition the first week.");
                    currentCast[currentCast.indexOf(SafeQueens[randomqueen])].ChangeRelation(SafeQueens[secondqueen],-3);
                    currentCast[currentCast.indexOf(SafeQueens[secondqueen])].ChangeRelation(SafeQueens[randomqueen],-3);
                }
                else
                {
                    Untucked.createBold(SafeQueens[randomqueen].getName()+" compliment "+SafeQueens[secondqueen].getName()+" on their runway tonight.");
                    currentCast[currentCast.indexOf(SafeQueens[randomqueen])].ChangeRelation(SafeQueens[secondqueen],1);
                    currentCast[currentCast.indexOf(SafeQueens[secondqueen])].ChangeRelation(SafeQueens[randomqueen],1);
                }
                break;

            case 1:
                Untucked.createImage(SafeQueens[randomqueen].image);
                Untucked.createImage(SafeQueens[secondqueen].image);
                Untucked.createBold(SafeQueens[randomqueen].getName()+" has a laugh with "+SafeQueens[secondqueen].getName()+"!");

                currentCast[currentCast.indexOf(SafeQueens[randomqueen])].ChangeRelation(SafeQueens[secondqueen],1);
                currentCast[currentCast.indexOf(SafeQueens[secondqueen])].ChangeRelation(SafeQueens[randomqueen],1);
                break;

            case 2:
                Untucked.createImage(SafeQueens[randomqueen].image);
                Untucked.createBold(SafeQueens[randomqueen].getName()+" is talking about they felt like she felt they was going to be in the top.");
                break;

            case 3:
                Untucked.createImage(SafeQueens[randomqueen].image);
                Untucked.createImage(SafeQueens[secondqueen].image);
                Untucked.createBold(SafeQueens[randomqueen].getName()+" felt like something "+SafeQueens[secondqueen].getName()+" said was rude towards them.");
                if(randomNumber(0,1)==0)
                {
                    Untucked.createBold(SafeQueens[secondqueen].getName()+" say that they shouldn't be mad, because it was nothing and that "+SafeQueens[randomqueen].getName()+" is just overeacting.");
                    currentCast[currentCast.indexOf(SafeQueens[randomqueen])].ChangeRelation(SafeQueens[secondqueen],-1);
                    currentCast[currentCast.indexOf(SafeQueens[secondqueen])].ChangeRelation(SafeQueens[randomqueen],-1);
                }
                else
                {
                    Untucked.createBold(SafeQueens[secondqueen].getName()+" say to "+SafeQueens[randomqueen].getName()+", that they did not mean to be rude, and apologize if it came across that way.");
                }
                break;
            case 4:
                Untucked.createImage(SafeQueens[randomqueen].image);
                if(SafeQueens[randomqueen].trackRecord[SafeQueens[randomqueen].trackRecord.length-1]== "BTM2" || SafeQueens[randomqueen].trackRecord[SafeQueens[randomqueen].trackRecord.length-1]== "BTM3" || SafeQueens[randomqueen].trackRecord[SafeQueens[randomqueen].trackRecord.length-1]== "BTM4" || SafeQueens[randomqueen].trackRecord[SafeQueens[randomqueen].trackRecord.length-1]== "BTM5" || SafeQueens[randomqueen].trackRecord[SafeQueens[randomqueen].trackRecord.length-1]== "BTM6")
                {
                    Untucked.createBold(SafeQueens[randomqueen].getName()+" say that they are happy being safe, after being in the bottom last week.");
                }
                else
                {
                    Untucked.createBold(SafeQueens[randomqueen].getName()+" say that they wanted to be in the top, but is happy that they are not in bottom.");
                }
                break;

            case 5:
                Untucked.createImage(SafeQueens[randomqueen].image);
                Untucked.createImage(SafeQueens[secondqueen].image);
                if(SafeQueens.length>=3)
                {
                    Untucked.createImage(SafeQueens[threequeen].image);
                }
                Untucked.createBold(SafeQueens[randomqueen].getName()+" ask the other queens who do they feel like is in the bottom.");
                let tqueen = randomNumber(0,bottomQueens.length-1);
                let othertqueen;
                let istroublesame = true;
                if(SafeQueens.length>=3)
                {
                    while(istroublesame==true)
                    {
                        othertqueen = randomNumber(0,bottomQueens.length-1);
                        if(othertqueen == tqueen)
                        {
                            istroublesame = true;
                        }
                        else
                        {
                            istroublesame = false;
                        }
                    }
                }

                Untucked.createBold(SafeQueens[secondqueen].getName()+" say that they felt like "+bottomQueens[tqueen].getName()+"'s performance was not the best, and that they might be in trouble.");
                if(SafeQueens.length>3)
                {
                    if(randomNumber(0,1)==0)
                    {
                        Untucked.createBold(SafeQueens[threequeen].getName()+" say that they agree and that indeed "+bottomQueens[tqueen].getName()+" might be in trouble.");
                    }
                    else
                    {
                        Untucked.createBold(SafeQueens[threequeen].getName()+" say they don't necessarily "+bottomQueens[othertqueen].getName()+" might be in trouble too.");
                    }
                }
                break;
        }
    }
    else
    {
    
    }
}

function GenerateUntuckedEvent(Queens, Untucked)
{
        let randomqueen = randomNumber(0,Queens.length-1);
        let same = true;
        let ssame = true;
        let secondqueen = randomNumber(0,Queens.length-1);
        while(same==true)
        {
            secondqueen = randomNumber(0,Queens.length-1);
            if(secondqueen == randomqueen)
            {
                same = true;
            }
            else
            {
                same = false;
            }
        }

        let threequeen = randomNumber(0,Queens.length-1);
        if(Queens.length>=3)
        {
            while(ssame==true)
            {
                threequeen = randomNumber(0,Queens.length-1);
                    
                if(threequeen == randomqueen || threequeen == secondqueen)
                {
                    ssame = true;
                }
                else
                {
                    ssame = false;
                }
            }
        }
        switch(randomNumber(0,5)){
            case 0:
                Untucked.createImage(currentCast[randomqueen].image);
                Untucked.createImage(currentCast[secondqueen].image);
                if(currentCast[randomqueen].GetRelation(currentCast[secondqueen])<=-2)
                {
                    Untucked.createBold(currentCast[randomqueen].getName()+" is getting into a fight with "+currentCast[secondqueen].getName()+"!");
                    Untucked.createBold(currentCast[secondqueen].getName()+" say that "+currentCast[randomqueen].getName()+" should have been out the competition the first week.");
                    currentCast[currentCast.indexOf(currentCast[randomqueen])].ChangeRelation(currentCast[secondqueen],-3);
                    currentCast[currentCast.indexOf(currentCast[secondqueen])].ChangeRelation(currentCast[randomqueen],-3);
                }
                else
                {
                    Untucked.createBold(currentCast[randomqueen].getName()+" compliment "+currentCast[secondqueen].getName()+" on their runway tonight.");
                    currentCast[currentCast.indexOf(currentCast[randomqueen])].ChangeRelation(currentCast[secondqueen],1);
                    currentCast[currentCast.indexOf(currentCast[secondqueen])].ChangeRelation(currentCast[randomqueen],1);
                }
                break;

            case 1:
                Untucked.createImage(currentCast[randomqueen].image);
                Untucked.createImage(currentCast[secondqueen].image);
                Untucked.createBold(currentCast[randomqueen].getName()+" has a laugh with "+currentCast[secondqueen].getName()+"!");

                currentCast[currentCast.indexOf(currentCast[randomqueen])].ChangeRelation(currentCast[secondqueen],1);
                currentCast[currentCast.indexOf(currentCast[secondqueen])].ChangeRelation(currentCast[randomqueen],1);
                break;

           case 2:
                if(topQueens.length>2)
                {
                    let rdmtopqueen = randomNumber(0,topQueens.length-1);
                    Untucked.createImage(topQueens[rdmtopqueen].image);
                    if(all_stars || lipsync_assassin)
                    {
                            if(top2.indexOf(rdmtopqueen)==-1)
                            {
                                if(all_stars)
                                    Untucked.createBold(topQueens[rdmtopqueen].getName()+" say that they really wished that they were in the top 2.");
                                if(lipsync_assassin)
                                    Untucked.createBold(topQueens[rdmtopqueen].getName()+" say that they really wished that they were the top allstar of the week.");
                            }
                    }
                    else
                    {
                            Untucked.createBold(topQueens[rdmtopqueen].getName()+" say that they think they have a really good chance at winning this challenge.");
                    }
                }
                break;
            case 3:
                if(topQueens.length>2)
                {
                    let rdmbtmqueen = randomNumber(0,bottomQueens.length-1);
                    Untucked.createImage(bottomQueens[rdmbtmqueen].image);
                    if(all_stars || lipsync_assassin)
                    {
                        Untucked.createBold(bottomQueens[rdmbtmqueen].getName()+" say that they really felt like they dissapointed the judges.");
                    }
                    else
                    {
                            Untucked.createBold(bottomQueens[rdmbtmqueen].getName()+" say that they might be afraid that they will have to lipsync tonight.");
                    }
                }
                break;
            case 4:
                if(topQueens.length>2)
                {
                    let rdmtopqueen = randomNumber(0,topQueens.length-1);
                    let rdmsafequeen = randomNumber(0,currentCast.length-1);
                    let rdmbtmqueen = randomNumber(0,bottomQueens.length-1);
                    let same = true;
                    while(same == true)
                    {
                        let rdmsafequeen = randomNumber(0,currentCast.length-1);
                        if(currentCast[rdmsafequeen].getName()==bottomQueens[rdmbtmqueen].getName())
                        {
                            same = true;
                        }
                        else
                        {
                            same = false;
                        }
                    }
                    Untucked.createImage(currentCast[rdmsafequeen].image);
                    Untucked.createImage(bottomQueens[rdmbtmqueen].image);
                    let response = randomNumber(0,1);
                    if(response==1)
                    {
                        Untucked.createImage(topQueens[rdmtopqueen].image);
                    }
                    Untucked.createBold(currentCast[rdmsafequeen].getName()+" ask "+bottomQueens[rdmbtmqueen].getName()+" what they thought about their critiques.");
                    if(randomNumber(0,1)==0)
                    {

                            Untucked.createBold(bottomQueens[rdmbtmqueen].getName()+" respond that they thought their critiques were completely false.");
                            if(response==1)
                            {
                                if(randomNumber(0,1)==1)
                                {
                                    Untucked.createBold(topQueens[rdmtopqueen].getName()+" say that "+bottomQueens[rdmbtmqueen].getName()+" is completely out of touch with reality.");
                                    currentCast[currentCast.indexOf(topQueens[rdmtopqueen])].ChangeRelation(bottomQueens[rdmbtmqueen],-1);
                                    currentCast[currentCast.indexOf(bottomQueens[rdmbtmqueen])].ChangeRelation(topQueens[rdmtopqueen],-1);
                                }
                                else
                                {
                                    Untucked.createBold(topQueens[rdmtopqueen].getName()+" say that "+bottomQueens[rdmbtmqueen].getName()+", they kind of disagree because maybe something that the judge said was not right, but they were over right.");
                                }
                            }
                        
                        
                    
    
                    }
                    else
                    {
                        Untucked.createBold(bottomQueens[rdmbtmqueen].getName()+" respond that they felt the judges were dissapointed in them, and say how much this competition means to them.");
                        if(response==1)
                        {
                            if(randomNumber(0,1)==1)
                            {
                                Untucked.createBold(topQueens[rdmtopqueen].getName()+" say to "+bottomQueens[rdmbtmqueen].getName()+", that even if she has to lipsync, she has still made it here.");
                                currentCast[currentCast.indexOf(topQueens[rdmtopqueen])].ChangeRelation(bottomQueens[rdmbtmqueen],1);
                                currentCast[currentCast.indexOf(bottomQueens[rdmbtmqueen])].ChangeRelation(topQueens[rdmtopqueen],1);
                            }
                            else
                            {
                                Untucked.createBold(topQueens[rdmtopqueen].getName()+" say to "+bottomQueens[rdmbtmqueen].getName()+", if they ever needs someone to talk they are here, and that they are sure that people are going to love them.");
                                currentCast[currentCast.indexOf(topQueens[rdmtopqueen])].ChangeRelation(bottomQueens[rdmbtmqueen],1);
                                currentCast[currentCast.indexOf(bottomQueens[rdmbtmqueen])].ChangeRelation(topQueens[rdmtopqueen],1);
                            }
                        }
                    }
                }
                break;
                case 5:
                Untucked.createImage(currentCast[randomqueen].image);
                Untucked.createImage(currentCast[secondqueen].image);
                if(currentCast[randomqueen].GetRelation(currentCast[secondqueen])<1)
                {
                    Untucked.createBold(currentCast[randomqueen].getName()+" is getting into a fight with "+currentCast[secondqueen].getName()+"!");
                    Untucked.createBold(currentCast[secondqueen].getName()+" say that "+currentCast[randomqueen].getName()+" should have been out the competition the first week.");
                    currentCast[currentCast.indexOf(currentCast[randomqueen])].ChangeRelation(currentCast[secondqueen],-3);
                    currentCast[currentCast.indexOf(currentCast[secondqueen])].ChangeRelation(currentCast[randomqueen],-3);
                }
                else
                {
                    Untucked.createBold(currentCast[randomqueen].getName()+" compliment "+currentCast[secondqueen].getName()+" on their runway tonight.");
                    currentCast[currentCast.indexOf(currentCast[randomqueen])].ChangeRelation(currentCast[secondqueen],1);
                    currentCast[currentCast.indexOf(currentCast[secondqueen])].ChangeRelation(currentCast[randomqueen],1);
                }
                break;

               
        }
}

function UntuckedSafeQueens()
{
    document.body.style.backgroundImage = "url('image/untucked.webp')";
    let Untucked = new Scene();
    Untucked.clean();
    Untucked.createHeader("In untucked...");
    Untucked.createBigText("All the safe queens come back from the main stage.");
    let SafeQueens = [];
    let safetext = ""
    for (let i = 0; i < currentCast.length; i++)
    {
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            Untucked.createImage(currentCast[i].image);
            SafeQueens.push(currentCast[i]);
        }
    }

    if(SafeQueens.length==1)
    {
        Untucked.createBold(SafeQueens[0].getName()+" grab a drink and sits down while waiting for the other queens.");
    }
    else
    {
        for (let s = 0; s < SafeQueens.length; s++)
        {
            if(s!=SafeQueens.length-1)
            {
                safetext += SafeQueens[s].getName();
                if(s!=SafeQueens.length-2)
                {
                    safetext +=", ";
                }
                else
                {

                }
            }
            else
            {
                safetext += " and "+SafeQueens[s].getName(); 
            }
        }
        Untucked.createBold(safetext+" all grab a drink and sit down.");
    }
    
    Untucked.createHorizontalLine();

    let howmanyevents = randomNumber(1,6);

    if(randomNumber(0,10)>8 && SafeQueens.length!=1)
    {
    let untext = "";
                for (let i = 0; i < SafeQueens.length; i++)
                {

                    for (let q = 0; q < currentCast.length; q++)
                    {
                        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1)
                        {
                            for (let k = 0; k < currentCast.length; k++)
                            {
                                currentCast[q].ChangeRelation(currentCast[k],1);
                            }
                        }
                    }

                    Untucked.createImage(SafeQueens[i].image);
                    if(i!=SafeQueens.length-1)
                    {
                        untext += SafeQueens[i].getName()+", ";
                    }
                    else
                    {
                        untext += " and "+SafeQueens[i].getName()+" ";
                    }
                }
                Untucked.createBold(untext+" all have a laugh about the challenge!");
    }

    for (let e = 0; e < howmanyevents; e++)
    {
        GenerateSafeUntuckedEvent(SafeQueens, Untucked);
    }
    Untucked.createButton("Proceed","Critiques()");
}
function GetCompliment()
{
    let actingc =[
        ', the acting was so naturally funny! It was really good.',
        ', you have such good physical comedy. You were a joy to watch!',
        ', each time you came onto the screen, you stole the show.',
        ', I loved seeing you on screen. It was so good each time.',
        ', I feel like you found the perfect balance between comedy and seriousness. It was great.'
    ];

    let standupc =[
        ', your stand up was very natural. Good job, this week.',
        ', I saw how nervous you were, but you completely knocked it out of the park once you got in. Great performance.',
        ', this is how you do stand up. It felt very natural and funny, I loved every second of it.',
        ', you were funny from begginning to end. You had a really good flow. Good job.',
        ', I cannot say how much I was entertained, it was really good.'
    ];

    let roastc =[
        ', your roast was very funny, and you felt natural up there. Good job, this week.',
        ', we asked you for a roast, and damn you brought the flamethrower. Great performance.',
        ', this is how you do a roast. You needed to find that fine line, and you did. Really good job tonight.',
        ', you were funny from begginning to end. You had a really good flow. Good job.',
        ', I cannot say how much I was entertained by your roast, it was really punch after punch after punch. You should be proud of yourself.'
    ];

    let commercialc =[
        ', you branded yourself all over, it was really good.',
        ', you did exactly what we needed of you, it was coherent, funny, ... . Outstanding job tonight!',
        ', your commercial was very you. It was really great, I loved it!',
        ', this challenge was totally up your alley, it had EVERYTHING! Great job, this week'
    ];
    let marketingc = [
        ', tonight, girl are you hidden marketer ? It was so GOOD!',
        ', you had ups and down and presented well. All the elements were there to make it really good.',
        ', you had probably the best ad, it was funny and serious at the time!',
        ', the design of your ad was simply amazing. Good job tonight.'
    ];
    let dancec = [
        ', you made it look very easy, and you looked at ease. Good job!',
        ', you nailed everything single aspect of it and you looked gorgeous congrats!',
        ', you had something hard to do and you knocked it out of the park!',
        ', each time you came on stage, I was like omg what are they going to do ? You killed it!',
        ', you had such an ease to do this! It was really great to watch!'
    ];
    let makeoverc = [
        ', you completely nailed this, you and your partner looks great.',
        ', you branded this successfully! If I saw your partner alone, I would have knowned it was yours.',
        ', you look so beautiful tonight and your partner does too! We really see family resemblance.',
        ', this look is very you! It\'s beautiful, and so does your partner.'
    ];
    let runwayc = [
        ', your looks were very good. I loved them all.',
        ', can you give me your wardrobe ? They were all so good!',
        ', did you sew all of theses yourself, if so you are a really good sewer. Congrats!',
        ', you literally ate up all of your looks. Great job tonight.'
    ];

    let designc =[
        ', this outfit is beautiful, I love every details of it. Good job, this week.',
        ', You look majestic tonight. I love how you worked the fabric, it looks so great! Congrats.',
        ', sometimes simple is bad, but here simple is smart. You made a simple dress but the attention to details is immaculate. You did really good tonight.',
        ', this is so good. I love it! Can you make some for me ? No, but for real this outfit is FIRE! I loved it.',
        ', are you a sewer ? Because if not you should become one. It is simply gorgeours from concept to realization.',
        ', this outfit is very well made. It is really good.',
        ', this challenge was up your alley, and you made lemonade out of lemons. This look is great, from the styling of everything down to the jewelry, just perfect.'
    ];

    let improvc = [
        ', you looked really at ease , and you played it smart!',
        ', you were really funny! And you knew how to bounce back from other people!',
        ', you are really good at improv, I can tell you it was so GOOD!',
        ', I loved your performance, you were really great!'
    ];
    let snatchgamec = [
        ', your character was brilliant you were incredibly funny.',
        ', each time it felt you got boring you bounced back up!',
        ', you picked a very good character, it was really funny from beginning to end.',
        ', you played this really smart, each time you had a chance to be in the spot light, you took it. Great job.',
        ', you really knew how to bounce back from others people, and it really made you shine.'
    ];
    let rusicalc = [
        ', you took a role and made it your own, you WERE the character!',
        ', you were a joy to watch, you did so good!',
        ', I loved each time you were on the stage, you had that caracterization spot on!',
        ', you may not have had the best role, but GIRL! You turned it out.'
    ];

    let ballc = [
        ', all of yours looks were very well made. Congrats!',
        ', you had such an ease at sewing it was incredible!',
        ', all of yours looks were perfect, from concept to realization, I can tell you\'re not here to play games!',
        ', your third look may not have been the best, but GIRL you sold like it was a versace dress. Congrats.'
    ];

    let rumixc = [
        ', your lyrics were great and so was your look. Good job tonight.',
        ', I had so much watching you perform, you were great.',
        ', damn you left the others no chance! You were such a stand-out.',
        ', you looked you had fun, and it made us enjoy you even more!'
    ];
    let girlgroupc = [
        ', your lyrics were great and so was your look. Good job tonight.',
        ', I had so much fun watching you perform, you were great.',
        ', damn you left the others no chance! You were such a stand-out.',
        ', you looked you had fun, and it made us enjoy you even more!',
        ', you were the stand-out of your group!',
        ', you were a very cohesive group. Good job!',
        ', you had so much fun! It really took us into your world.'
    ];

    let talentc =[
        ', this perfomance was so great! You are a natural, great job.',
        ', you did outstanding tonight, from start to finish, it was perfect. Congrats.',
        ', was it something we already saw before ? Yes, but you turned it out, taking something good we already seen and make it even better. You did really good tonight.',
        ', this was so good. I loved it! You looked beautiful while doing something unexpected. Good job on the surprise tonight.',
        ', in the beginning, i could see you getting in your head, but once you got the hang of it, you knocked it out of the park.',
        ', we can tell, you prepared. This was really great.',
        ', you made something that we didn\'t expect a talent. And it worked! You were fabulous.',
        ', you showed up and you showed out. It was original and well executed! Good job.',
        ', you had a really great show! It looked seamless, I can\'t even find one critique!'
    ];

    switch(episodeChallenges[episodeChallenges.length-1])
    {
        case"Acting":
            return(actingc[randomNumber(0,actingc.length-1)]);
            break;
        case"Stand Up":
            return(standupc[randomNumber(0,standupc.length-1)]);
            break;
        case"Roast":
            return(roastc[randomNumber(0,roastc.length-1)]);
            break;
        case"Commercial":
            return(commercialc[randomNumber(0,commercialc.length-1)]);
            break;
        case"Marketing":
            return(marketingc[randomNumber(0,marketingc.length-1)]);
            break;
        case"Dance":
            return(dancec[randomNumber(0,dancec.length-1)]);
            break;
        case"Choreo":
            return(dancec[randomNumber(0,dancec.length-1)]);
            break;
        case"Makeover":
            return(makeoverc[randomNumber(0,makeoverc.length-1)]);
            break;
        case"Runway":
            return(runwayc[randomNumber(0,runwayc.length-1)]);
            break;
        case"Design":
            return(designc[randomNumber(0,designc.length-1)]);
            break;
        case"Political Debate":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"The Bossy Rossy Show":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"The Bitchelor":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"Improv":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"Snatch Game of Love":
            return(snatchgamec[randomNumber(0,snatchgamec.length-1)]);
            break;
        case"Snatch Game":
            return(snatchgamec[randomNumber(0,snatchgamec.length-1)]);
            break;
        case"Rusical":
            return(rusicalc[randomNumber(0,rusicalc.length-1)]);
            break;
        case"Ball":
            return(ballc[randomNumber(0,ballc.length-1)]);
            break;
        case"Rumix":
            return(rumixc[randomNumber(0,rumixc.length-1)]);
            break;
        case"Girl Group":
            return(girlgroupc[randomNumber(0,girlgroupc.length-1)]);
            break;
        case"Talent Show":
            return(talentc[randomNumber(0,talentc.length-1)]);
            break;
        
        default:
            return("Not set yet");
    }
}

function GetCritiques()
{
    let actingc =[
        ', the acting was just not good, it felt really stiff.',
        ', you had such a good start, but then you faded into the background which was not good...',
        ', each time you came onto the screen, you looked more lost than the last time.',
        ', I feel like you were lacking confidence, and it showed.',
        ', I feel like you wanted to stand out so much, you stood out for the wrong reasons.',
        ', you could probably went down the road of so bad, it\'s you really missed that opportunity.',
        ', I felt like you struggled a lot with the acting, and it showed on the final product.'
    ];

    let standupc =[
        ', your stand up was very stiff. You looked very uneased.',
        ', I saw how nervous you were, and you never got of it. Get out of your head now, before it fucks you up.',
        ', your jokes just were not landing and you kept repeating yourself. It was not good.',
        ', you took a long time to get to the first joke, for it to be not funny.',
        ', you started off strong, but you were getting worse as time went on. For it to be successfull you need to start and end with a bang.'
    ];

    let roastc =[
        ', your roast was very bad. You looked very uneased.',
        ', I saw how nervous you were, and you never got of it. Get out of your head now, before it fucks you up.',
        ', your jokes just were not landing and you kept repeating yourself. It was not good.',
        ', you took a long time to get to the first joke, for it to be not funny.',
        ', you started off strong, but you were getting worse as time went on. For it to be successfull you need to start and end with a bang.',
        ', your roast was just not funny, it felt more offensive than anything.',
        ', it felt like you didn\'t use the audience, you could used have them more.'
    ];

    let commercialc =[
        ', I couldn\'t find that it was your marketing, if you weren\'t on it, it really lacked brand.',
        ', your commercial was incoherent and it really showed.',
        ', your commercial lacked a lot of branding. It was bad.',
        ', this challenge was totally up your alley, and you messed it up. You need to focus on what makes you well you.'
    ];
    let marketingc = [
        ', tonight, if really fell flat. You were almost not there.',
        ', it was very one note and messy. All the elements were there to make it not good.',
        ', it felt like you wanted comedy and seriousness but it didn\'t find the balance and it was bad.',
        ', the design was really confusing. I was lost with it.'
    ];
    let dancec = [
        ', you forgot most of the choreo, and it showed.',
        ', you knew the choreo but didn\'t put you in it, which was the challenge.',
        ', you had something hard to do and you didn\'t rose up to the occasion.',
        ', each time you came on stage, I was like who is she ? You almost were never in the spotlight.',
        ', you had such a hard time to do this and it showed.'
    ];
    let makeoverc = [
        ', I don\'t see any resemblance between you and your partner.',
        ', you didn\'t do your drag. If I saw your partner alone, I wouldn\'t have knowned it was yours.',
        ', you look so beautiful tonight, but your partner does not. And I feel like it was almost two differents outfits.',
        ', this look is not very you. It looks like someone else\'s partner.'
    ];
    let runwayc = [
        ', your looks were very basic. It looked unfinished.',
        ', your looks didn\'t match your style at all.',
        ', your looks felt rushed, there was no details.',
    ];

    let designc =[
        ', this outfit is not good, it\'s way too busy for the eyes.',
        ', You look okay. The outfit had a great concept but the realization is just not here.',
        ', sometimes simple is bad, but here is the case. You made a simple dress and there is no attention to details.',
        ', this is so weird. The outfit has no shape and the material looks very weird.',
        ', there is simply nothing, it\'s a mash-up of glued together stuff.',
    ];

    let improvc = [
        ', you looked really uneased , and you played it safe!',
        ', you were funny, but you couldn\'t bounce off people and it showed.',
        ', you are not good at improv, I can tell you it was really stiff.',
        ', I didn\'t like your performance, you were far from the best.'
    ];
    let snatchgamec = [
        ', your character was getting boring, and you didn\'t switch it up.',
        ', each time it felt you got boring, you just dug deeper, and you put yourself in a hole that you couldn\'t get out of.',
        ', you picked a character who was not the best, and it was one note the entire time.',
        ', you played this really bad, when you had a chance to shine, you simply didn\'t take it.',
        ', you couldn\'t bounce back off of other people. And that really fucked you over.'
    ];
    let rusicalc = [
        ', you took a role, and just played it, you needed to be the character, and you didn\'t do that.',
        ', you looked unconfortable.',
        ', each time you were on the stage, that caracterization was very off.',
        ', you may not have had the best role, and you faded into the background.'
    ];

    let ballc = [
        ', all of yours looks were not good.',
        ', you had such an uneasyness at walking the runway, it showed.',
        ', from concept to realization, it felt like you didn\'t fully fleshed out the concept.',
        ', your third look may not have been the best, and the problem is your two others looks were not incredible either.'
    ];

    let rumixc = [
        ', your lyrics were unoriginal, and you lacked choreo.',
        ', I felt sad for you, you looked sad each time you talked on stage.',
        ', you were such a stand-out, but your lyrics really dragged you down.',
        ', you looked you didn\'t have fun, and it took us out of the fantasy.'
    ];
    let girlgroupc = [
        ', your lyrics were unoriginal, and you lacked choreo.',
        ', I felt sad for you, you looked sad each time you talked on stage.',
        ', you were such a stand-out, but your lyrics really dragged you down.',
        ', you looked you didn\'t have fun, and it took us out of the fantasy.',
        ', you were the stand-out of your group, which here was not a good thing.',
        ', you were late on the group choreo, and you looked off because of it',
    ];

    let talentc =[
        ', this was not something original, and you didn\'t add you to it.',
        ', you were kinda boring, from start to finish, it was one note.',
        ', was it something we already saw before ? Yes, and you didn\'t change it at all.',
        ', this was so weird. You looked beautiful while doing something unexpected, but i couldn\'t tell what your talent was.',
        ', in the beginning, i could see you getting in your head, and you never got out of it. You struggled.',
        ', we can tell, you struggled. Don\'t let the audience see it.',
    ];

    switch(episodeChallenges[episodeChallenges.length-1])
    {
        case"Acting":
            return(actingc[randomNumber(0,actingc.length-1)]);
            break;
        case"Stand Up":
            return(standupc[randomNumber(0,standupc.length-1)]);
            break;
        case"Roast":
            return(roastc[randomNumber(0,roastc.length-1)]);
            break;
        case"Commercial":
            return(commercialc[randomNumber(0,commercialc.length-1)]);
            break;
        case"Marketing":
            return(marketingc[randomNumber(0,marketingc.length-1)]);
            break;
        case"Dance":
            return(dancec[randomNumber(0,dancec.length-1)]);
            break;
        case"Choreo":
            return(dancec[randomNumber(0,dancec.length-1)]);
            break;
        case"Makeover":
            return(makeoverc[randomNumber(0,makeoverc.length-1)]);
            break;
        case"Runway":
            return(runwayc[randomNumber(0,runwayc.length-1)]);
            break;
        case"Design":
            return(designc[randomNumber(0,designc.length-1)]);
            break;
        case"Political Debate":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"The Bossy Rossy Show":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"The Bitchelor":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"Improv":
            return(improvc[randomNumber(0,improvc.length-1)]);
            break;
        case"Snatch Game of Love":
            return(snatchgamec[randomNumber(0,snatchgamec.length-1)]);
            break;
        case"Snatch Game":
            return(snatchgamec[randomNumber(0,snatchgamec.length-1)]);
            break;
        case"Rusical":
            return(rusicalc[randomNumber(0,rusicalc.length-1)]);
            break;
        case"Ball":
            return(ballc[randomNumber(0,ballc.length-1)]);
            break;
        case"Rumix":
            return(rumixc[randomNumber(0,rumixc.length-1)]);
            break;
        case"Girl Group":
            return(girlgroupc[randomNumber(0,girlgroupc.length-1)]);
            break;
        case"Talent Show":
            return(talentc[randomNumber(0,talentc.length-1)]);
            break;
        
        default:
            return("Not set yet");
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let CritiQueens = [];
function Critiques()
{
    CritiQueens = [];
    document.body.style.backgroundImage = "url('image/mainstage.webp')";
    let MS = new Scene();
    MS.clean();
    MS.createHeader("On the main stage...");
    
    MS.createBigText('This week judging panel is...');
    for (let j =0; j<judgingpanel.length; j++)
    {
        MS.createImage(judgingpanel[j].image);
        if(judgingpanel[j].getSongs().length!=0)
        {
            setls = 1;
            for(let s =0; s<judgingpanel[j].getSongs().length; s++)
                setlssong.push(judgingpanel[j].getSongs()[s]);
        }
    }
    MS.createBold(judgetext);
    MS.createHorizontalLine();
    for (let i = 0; i < currentCast.length; i++)
    {
        if (topQueens.indexOf(currentCast[i]) != -1 || bottomQueens.indexOf(currentCast[i]) != -1) {
            MS.createImage(currentCast[i].image,"blue");
            CritiQueens.push(currentCast[i]);
        }
    }
    
    shuffleArray(CritiQueens);
    MS.createBold("You ladies represents the tops and bottoms of the week, now it's time for judges critiques.");
    for (let i = 0; i < CritiQueens.length; i++)
    {
        MS.createHorizontalLine();
        if(i==0)
        {
            MS.createBold('First up, we have '+CritiQueens[i].getName()+"!");
        }
        else if(i==CritiQueens.length-1)
        {
            MS.createBold('At last, we have '+CritiQueens[i].getName()+"!");
        }
        else
        {
            MS.createBold('Next, we have '+CritiQueens[i].getName()+"!");
        }
        if (topQueens.indexOf(CritiQueens[i]) != -1)
        {
            MS.createImage(judgingpanel[randomNumber(0,judgingpanel.length-1)].image);
            MS.createImage(CritiQueens[i].image);
            MS.createBold("\""+CritiQueens[i].getName()+GetCompliment()+"\"");

            MS.createImage(judgingpanel[randomNumber(0,judgingpanel.length-1)].image);
            MS.createImage(CritiQueens[i].image);
            MS.createBold("\""+CritiQueens[i].getName()+GetCompliment()+"\"");
        }
        else
        {
            MS.createImage(judgingpanel[randomNumber(0,judgingpanel.length-1)].image);
            MS.createImage(CritiQueens[i].image);
            MS.createBold("\""+CritiQueens[i].getName()+GetCritiques()+"\"");

            MS.createImage(judgingpanel[randomNumber(0,judgingpanel.length-1)].image);
            MS.createImage(CritiQueens[i].image);
            MS.createBold("\""+CritiQueens[i].getName()+GetCritiques()+"\"");
        }
    }

    let whoshouldgohome = false;
    if( randomNumber(0,10)==10 && currentCast.length<=7 && !all_stars && !lipsync_assassin)
    {
        whoshouldgohome = true;
    }

    if(whoshouldgohome==true)
    {
        let randomreason = [
            ", because I feel like they dropped the ball on the challenge.",
            ", because I feel like they were the weakest in this challenge.",
            ", I just feel like they haven't done in this challenge.",
            ", because their critiques were the worst tonight.",
            ", and I know that the person we saw today in the challenge, wasn't them.",
            ", because they just didn't perform to the maximum of their ability",
            ", they were just bad, no shade to them.",
            ", It's just that tonight they haven't been up to rise to the occasion."
        ];

        MS.createHorizontalLine();
        MS.createImage(judgingpanel[0].image);
        MS.createBold("Ladies, before you all go untuck I have one more question to ask you all.");
        MS.createBold("Who do you think should go home tonight and why ?");
        for (let i = 0; i < CritiQueens.length; i++)
        {
            let randombtm = randomNumber(0,bottomQueens.length-1);
            MS.createImage(CritiQueens[i].image);
            MS.createImage(bottomQueens[randombtm].image,"#e33650");
            if(CritiQueens[i].getName() == bottomQueens[randombtm].getName())
            {
                MS.createBold("\""+bottomQueens[randombtm].getName()+", because i cannot lie to you all, and say that I don't deserve to go home tonight.\"");
            }
            else
            {
                MS.createBold("\""+bottomQueens[randombtm].getName()+randomreason[randomNumber(0,randomreason.length-1)]+"\"");
            }
        }
    }

    if (all_stars)
        MS.createButton("Proceed", "top2AndBtm()");
    else if (lipsync_assassin)
        MS.createButton("Proceed", "topAndBtm()");
    else
        MS.createButton("Proceed", "UntuckedTopAndBottoms()");
    

}
function ASUntucked()
{
    let top1choice = [];
    let top2choice = [];

    let CritiquesQueens = [];
    let critiquedtext ="";

    document.body.style.backgroundImage = "url('image/untucked.webp')";
    let Untucked = new Scene();
    Untucked.clean();
    Untucked.createHeader("In untucked...");
    Untucked.createBigText("All the tops and bottoms queens come back from the main stage.");


    for (let j = 0; j < bottomQueens.length; j++) {
        top1choice.push(bottomQueens[j]);
        top2choice.push(bottomQueens[j]);
    }
    
    if(all_stars)
    {
        
        if(currentCast.length!=CritiQueens.length)
        {
            for (let i = 0; i < CritiQueens.length; i++)
            {
                Untucked.createImage(CritiQueens[i].image); 
            }
        }
        else
        {
                CritiquesQueens = [];
                console.log(CritiquesQueens.length);
                for (let i = 0; i < currentCast.length; i++)
                {
                        Untucked.createImage(currentCast[i].image); 
                        CritiquesQueens.push(currentCast[i]);
                }
                console.log(CritiquesQueens.length);
        }
        if(CritiQueens.length==1)
        {
            Untucked.createBold(CritiQueens[0].getName()+" grab a drink and sits down while waiting for the other queens.");
        }
        else
        {
            for (let s = 0; s < CritiQueens.length; s++)
            {
                if(s!=CritiQueens.length-1)
                {
                    critiquedtext += CritiQueens[s].getName();
                    if(s!=CritiQueens.length-2)
                    {
                        critiquedtext +=", ";
                    }
                    else
                    {
    
                    }
                }
                else
                {
                    critiquedtext += " and "+CritiQueens[s].getName(); 
                }
            }
            if(CritiQueens.length!=currentCast.length)
            {
                Untucked.createBold(critiquedtext+" all grab a drink and sit down with the safes queens.");
            }
            else
            {
                Untucked.createBold(critiquedtext+" all grab a drink and sit down.");
            }
        }
        let howmanyev = (randomNumber(1,8));
        for(let ev = 0; ev<howmanyev; ev++)
        {
            GenerateUntuckedEvent(currentCast,Untucked);
        }

        Untucked.createHorizontalLine();
        Untucked.createBigText("In deliberation...");

        let setls1 = false;
        let setlUs2 = false;
        let fally = false;
        let sally=false;
        let ally1break = false;
        let ally2break = false;
        for (let i = 0; i < top2.length; i++) {
            for (let j = 0; j < bottomQueens.length; j++) {
            Untucked.createImage(top2[i].image, "cyan");
            Untucked.createImage(bottomQueens[j].image);
                    if(i==0)
                    {
                        if(top2[0].IsAlliedTo(bottomQueens[j]))
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that since they are allied, they will not choose their lipstick.");
                            top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                        }
                        if((top2[0].getFirstSeason() == bottomQueens[j].getFirstSeason()) && episodeCount == 1)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that it's unfortunate that "+bottomQueens[j].getName()+" had to be in the bottom.");
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that she won't pick her lipstick because they are season sisters.");
                            top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                        }
                        else if(top2[0].GetRelation(bottomQueens[j])>=5)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that they don't have to worry about it, because they cannot send home their friend.");
                            top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                        }
                        else if(top2[0].GetRelation(bottomQueens[j])<-2)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that they don't know who to pick yet, but that they cannot promise it won't be "+bottomQueens[j].getName()+".");
                        }
                        else if((bottomQueens[j].ppe / (bottomQueens[j].episodesOn)).toFixed(2)>3)
                        {
                            Untucked.createBold(bottomQueens[j].getName() + " tells "+top2[0].getName()+" that they shouldn't be sent home, bacause they have been doing so well in the competition.");
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that they cannot say that they won't pick them, because they have been doing so well. However, it's really tempting to do so.");
                            if(randomNumber(0,100)>=80)
                            {
                                Untucked.createBold(top2[0].getName()+" thinks that picking "+bottomQueens[j].getName()+" might help them later.");
                                top2[0].lipstick = bottomQueens[j];
                                setls1=true;
                            }
                            else
                            {
                                Untucked.createBold(top2[0].getName()+" thinks that picking "+bottomQueens[j].getName()+" would be a bitch move and the fans would go OFF on them.");
                                top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                            }
                        }
                        else
                        {
                            if(randomNumber(0,10)>6 && top2[0].GetRelation(bottomQueens[j])>-2)
                            {
                                Untucked.createBold(bottomQueens[j].getName()+" propose to "+top2[0].getName()+" the idea of an alliance.");
                                if(randomNumber(0,5)>3 && fally == false)
                                {
                                    Untucked.createBold(top2[0].getName()+" accept the proposition of "+bottomQueens[j].getName()+" to make an alliance.");
                                    top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                                    currentCast[currentCast.indexOf(top2[0])].AddAlliance(bottomQueens[j]);
                                    currentCast[currentCast.indexOf(bottomQueens[j])].AddAlliance(top2[0]);
                                    fally= true;
                                }
                                else
                                {
                                    Untucked.createBold(top2[0].getName()+" refuses the proposition of "+bottomQueens[j].getName()+" to make an alliance.");
                                }
                            }
                            else
                            {
                                Untucked.createBold(top2[0].getName()+" tells "+bottomQueens[j].getName()+" that they don't know who to pick.");
                            }
                        }
                    }
                    else
                    {
                        if(top2[1].IsAlliedTo(bottomQueens[j]))
                        {
                            Untucked.createBold(top2[1].getName() + " tells "+bottomQueens[j].getName()+" that since they are allied, they will not choose their lipstick.");
                            top2choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                        }
                        else if((top2[1].getFirstSeason() == bottomQueens[j].getFirstSeason()) && episodeCount == 1)
                        {
                            Untucked.createBold(top2[1].getName() + " tells "+bottomQueens[j].getName()+" that it's unfornate that "+bottomQueens[j].getName()+" had to be in the bottom.");
                            Untucked.createBold(top2[1].getName() + " tells "+bottomQueens[j].getName()+" that she won't pick her lipstick because they are season sisters.");
                            top2choice.splice(top2choice.indexOf(bottomQueens[j]),1);
                        }
                        else if(top2[1].GetRelation(bottomQueens[j])>=2)
                        {
                            Untucked.createBold(top2[1].getName() + " tells "+bottomQueens[j].getName()+" that they don't have to worry about it, because they cannot send home their friend.");
                            top2choice.splice(top2choice.indexOf(bottomQueens[j]),1);
                        }
                        else if(top2[1].GetRelation(bottomQueens[j])<-2)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that they don't know who to pick yet, but that they cannot promise it won't be "+bottomQueens[j].getName()+".");
                        }
                        else if((bottomQueens[j].ppe / (bottomQueens[j].episodesOn)).toFixed(2)>3)
                        {
                            Untucked.createBold(bottomQueens[j].getName() + " tells "+top2[1].getName()+" that they shouldn't be sent home, bacause they have been doing so well in the competition.");
                            Untucked.createBold(top2[1].getName() + " tells "+bottomQueens[j].getName()+" that they cannot say that they won't pick them, because they have been doing so well. However, it's really tempting to do so.");
                            if(randomNumber(0,100)>=80)
                            {
                                Untucked.createBold(top2[1].getName()+" thinks that picking "+bottomQueens[j].getName()+" might help them later.");
                                top2[1].lipstick = bottomQueens[j];
                                setlUs2=true;
                            }
                            else
                            {
                                Untucked.createBold(top2[1].getName()+" thinks that picking "+bottomQueens[j].getName()+" would be a bitch move and the fans would go OFF on them.");
                                top2choice.splice(top2choice.indexOf(bottomQueens[j]),1);
                            }
                        }
                        else
                        {
                            if(randomNumber(0,10)>6 && top2[1].GetRelation(bottomQueens[j])>-2)
                            {
                                Untucked.createBold(bottomQueens[j].getName()+" propose to "+top2[1].getName()+" the idea of an alliance.");
                                if(randomNumber(0,5)>2 && sally == false)
                                {
                                    Untucked.createBold(top2[1].getName()+" accept the proposition of "+bottomQueens[j].getName()+" to make an alliance.");
                                    top2choice.splice(top2choice.indexOf(bottomQueens[j]),1);
                                    currentCast[currentCast.indexOf(top2[1])].AddAlliance(bottomQueens[j]);
                                    currentCast[currentCast.indexOf(bottomQueens[j])].AddAlliance(top2[1]);
                                    sally= true;
                                }
                                else
                                {
                                    Untucked.createBold(top2[1].getName()+" refuses the proposition of "+bottomQueens[j].getName()+" to make an alliance.");
                                }
                            }
                            else
                            {
                                Untucked.createBold(top2[1].getName()+" tells "+bottomQueens[j].getName()+" that they don't know who to pick.");
                            }
                        }
                    }
                    
                }
                Untucked.createHorizontalLine();
            }

        if(setls1==true)
        {
            setls1 = false;
        }
        else
        {
            if(top1choice.length!=0)
            {
                top2[0].lipstick=top1choice[randomNumber(0,top1choice.length-1)];
            }
            else
            {
                top2[0].lipstick=bottomQueens[randomNumber(0,bottomQueens.length-1)];
                if(top2[0].IsAlliedTo(top2[0].lipstick)==true)
                {
                    ally1break = true;
                }
            }
        }
        if(setlUs2==true)
        {
            setlUs2 = false;
        }
        else
        {
            if(top2choice.length!=0)
            {
                top2[1].lipstick=top2choice[randomNumber(0,top2choice.length-1)];
            }
            else
            {
                top2[1].lipstick=bottomQueens[randomNumber(0,bottomQueens.length-1)];
                if(top2[1].IsAlliedTo(top2[1].lipstick)==true)
                {
                    ally2break = true;
                }
            }
        }
        
        Untucked.createBigText("After deliberation...");
        for (let i = 0; i < top2.length; i++) {
            Untucked.createImage(top2[i].image, "cyan");
            if(HideLS)
            {
                Untucked.createImage("image/queens/hidden.webp", "red");
                Untucked.createBold(top2[i].getName() + " walks up to the box and pick someone's lipstick!");
            }
            else
            {
                Untucked.createImage(top2[i].lipstick.image, "red");
                
                if(ally1break==true && i == 0)
                {   
                    Untucked.createBold(top2[i].getName() + " walks up to the box, chooses to break her alliance and pick " + top2[i].lipstick.getName() + "'s lipstick!");
                }
                else if(i == 0)
                {
                    Untucked.createBold(top2[i].getName() + " walks up to the box and pick " + top2[i].lipstick.getName() + "'s lipstick!");
                }

                if(ally2break==true && i == 1)
                { 
                    Untucked.createBold(top2[i].getName() + " walks up to the box, chooses to break her alliance and pick " + top2[i].lipstick.getName() + "'s lipstick!");
                }
                else if(i == 1)
                {
                    Untucked.createBold(top2[i].getName() + " walks up to the box and pick " + top2[i].lipstick.getName() + "'s lipstick!");
                }
            }
            
        }
        Untucked.createButton("Proceed", "asLipSync()");
    }
    else
    {
        let fally = false;
        if(currentCast.length!=CritiQueens.length)
        {
            for (let i = 0; i < CritiQueens.length; i++)
            {
                Untucked.createImage(CritiQueens[i].image); 
            }
        }
        else
        {
                CritiquesQueens = [];
                console.log(CritiquesQueens.length);
                for (let i = 0; i < currentCast.length; i++)
                {
                        Untucked.createImage(currentCast[i].image); 
                        CritiquesQueens.push(currentCast[i]);
                }
                console.log(CritiquesQueens.length);
        }
        if(CritiQueens.length==1)
        {
            Untucked.createBold(CritiQueens[0].getName()+" grab a drink and sits down while waiting for the other queens.");
        }
        else
        {
            for (let s = 0; s < CritiQueens.length; s++)
            {
                if(s!=CritiQueens.length-1)
                {
                    critiquedtext += CritiQueens[s].getName();
                    if(s!=CritiQueens.length-2)
                    {
                        critiquedtext +=", ";
                    }
                    else
                    {
    
                    }
                }
                else
                {
                    critiquedtext += " and "+CritiQueens[s].getName(); 
                }
            }
            if(CritiQueens.length!=currentCast.length)
            {
                Untucked.createBold(critiquedtext+" all grab a drink and sit down with the safes queens.");
            }
            else
            {
                Untucked.createBold(critiquedtext+" all grab a drink and sit down.");
            }
        }
        let howmanyev = (randomNumber(1,8));
        for(let ev = 0; ev<howmanyev; ev++)
        {
            GenerateUntuckedEvent(currentCast,Untucked);
        }

        Untucked.createHorizontalLine();
        Untucked.createBigText("In deliberation...");
        let setls1 = false;
        let ally1break = false;
        for (let j = 0; j < bottomQueens.length; j++) {
            Untucked.createImage(top2[0].image, "cyan");
            Untucked.createImage(bottomQueens[j].image);
                        if(top2[0].IsAlliedTo(bottomQueens[j])==true)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" they will be safe because of their alliance.");
                            top1choice.splice(top1choice.indexOf(bottomQueens[j]),1); 
                        }
                        if((top2[0].getFirstSeason() == bottomQueens[j].getFirstSeason()) && episodeCount == 1)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that it's unfornate that "+bottomQueens[j].getName()+" had to be in the bottom.");
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that she won't pick her lipstick because they are season sisters.");
                            top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                        }
                        else if(top2[0].GetRelation(bottomQueens[j])>=2)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that they don't have to worry about it, because they cannot send home their friend.");
                            top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                        }
                        else if(top2[0].GetRelation(bottomQueens[j])<-2)
                        {
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that they don't know who to pick yet, but that they cannot promise it won't be "+bottomQueens[j].getName()+".");
                        }
                        else if((bottomQueens[j].ppe / (bottomQueens[j].episodesOn)).toFixed(2)>3)
                        {
                            Untucked.createBold(bottomQueens[j].getName() + " tells "+top2[0].getName()+" that they shouldn't be sent home, bacause they have been doing so well in the competition.");
                            Untucked.createBold(top2[0].getName() + " tells "+bottomQueens[j].getName()+" that they cannot say that they won't pick them, because they have been doing so well. However, it's really tempting to do so.");
                            if(randomNumber(0,100)>=80)
                            {
                                Untucked.createBold(top2[0].getName()+" thinks that picking "+bottomQueens[j].getName()+" might help them later.");
                                top2[0].lipstick = bottomQueens[j];
                                setls1=true;
                            }
                            else
                            {
                                Untucked.createBold(top2[0].getName()+" thinks that picking "+bottomQueens[j].getName()+" would be a bitch move and the fans would go OFF on them.");
                                top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                            }
                        }
                        else
                        {
                            if(randomNumber(0,10)>8)
                            {
                                Untucked.createBold(bottomQueens[j].getName()+" propose to "+top2[0].getName()+" the idea of an alliance.");
                                if(randomNumber(0,5)>3 && fally == false)
                                {
                                    Untucked.createBold(top2[0].getName()+" accept the proposition of "+bottomQueens[j].getName()+" to make an alliance.");
                                    top1choice.splice(top1choice.indexOf(bottomQueens[j]),1);
                                    currentCast[currentCast.indexOf(top2[0])].AddAlliance(bottomQueens[j]);
                                    currentCast[currentCast.indexOf(bottomQueens[j])].AddAlliance(top2[0]);
                                    fally= true;
                                }
                                else
                                {
                                    Untucked.createBold(top2[0].getName()+" refuses the proposition of "+bottomQueens[j].getName()+" to make an alliance.");
                                }
                            }
                            else
                            {
                                Untucked.createBold(top2[0].getName()+" tells "+bottomQueens[j].getName()+" that they don't know who to pick.");
                            }
                        }
                    }
                    if(setls1==true)
                    {
                        setls1 = false;
                    }
                    else
                    {
                        if(top1choice.length!=0)
                        {
                            top2[0].lipstick=top1choice[randomNumber(0,top1choice.length-1)];
                        }
                        else
                        {
                            top2[0].lipstick=bottomQueens[randomNumber(0,bottomQueens.length-1)];
                            if(top2[0].IsAlliedTo(top2[0].lipstick)==true)
                            {
                                ally1break = true;
                            }
                        }
                    }
            
        
        Untucked.createHorizontalLine();
        let main = document.querySelector("div#MainBlock");
        Untucked.createBigText("The queens vote...");
        for (let i = 0; i < currentCast.length; i++) {
            if (top2.indexOf(currentCast[i]) == -1) {
                if (randomNumber(0, 100) <= 15 && currentCast.length > 6 && bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0] != currentCast[i] && currentCast.length <= totalCastSize - 2) {
                    currentCast[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
                    while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                        currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                    }
                }
                else {
                    currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                    while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                        currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                    }
                }
                
                if(HideLS)
                {
                    Untucked.createBold(currentCast[i].getName() + " voted for someone!", "votes", "votesP");
                }
                else
                {
                    Untucked.createBold(currentCast[i].getName() + " voted for " + currentCast[i].lipstick.getName() + "!", "votes", "votesP");
                }
                currentCast[i].lipstick.votes++;
            }
        }
        Untucked.createHorizontalLine();

        
        if(!HideLS)
        {
            for (let i = 0; i < bottomQueens.length; i++) {
                Untucked.createImage(bottomQueens[i].image, "red");
                Untucked.createBold(bottomQueens[i].getName() + ": " + bottomQueens[i].votes.toString() + " votes", "total", "totalP");
            }
        }
        Untucked.createHorizontalLine();
        let resultVotes = document.querySelectorAll("p#totalP");
        bottomQueens.sort((a, b) => b.votes - a.votes);
        Untucked.createImage(top2[0].image, "cyan");
        if(HideLS)
        {
            Untucked.createImage("image/queens/hidden.webp", "red");
            Untucked.createBold(top2[0].getName() + " walks up to the box and pick someone's lipstick!");
        }
        else
        {
            Untucked.createImage(top2[0].lipstick.image, "red");
            if(ally1break==true)
                Untucked.createBold(top2[0].getName() + " walks up to the box, breaks their alliance and chose " + top2[0].lipstick.getName() + "'s lipstick!");
            else
                Untucked.createBold(top2[0].getName() + " walks up to the box and chose " + top2[0].lipstick.getName() + "'s lipstick!");
        }
        
        Untucked.createButton("Proceed", "lsaLipSync()");
    }
    CritiquesQueens = [];
}
function UntuckedTopAndBottoms()
{
    document.body.style.backgroundImage = "url('image/untucked.webp')";
    let Untucked = new Scene();
    let CritiquedQueen = [];
    let critiquedtext ="";
    Untucked.clean();
    Untucked.createHeader("Back in untucked...");
    Untucked.createBigText("All the tops and bottoms queens come back from the main stage.");
    for (let i = 0; i < currentCast.length; i++)
    {
        if (topQueens.indexOf(currentCast[i]) != -1 || bottomQueens.indexOf(currentCast[i]) != -1) {
            Untucked.createImage(currentCast[i].image);
            CritiquedQueen.push(currentCast[i]);
        }
    }

    if(CritiquedQueen.length==1)
    {
        Untucked.createBold(CritiquedQueen[0].getName()+" grab a drink and sits down while waiting for the other queens.");
    }
    else
    {
        for (let s = 0; s < CritiquedQueen.length; s++)
        {
            if(s!=CritiquedQueen.length-1)
            {
                critiquedtext += CritiquedQueen[s].getName();
                if(s!=CritiquedQueen.length-2)
                {
                    critiquedtext +=", ";
                }
                else
                {

                }
            }
            else
            {
                critiquedtext += " and "+CritiquedQueen[s].getName(); 
            }
        }
        Untucked.createBold(critiquedtext+" all grab a drink and sit down with safes queens.");
    }
    Untucked.createHorizontalLine();
    let howmanyev = (randomNumber(1,6));
    for(let even = 0; even<howmanyev ; even++)
    {
        GenerateUntuckedEvent(currentCast, Untucked);
    }

    if(randomNumber(0,5)>=4)
    {
        let randomMessage = [
            ", we are so proud of what you have became. We love you.",
            ", I remember when you were just a kid, you were so full of life! And now look at you, bring back the crown home. We love you.",
            ", we are really happy. You're out there living your dream! Show them what you are capable of, love you!"
        ]
        Untucked.createHorizontalLine();
        let message = randomNumber(0,bottomQueens.length-1);
        Untucked.createBold("Queens please sit down we have a message for someone!");
        Untucked.createImage(bottomQueens[message].image);
        Untucked.createBold("\""+bottomQueens[message].getName()+randomMessage[randomNumber(0,randomMessage.length-1)]+"\"");
    }

    if (uk3Premiere && episodeCount == 1)
        Untucked.createButton("Proceed", "uk3PremiereJudging()");
    else if (top3 || top4)
        Untucked.createButton("Proceed", "winAndBtm2()");
    else if (all_stars)
        Untucked.createButton("Proceed", "top2AndBtm()");
    else if (lipsync_assassin)
        Untucked.createButton("Proceed", "topAndBtm()");
    else if (team)
        Untucked.createButton("Proceed", "teamWinAndBtm2()");
}
//QUEENS:
//SEASON 1: 
let akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 11, "Akashia",false,"US1");
let bebe = new Queen("BeBe Zahara Benet", 6, 7, 8, 12, 6, 10, 9, "BeBe",false, "US1");
let jade = new Queen("Jade Sotomayor", 3, 3, 8, 7, 3, 7, 7, "Jade",false, "US1");
let ninaf = new Queen("Nina Flowers", 7, 5, 5, 11, 6, 10, 6, "NinaFlowers",false, "US1");
let ongina = new Queen("Ongina", 9, 8, 7, 9, 10, 9, 8, "Ongina",false, "US1");
let rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5, "Rebecca",false, "US1");
let shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 11, 7, "Shannel",false, "US1");
let tammie = new Queen("Tammie Brown", 6, 7, 5, 7, 6, 7, 6, "Tammie",false, "US1");
let victoria = new Queen("Victoria 'Porkchop' Parker", 3, 6, 4, 3, 6, 5, 4, "Victoria",false, "US1");
let us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];
//SEASON 2:       acting, comedy, dance, design, improv, runway, lipsync
let jessica = new Queen("Jessica Wild", 8, 6, 9, 7, 8, 8, 10, "Jessica",false, "US2");
let jujubee = new Queen("Jujubee", 9, 11, 7, 8, 12, 6, 12, "Jujubee",false, "US2");
let morgan = new Queen("Morgan McMichaels", 6, 6, 10, 9, 5, 10, 10, "Morgan",false, "US2");
let mystique = new Queen("Mystique Summers Madison", 4, 5, 3, 3, 3, 5, 6, "Mystique",false, "US2");
let nicole = new Queen("Nicole Paige Brooks", 4, 4, 4, 6, 4, 7, 6, "Nicole",false, "US2");
let pandora = new Queen("Pandora Boxx", 12, 11, 6, 8, 10, 8, 7, "Pandora",false, "US2");
let raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 11, "Raven",false, "US2");
let sahara = new Queen("Sahara Davenport", 6, 6, 10, 4, 6, 7, 10, "Sahara",false, "US2");
let shangela = new Queen("Shangela", 14, 13, 10, 3, 9, 9, 12, "Shangela",false, "US2");
let sonique = new Queen("Kylie Sonique Love", 11, 9, 10, 9, 8, 11, 11, "Kylie",false, "US2");
let tatianna = new Queen("Tatianna", 8, 11, 8, 8, 10, 8, 10, "Tatianna",false, "US2");
let tyra = new Queen("Tyra Sanchez", 11, 7, 8, 11, 8, 9, 10, "Tyra",false, "US2");
let us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];
//SEASON 3:
let alexis = new Queen("Alexis Mateo", 14, 12, 9, 7, 10, 8, 12, "Alexis",false, "US3");
let carmen = new Queen("Carmen Carrera", 3, 8, 6, 4, 3, 7, 7, "Carmen",false, "US3");
let delta = new Queen("Delta Work", 4, 6, 5, 5, 5, 7, 7, "Delta",false, "US3");
let india = new Queen("India Ferrah", 6, 4, 8, 6, 3, 10, 9, "India",false, "US3");
let manila = new Queen("Manila Luzon", 12, 11, 7, 14, 10, 13, 11, "Manila",false, "US3");
let mariah = new Queen("Mariah Paris Balenciaga", 6, 4, 7, 8, 4, 9, 8, "Mariah",false, "US3");
let mimi = new Queen("Mimi Imfurst", 11, 6, 6, 10, 7, 8, 6, "Mimi",false, "US3");
let phoenix = new Queen("Phoenix", 3, 3, 6, 5, 3, 5, 4, "Phoenix",false, "US3");
let raja = new Queen("Raja", 9, 11, 7, 14, 10, 10, 10, "Raja", false,"US3");
let stacey = new Queen("Stacy Layne Matthews", 6, 7, 5, 4, 10, 5, 6, "Stacy",false, "US3");
let venus = new Queen("Venus D-Lite", 4, 5, 8, 2, 3, 5, 2, "Venus",false, "US3");
let yara = new Queen("Yara Sofia", 11, 9, 9, 13, 7, 10, 8, "Yara",false, "US3");
let us_season3 = [alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, shangela, stacey, venus, yara];
//SEASON 4:
let alisa = new Queen("Alisa Summers", 4, 4, 5, 2, 3, 5, 4, "Alisa",false, "US4");
let chad = new Queen("Chad Michaels", 11, 10, 8, 9, 12, 10, 8, "Chad",false, "US4");
let dida = new Queen("Dida Ritz", 8, 7, 8, 5, 7, 7, 12, "Dida",false, "US4");
let jiggly = new Queen("Jiggly Caliente", 4, 6, 9, 4, 4, 7, 10, "Jiggly",false, "US4");
let kenya = new Queen("Kenya Michaels", 9, 6, 6, 6, 8, 7, 8, "Kenya",false, "US4");
let leshauwn = new Queen("Lashauwn Beyond", 4, 4, 6, 11, 5, 7, 7, "Lashauwn",false, "US4");
let latrice = new Queen("Latrice Royale", 11, 8, 9, 8, 7, 9, 13, "Latrice",false, "US4");
let madame = new Queen("Madame LaQueer", 4, 7, 6, 5, 9, 7, 6, "Madame",false, "US4");
let milan = new Queen("Milan", 4, 5, 9, 7, 5, 8, 10, "Milan",false, "US4");
let phiphi = new Queen("Phi Phi O'Hara", 13, 9, 8, 10, 10, 10, 8, "PhiPhi",false, "US4");
let princess = new Queen("The Princess", 4, 4, 5, 7, 4, 7, 7, "Princess",false, "US4");
let willam = new Queen("Willam", 10, 8, 7, 10, 10, 9, 8, "Willam",false, "US4");
let us_season4 = [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam];
//ALL STARS 1:
let allstars_1 = [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara];
//SEASON 5:   acting, comedy, dance, design, improv, runway, lipsync
let alaska = new Queen("Alaska", 15, 14, 7, 8, 14, 10, 11, "Alaska",false, "US5");
let alyssa = new Queen("Alyssa Edwards", 4, 6, 15, 6, 10, 9, 12, "Alyssa",false, "US5");
let coco = new Queen("Coco Montrese", 10, 10, 11, 9, 7, 9, 15, "Coco",false, "US5");
let detox = new Queen("Detox", 10, 9, 9, 9, 8, 12, 11, "Detox",false, "US5");
let honey = new Queen("Honey Mahogany", 10, 3, 3, 6, 6, 8, 4, "Honey",false, "US5");
let ivy = new Queen("Ivy Winters", 11, 4, 8, 12, 7, 10, 7, "Ivy",false, "US5");
let jadejolie = new Queen("Jade Jolie", 5, 7, 8, 7, 8, 7, 8, "JadeJ",false, "US5");
let jinkx = new Queen("Jinkx Monsoon", 15, 14, 9, 8, 15, 8, 8, "Jinkx",false, "US5");
let lineysha = new Queen("Lineysha Sparx", 10, 4, 7, 11, 5, 9, 8, "Lineysha",false, "US5");
let monica = new Queen("Monica Beverly Hillz", 4, 4, 6, 6, 3, 8, 8, "Monica",false, "US5");
let penny = new Queen("Penny Tration", 4, 5, 4, 5, 5, 5, 4, "Penny",false, "US5");
let roxxxy = new Queen("Roxxxy Andrews", 7, 4, 7, 11, 8, 10, 12, "Roxxxy",false, "US5");
let serena = new Queen("Serena ChaCha", 3, 3, 7, 4, 5, 5, 8, "Serena",false, "US5");
let vivienne = new Queen("Vivienne Pinay", 7, 3, 4, 5, 3, 6, 4, "Vivienne",false, "US5");
let us_season5 = [alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne];
//SEASON 6:
let adore = new Queen("Adore Delano", 9, 11, 9, 6, 9, 8, 11, "Adore",false, "US6");
let april = new Queen("April Carrión", 5, 5, 6, 9, 5, 9, 8, "April",false, "US6");
let bendelacreme = new Queen("BenDeLaCreme", 12, 12, 11, 10, 15, 10, 9, "Bendelacreme",false, "US6");
let bianca = new Queen("Bianca Del Rio", 11, 15, 7, 13, 15, 10, 5, "Bianca",false, "US6");
let courtney = new Queen("Courtney Act", 11, 8, 10, 10, 10, 12, 9, "Courtney",false, "US6");
let darienne = new Queen("Darienne Lake", 11, 8, 7, 4, 9, 8, 13, "Darienne",false, "US6");
let gia = new Queen("Gia Gunn", 10, 4, 8, 8, 4, 8, 9, "Gia",false, "US6");
let joslyn = new Queen("Joslyn Fox", 6, 7, 8, 6, 8, 8, 11, "Joslyn",false, "US6");
let kelly = new Queen("Kelly Mantle", 6, 6, 5, 5, 4, 7, 4, "Kellu",false, "US6");
let laganja = new Queen("Laganja Estranja", 9, 5, 14, 8, 6, 10, 15, "Laganja",false, "US6");
let magnolia = new Queen("Magnolia Crawford", 4, 5, 6, 4, 5, 7, 4, "Magnolia",false, "US6");
let milk = new Queen("Milk", 6, 6, 7, 8, 8, 7, 7, "Milk",false, "US6");
let trinityk = new Queen("Trinity K. Bonet", 9, 9, 13, 12, 4, 10, 15, "TrinityKB",false, "US6");
let vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7, "Vivacious",false, "US6");
let us_season6 = [adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious];
//SEASON 7: 
let ginger = new Queen("Ginger Minj", 14, 12, 8, 9, 15, 7, 12, "Ginger",false, "US7");
let jaidynn = new Queen("Jaidynn Diore Fierce", 9, 7, 8, 6, 6, 7, 11, "Jaidynn",false, "US7");
let jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 6, "Jasmine",false, "US7");
let kandy = new Queen("Kandy Ho", 4, 4, 7, 5, 4, 7, 10, "KandyH",false, "US7");
let katya = new Queen("Katya", 9, 12, 9, 7, 12, 10, 10, "Katya",false, "US7");
let kennedy = new Queen("Kennedy Davenport", 9, 8, 10, 8, 11, 10, 14, "Kennedy", false,"US7");
let max = new Queen("Max", 10, 7, 5, 8, 4, 8, 5, "Max",false, "US7");
let fame = new Queen("Miss Fame", 8, 4, 5, 11, 3, 10, 5, "MissFame",false, "US7");
let kasha = new Queen("Mrs. Kasha Davis", 11, 8, 9, 8, 6, 8, 7, "Kasha",false, "US7");
let pearl = new Queen("Pearl", 7, 10, 8, 9, 10, 9, 5, "Pearl",false, "US7");
let sashab = new Queen("Sasha Belle", 6, 6, 4, 4, 6, 6, 4, "SashaB",false, "US7");
let tempest = new Queen("Tempest DuJour", 6, 6, 5, 3, 6, 7, 4, "Tempest",false, "US7");
let trixie = new Queen("Trixie Mattel", 13, 10, 6, 10, 11, 10, 5, "Trixie",false, "US7");
let violet = new Queen("Violet Chachki", 6, 7, 8, 15, 8, 13, 8, "Violet",false, "US7");
let us_season7 = [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet];
//SEASON 8:  acting, comedy, dance, design, improv, runway, lipsync
let acid = new Queen("Acid Betty", 9, 4, 7, 10, 5, 11, 7, "Acid",false, "US8");
let bob = new Queen("Bob The Drag Queen", 15, 15, 8, 9, 15, 8, 12, "Bob",false, "US8");
let chichi = new Queen("Chi Chi DeVayne", 8, 4, 13, 8, 6, 8, 13, "ChiChi",false, "US8");
let cynthia = new Queen("Cynthia Lee Fontaine", 4, 4, 7, 6, 4, 7, 6, "Cynthia",false, "US8");
let dax = new Queen("Dax ExclamationPoint", 5, 6, 6, 5, 6, 5, 4, "Dax",false, "US8");
let derrick = new Queen("Derrick Barry", 7, 7, 8, 8, 9, 7, 8, "Derrick",false, "US8");
let kim = new Queen("Kim Chi", 10, 7, 4, 15, 8, 13, 4, "Kim",false, "US8");
let laila = new Queen("Laila McQueen", 6, 6, 4, 7, 6, 8, 7, "Laila",false, "US8");
let naomi = new Queen("Naomi Smalls", 9, 7, 10, 14, 10, 12, 11, "Naomi",false, "US8");
let naysha = new Queen("Naysha Lopez", 6, 4, 4, 4, 3, 6, 7, "Naysga",false, "US8");
let robbie = new Queen("Robbie Turner", 4, 5, 6, 4, 3, 6, 6, "Robbie",false, "US8");
let thorgy = new Queen("Thorgy Thor", 14, 9, 6, 9, 13, 9, 8, "Thorgy",false, "US8");
let us_season8 = [acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy];
//ALL STARS 2:
let allstars_2 = [adore, alaska, alyssa, coco, detox, ginger, katya, phiphi, roxxxy, tatianna];
//SEASON 9: 
let aja = new Queen("Aja", 4, 8, 12, 11, 9, 10, 11, "Aja",false, "US9");
let alexism = new Queen("Alexis Michelle", 8, 7, 9, 7, 13, 6, 10, "AlexisM",false, "US9");
let charlie = new Queen("Charlie Hides", 10, 6, 5, 7, 4, 9, 2, "Charlie",false, "US9");
let eureka = new Queen("Eureka!", 9, 11, 8, 10, 13, 10, 12, "Eureka",false, "US10");
let farrah = new Queen("Farrah Moan", 9, 4, 7, 3, 6, 8, 7, "Farrah",false, "US9");
let jaymes = new Queen("Jaymes Mansfield", 6, 6, 3, 6, 5, 7, 6, "Jaymes",false, "US9");
let kimora = new Queen("Kimora Blac", 5, 5, 4, 6, 5, 8, 7, "Kimora",false, "US9");
let ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 10, 9, 10, 10, 11, "NinaBB",false, "US9");
let peppermint = new Queen("Peppermint", 11, 9, 10, 9, 4, 7, 13, "Peppermint",false, "US9");
let sasha = new Queen("Sasha Velour", 9, 10, 8, 10, 11, 13, 11, "Sasha",false, "US9");
let shea = new Queen("Shea Couleé", 12, 12, 14, 12, 13, 12, 13, "Shea",false, "US9");
let trinity = new Queen("Trinity The Tuck", 13, 10, 8, 10, 8, 9, 12, "TrinityTT",false, "US9");
let valentina = new Queen("Valentina", 11, 7, 10, 9, 9, 9, 10, "Valentina",false, "US9");
let us_season9 = [aja, alexism, charlie, cynthia, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina];
//ALL STARS 3:
let allstars_3 = [aja, bebe, bendelacreme, chichi, kennedy, milk, morgan, shangela, thorgy, trixie];
//SEASON 10: 
let aquaria = new Queen("Aquaria", 6, 11, 8, 15, 12, 14, 11, "Aquaria",false, "US10");
let asia = new Queen("Asia O'Hara", 11, 9, 6, 6, 7, 9, 9, "Asia",false, "US10");
let blair = new Queen("Blair St. Clair", 9, 8, 6, 10, 8, 8, 7, "Blair",false, "US10");
let dusty = new Queen("Dusty Ray Bottoms", 8, 8, 6, 7, 6, 7, 6, "Dusty",false, "US10");
let kalorie = new Queen("Kalorie K. Williams", 6, 6, 6, 5, 7, 7, 8, "Kalorie",false, "US10");
let kameron = new Queen("Kameron Michaels", 5, 8, 14, 10, 8, 8, 15, "Kameron",false, "US10");
let mayhem = new Queen("Mayhem Miller", 4, 8, 9, 13, 7, 9, 10, "Mayhem",false, "US10");
let miz = new Queen("Miz Cracker", 13, 11, 5, 12, 15, 9, 5, "Miz",false, "US10");
let monet = new Queen("Monét X Change", 9, 11, 13, 6, 10, 9, 14, "Monet",false, "US10");
let monique = new Queen("Mo Heart", 12, 9, 8, 11, 15, 13, 10, "Monique",false, "US10");
let vanessa = new Queen("Vanessa 'Vanjie' Mateo", 9, 6, 8, 6, 9, 7, 11, "Vanjie",false, "US11");
let vixen = new Queen("The Vixen", 5, 4, 12, 9, 3, 8, 12, "Vixen",false, "US10");
let yuhua = new Queen("Yuhua Hamasaki", 4, 4, 6, 9, 6, 7, 7, "Yuhua",false, "US10");
let us_season10 = [aquaria, asia, blair, dusty, eureka, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua];
//ALL STARS 4:
let allstars_4 = [farrah, gia, jasmine, latrice, manila, monet, monique, naomi, trinity, valentina];
//SEASON 11:  acting, comedy, dance, design, improv, runway, lipsync
let akeria = new Queen("A'keria C. Davenport", 11, 9, 11, 8, 10, 13, 10, "Akeria",false, "US11");
let ariel = new Queen("Ariel Versace", 8, 6, 8, 5, 8, 8, 8, "Ariel",false, "US11");
let brooke = new Queen("Brooke Lynn Hytes", 8, 8, 13, 12, 8, 10, 13, "Brooke", false,"US11");
let honeyd = new Queen("Honey Davenport", 4, 6, 5, 7, 4, 9, 4, "HoneyD", false,"US11");
let kahanna = new Queen("Kahanna Montrese", 4, 5, 5, 4, 5, 6, 8, "Kahanna",false, "US11");
let mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 4, 6, 6, 8, 8, "Mercedes",false, "US11");
let ninaw = new Queen("Nina West", 12, 11, 6, 8, 11, 8, 6, "NinaW",false, "US11");
let plastique = new Queen("Plastique Tiara", 10, 7, 8, 11, 8, 10, 9, "Plastique",false, "US11");
let rajah = new Queen("Ra'Jah O'Hara", 6, 8, 11, 13, 8, 11, 13, "Rajah",false, "US11");
let scarlet = new Queen("Scarlet Envy", 13, 7, 6, 13, 8, 10, 7, "Scarlet",false, "US11");
let shuga = new Queen("Shuga Cain", 10, 9, 7, 6, 7, 10, 7, "Shuga",false, "US11");
let silky = new Queen("Silky Nutmeg Ganache", 10, 8, 9, 6, 10, 8, 11, "Silky",false, "US11");
let yvie = new Queen("Yvie Oddly", 12, 4, 12, 11, 6, 10, 15, "Yvie",false, "US11");
let us_season11 = [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, vanessa, yvie];
//SEASON 12: 
let aiden = new Queen("Aiden Zhane", 9, 3, 6, 4, 3, 6, 6, "Aiden",false, "US12");
let brita = new Queen("Brita", 7, 8, 7, 4, 6, 8, 11, "Brita",false, "US12");
let crystal = new Queen("Crystal Methyd", 6, 8, 8, 9, 8, 12, 6, "CrystalM",false, "US12");
let dahlia = new Queen("Dahlia Sin", 4, 4, 6, 5, 5, 10, 4, "Dahlia",false, "US12");
let gigi = new Queen("Gigi Goode", 10, 11, 11, 13, 9, 12, 8, "Gigi",false, "US12");
let heidi = new Queen("Heidi N Closet", 6, 9, 11, 6, 12, 7, 13, "Heidi",false, "US12");
let jackie = new Queen("Jackie Cox", 11, 12, 6, 6, 13, 9, 11, "Jackie",false, "US12");
let jaida = new Queen("Jaida Essence Hall", 4, 7, 10, 13, 8, 10, 12, "Jaida",false, "US12");
let jan = new Queen("Jan", 8, 4, 12, 9, 5, 10, 9, "Jan",false, "US12");
let nicky = new Queen("Nicky Doll", 4, 4, 5, 12, 3, 11, 5, "Nicky",false, "US12");
let rock = new Queen("Rock M. Sakura", 6, 6, 6, 4, 8, 8, 7, "Rock",false, "US12");
let widow = new Queen("Widow Von'Du", 11, 7, 13, 8, 11, 10, 15, "Widow",false, "US12");
let us_season12 = [aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow];
//ALL STARS 5
let allstars_5 = [alexis, blair, derrick, india, jujubee, mariah, mayhem, miz, ongina, shea];
//SEASON 13
let denali = new Queen("Denali", 4, 8, 14, 9, 10, 11, 13, "Denali",false, "US13");
let elliott = new Queen("Elliott With 2 Ts", 5, 5, 12, 9, 3, 8, 11, "Elliott",false, "US13");
let mik = new Queen("Gottmik", 8, 11, 6, 13, 12, 13, 6, "Gottmik",false, "US13");
let joey = new Queen("Joey Jay", 6, 7, 6, 5, 5, 7, 7, "Joey",false, "US13");
let kahmora = new Queen("Kahmora Hall", 3, 4, 3, 5, 4, 12, 4, "Kahmora", false,"US13");
let kandym = new Queen("Kandy Muse", 9, 10, 5, 6, 7, 8, 14, "KandyM",false, "US13");
let lala = new Queen("LaLa Ri", 5, 7, 10, 2, 6, 9, 14, "Lala",false, "US13");
let olivia = new Queen("Olivia Lux", 11, 5, 11, 10, 8, 11, 8, "Olivia",false, "US13");
let rose = new Queen("Rosé", 12, 11, 13, 8, 10, 10, 6, "Rose",false, "US13");
let symone = new Queen("Symone", 14, 7, 7, 9, 12, 9, 13, "Symone",false, "US13");
let tamisha = new Queen("Tamisha Iman", 7, 6, 7, 5, 6, 7, 7, "Tamisha",false, "US13");
let tina = new Queen("Tina Burner", 6, 6, 10, 5, 6, 8, 9, "TinaB",false, "US13");
let utica = new Queen("Utica Queen", 7, 4, 6, 15, 5, 12, 11, "Utica",false, "US13");
let us_season13 = [denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica];
//ALL STARS 6
let allstars_6 = [akeria, eureka, ginger, jan, jiggly, pandora, rajah, scarlet, serena, silky, sonique, trinityk, yara];
//SEASON 14:  acting, comedy, dance, design, improv, runway, lipsync
let alyssaH = new Queen("Alyssa Hunter", 5, 6, 7, 10, 7, 13, 8, "AlyssaH",false, "US14");
let angeria = new Queen("Angeria Paris VanMicheals", 11, 6, 9, 12, 8, 11, 8, "Angeria",false,"US14");
let bosco = new Queen("Bosco", 11, 12, 6, 7, 12, 11, 6, "Bosco",false, "US14");
let daya = new Queen("Daya Betty", 9, 8, 9, 9, 10, 10, 8, "DayaBetty",false, "US14");
let deja = new Queen("DeJa Skye", 9, 7, 9, 8, 13, 8, 8, "DeJa",false, "US14");
let jasmineK = new Queen("Jasmine Kennedie", 7, 6, 13, 7, 6, 10, 14, "JasmineK",false, "US14");
let jorgeous = new Queen("Jorgeous", 5, 5, 13, 10, 5, 10, 15, "Jorgeous",false, "US14");
let june = new Queen("June Jambalaya", 5, 6, 6, 4, 5, 6, 6, "June",false, "US14");
let kerri = new Queen("Kerri Colby", 6, 6, 5, 5, 6, 9, 6, "Kerri",false, "US14");
let kornbread = new Queen("Kornbread Jeté", 12, 10, 6, 7, 10, 9, 8, "Kornbread",false, "US14");
let cadmen = new Queen("Lady Camden", 12, 11, 12, 11, 7, 10, 11, "LadyCamden",false, "US14");
let maddy = new Queen("Maddy Morphosis", 8, 7, 6, 5, 6, 9, 7, "Maddy",false, "US14");
let orion = new Queen("Orion Story", 4, 6, 6, 5, 6, 6, 9, "Orion",false, "US14");
let willow = new Queen("Willow Pill", 11, 8, 7, 10, 10, 12, 8, "Willow",false, "US14");
let us_season14 = [alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow];
//SEASON 15
let amethyst = new Queen("Amethyst", 7, 7, 7, 7, 7, 7, 7, "Amethyst",false, "US15");
let anetra = new Queen("Anetra", 7, 7, 7, 7, 7, 7, 7, "Anetra",false, "US15");
let auraM = new Queen("Aura Mayari", 7, 7, 7, 7, 7, 7, 7, "AuraM",false, "US15");
let irene = new Queen("Irene Dubois", 7, 7, 7, 7, 7, 7, 7, "Irene",false, "US15");
let jax = new Queen("Jax", 7, 7, 7, 7, 7, 7, 7, "Jax",false, "US15");
let loosey = new Queen("Loosey LaDuca", 7, 7, 7, 7, 7, 7, 7, "Loosey",false, "US15");
let luxx = new Queen("Luxx Noir London", 7, 7, 7, 7, 7, 7, 7, "Luxx",false, "US15");
let marcia = new Queen("Marcia, Marcia, Marcia", 7, 7, 7, 7, 7, 7, 7, "Marcia",false, "US15");
let mistressI = new Queen("Mistress Isabelle Brooks", 7, 7, 7, 7, 7, 7, 7, "MistressI",false, "US15");
let princesspoppy = new Queen("Princess Poppy", 7, 7, 7, 7, 7, 7, 7, "PrincessPoppy",false, "US15");
let robinF = new Queen("Robin Fierce", 7, 7, 7, 7, 7, 7, 7, "RobinF",false, "US15");
let salina = new Queen("Salina Estitties", 7, 7, 7, 7, 7, 7, 7, "Salina",false, "US15");
let sashacolby = new Queen("Sasha Colby", 7, 7, 7, 7, 7, 7, 7, "SashaColby",false, "US15");
let sugar = new Queen("Sugar", 7, 7, 7, 7, 7, 7, 7, "Sugar",false, "US15");
let spice = new Queen("Spice", 7, 7, 7, 7, 7, 7, 7, "Spice",false, "US15");
let us_season14 = [amethyst, anetra, auraM, irene, jax, loosey, luxx, marcia, mistressI, princesspoppy, robinF, salina, sashacolby, sugar, spice];
//DRUK SEASON 1 
let baga = new Queen("Baga Chipz", 13, 12, 5, 5, 13, 8, 7, "Baga",false, "UK1");
let blu = new Queen("Blu Hydrangea", 5, 9, 8, 10, 10, 12, 9, "Blu",false, "UK1");
let cheryl = new Queen("Cheryl Hole", 5, 5, 9, 5, 7, 7, 9, "Cheryl",false, "UK1");
let crystaluk = new Queen("Crystal", 6, 5, 6, 9, 4, 8, 6, "Crystal",false, "UK1");
let divina = new Queen("Divina De Campo", 11, 6, 9, 12, 9, 9, 9, "Divina",false, "UK1");
let gothy = new Queen("Gothy Kendoll", 4, 5, 4, 3, 5, 6, 4, "Gothy",false, "UK1");
let scaredy = new Queen("Scaredy Kat", 3, 5, 6, 4, 4, 7, 4, "Scaredy",false, "UK1");
let sumting = new Queen("Sum Ting Wong", 8, 6, 6, 7, 6, 9, 8, "Sum",false, "UK1");
let viv = new Queen("The Vivienne", 12, 12, 7, 10, 14, 11, 10, "TVivienne",false, "UK1");
let vinegar = new Queen("Vinegar Strokes", 7, 6, 6, 4, 4, 6, 6, "Vinegar",false, "UK1");
let uk_season1 = [baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar];
//DRUK SEASON 2
let awhora = new Queen("A'Whora", 7, 5, 8, 15, 10, 10, 8, "Awhora",false, "UK2");
let asttina = new Queen("Asttina Mandella", 6, 6, 13, 8, 6, 10, 12, "Asttina",false, "UK2");
let bimini = new Queen("Bimini Bon-Boulash", 11, 14, 10, 7, 11, 11, 11, "Bimini",false, "UK2");
let cherry = new Queen("Cherry Valentine", 5, 6, 5, 7, 6, 11, 4, "Cherry",false, "UK2");
let ellie = new Queen("Ellie Diamond", 10, 6, 7, 11, 8, 9, 8, "Ellie",false, "UK2");
let ginny = new Queen("Ginny Lemon", 6, 6, 5, 5, 5, 8, 4, "Ginny",false, "UK2");
let joe = new Queen("Joe Black", 5, 5, 4, 5, 4, 8, 5, "Joe",false, "UK2");
let lawrence = new Queen("Lawrence Chaney", 13, 12, 5, 12, 9, 11, 10, "Lawrence",false, "UK2");
let sister = new Queen("Sister Sister", 6, 8, 6, 4, 7, 8, 9, "Sister",false, "UK2");
let tayce = new Queen("Tayce", 10, 9, 10, 5, 9, 12, 14, "Tayce",false, "UK2");
let tia = new Queen("Tia Kofi", 7, 9, 9, 5, 8, 5, 10, "Tia",false, "UK2");
let veronica = new Queen("Veronica Green", 6, 6, 10, 6, 5, 7, 8, "Veronica",false, "UK2");
let uk_season2 = [awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica];
//DRUK SEASON 3    acting, comedy, dance, design, improv, runway, lipsync
let anubis = new Queen("Anubis", 5, 5, 5, 4, 5, 4, 4, "Anubis",false, "UK3");
let charity = new Queen("Charity Kase", 8, 7, 4, 10, 6, 13, 8, "Charity",false, "UK3");
let choriza = new Queen("Choriza May", 9, 9, 6, 7, 7, 8, 7, "Choriza",false, "UK3");
let elektraF = new Queen("Elektra Fence", 5, 6, 11, 4, 5, 8, 13, "ElektraF",false, "UK3");
let ella = new Queen("Ella Vaday", 9, 14, 8, 10, 12, 9, 8, "Ella",false, "UK3");
let kitty = new Queen("Kitty Scott-Claus", 12, 11, 7, 8, 9, 9, 7, "Kitty",false, "UK3");
let krystal = new Queen("Krystal Versace", 8, 8, 11, 12, 8, 14, 12, "Krystal",false, "UK3");
let river = new Queen("River Medway", 8, 6, 5, 9, 5, 7, 6, "River",false, "UK3");
let scarlett = new Queen("Scarlett Harlett", 7, 7, 8, 8, 6, 8, 7, "ScarlettH",false, "UK3");
let vanity = new Queen("Vanity Milan", 8, 7, 11, 5, 8, 8, 12, "Vanity",false, "UK3");
let victoriaS = new Queen("Victoria Scone", 8, 10, 8, 7, 9, 9, 8, "VictoriaS",false, "UK3");
let uk_season3 = [anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS, veronica];
//CAN SEASON 1 
let anastarzia = new Queen("Anastarzia Anaquway", 7, 6, 4, 12, 6, 8, 7, "Starzy", false,"CA1");
let boa = new Queen("BOA", 6, 6, 5, 5, 6, 7, 7, "BOA",false, "CA1");
let ilona = new Queen("Ilona Verley", 5, 8, 5, 8, 9, 10, 10, "Ilona",false, "CA1");
let jimbo = new Queen("Jimbo", 10, 13, 2, 13, 15, 11, 2, "Jimbo",false, "CA1");
let juice = new Queen("Juice Boxx", 6, 6, 6, 4, 6, 6, 7, "Juice",false, "CA1");
let kiara = new Queen("Kiara", 10, 6, 8, 11, 6, 9, 11, "Kiara",false, "CA1");
let kyne = new Queen("Kyne", 8, 6, 6, 7, 6, 6, 7, "Kyne",false, "CA1");
let lemon = new Queen("Lemon", 10, 11, 12, 6, 11, 13, 11, "Lemon",false, "CA1");
let priyanka = new Queen("Priyanka", 14, 9, 12, 8, 6, 10, 15, "Priyanka",false, "CA1");
let rita = new Queen("Rita Baga", 10, 11, 7, 10, 9, 10, 12, "Rita",false, "CA1");
let bobo = new Queen("Scarlett BoBo", 6, 8, 9, 9, 9, 10, 9, "Scarlett",false, "CA1");
let tynomi = new Queen("Tynomi Banks", 5, 6, 5, 7, 5, 7, 10, "Tynomi",false, "CA1");
let can_season1 = [anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi];
//CAN SEASON 2
let adriana = new Queen("Adriana", 9, 6, 7, 6, 6, 8, 5, "Adriana",false, "CA2");
let beth = new Queen("Beth", 5, 5, 6, 3, 6, 5, 4, "Beth",false, "CA2");
let eve = new Queen("Eve 6000", 10, 5, 5, 6, 6, 8, 8, "Eve",false, "CA2");
let giametric = new Queen("Gia Metric", 9, 6, 10, 6, 6, 9, 10, "Giametric",false, "CA2");
let icesis = new Queen("Icesis Couture", 7, 8, 8, 11, 7, 10, 10, "Icesis",false, "CA2");
let kendall = new Queen("Kendall Gender", 7, 9, 9, 6, 7, 8, 10, "Kendall",false, "CA2");
let kimoraA = new Queen("Kimora Amour", 6, 5, 5, 6, 7, 7, 5, "KimoraA",false, "CA2");
let oceane = new Queen("Océane Aqua-Black", 6, 7, 4, 7, 7, 7, 5, "Oceane",false, "CA2");
let pythia = new Queen("Pythia", 8, 7, 8, 12, 9, 12, 7, "Pythia",false, "CA2");
let stephanie = new Queen("Stephanie Prince", 6, 6, 7, 10, 6, 9, 6, "Stephanie",false, "CA2");
let suki = new Queen("Suki Doll", 8, 7, 6, 9, 5, 9, 5, "Suki",false, "CA2");
let synthia = new Queen("Synthia Kiss", 6, 8, 10, 7, 9, 7, 9, "Synthia",false, "CA2");
let can_season2 = [adriana, beth, eve, giametric, icesis, kendall, kimoraA, oceane, pythia, stephanie, suki, synthia];
//DRAG RACE HOLLAND 
let chelsea = new Queen("Chelsea Boy", 9, 10, 7, 7, 10, 12, 6, "Chelsea",false, "HO1");
let envy = new Queen("Envy Peru", 11, 11, 11, 8, 11, 13, 11, "Envy",false, "HO1");
let janey = new Queen("Janey Jacké", 7, 6, 13, 11, 6, 11, 12, "Janey",false, "HO1");
let madamem = new Queen("Madame Madness", 8, 6, 5, 6, 5, 8, 7, "MadameM",false, "HO1");
let mama = new Queen("Ma'Ma Queen", 9, 6, 5, 6, 6, 10, 7, "Mama",false, "HO1");
let megan = new Queen("Megan Schoonbrood", 7, 6, 6, 5, 6, 9, 8, "Megan",false, "HO1");
let abby = new Queen("Miss Abby OMG", 5, 6, 11, 6, 5, 8, 10, "Abby",false, "HO1");
let patty = new Queen("Patty Pam-Pam", 5, 6, 6, 6, 5, 9, 7, "Patty",false, "HO1");
let roem = new Queen("Roem", 6, 6, 5, 5, 5, 6, 5, "Roem",false, "HO1");
let sederginne = new Queen("Sederginne", 7, 6, 6, 7, 5, 13, 5, "Sederginne",false, "HO1");
let hol_season1 = [chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne];
//DRAG RACE HOLLAND SEASON 2
let ivyelise = new Queen("Ivy-Elyse", 6, 8, 5, 4, 8, 5, 10, "IvyE",false, "HO2");
let juicy = new Queen("Juicy Kouture", 5, 6, 5, 5, 4, 4, 5, "Juicy",false, "HO2");
let keta = new Queen("Keta Minaj", 9, 12, 9, 7, 12, 11, 9, "Keta",false, "HO2");
let love = new Queen("Love Masisi", 6, 5, 6, 8, 5, 10, 7, "Love",false, "HO2");
let mlp = new Queen("My Little Puny", 10, 10, 10, 7, 9, 10, 10, "MLP",false, "HO2");
let reggy = new Queen("Reggy B", 6, 6, 6, 5, 6, 8, 8, "Reggy",false, "HO2");
let tabitha = new Queen("Tabitha", 6, 7, 8, 6, 5, 7, 8, "Tabitha",false, "HO2");
let countess = new Queen("The Countess", 7, 5, 4, 10, 6, 12, 5, "Countess",false, "HO2");
let vanessaC = new Queen("Vanessa Van Cartier", 7, 5, 6, 8, 5, 12, 8, "VanessaC",false, "HO2");
let vivaldi = new Queen("Vivaldi", 8, 8, 8, 7, 8, 12, 8, "Vivaldi",false, "HO2");
let hol_season2 = [ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi];
//DRT SEASON 1
let amadiva = new Queen("Amadiva", 9, 6, 7, 9, 3, 9, 6, "Amadiva",false, "TH1");
let annee = new Queen("Anneé Maywong", 9, 9, 7, 10, 4, 10, 9, "Annee",false, "TH1");
let b = new Queen("B Ella", 7, 9, 6, 8, 9, 7, 7, "B",false, "TH1");
let bunny = new Queen("Bunny Be Fly", 7, 5, 5, 8, 5, 8, 6, "Bunny",false, "TH1");
let dearis = new Queen("Dearis Doll", 7, 7, 7, 8, 8, 8, 8, "Dearis",false, "TH1");
let jaja = new Queen("JAJA", 8, 6, 7, 9, 5, 9, 9, "Jaja",false, "TH1");
let meannie = new Queen("Meannie Minaj", 7, 5, 5, 6, 5, 5, 5, "Meannie",false, "TH1");
let morrigan = new Queen("Morrigan", 5, 6, 7, 5, 7, 7, 7, "Morrigan",false, "TH1");
let natalia = new Queen("Natalia Pliacam", 9, 9, 7, 9, 9, 10, 9, "Natalia",false, "TH1");
let petchra = new Queen("Petchra", 7, 7, 6, 7, 8, 7, 9, "Petchra",false, "TH1");
let drt_season1 = [amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra];
//DRT SEASON 2
let angele = new Queen("Angele Anang", 9, 9, 9, 9, 8, 10, 10, "Angele",false, "TH2");
let bandit = new Queen("Bandit", 7, 7, 7, 8, 6, 8, 9, "Bandit",false, "TH2");
let genie = new Queen("Genie", 9, 8, 9, 9, 7, 9, 8, "Genie",false, "TH2");
let kana = new Queen("Kana Warrior", 8, 8, 8, 7, 7, 9, 10, "Kana",false, "TH2");
let kandyz = new Queen("Kandy Zyanide", 9, 9, 9, 9, 9, 9, 7, "KandyZ",false, "TH2");
let katy = new Queen("Katy Killer", 7, 8, 7, 8, 7, 8, 8, "Katy",false, "TH2");
let m = new Queen("M Stranger Fox", 5, 6, 5, 6, 6, 8, 8, "M",false, "TH2");
let maya = new Queen("Maya B'haro", 9, 8, 6, 9, 9, 8, 7, "Maya",false, "TH2");
let mocha = new Queen("Mocha Diva", 9, 9, 6, 8, 9, 7, 9, "Mocha",false, "TH2");
let gimhuay = new Queen("Miss Gimhuay", 8, 9, 7, 9, 8, 9, 8, "Gimhuay",false, "TH2");
let silver = new Queen("Silver Sonic", 5, 5, 7, 6, 7, 7, 8, "Silver",false, "TH2");
let srimala = new Queen("Srimala", 7, 7, 8, 7, 8, 9, 9, "Srimala",false, "TH2");
let tormai = new Queen("Tormai", 8, 8, 7, 7, 6, 8, 9, "Tormai",false, "TH2");
let vanda = new Queen("Vanda Miss Joaquim", 9, 8, 9, 7, 7, 9, 9, "Vanda",false, "TH2");
let drt_season2 = [angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda];
//DRAG RACE DOWN UNDER
let anita = new Queen("Anita Wigl'it", 6, 10, 8, 6, 10, 8, 5, "Anita",false, "DU1");
let art = new Queen("Art Simone", 6, 4, 5, 8, 4, 10, 4, "Art",false, "DU1");
let cocoj = new Queen("Coco Jumbo", 6, 5, 6, 6, 5, 8, 10, "CocoJ",false, "DU1");
let elektra = new Queen("Elektra Shock", 10, 6, 12, 8, 4, 7, 11, "Elektra",false, "DU1");
let etc = new Queen("Etcetera Etcetera", 5, 8, 8, 7, 8, 8, 8, "Etc",false, "DU1");
let jojo = new Queen("Jojo Zaho", 5, 5, 5, 5, 5, 6, 6, "Jojo",false, "DU1");
let karen = new Queen("Karen From Finance", 5, 6, 5, 5, 7, 7, 5, "Karen",false, "DU1");
let kita = new Queen("Kita Mean", 9, 9, 7, 7, 9, 9, 8, "Kita",false, "DU1");
let maxi = new Queen("Maxi Shield", 6, 6, 5, 9, 7, 8, 8, "Maxi",false, "DU1");
let drdu = [anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi];
//DRAG RACE ESPAÑA 1
let arantxa = new Queen("Arantxa Castilla La Mancha", 6, 8, 6, 7, 8, 9, 7, "Arantxa",false, "ES1");
let carmenf = new Queen("Carmen Farala", 10, 10, 10, 14, 8, 13, 10, "CarmenF",false, "ES1");
let dovima = new Queen("Dovima Nurmi", 8, 7, 5, 7, 8, 10, 6, "Dovima",false, "ES1");
let drag = new Queen("Drag Vulcano", 6, 6, 5, 7, 6, 9, 6, "Drag",false, "ES1");
let hugaceo = new Queen("Hugáceo Crujiente", 5, 5, 5, 12, 6, 10, 8, "Hugaceo",false, "ES1");
let inti = new Queen("Inti", 6, 6, 6, 7, 5, 11, 6, "Inti",false, "ES1");
let killer = new Queen("Killer Queen", 6, 10, 8, 9, 11, 9, 8, "Killer",false, "ES1");
let pupi = new Queen("Pupi Poisson", 10, 11, 7, 5, 11, 6, 7, "Puppy",false, "ES1");
let sagittaria = new Queen("Sagittaria", 7, 8, 8, 9, 7, 10, 8, "Sagittaria",false, "ES1");
let macarena = new Queen("The Macarena", 5, 5, 6, 4, 5, 5, 5, "Macarena",false, "ES1");
let dres_season1 = [arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena];
// DRAG RACE ESPAÑA 2
let arielRec = new Queen("Ariel Rec", 7, 7, 7, 7, 7, 7, 7, "ArielRec",false, "ES2");
let diamante = new Queen("Diamante Merybrown", 7, 7, 7, 7, 7, 7, 7, "Diamante",false, "ES2");
let sethlas = new Queen("Drag Sethlas", 7, 7, 7, 7, 7, 7, 7, "DragSethlas",false, "ES2");
let estrella = new Queen("Estrella Xtravaganza", 7, 7, 7, 7, 7, 7, 7, "Estrella",false, "ES2");
let jota = new Queen("Jota Carajota", 7, 7, 7, 7, 7, 7, 7, "Jota",false, "ES2");
let juriji = new Queen("Juriji Der Klee", 7, 7, 7, 7, 7, 7, 7, "Juriji",false, "ES2");
let marina = new Queen("Marina", 7, 7, 7, 7, 7, 7, 7, "Marina",false, "ES2");
let marisa = new Queen("Marisa Prisa", 7, 7, 7, 7, 7, 7, 7, "Marisa",false, "ES2");
let onyx = new Queen("Onyx", 7, 7, 7, 7, 7, 7, 7, "Onyx",false, "ES2");
let samantha = new Queen("Samantha Ballentines", 7, 7, 7, 7, 7, 7, 7, "Samantha",false, "ES2");
let sharonne = new Queen("Sharonne", 7, 7, 7, 7, 7, 7, 7, "Sharonne",false, "ES2");
let venedita = new Queen("Venedita Von Däsh", 7, 7, 7, 7, 7, 7, 7, "Venedita",false, "ES2");
let dres_season2 = [arielRec, diamante, sethlas, estrella, jota, juriji, marina, marisa, onyx, samantha, sharonne, venedita];
//DRAG RACE ITALIA
let ava = new Queen("Ava Hangar", 8, 7, 5, 5, 6, 6, 6, "Ava",false, "IT1");
let divinity = new Queen("Divinity", 9, 6, 8, 7, 6, 8, 7, "Divinity",false, "IT1");
let elecktra = new Queen("Elecktra Bionic", 7, 8, 8, 8, 9, 9, 8, "Elecktra",false, "IT1");
let enorma = new Queen("Enorma Jean", 8, 8, 6, 6, 8, 7, 6, "Enorma",false, "IT1");
let farida = new Queen("Farida Kant", 7, 6, 8, 11, 5, 11, 8, "Farida",false, "IT1");
let ivana = new Queen("Ivana Vamp", 6, 5, 6, 6, 6, 6, 5, "Ivana",false, "IT1");
let riche = new Queen("Le Riche", 6, 8, 6, 8, 9, 8, 7, "Riche",false, "IT1");
let luquisha = new Queen("Luquisha Lubamba", 7, 6, 6, 5, 7, 6, 7, "Luquisha",false, "IT1");
let italia = [ava, divinity, elecktra, enorma, farida, ivana, riche, luquisha];
//SPECIAL 
let pangina = new Queen("Pangina Heals", 9, 7, 14, 11, 8, 13, 14, "Pangina",false,"THH");
let international_as = [baga, blu, cheryl, janey, jimbo, jujubee, lemon, monique, pangina];
let canvsworld = [anita, icesis, kendall, rajah, rita, silky, stephanie, vanity, victoriaS];
//all possible queens:
let allCustomQueens = [];
if (localStorage.getItem("customQueens") != null)
    allCustomQueens = JSON.parse(localStorage.getItem("customQueens") || "{}");
let customLength = allCustomQueens.length;
for (let i = 0; i < customLength; i++) {
    let queen = new Queen('', 0, 0, 0, 0, 0, 0, 0, '');
    Object.assign(queen, allCustomQueens[i]);
    allCustomQueens.push(queen);
}
allCustomQueens.splice(0, customLength);
let allQueens = [
    akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
    jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra,
    alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, stacey, venus, yara,
    alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam,
    alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne,
    adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious,
    ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet,
    acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy,
    aja, alexism, charlie, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina,
    aquaria, asia, blair, dusty, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua,
    akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, yvie,
    aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow,
    denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica,
    alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow,
    baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar,
    awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica,
    anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS,
    anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi,
    chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne,
    ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi,
    amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra,
    angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda,
    anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi,
    arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena,
    arielRec, diamante, sethlas, estrella, jota, juriji, marina, marisa, onyx, samantha, sharonne, venedita,
    adriana, beth, eve, giametric, icesis, kendall, kimoraA, oceane, pythia, stephanie, suki, synthia,
    ava, divinity, elecktra, enorma, farida, ivana, riche, luquisha,
    pangina
].concat(allCustomQueens).sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
let allQueensCopy = [];
let allQueensCopy2 = [];
let randomReturn = false;
let voteReturn = false;
let conjoinedQueens = false;
let queensOfComedy = false;
let kittyGirlGroup = false;
let lalaparuza = false;
let smackdown = false;
function CheckForReturning() {
    if ((randomReturn || voteReturn) == true && currentCast.length < totalCastSize - 3 && returningQueen == false && eliminatedCast.length > 0) {
        if (randomNumber(0, 100) < 5 * episodeCount || currentCast.length == 4) {
            returningQueen = true;
            return true;
        }
        return false;
    }
    if (smackdown && currentCast.length == 4 && (all_stars || top4 || lipsync_assassin || canFinale) && returningQueen == false || smackdown && currentCast.length == 3 && returningQueen == false) {
        returningQueen = true;
        return true;
    }
    if (lalaparuza && (currentCast.length - eliminatedCast.length) >= 1 && (currentCast.length - eliminatedCast.length) < 3 && returningQueen == false && all_stars) {
        returningQueen = true;
        return true;
    }
    if (queensOfComedy && currentCast.length == Math.round((totalCastSize / 2)) && returningQueen == false && totalCastSize > 8){
        returningQueen = true;
        return true;
    }
    if (kittyGirlGroup && currentCast.length == Math.round((totalCastSize / 2)) && returningQueen == false && totalCastSize > 8){
        returningQueen = true;
        return true;
    }
    if (conjoinedQueens && currentCast.length == Math.round((totalCastSize / 2)) && returningQueen == false && totalCastSize > 8){
        returningQueen = true;
        return true;
    }
    return false;
}
function returningQueenScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("A lovely surprise...");
    if (randomReturn)
        queenReturns();
    if (voteReturn)
        queenReturnsVote();
    if (conjoinedQueens)
        queensConjoined();
    if (smackdown)
        lipsyncSmackdown();
    if (lalaparuza)
        LaLaPaRUza();
    if (queensOfComedy)
        queensofComedy();
    if (kittyGirlGroup)
        kittygirlGroup();
    screen.createButton("Proceed", "newEpisode()");
    if (randomReturn && document.querySelector("button[onclick='fijarReturningQueen()']")){
        let button = document.querySelector("button[onclick='newEpisode()']");
        button.setAttribute("hidden", "hidden");
    }
}
function queenReturns() {
    contestantProgress();
    let screen = new Scene();
    screen.createBold("I've decided that one of my queens have gone a bit too soon... I'd like to welcome back...");
    if (randomNumber(0, 100) <= 20) {
        let queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];
        while (queen.QueenDisqOrDept != false){
            queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];
        }
        currentCast.push(queen);
        eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
        screen.createImage(queen.image, "aquamarine");
        screen.createBold(queen.getName());
    } else {
        let main = document.querySelector("div#MainBlock");
        let castSelection = document.createElement("p");
        castSelection.setAttribute("id", "castSelection");
        castSelection.innerHTML = '';
        let select = document.createElement("select");
        select.setAttribute("id", "queenList");
        select.setAttribute("onchange", "returnImg()");
        let img = document.createElement("img");
        img.setAttribute("id", "images");
        img.setAttribute("style", "width: 105px; height: 105px;");
        let p = document.createElement("p");
        p.appendChild(img);
        for (let k = 0; k < eliminatedCast.length; k++) {
            let option = document.createElement("option");
            option.innerHTML = eliminatedCast[k].getName();
            option.value = eliminatedCast[k].image;
            select.add(option);
        }
        select.selectedIndex = randomNumber(0, eliminatedCast.length - 1);
        let br = document.createElement("br");
        castSelection.appendChild(p);
        castSelection.appendChild(select);
        castSelection.appendChild(br);
        main.appendChild(castSelection);
        returnImg();
        screen.createButton("Lock Queen", "fijarReturningQueen()", "fijar");
    }
}
function fijarReturningQueen() {
    let screen = new Scene();
    let select = document.getElementById("queenList");
    let value = select.options[select.selectedIndex].text;
    let button = document.getElementById("fijar");
    let newEpisodeB = document.querySelector("button[onclick='newEpisode()']");
    let queen;
    for (let k = 0; k < eliminatedCast.length; k++) {
        if (value == eliminatedCast[k].getName()){
            queen = eliminatedCast[k];
        }
    }
    button.remove();
    select.remove();
    screen.createBold(queen.getName());
    newEpisodeB.removeAttribute("hidden");
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}
function returnImg() {
    let images = document.getElementById("images");
    //let img = document.getElementById("image" + i.toString());
    let select = document.getElementById("queenList");
    images.src = select.options[select.selectedIndex].value;
}
function queenReturnsVote() {
    let screen = new Scene();
    screen.createParagraph("I've decided that one of my queens deserve a second chance... you'll vote for which of the eliminated queens will come back!");
    screen.createHorizontalLine();
    screen.createBold("The queens vote...");
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        while (currentCast[i].lipstick.QueenDisqOrDept != false){
            currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        }
        currentCast[i].lipstick.votes++;
        screen.createParagraph(`${currentCast[i].getName()} voted for ${currentCast[i].lipstick.getName()}!`);
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        screen.createBold(`${eliminatedCast[i].getName()}: ${eliminatedCast[i].votes.toString()} votes`);
    }
    screen.createHorizontalLine();
    let queen = [...eliminatedCast].sort((a, b) => b.votes - a.votes)[0];
    screen.createBold(`${queen.getName()} returns to the competition!`);
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}
function lipsyncSmackdown() {
    var screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/smackdown.webp')";
    screen.createHeader("Let the Lipsync Smackdown begin!!");
    screen.createParagraph("The eliminated queens are back to compete in an epic Lipsync Smackdown and a chance to return to the competition.");
    var smack = eliminatedCast.slice();
    var capitulo = 2;
    let caps9 = 3;
    var cappork = 5;
    var caps6 = 4;
    let done = false;
    let double = false;
    for (var i = 0; i < eliminatedCast.length - 1; i++) {
        screen.createHorizontalLine();
        if (smack.length == 2) {
            var queen1 = smack[0];
            var queen2 = smack[1];
        }else{
            var queen1 = smack[smack.length - 1];
            var queen2 = smack[smack.length - 2];
        }
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
        screen.createBold("The time has come for you to lip-sync... for your rudemption! Good luck, and don't fuck it up.");
        lsSong();
        screen.createBold("I've made my decision.");
        var lipSync = [queen1, queen2];
        for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
            lipSync[i_1].getASLipsync();
        }
        lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
        if (lipSync[0].lipsyncScore >= lipSync[1].lipsyncScore && lipSync[0].lipsyncScore > 7 && lipSync[1].lipsyncScore > 7 && smack.length <= 2) {
            screen.createImage(lipSync[0].image, "darkblue");
            screen.createImage(lipSync[1].image, "darkblue");
            screen.createBold("Shantay, you both stay baby!");
            double = true;
        } else {
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            if (eliminatedCast.length - i != 2) {
                if (porkchopPremiere) {
                    lipSync[0].trackRecord[cappork] = " WIN ";
                    lipSync[1].trackRecord[cappork] = "LOSS";
                }else if(s12Premiere || s14Premiere){
                    lipSync[0].trackRecord[caps6] = " WIN ";
                    lipSync[1].trackRecord[caps6] = "LOSS";
                }else if (s9Premiere) {
                    lipSync[0].trackRecord[caps9] = " WIN ";
                    lipSync[1].trackRecord[caps9] = "LOSS";
                }else{
                lipSync[0].trackRecord[capitulo] = " WIN ";
                lipSync[1].trackRecord[capitulo] = "LOSS";
                }
            }
            screen.createBold(lipSync[1].getName() + ", sashay away. ");
        }
        capitulo++;
        cappork++;
        caps6++;
        caps9++;
        /* if (slayersCheck && !done){
            capitulo++;
            cappork++;
            capUs6++;
            capUs9++;
            done = true;
        } */
        if (lipSync[0] == queen1) {
            smack.splice(smack.indexOf(queen2), 1);
        }else{
            smack.splice(smack.indexOf(queen1), 1);
        }
    }
    for (var o = 0; o <= currentCast.length - 1; o++) {
        currentCast[o].addToTrackRecord("RUN ");
    }
    if (double) {
        currentCast.push(lipSync[0]);
        currentCast.push(lipSync[1]);
        lipSync[0].addToTrackRecord("RTRN");
        lipSync[1].addToTrackRecord("RTRN");
        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[1]), 1);
        for (var i = 0; i <= eliminatedCast.length - 1; i++) {
            eliminatedCast[i].addToTrackRecord("OUT ");
        }
    } else {
        lipSync[0].addToTrackRecord("RTRN");
        currentCast.push(lipSync[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
        for (var i = 0; i <= eliminatedCast.length - 1; i++) {
            eliminatedCast[i].addToTrackRecord("OUT ");
        }
    }
    episodeChallenges.push("Lipsync Smackdown");
}
function LaLaPaRUza(){
    var screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/lalaparuza.webp')";
    screen.createHeader("LaLaPaRUza!!");
    screen.createParagraph("All of the eliminated All Stars get a chance to return to the competition. But first they have to send home a competing All Star in a shocking mid season lip sync smackdown.");
    var smack = eliminatedCast.slice();
    var smack1 = currentCast.slice();
    for (var i = 0; i < smack1.length; i++){
        var trds = smack1[i].trackRecord.length - 1;
        if (smack1[i].trackRecord[trds] == "WIN") {
            smack1[i].addToTrackRecord("RUN");
            smack1.splice(i, 1);
            i--;
        }else if (smack1[i].trackRecord[trds] == "WIN ") {
            smack1[i].addToTrackRecord("RUN");
            smack1.splice(i, 1);
            i--;
        }else if (smack1[i].trackRecord[trds] == " WIN"){
            smack1[i].addToTrackRecord("RUN");
            smack1.splice(i, 1);
            i--;
        }
    }
    if (disqOrDept && smack[0].trackRecord[smack[0].trackRecord.length - 1] == "WIN+QUIT") {
        for (var i = 0; i < smack1.length; i++){
            let trds = smack1[i].trackRecord.length - 1;
            if (smack1[i].trackRecord[trds] == "HIGH") {
                smack1[i].addToTrackRecord("RUN");
                smack1.splice(i, 1);
                i--;
            }
        }
    }
    for (var i = 0; i < smack.length; i++) {
        screen.createHorizontalLine();
        var queen1 = smack[i];
        var queen2 = smack1[randomNumber(0,smack1.length-1)];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        smack1.splice(smack1.indexOf(queen2), 1);
        if (smack.length == 2) {
            i++;
        }
        if (smack1.length == 0 && totalCastSize%2 == 1) {
            var queen3 = smack[i+1];
            screen.createImage(queen3.image);
            screen.createBold(queen1.getName() + ", " + queen2.getName() + " and " + queen3.getName() + " will lipsync...");
            lsSong();
            var lipSync_1 = [queen1, queen2, queen3];
            for (var i_1 = 0; i_1 < lipSync_1.length; i_1++) {
                lipSync_1[i_1].getASLipsync();
            }
            queen1.lipsyncScore -= 4;
            queen3.lipsyncScore -= 4;
            lipSync_1.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createImage(lipSync_1[0].image, "royalblue");
            screen.createBold(lipSync_1[0].getName() + ", shantay you stay!");
            screen.createBold(lipSync_1[1].getName() + " and " + lipSync_1[2].getName() + ", sashay away...");
            if (queen1 == lipSync_1[0]) {
                currentCast.push(lipSync_1[0]);
                lipSync_1[0].addToTrackRecord("RTRN ");
                eliminatedCast.splice(eliminatedCast.indexOf(lipSync_1[0]), 1);
                queen2.addToTrackRecord("ELIM");
                eliminatedCast.unshift(queen2);
                currentCast.splice(currentCast.indexOf(queen2), 1);
                queen2.unfavoritism += 5;
                queen3.addToTrackRecord("OUT ");
            }else if(queen3 == lipSync_1[0]){
                currentCast.push(lipSync_1[0]);
                lipSync_1[0].addToTrackRecord("RTRN ");
                eliminatedCast.splice(eliminatedCast.indexOf(lipSync_1[0]), 1);
                queen2.addToTrackRecord("ELIM");
                eliminatedCast.unshift(queen2);
                currentCast.splice(currentCast.indexOf(queen2), 1);
                queen2.unfavoritism += 5;
                queen1.addToTrackRecord("OUT ");
            }else{
                lipSync_1[0].addToTrackRecord("SAFE ");
                queen1.addToTrackRecord("OUT ");
                queen3.addToTrackRecord("OUT ");
            }
            i++;
        }else{
            screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
            screen.createBold("The time has come for you to lip-sync... for your lives! Good luck, and don't fuck it up.");
            lsSong();
            screen.createBold("I've made my decision.");
            var lipSync = [queen1, queen2];
            for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
                lipSync[i_1].getASLipsync();
            }
            queen1.lipsyncScore -= 4;
            lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            if (lipSync[0].lipsyncScore == lipSync[1].lipsyncScore && lipSync[0].lipsyncScore > 6 && lipSync[1].lipsyncScore > 6) {
                screen.createImage(queen1.image, "darkblue");
                screen.createImage(queen2.image, "darkblue");
                screen.createBold("Shantay, you both stay baby!");
                currentCast.push(queen1);
                queen1.addToTrackRecord("RTRN ");
                eliminatedCast.splice(eliminatedCast.indexOf(queen1), 1);
                queen2.addToTrackRecord("SAFE ");
            } else {
                screen.createImage(lipSync[0].image, "royalblue");
                screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
                if (queen1 == lipSync[0]) {
                    if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                        screen.createBold(lipSync[1].getName() + ", now your fate rests in the hands of the drag gods.");
                        screen.createBold("If you have the golden chocolate bar, you will be safe.");
                        if (chocolateBarCheck(lipSync[1]) == true) {
                            currentCast.push(lipSync[0]);
                            lipSync[0].addToTrackRecord("RTRN ");
                            eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
                            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                            screen.createBold(lipSync[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                            lipSync[1].addToTrackRecord("CHOC");
                            lipSync[1].unfavoritism += 3;
                            chocolateBarTwistCheck = true;
                        } else {
                            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                            screen.createBold("It's chocolate.");
                            screen.createBold(lipSync[1].getName() + ", sashay away. ");
                            currentCast.push(lipSync[0]);
                            lipSync[0].addToTrackRecord("RTRN ");
                            eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
                            lipSync[1].addToTrackRecord("ELIM");
                            eliminatedCast.unshift(lipSync[1]);
                            currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
                            lipSync[1].unfavoritism += 5;
                            
                        }
                    } else {
                        screen.createBold(lipSync[1].getName() + ", sashay away. ");
                        currentCast.push(lipSync[0]);
                        lipSync[0].addToTrackRecord("RTRN ");
                        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
                        lipSync[1].addToTrackRecord("ELIM");
                        eliminatedCast.unshift(lipSync[1]);
                        currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
                        lipSync[1].unfavoritism += 5;
                    }
                }else{
                    screen.createBold(lipSync[1].getName() + ", sashay away. ");
                    lipSync[0].addToTrackRecord("SAFE ");
                    lipSync[1].addToTrackRecord("OUT ");
                }
            }
        }
    }
    episodeChallenges.push("LaLaPaRUza");
}
function queensofComedy() {
    episodeCount++;
    for (var i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    episodeChallenges.push("Queens of Comedy");
    top2 = [];
    bottomQueens = [];
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/queensofcomedy.webp')";
    let qofcomedy = currentCast.slice();
    let pairs = [];
    let allofthem = [...currentCast, ...eliminatedCast];
    screen.createHeader("Queens of Comedy!!");
    screen.createParagraph("All of the eliminated All Stars get a chance to return to the competition. The queens must perform a live stand-up comedy act in front of an audience of judgmental drag queens!!");
    screen.createHorizontalLine();
    screen.createBold("The returning queens get to choose their partner... Starting with the last queen eliminated...");
    for (let i = 0; i < eliminatedCast.length; i++){
        if (eliminatedCast[i].QueenDisqOrDept == true){
            eliminatedCast[i].addToTrackRecord("");
        } else { 
            screen.createImage(eliminatedCast[i].image);
            let queen = qofcomedy[randomNumber(0, qofcomedy.length - 1)]
            screen.createImage(queen.image);
            screen.createBold(eliminatedCast[i].getName() + " chose " + queen.getName());
            eliminatedCast[i].getComedy();
            queen.getComedy();
            let sumComedy = eliminatedCast[i].performanceScore + queen.performanceScore;
            qofcomedy.splice(qofcomedy.indexOf(queen), 1);
            let team = new Team(eliminatedCast[i], queen);
            team.performanceScore = sumComedy;
            pairs.push(team);
        }
    }
    if (qofcomedy.length == 1) {
        screen.createImage(qofcomedy[0].image);
        screen.createBold("That means " + qofcomedy[0].getName() + " will work solo as the emcee of the show.");
        qofcomedy[0].getComedy();
    }
    screen.createHorizontalLine();
    sortPerformances(pairs);
    screen.createBigText("Queens' performances...");
    let slay = allofthem.filter(function (queen) { return queen.performanceScore < 6; });
    let great = allofthem.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = allofthem.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = allofthem.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = allofthem.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    comedyChallengeCounter++;
    screen.createHorizontalLine();
    screen.createImage(pairs[0].QueenA.image, "aquamarine");
    screen.createImage(pairs[0].QueenB.image, "aquamarine");
    screen.createImage(pairs[1].QueenA.image, "aquamarine");
    screen.createImage(pairs[1].QueenB.image, "aquamarine");
    screen.createBold(pairs[0].QueenA.getName() + ", " + pairs[0].QueenB.getName() + " and " + pairs[1].QueenA.getName() + ", " + pairs[1].QueenB.getName() + ". You are the top All Stars of the week.");
    top2.push(pairs[0].QueenA);
    top2.push(pairs[1].QueenA);
    pairs[0].QueenB.addToTrackRecord("  WIN");
    pairs[0].QueenB.favoritism += 5;
    pairs[0].QueenB.ppe += 5;
    pairs[1].QueenB.addToTrackRecord("  WIN");
    pairs[1].QueenB.favoritism += 5;
    pairs[1].QueenB.ppe += 5;
    // comparar solo queen to the worst duos.
    if (qofcomedy.length == 1 && qofcomedy[0].performanceScore > pairs[pairs.length - 2].QueenB.performanceScore){
        let asecond = pairs[pairs.length - 2].QueenB;
        pairs[pairs.length - 2].QueenB = qofcomedy[0];
        qofcomedy[0] = asecond;
    }
    for (let i = 2; i < pairs.length - 2; i++){
        screen.createImage(pairs[i].QueenB.image, "black");
        pairs[i].QueenB.addToTrackRecord("SAFE");
        pairs[i].QueenA.addToTrackRecord("OUT ");
        pairs[i].QueenB.ppe += 3;
    }
    if (qofcomedy.length == 1) {
        screen.createImage(qofcomedy[0].image, "black");
        qofcomedy[0].addToTrackRecord("SAFE");
        qofcomedy[0].ppe += 3;
    }
    screen.createBold("", "safe");
    let safe = document.querySelector("b#safe");
    for (let i = 2; i < pairs.length - 2; i++){
        safe.innerHTML += pairs[i].QueenB.getName() + ", ";
    }
    if (qofcomedy.length == 1) {
        safe.innerHTML +=  qofcomedy[0].getName() + ", you are safe.";
    }else{
        safe.innerHTML +=  "you are safe.";
    }
    screen.createImage(pairs[pairs.length - 1].QueenB.image, "red");
    screen.createImage(pairs[pairs.length - 2].QueenB.image, "red");
    screen.createBold(pairs[pairs.length - 1].QueenB.getName() + ", " + pairs[pairs.length - 2].QueenB.getName() + "...", "bottom");
    pairs[pairs.length - 1].QueenA.addToTrackRecord("OUT ");
    pairs[pairs.length - 2].QueenA.addToTrackRecord("OUT ");
    bottomQueens.push(pairs[pairs.length - 1].QueenB);
    bottomQueens.push(pairs[pairs.length - 2].QueenB);
    let bottom = document.querySelector("b#bottom");
    bottom.innerHTML += " I'm sorry my dears but you are up for elimination.";
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    for (let i = 0; i < 2; i++) {
        if (randomNumber(0, 100) <= 45)
            pairs[i].QueenA.lipstick = pairs[pairs.length - 1].QueenB;
        else
            pairs[i].QueenA.lipstick = pairs[randomNumber(pairs.length - 2, pairs.length - 1)].QueenB;
        screen.createImage(pairs[i].QueenA.image, "cyan");
        screen.createImage(pairs[i].QueenA.lipstick.image, "red");
        screen.createBold(pairs[i].QueenA.getName() + " chose " + pairs[i].QueenA.lipstick.getName() + "'s lipstick!", "winV", "winVP");
    }
    screen.createHorizontalLine();
    queensOfComedyLipsyn();
}
function queensOfComedyLipsyn() {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.createBold("It's time... For you to lip-sync... for your LIFE!!! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6 && currentCast.length > 5) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        top2[1].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[1]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[1]), 1);
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord("ELIM");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
            }
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("OUT");
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createImage(top2[1].image, "red");
        screen.createParagraph(top2[1].getName() + ", sashay away.");
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length >= 6)
            bottomQueens[i].addToTrackRecord("BTM");
        else if (bottomQueens.length == 5)
            bottomQueens[i].addToTrackRecord("BTM6");
        else if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
}
function kittygirlGroup() {
    episodeCount++;
    for (var i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    episodeChallenges.push("Kitty Girl Group");
    top2 = [];
    bottomQueens = [];
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/mainstage.webp')";
    let dragUpYourLife = currentCast.slice();
    let sittingOnASecret = eliminatedCast.slice();
    let allofthem = [...currentCast, ...eliminatedCast];
    screen.createHeader("Handmaids to Kitty Girls!!");
    screen.createParagraph("The eliminated queens return to the competition for revenge. But first the queens must audition for RuPaul's new girl group, the Kitty Girls!!");
    screen.createBold("Group 1: Top " + dragUpYourLife.length);
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < dragUpYourLife.length; i++) {
        dragUpYourLife[i].getRumix();
        screen.createImage(dragUpYourLife[i].image, "black");
        sum1 += dragUpYourLife[i].performanceScore;
    }
    screen.createBold("Group 2: Eliminated Queens");
    for (let i = 0; i < sittingOnASecret.length; i++) {
        if (sittingOnASecret[i].QueenDisqOrDept == true){
            sittingOnASecret[i].addToTrackRecord("");
            sittingOnASecret.splice(i, 1);
            i--;
        } else {
            sittingOnASecret[i].getRumix();
            screen.createImage(sittingOnASecret[i].image, "black");
            sum2 += sittingOnASecret[i].performanceScore;
        }
    }
    screen.createHorizontalLine();
    sortPerformances(dragUpYourLife);
    sortPerformances(sittingOnASecret);
    screen.createBigText("Queens' performances...");
    let slay = allofthem.filter(function (queen) { return queen.performanceScore < 6; });
    let great = allofthem.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = allofthem.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = allofthem.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = allofthem.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (sum1 <= sum2) { 
        screen.createBold("My Top " + dragUpYourLife.length + " queens, condragulations, you're the winning team");
        screen.createImage(dragUpYourLife[0].image, "cyan");
        screen.createImage(dragUpYourLife[1].image, "cyan");
        screen.createBold(dragUpYourLife[0].getName() + " and " + dragUpYourLife[1].getName()+ ", you are the Top 2 All Stars of the week.");
        top2.push(dragUpYourLife[0]);
        top2.push(dragUpYourLife[1]);
        for (let i = 2; i < dragUpYourLife.length - 2; i++){
            screen.createImage(dragUpYourLife[i].image, "black");
            dragUpYourLife[i].addToTrackRecord("SAFE");
            dragUpYourLife[i].ppe += 3;
        }
        screen.createBold("", "safe");
        let safe = document.querySelector("b#safe");
        for (let i = 2; i < dragUpYourLife.length - 2; i++){
            safe.innerHTML += dragUpYourLife[i].getName() + ", ";
        }
        safe.innerHTML +=  "you are safe.";
        screen.createImage(dragUpYourLife[dragUpYourLife.length - 1].image, "red");
        screen.createImage(dragUpYourLife[dragUpYourLife.length - 2].image, "red");
        screen.createBold(dragUpYourLife[dragUpYourLife.length - 1].getName() + ", " + dragUpYourLife[dragUpYourLife.length - 2].getName() + "...", "bottom");
        bottomQueens.push(dragUpYourLife[dragUpYourLife.length - 1]);
        bottomQueens.push(dragUpYourLife[dragUpYourLife.length - 2]);
        let bottom = document.querySelector("b#bottom");
        bottom.innerHTML += " I'm sorry my dears but you are up for elimination.";
        screen.createHorizontalLine();
        screen.createBigText("After deliberation...");
        for (let i = 0; i < 2; i++) {
            if (randomNumber(0, 100) <= 45)
                dragUpYourLife[i].lipstick = dragUpYourLife[dragUpYourLife.length - 1];
            else
                dragUpYourLife[i].lipstick = dragUpYourLife[randomNumber(dragUpYourLife.length - 2, dragUpYourLife.length - 1)];
            screen.createImage(dragUpYourLife[i].image, "cyan");
            screen.createImage(dragUpYourLife[i].lipstick.image, "red");
            screen.createBold(dragUpYourLife[i].getName() + " chose " + dragUpYourLife[i].lipstick.getName() + "'s lipstick!", "winV", "winVP");
        }
        screen.createHorizontalLine();
        topKittyWinLipsync(sittingOnASecret);
    } else {
        screen.createBold("My Eliminated queens, condragulations, you're the winning team");
        screen.createImage(sittingOnASecret[0].image, "cyan");
        screen.createImage(sittingOnASecret[1].image, "cyan");
        screen.createBold(sittingOnASecret[0].getName() + " and " + sittingOnASecret[1].getName()+ ", you are the Top 2 All Stars of the week.");
        top2.push(sittingOnASecret[0]);
        top2.push(sittingOnASecret[1]);
        for (let i = 2; i < sittingOnASecret.length; i++){
            sittingOnASecret[i].addToTrackRecord("OUT ");
        }
        for (let i = 0; i < dragUpYourLife.length; i++) {
            screen.createImage(dragUpYourLife[i].image, "red");
            bottomQueens.push(dragUpYourLife[i]);
        }
        screen.createBold("You are all up for elimination.");
        screen.createHorizontalLine();
        screen.createBigText("After deliberation...");
        for (let i = 0; i < 2; i++) {
            if (randomNumber(0, 100) <= 45)
                sittingOnASecret[i].lipstick = dragUpYourLife[dragUpYourLife.length - 1];
            else
                sittingOnASecret[i].lipstick = dragUpYourLife[randomNumber(0, dragUpYourLife.length - 1)];
            screen.createImage(sittingOnASecret[i].image, "cyan");
            screen.createImage(sittingOnASecret[i].lipstick.image, "red");
            screen.createBold(sittingOnASecret[i].getName() + " chose " + sittingOnASecret[i].lipstick.getName() + "'s lipstick!", "winV", "winVP");
        }
        screen.createHorizontalLine();
        eliminatedKittyWinLipsync();
    }
}
function topKittyWinLipsync(sittingOnASecret) {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.createBold("It's time... For you to lip-sync... for your legacy!!! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord("ELIM");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
            }
        }
        screen.createHorizontalLine();
        screen.createBold("Now... Which queen have you both chosen to bring back to the competition?");
        for (let i = 0; i < 2; i++) {
            if (randomNumber(0, 100) <= 45)
                top2[i].lipstick = sittingOnASecret[0];
            else
                top2[i].lipstick = sittingOnASecret[randomNumber(0, sittingOnASecret.length - 1)];
            screen.createImage(top2[i].image, "cyan");
            screen.createImage(top2[i].lipstick.image, "green");
            screen.createBold(top2[i].getName() + " chose " + top2[i].lipstick.getName() + " to return to the competition!!");
        }
        if (top2[0].lipstick == top2[1].lipstick) {
            top2[0].lipstick.addToTrackRecord("RTRN ");
            currentCast.unshift(top2[0].lipstick);
            eliminatedCast.splice(eliminatedCast.indexOf(top2[0].lipstick), 1);
            sittingOnASecret.splice(sittingOnASecret.indexOf(top2[0].lipstick), 1);
            for (let i = 0; i < sittingOnASecret.length; i++){
                sittingOnASecret[i].addToTrackRecord("OUT ");
            }
        } else {
            top2[0].lipstick.addToTrackRecord("RTRN ");
            top2[1].lipstick.addToTrackRecord("RTRN ");
            currentCast.unshift(top2[0].lipstick);
            currentCast.unshift(top2[1].lipstick);
            eliminatedCast.splice(eliminatedCast.indexOf(top2[0].lipstick), 1);
            eliminatedCast.splice(eliminatedCast.indexOf(top2[1].lipstick), 1);
            sittingOnASecret.splice(sittingOnASecret.indexOf(top2[0].lipstick), 1);
            sittingOnASecret.splice(sittingOnASecret.indexOf(top2[1].lipstick), 1);
            for (let i = 0; i < sittingOnASecret.length; i++){
                sittingOnASecret[i].addToTrackRecord("OUT ");
            }
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("WIN ");
        top2[1].ppe += 5;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        } 
        screen.createHorizontalLine();
        screen.createBold("Now... Which queen have you chosen to bring back to the competition?");
        if (randomNumber(0, 100) <= 45)
            top2[0].lipstick = sittingOnASecret[0];
        else
            top2[0].lipstick = sittingOnASecret[randomNumber(0, sittingOnASecret.length - 1)];
        screen.createImage(top2[0].image, "cyan");
        screen.createImage(top2[0].lipstick.image, "green");
        screen.createBold(top2[0].getName() + " chose " + top2[0].lipstick.getName() + " to return to the competition!!");
        top2[0].lipstick.addToTrackRecord("RTRN ");
        currentCast.unshift(top2[0].lipstick);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0].lipstick), 1);
        sittingOnASecret.splice(sittingOnASecret.indexOf(top2[0].lipstick), 1);
        for (let i = 0; i < sittingOnASecret.length; i++){
            sittingOnASecret[i].addToTrackRecord("OUT ");
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length >= 6)
            bottomQueens[i].addToTrackRecord("BTM");
        else if (bottomQueens.length == 5)
            bottomQueens[i].addToTrackRecord("BTM6");
        else if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
}
function eliminatedKittyWinLipsync() {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.createBold("It's time... For you to lip-sync... for your LIFE!!! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        top2[1].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[1]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[1]), 1);
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    
                }
            } else { 
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord("ELIM");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
            }
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("OUT");
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createImage(top2[1].image, "red");
        screen.createParagraph(top2[1].getName() + ", sashay away.");
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length >= 6)
            bottomQueens[i].addToTrackRecord("BTM");
        else if (bottomQueens.length == 5)
            bottomQueens[i].addToTrackRecord("BTM6");
        else if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
}
let twinsMakeover = [];
let conjoinedCheck = false;
function queensConjoined() { 
    episodeCount++;
    for (var i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    episodeChallenges.push("Conjoined Makeover");
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    let screen = new Scene();
    screen.clean();
    conjoinedCheck = true;
    document.body.style.backgroundImage = "url('image/mainstage.webp')";
    let conjoined = eliminatedCast.slice();
    screen.createHeader("Conjoined Queens!!");
    screen.createParagraph("The eliminated queens will pair up with current contestants in a conjoined drag twin challenge, fighting for a chance to get back in the game.!!");
    screen.createHorizontalLine();
    screen.createBold("The current contestants get to choose their partner...");
    for (let i = 0; i < conjoined.length; i++) {
        if (conjoined[i].QueenDisqOrDept == true){
            conjoined[i].addToTrackRecord("");
            conjoined.splice(i, 1);
        } else { 
            console.log("If you found this send me a DM");
        }
    }
    for (let i = 0; i < currentCast.length; i++){
        if (conjoined.length == 0) {
            screen.createImage(currentCast[i].image);
            screen.createBold("That means " + currentCast[i].getName() + " will makeover one of the pitcrew member.");
            currentCast[i].getDesign();
            twinsMakeover.push(currentCast[i]);
        } else { 
            screen.createImage(currentCast[i].image);
            let queen = conjoined[randomNumber(0, conjoined.length - 1)]
            screen.createImage(queen.image);
            screen.createBold(currentCast[i].getName() + " chose " + queen.getName());
            conjoined.splice(conjoined.indexOf(queen), 1);
            currentCast[i].getDesign();
            twinsMakeover.push(currentCast[i], queen);
        }
    }
    if (conjoined.length >= 1) {
        for (let i = 0; i < conjoined.length; i++)
            conjoined[i].addToTrackRecord("");
    }
    screen.createHorizontalLine();
    sortPerformances(currentCast);
    screen.createBigText("Queens' performances...");
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = currentCast.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    makeoverCounter = true;
    screen.createHorizontalLine();
    screen.createButton("Proceed", "judging()");
    let button = document.querySelector("button[onclick='newEpisode()']");
    button.remove();
}
function conjoinedReturn(winner, secondWinner = "") {
    let screen = new Scene();
    if (secondWinner == "") {
        for (let i = 0; i < twinsMakeover.length - 1; i++) {
            if (winner == twinsMakeover[i]){
                screen.createImage(twinsMakeover[i+1].image, "orange");
                screen.createBold(twinsMakeover[i+1].getName() + ", you are back in the competition");
                twinsMakeover[i+1].addToTrackRecord("RTRN ");
                currentCast.push(twinsMakeover[i+1])
                eliminatedCast.splice(eliminatedCast.indexOf(twinsMakeover[i+1]), 1);
            }
        }
    } else { 
        for (let i = 0; i < twinsMakeover.length - 1; i++) {
            if (winner == twinsMakeover[i]){
                screen.createImage(twinsMakeover[i+1].image, "orange");
                screen.createBold(twinsMakeover[i+1].getName() + ", you are back in the competition");
                twinsMakeover[i+1].addToTrackRecord("RTRN ");
                currentCast.push(twinsMakeover[i+1])
                eliminatedCast.splice(eliminatedCast.indexOf(twinsMakeover[i+1]), 1);
            }
            if (secondWinner == twinsMakeover[i]){
                screen.createImage(twinsMakeover[i+1].image, "orange");
                screen.createBold(twinsMakeover[i+1].getName() + ", you are back in the competition");
                twinsMakeover[i+1].addToTrackRecord("RTRN ");
                currentCast.push(twinsMakeover[i+1])
                eliminatedCast.splice(eliminatedCast.indexOf(twinsMakeover[i+1]), 1);
            }
        }
    }
    
    for (let i = 0; i < eliminatedCast.length; i++) {
        if (eliminatedCast[i].QueenDisqOrDept == true){
            console.log("disqOrDeptqueen");
        } else {
            eliminatedCast[i].addToTrackRecord("OUT ");
        }
    }
}
function giveChocolate() {
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/chocolate.webp')";
    let title = document.querySelector("h1#MainTitle");
    let goldenChecker = false;
    title.innerHTML = "Chocolate Bar Selection";
    screen.createBold("For this season, we're doing things a little differently, and when it comes to saving queens, I'm leaving it up to the Drag Gods.")
    screen.createBold("Now, you all may pick a bar one at a time.");
    for (let i = 0; i < currentCast.length; i++) {
        screen.createImage(currentCast[i].image , "gold");
        screen.createImage("image/ChocolateBarTBA.webp", "grey")
        screen.createBold(currentCast[i].getName() + " picks their Chocolate bar...");
        if (randomNumber(0, 100) >= 90) {
            if (!goldenChecker) {
                currentCast[i].chocolate = true;
                goldenChecker = true;
            } else {
                currentCast[i].chocolate = false;
            }
        } else {
            currentCast[i].chocolate = false;
        }
    }
    if (!goldenChecker) {
        let number = randomNumber(0, currentCast.length - 1);
        currentCast[number].chocolate = true;
        goldenChecker = true;
    }
    if (s14Premiere) {
        chocolateBarTwistCheck = true;
    }
    if (s6Premiere || s12Premiere || s14Premiere) {
        screen.createButton("Proceed", "doublePremiere()");
    }
    else if (porkchopPremiere) {
        screen.createButton("Proceed", "porkchopLipsyncs()");
    }
    else {
        screen.createButton("Proceed", "newEpisode()");
    }
}
function chooseGoldenBar() {
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/chocolate.webp')";
    let title = document.querySelector("h1#MainTitle");
    title.innerHTML = "Chocolate Bar Selection";
    screen.createBold("For this season, we're doing things a little differently, and when it comes to saving queens, I'm leaving it up to the Drag Gods.")
    screen.createBold("Select which queen will recieve the Golden Chocolate Bar.");
    let main = document.querySelector("div#MainBlock");
    let castSelection = document.createElement("p");
    castSelection.setAttribute("id", "castSelection");
    castSelection.innerHTML = '';
    let select = document.createElement("select");
    select.setAttribute("id", "queenList");
    select.setAttribute("onchange", "returnImg()");
    let img = document.createElement("img");
    img.setAttribute("id", "images");
    img.setAttribute("style", "width: 105px; height: 105px;");
    let p = document.createElement("p");
    p.appendChild(img);
    for (let k = 0; k < currentCast.length; k++) {
        let option = document.createElement("option");
        option.innerHTML = currentCast[k].getName();
        option.value = currentCast[k].image;
        select.add(option);
    }
    select.selectedIndex = randomNumber(0, currentCast.length - 1);
    let br = document.createElement("br");
    castSelection.appendChild(p);
    castSelection.appendChild(select);
    castSelection.appendChild(br);
    main.appendChild(castSelection);
    returnImg();
    screen.createButton("Choose Queen", "fijarGoldenQueen()", "fijar");
}
function fijarGoldenQueen() {
    let screen = new Scene();
    let select = document.getElementById("queenList");
    let value = select.options[select.selectedIndex].text;
    let button = document.getElementById("fijar");
    let queen;
    for (let k = 0; k < currentCast.length; k++) {
        if (value == currentCast[k].getName()){
            queen = currentCast[k];
        }
    }
    button.remove();
    select.remove();
    screen.createBold(queen.getName());
    queen.chocolate = true;
    if (s14Premiere) {
        chocolateBarTwistCheck = true;
    }
    if (s6Premiere || s12Premiere || s14Premiere) {
        screen.createButton("Proceed", "doublePremiere()");
    }
    else if (porkchopPremiere) {
        screen.createButton("Proceed", "porkchopLipsyncs()");
    }
    else {
        screen.createButton("Proceed", "newEpisode()");
    }
}
function chocolateBarCheck(queen, queen2 = "") {
    if (queen2 == "") {
        if (queen.chocolate == true) {
            return true;
        } else { 
            return false;
        }
    } else {
        if (queen.chocolate == true) {
            return 1;
        } else if (queen2.chocolate == true) { 
            return 2;
        } else {
            return false;
        }
    }
}
class Scene {
    constructor() {
        this._MainBlock = document.querySelector("div#MainBlock");
    }
    clean() {
        this._MainBlock.innerHTML = '';
    }
    createHeader(text) {
        let title = document.getElementById("MainTitle");
        title.innerHTML = text;
    }
    createBigText(text) {
        let big = document.createElement("big");
        let p = document.createElement("p");
        big.innerHTML = text;
        p.appendChild(big);
        this._MainBlock.appendChild(p);
    }

    createBigTextColored(text,color) {
        let big = document.createElement("big");
        let p = document.createElement("p");
        p.setAttribute("style", `color: ${color};`);
        big.innerHTML = text;
        p.appendChild(big);
        this._MainBlock.appendChild(p);
    }

    createParagraph(text, id = '') {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    }
    createBold(text, id = '', id1 = '') {
        let p = document.createElement("p");
        let bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.setAttribute("id", id1);
        p.appendChild(bold);
        this._MainBlock.appendChild(p);
    }
    createButton(text, method, id = '') {
        let button = document.createElement("button");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
    }
    createHorizontalLine() {
        let hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    }

    createImage(source, color = "black") {
        let image = document.createElement("img");
        image.src = source;
        image.setAttribute("style", `border-color: ${color}; width: 105px; height: 105px;`);
        this._MainBlock.appendChild(image);
    }

    createImageBW(source, color = "black") {
        let image = document.createElement("img");
        image.src = source;
        image.setAttribute("style", `border-color: ${color}; width: 105px; height: 105px;-webkit-filter: grayscale(100%);filter: grayscale(100%);`);
        this._MainBlock.appendChild(image);
    }
}
function lsSong() {
    let screen = new Scene();
    if(setls == 0)
    {
        let song = randomNumber(0, lsSongs.length - 1);
        screen.createBold(`The lip-sync song is... ${lsSongs[song]}!`);
        lsSongs.splice(song, 1);
    }
    else
    {
        let song = randomNumber(0, setlssong.length - 1);
        screen.createBold(`You have been asked to prepare a lip-sync of ${setlssong[song]}!`);
        setls = 0;
        setlssong = [];
    }
}
let allLsSongs = [
    "Supermodel by RuPaul",
    "We Break The Dawn by Michelle Williams",
    "The Greatest Love Of All by Whitney Houston",
    "Would I Lie To You by Eurythmics",
    "Stronger by Britney Spears",
    "Shackles (Praise You) by Mary Mary",
    "Cover Girl by RuPaul",
    "My Lovin' (You're Never Gonna Get It) by En Vogue",
    "I Hear You Knocking by Wynnona Judd",
    "Two of Hearts by Stacey Q",
    "Carry On by Martha Wash",
    "Black Velvet by Alannah Myles",
    "He's The Greatest Dancer by Sister Sledge",
    "Shake Your Love by Debbie Gibson",
    "Something He Can Feel by Aretha Franklin",
    "Jealous of My Boogie by RuPaul",
    "The Right Stuff by Vanessa Williams",
    "Bad Romance by Lady Gaga",
    "Don't Leave Me This Way by Thelma Houston",
    "Meeting in the Ladies Room by Klymaxx",
    "Looking For A New Love by Jody Watley",
    "Knock On Wood by Amii Stewart",
    "MacArthur Park by Donna Summer",
    "Hey Mickey by Toni Basil",
    "Believe by Cher",
    "Even Angels by Fantasia",
    "Straight Up by Paula Abdul",
    "I Think About You by Patti LaBelle",
    "Champion by RuPaul",
    "Toxic by Britney Spears",
    "Bad Girls by Donna Summer",
    "This Will Be (An Everlasting Love) by Natalie Cole",
    "Trouble by P!nk",
    "Vogue by Madonna",
    "Born This Way by Lady Gaga",
    "Mi Vida Loca by Pam Tillis",
    "It's Raining Men (The Sequel) by Martha Wash and RuPaul",
    "I've Got To Use My Imagination by Gladys Knight",
    "(You Make Me Feel Like) A Natural Woman by Aretha Franklin",
    "No One Else On Earth by Wynnona Judd",
    "Glamazon by RuPaul",
    "Party in the U.S.A by Miley Cyrus",
    "Only Girl (In The World) by Rihanna",
    "When I Grow Up by Pussycat Dolls",
    "Oops!...I Did It Again by Britney Spears",
    "Take Me Home by Cher",
    "I'm So Excited by The Pointer Sisters",
    "Whip My Hair by Willow Smith",
    "Ain't Nothin' Going on but the Rent by Gwen Guthrie",
    "Cold Hearted by Paula Abdul",
    "(It Takes) Two To Make It Right by Seduction",
    "Malambo No. 1 by Yma Sumac",
    "The Beginning by RuPaul",
    "Express Yourself by Madonna",
    "Turn The Beat Around by Vicky Sue Robinson",
    "Shake it Up by Selena Gomez",
    "I'm Every Woman by Chaka Khan",
    "Head to Toe by Lisa Lisa & Cult Jam",
    "Whatta Man by Salt-n-Pepa feat. En Vogue",
    "Point of No Return by Exposé",
    "Stupid Girls by P!nk",
    "Vibeology by Paula Abdul",
    "Think by Aretha Franklin",
    "Stronger (What Doesn't Kill You) by Kelly Clarkson",
    "Sissy That Walk by RuPaul",
    "Geronimo by RuPaul",
    "Twist of Fate by Olivia Newton-John",
    "I Was Gonna Cancel by Kylie Minogue",
    "Dreaming by Blondie",
    "Lovergirl by Teena Marie",
    "Break Free by Ariana Grande",
    "No More Lies by Michel'le",
    "I Think We're Alone Now by Tiffany",
    "Really Don't Care by Demi Lovato",
    "Show Me Love by Robin S.",
    "Roar by Katy Perry",
    "Born Naked by RuPaul",
    "Applause by Lady Gaga",
    "I Will Survive by Gloria Gaynor",
    "Mesmerized by Faith Evans",
    "Call Me by Blondie",
    "Causing A Commotion by Madonna",
    "I Don't Care by Icona Pop",
    "And I Am Telling You I'm Not Going by Jennifer Holliday",
    "You Make Me Feel (Mighty Real) by Sylvester",
    "The Realness by RuPaul",
    "Love Shack by The B-52's",
    "Holding Out For A Hero by Bonnie Tyler",
    "I Wanna Go by Britney Spears",
    "Woman Up by Meghan Trainor",
    "Music by Madonna",
    "Finally by Cece Peniston",
    "Baby I'm Burnin' by Dolly Parton",
    "Greedy by Ariana Grande",
    "Cool For The Summer by Demi Lovato",
    "Macho Man by The Village People",
    "U Wear It Well by RuPaul",
    "So Emotional by Whitney Houston",
    "It's Not Right But It's Okay by Whitney Houston",
    "Ain't No Other Man by Christina Aguilera",
    "Best Of My Love by The Emotions",
    "Celebrity Skin by Hole",
    "Pound The Alarm by Nicki Minaj",
    "Man! I Feel Like A Woman by Shania Twain",
    "I'm Coming Out by Diana Ross",
    "Cut To The Feeling by Carly Rae Jepsen",
    "Groove Is In The Heart by Deee-Lite",
    "New Attitude by Patti LaBelle",
    "Good As Hell by Lizzo",
    "Nasty Girl by Vanity 6",
    "Call Me Mother by RuPaul",
    "Nasty by Janet Jackson",
    "If by Janet Jackson",
    "Bang Bang by Jessie J, Ariana Grande and Nicki Minaj",
    "Best of Both Worlds by Hannah Montana",
    "Work Bitch by Britney Spears",
    "Waiting For Tonight by Jennifer Lopez",
    "Living in America by James Brown",
    "I'm Your Baby Tonight by Whitney Houston",
    "Last Dance by Donna Summer",
    "Strut by Sheena Easton",
    "Sorry Not Sorry by Demi Lovato",
    "Hood Boy by Fantasia",
    "No More Drama by Mary J. Blige",
    "No Scrubs by TLC",
    "Pride: A Deeper Love by Aretha Franklin",
    "Bootylicious by Destiny's Child",
    "SOS by Rihanna",
    "The Edge of Glory by Lady Gaga",
    "Starships by Nicki Minaj",
    "Call Your Girlfriend by Robyn",
    "Problem by Ariana Grande and Iggy Azalea",
    "S&M by Rihanna",
    "Heart to Break by Kim Petras",
    "Let It Go by Caissie Levy",
    "Burning Up by Madonna",
    "This Is My Night by Chaka Khan",
    "Firework by Katy Perry",
    "Kill The Lights by Alex Newell",
    "1999 by Prince",
    "On The Floor by Jennifer Lopez and Pitbull",
    "Bring Back My Girls by RuPaul",
    "Survivor by Destiny's Child",
    "Call Me Maybe by Carly Rae Jepsen",
    "The Pleasure Principle by Janet Jackson",
    "Rumors by Lindsay Lohan",
    "Ex's & Oh's by Elle King",
    "Lady Marmalade by Christina Aguilera, Lil' Kim, Mya & Pink",
    "Break My Heart by Dua Lipa",
    "If U Seek Amy by Britney Spears",
    "100% Pure Love by Crystal Waters",
    "Fancy by Iggy Azalea and Charli XCX",
    "Hit 'Em Up Style (Oops!) by Blue Cantrell",
    "Whole Lotta Woman by Kelly Clarkson",
    "BO$$ by Fifth Harmony",
    "Fascinated by Company B",
    "My Humps by Black Eyed Peas",
    "No Tears Left To Cry by Ariana Grande",
    "Strong Enough by Cher",
    "I Learned from the Best by Whitney Houston",
    "Gimme More by Britney Spears",
    "Till the World Ends by Britney Spears",
    "Turn Me On by David Guetta and Nicki Minaj",
    "Ignorance by Paramore",
    "Tightrope by Janelle Monae",
    "In The Next Life by Kim Petras",
    "Dancing Queen by ABBA",
    "Bring Me To Life by Evanescence",
    "Sk8er Boi by Avril Lavigne",
    "Kiss by Prince",
    "Hung Up by Madonna",
    "Cannibal by Kesha",
    "Candyman by Christina Aguilera",
    "Bohemian Rhapsody by Queen",
    "Venus by Lady Gaga",
    "Hair by Lady Gaga",
    "Dancing Queen by ABBA",
    "STFU by Rina Sawayama",
    "HOT HOT by Bree Runway",
    "I Can Love You by Mary J. Blige and Lil Kim",
    "Superbass by Nicki Minaj",
    "Can't Get You Out of My Head by Kylie Minogue",
    "Misery Business by Paramore",
    "The Promise by Girls Aloud",
    "Star Love by Cheryl Lynn",
    "Freeway of Love by Aretha Franklin",
    "Tell It To My Heart by Taylor Dayne",
    "Don't Rush Me by Taylor Dayne",
    "Dirrty by Christina Aguilera",
    "34+35 by Ariana Grande",
    "Barbie Girl by Aqua",
    "Va Va Voom by Nicki Minaj",
    "Hallucinate by Dua Lipa",
    "Bubblegum Bitch by MARINA",
    "Boss Bitch by Doja Cat",
    "Hopelessly Devote to You by Olivia Newton John",
    "Your Disco Needs You by Kylie Minogue",
    "Froot by MARINA",
    "She Works Hard For The Money by Donna Summer",
    "Supernova by Kylie Minogue",
    "Detention by Melanie Martinez",
    "Complicated by Avril Lavigne",
    "So What by P!nk",
    "Good 4 U by Olivia Rodrigo",
    "Take A Chance On Me by ABBA",
    "Casanova by Allie X",
    "TIk Tok by Kesha",
    "Heart of Glass by Blondie",
    "When I Think of You by Janet Jackson",
    "Prisoner by Miley Cyrus (ft. Dua Lipa)",
    "Homemade Dynamite by Lorde",
    "claws by Charli XCX",
    "NASA by Ariana Grande",
    "Say So by Doja Cat",
    "Captain Hook by Megan Thee Stallion",
    "Pynk by Janelle Monaé (ft. Grimes)",
    "Into the Groove by Madonna",
    "Cool Girl by Tove Lo",
    "Break The Ice by Britney Spears",
    "Still Into You by Paramore",
    "Vroom Vroom by Charli XCX",
    "XS by Rina Sawayama",
    "Teenage Dream by Katy Perry",
    "Unwritten by Natasha Bedingfield",
    "Hollaback Girl by Gwen Stefani",
    "Miss You Much by Janet Jackson",
    "I Feel Love by Donna Summer",
    "Don't Stop The Music by Rihanna",
    "Love On The Brain by Rihanna",
    "Valerie by Amy Winehouse",
    "Killer Queen by Queen",
    "Ribs by Lorde",
    "Solar Power by Lorde",
    "Jerome by Lizzo",
    "Kinky by Kesha",
    "G.U.Y by Lady Gaga",
    "Waka Waka (This Time For Africa) by Shakira",
    "Dangerous Woman by Ariana Grande",
    "Whenever, Wherever by Shakira",
    "Lowlife by Poppy",
    "Conqueror by Estelle",
    "Dynasty by Rina Sawayama",
    "Fergalicious by Fergie",
    "Meet Me Halfway by Black Eyed Peas",
    "I Say A Little Prayer by Aretha Franklin",
    "Aura by Lady Gaga",
    "Now That You Got It by Gwen Stefani",
    "Skyfall by Adele",
    "Back To Black by Amy Winehouse",
    "Tears Dry On Their Own by Amy Winehouse",
    "Seven Wonders by Fleetwood Mac",
    "Baby One More Time by Britney Spears",
    "Naked by Ava Max",
    "A Little Party Never Killed Nobody by Fergie",
    "Tears by Clean Bandit",
    "Work by Kelly Rowland",
    "Say My Name by Tove Styrke",
    "Do It by Chloe X Halle",
    "Like A Virgin by Madonna",
    "Chun Li by Nicki Minaj",
    "ATM by Bree Runway",
    "Star Love by Cheryl Lynn",
    "Express by Christina Aguillera",
    "Kill V. Main by Grimes",
    "Taki Taki by DJ Snake (ft. Selena Gomez, Cardi B)",
    "Black Cat by Janet Jackson",
    "Tainted Love by Gloria Jones",
    "Private Dancer by Tina Turner",
    "Sweet Dreams by Beyoncé",
    "Kiss Me More by Doja Cat (ft. SZA)",
    "Take A Chance On Me by ABBA",
    "Mine by Slayyyter",
    "Baby One More Time by Britney Spears",
    "Troubled Paradise by Slayyyter",
    "Swine by Lady Gaga",
    "Vacation by GRL",
    "Alive by SIA",
    "Now That I Found You by Carly Rae Jepsen",
    "IDGAF by Dua Lipa",
    "In My Bed by Amy Winehouse",
    "Get Outta My Way by Kylie Minogue",
    "I Drove All Night by Celine Dion",
    "Bad Bitch Tip by LaLa Ri",
    "Run The World (Girls) by Beyoncé",
    "Focus by Charli XCX",
    "Judas by Lady Gaga",
    "Circus by Britney Spears",
    "Buttons by The Pussycat Dolls",
    "Venom by Slayyyter",
    "Shut Up And Drive by Rihanna",
    "Dollhouse by Melanie Martinez",
    "Brick By Boring Brick by Paramore",
    "About You Now by Miranda Cosgrove",
    "Real Love by Clean Bandit & Jess Glyne",
    "Queen Of The Night by Whitney Houston",
    "Lucky Star by Madonna",
    "Good Girl by Carrie Underwood",
    "WTF Do I Know by Miley Cyrus",
    "Say So by Doja Cat",
    "Soulmate by Lizzo",
    "Bitch I'm Madonna by Madonna",
    "Hold My Hand by Jess Glyne",
    "Not Myself Tonight by Christina Aguillera",
    "Boys by Lizzo",
    "Same Old Fool by Dolly Parton",
    "Fantasy by Mariah Carey",
    "What You Get Is What You See by Tina Turner",
    "All About That Bass by Meghan Trainor",
    "Edge Of Seventeen by Stevie Nicks",
    "Chandelier by SIA",
    "Comme Des Garçon by Rina Sawayama",
    "See You Again by Miley Cyrus",
    "Spice Up Your Life by Spice Girls",
    "Tears Dry On Their Own by Amy Winehouse",
    "Power by Little Mix",
    "Miss You Much by Janet Jackson",
    "Rain On Me By Lady Gaga ft. Ariana Grande",
    "Stupid Love by Lady Gaga",
    "Levitating by Dua Lipa",
    "Vagina by CupcakKe",
    "Wildest Dreams by Taylor Swift",
    "good 4 u by Olivia Rodrigo",
    "Telephone by Lady Gaga ft. Beyoncé",
    "Physical by Dua Lipa",
    "Conqueror by Estelle",
    "Triste com T by Pabllo Vittar",
    "Dance Again by Jenifer Lopez",
    "Brutal by Olivia Rodrigo",
    "Oh No! by MARINA",
    "How You Like That by BLACKPINK",
    "Focus by Ariana Grande",
    "Stronger by Christina Aguillera",
    "Domino by Jessie J",
    "Salute by Little Mix",
    "Scandalous by Mis-Teeq",
    "Friday by Rebecca Black",
    "Fantasy by Mariah Carey",
    "All I Want For Christmas Is You by Mariah Carey",
    "Raspberry Beret by Prince",
    "Why Worry by Set It Off",
    "Sweet Melody by Little Mix",
    "Bittersweet by Fantasia",
    "She Wolf by Shakira",
    "Blame It On The Edit by RuPaul",
    "Big Spender by Shirley Bassey",
    "Turning Tables by Adele",
    "How I Feel About You by Miranda Cosgrove"
];
let lsSongs = [...allLsSongs];
class Team extends Queen {
    constructor(QueenA, QueenB) {
        let Name;
        if (QueenA == kasha)
            Name = "Team Mrs. " + QueenB._name.split(" ")[0] + " Davis";
        else if (QueenB == kasha)
            Name = "Team Mrs. " + QueenA._name.split(" ")[0] + " Davis";
        else if ((QueenA || QueenB) == latrice && ((QueenA && QueenB) == manila))
            Name = "Team Latrila";
        else if ((QueenA || QueenB) == yara && ((QueenA && QueenB) == alexis))
            Name = "Team Yarlexis";
        else if ((QueenA || QueenB) == chad && ((QueenA && QueenB) == shannel))
            Name = "Team Shad";
        else if ((QueenA || QueenB) == ninaf && ((QueenA && QueenB) == tammie))
            Name = "Team Brown Flowers";
        else if ((QueenA || QueenB) == raven && ((QueenA && QueenB) == jujubee))
            Name = "Team Rujubee";
        else if ((QueenA || QueenB) == mimi && ((QueenA && QueenB) == pandora))
            Name = "Team Mandora";
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length > 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        else if (QueenA._name.split(' ')[0].length > 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0];
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0];
        else
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        super(Name, ((QueenA._actingStat + QueenB._actingStat) / 2), ((QueenA._comedyStat + QueenB._comedyStat) / 2), ((QueenA._danceStat + QueenB._danceStat) / 2), ((QueenA._designStat + QueenB._designStat) / 2), ((QueenA._improvStat + QueenB._improvStat) / 2), ((QueenA._runwayStat + QueenB._runwayStat) / 2), 0);
        this.QueenA = QueenA;
        this.QueenB = QueenB;
    }
}
function teamsScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Pair time!");
    screen.createParagraph("After all the queens enter the werkroom, they now have to choose their pairs!");
    screen.createHorizontalLine();
    let teamList = [];
    for (let i = 0; i < totalCastSize / 2; i++) {
        let indexA = randomNumber(0, currentCast.length - 1);
        let indexB = randomNumber(0, currentCast.length - 1);
        while (indexB == indexA)
            indexB = randomNumber(0, currentCast.length - 1);
        let QueenA = currentCast[indexA];
        let QueenB = currentCast[indexB];
        let team = new Team(QueenA, QueenB);
        screen.createImage(QueenA.image);
        screen.createImage(QueenB.image);
        screen.createBold(`${QueenA.getName()} and ${QueenB.getName()} formed ${team.getName()}!`);
        teamList.push(team);
        currentCast.splice(currentCast.indexOf(QueenA), 1);
        currentCast.splice(currentCast.indexOf(QueenB), 1);
    }
    currentCast = [...teamList];
    totalCastSize = currentCast.length;
    screen.createButton("Proceed", "miniChallenge()");
}

class TeamsForChallenges extends Queen {
    constructor (Queens){
        super(Queens[0].getName(), Queens[0]._actingStat, Queens[0]._comedyStat, Queens[0]._danceStat, Queens[0]._designStat, Queens[0]._improvStat, Queens[0]._runwayStat);
        this.queens = Queens;
    }
}
let talentsToDo = [
    "Singing",
    "Variety",
    "Dancing",
    "Gymnastics",
    "Acapella",
    "Burlesque",
    "Spoken Word",
    "Lipsyncing",
    "Violin",
    "Lipsyncing/Dancing",
    "Majorette",
    "Autoharp/Singing",
    "Velcro",
    "Tucking",
    "Painting",
    "Stand Up",
    "Color Guard",
    "Pole Dancing",
    "Vocal Impersonations",
    "Speed-Sewing",
    "Bubble Burlesque",
    "Piano",
    "Jump Rope",
    "Comedy Skit",
    "Original Song",
    "Self-Care in Quarantine",
    "Ballet Number",
    "Cheerleading Comedy Routine",
    "Electric Guitar",
    "Contemporary Mouth Art",
    "Ballooning",
    "Quick Change Magic",
    "Modern Dance",
    "Magic Show",
    "Art",
    "Salsa Dancing",
    "Rapping",
    "Posing",
    "Fire Show",
    "Rhytmic Gymnastic",
    "Monologue",
    "Waacking",
    "Comedy",
    "Runway",
    "Opera Singing",
    "Standing There"
];
function queenTalents() {
    let screen = new Scene();
    screen.createHorizontalLine();
    screen.createBigText("The queens will perform...");
    for (let i = 0; i < currentCast.length; i++) {
        let talent = randomNumber(0, talentsToDo.length - 1);
        screen.createImage(currentCast[i].image);
        screen.createBold(`${currentCast[i].getName()} will do a ${talentsToDo[talent]} performance!!`);
    }
}
let reasoningQueens = [
    "they put themselves in RuPaul's shoes and tried to be fair.",
    "they based their decision with the judges critiques.",
    "they saw that the other queen wanted to stay more.",
    "they wanted to save their friend.",
    "they wanted to eliminate them.",
    "the other queen lend them a shirt.",
    "they couldn't send home their friend.",
    "they think that it's better for the group if they are not there.",
    "they were annoyed by the other queen.",
    "they were in the bottom several times.",
    "they tried to be fair.",
    "they were competition.",
    "they don't like them.",
    "they wanted to shake the things up.",
    "they feel they could send them home later.",
    "they saw the fishnets and they were ripped.",
    "they'll never be glamour.",
    "they were the weakest in the challenge.",
    "they were persuaded by other contestants.",
    "they are a liar.",
    "no tea, no shade no pink lemonade… they done fucked up drag.",
    "they had given up on the competition."
];
function chooseReasoning(winQueen, elimQueen) {
    let screen = new Scene();
    let reasoning = randomNumber(0, reasoningQueens.length - 1);
    screen.createBold(`${winQueen} chose ${elimQueen} because ${reasoningQueens[reasoning]}`);
}
