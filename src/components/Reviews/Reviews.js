import * as Api from "../../services/api";
import { useState, useEffect } from "react";
import s from "./Reviews.module.css";

export default function Reviews({ filmId }) {
  const [actorsInfo, setActorsInfo] = useState(null);
  useEffect(() => {
    return Api.fetchMoviesReviews(filmId).then(setActorsInfo);
  }, [filmId]);
  return (
    <>
      {actorsInfo?.results.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul className={s.list}>
        {actorsInfo?.results?.map(
          (actorInfo) =>
            actorInfo.author && (
              <li className={s.item} key={actorInfo.id}>
                <h2>{actorInfo.author}</h2>

                <p>{actorInfo.content}</p>
              </li>
            )
        )}
      </ul>
    </>
  );
}
// results;

// author: "RADIO1'S MR. MOVIE!-MAD AMI 🌠"
// author_details: {name: "RADIO1'S MR. MOVIE!-MAD AMI 🌠", username: "Radio1'sMr.Movie!-MadAmi🌠", avatar_path: '/ngkjR9NuSpIzRFlMSbOPRrbHM1i.jpg', rating: 8}
// content: "**CAN YOU SAY, ER ...\r\n\" BADASS-EST \" 😅 💥❓ ... { THIS IS A SEMI PARODICAL TITLE } .**\r\n\r\nA \"Good, Old Fashioned\" **-{ _B I G_ }-** Screen Review . \r\n\r\n______________________________________________________ \r\n\r\nLetty Ortiz: \"Hi, little Brian. I have a gift for you. Your Daddy gave me this, & now I'm going to give it to you. It's very Special { Letty takes off her necklace & puts it around Brian's neck } ...it's for protection... from what's coming\" .\r\n\r\n______________________________________________________ \r\n\r\nFirst & foremost, -{ Not Only }- is this undeniable \"behemoth\" of a movie, with its USD 200 Million -plus- production budget, broadly speaking, **-{ GENUINELY ✅ }-** enjoyable; but it is -Also- \"rather surprisingly\", and very reassuringly so . . . \" relatively \" . . . -very- Family Friendly, indeed. As a doting -{ _P a r e n t_ }- , I had, to be very honest, expected -Considerably- worse; given what the 'seemingly standard trend' with Blockbuster-fare ( on -this- magnitude, atleast ) is, in this... 'our pretty, darn reckless' ..day and age .\r\n\r\nMoreover, I just **-{ LOVE 👏 }-** how the movie ...unreservedly... -not only- \"laughs out loud\" -{ at itself }- of course , but often -Also- seems like it's having a 'rollicking good time' doing it. For -all- the 'Contrarian'-reviewers on a very similar platform to this known as 'IMDb' { that appear absolutely -Bent- on picking this fairly \"lighthearted\" & essentially **\" PLAYFUL \"** picture apart for just about 'every conceivable reason under the sun' }: I have -just- 3 'Profound' words to say to you: \"Watch It Again\". Because that is -just- what I did, & I ended up enjoying it -{ way }- more the second time around ; managing to, on the one hand, clear up -Several- of my initial doubts... & on the other ; to -{ truly }- appreciate how ( actually ) \"Un\"-seriously ...\"F9\" really takes itself. Keep your eye out for the tiny but absolutely -{ hilarious❗}- little \"Who's Dominic Toretto?\" scene ; you'll get a better feel for what I mean. But let me be ..\"Starkly\".. clear. -{ In no way }- is my review title meant to suggest to you, -even remotely- , that this is somehow 'the best cinematic offering on earth' right now, or -any- such manner of preposterous thing. The pointed -{ reason }- , as it were, for my use of the -decidedly- \" Lively \" , Benignly Parodical, & even \"mildly histrionic\" , film review -Title- that you see above, is, quite simply , 'as follows' .\r\n\r\n----- \" It's a well known fact by now that the -{ Ever }- grandiose pictures of the 'Fast And Furious' franchise seem to -forever- be looking to \" One Up Themselves \" , in terms of making their vehicular ( in particular ) action sequences -{ well and truly }- \" One-Of-A-Kind \" . In keeping with this 'practically-Sacrosanct ( 🙏 😅 )' , time honoured tradition . . . . F9's very accomplished 'In-house' writer-Director Justin Lin has ( -Yet- ) again proven that he most certainly is the very 'living embodiment' of this rule, by taking those wild & wacky ( bespoke ) 'Gas-Guzzler Gymnastics' of his all the way , you guessed it , to -{ Outer Space }- . . . . not to mention all the -many, many- other ( almost ) as utterly, utterly, utterly '_Ludacris_' stunts performed ...seemingly as if... 'by all those Mega-fancy automobiles themselves'. ( Watch the final -official- trailer for F9 , if it's still going to be a while before said movie hits your part of the world ). So there you have it. Hence that 'affectionate little touch' of, well , \" Classic-hyperbole \" , in my review-Title . \" ----- \r\n\r\nAnd so, in closing, here are the things I consider to be the -{ Most }- likeable, about the picture. 1 : The ever-fresh, ever-sweet rapport that 'Dominic Toretto' ( Vin Diesel ) has with 'Letty Ortiz' ( Michelle Rodriguez ). 2 : The { Un }-deniable \" Brilliance 🌠 \" , really , with which -Several- mind bogglingly complex, & indeed, 'super-Protracted' multiple vehicle chase & combat scenes were put together. 3 : -All- those \"giant-Magnet special effects\", ( this is -Also- teased in the trailers, which are freely available to watch on youtube ), meticulously crafted to, frankly, \".nothing less than sheer -{ Perfection }- \" . 4 : The film's -{ Delectable }- smattering of short, nonetheless utterly -Classic- \" Movie-Reincarnation sequences \" . Meaning . . . { action or comedy ( or both ) 'Re-works' of -Well- established , ( & often beloved, even ) , \" Universally Iconic Cinematic-moments \" } . . . which in the case of F9 ...{ Un }-mistakably... were sequences that hearkened -Right- back to a few ( very ) specific, timeless, & -Massively- popular scenes from A : 'Jurrasic Park-Part One', B : 'Terminator Three-Rise Of The Machines' ( **-OR-** 'The Dark Knight' : your prefererence, really ), & C : 'Austin Powers-Part One', -even- , just to name the ( Most 💙 ) notable ones. 5 : And last but by no means the least : there really -{ Was }- a whole lot of -actually- funny stuff in F9. And I am, -of course- referring here to -Very- many moments of \"Unabashedly-Dumb Frivolity\" involving , ( but not limited to ) ; none other than the \" Uber-talented \" Tyrese Gibson, ( 'Roman' ), & his -equally- Fun partner-in-comedy, Ludacris ( 'Tej' ) ; with the ever charming Nathalie Emmanuel ( 'Ramsey' ) chiming in 'most pleasantly' from time to time, for good measure . \r\n\r\nSummary : If you -{ Didn't }- come to F9 to see cars flying in, well, -outer space- , ( and other such \" _Colossally_ \" Zany-things ) , then you -most certainly- came to the wrong place. { Translation } : if you're ( one of those ) the -'Many, Many'- ( aforementioned ) negative-reviewers, and feel like you were ( -better- ) suited to simply watching 'Normal' cars just driving around, well... 'Normally' ...& -{ Not }- doing a multitude of \"crazy & extraordinary\" things ; then can I -very humbly- recommend, say, ....going & sitting down at a nearby bus-stop, & watching 'The Street'.... -{ Instead }- . Because, 'for better or worse', -this- movie does -{ Exactly }- what it says on the tin , \" & Then Some \" . Furthermore, the two -Main- Male \"Lead-pairs\", namely, A : Vin Diesel and John Cena ; and B : Vinnie Bennett and Finn Cole, ( a.k.a 'Young Dom', and 'Young Jakob' ), play -{ remarkably }- well off one another ; whilst -All- the \"Leading Ladies\" plunge headfirst into this veritable, **-{ MINDLESS }-** Fun-Fest , \" With A Vengeance \" . So it's going to be a generous, -{ \"Very Grateful\" }- , and decidedly \" pandemic-Considerate \" 7.75 Marks Out Of 10.00 from me. Well, only one thing left to say, then. **\" _I G N I T I O N_ 😅❗ \" .**"
// created_at: "2021-06-13T11:55:41.001Z"
// id: "60c5f23c944a57006eb2a086"
// updated_at: "2021-06-28T16:42:10.548Z"
// url: "https://www.themoviedb.org/review/60c5f23c944a57006eb2a086"
